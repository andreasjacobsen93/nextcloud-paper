<?php

/**
 * Created by PhpStorm.
 * User: fsociety
 * Date: 12/06/2017
 * Time: 16.09
 */
namespace OCA\Paper\Service;

use Exception;

use OCP\AppFramework\Db\DoesNotExistException;
use OCP\AppFramework\Db\MultipleObjectsReturnedException;

use OCA\Paper\Db\Paper;
use OCA\Paper\Db\PaperMapper;

use Embed\Embed;

class PaperService
{
    private $mapper;

    public function __construct(PaperMapper $mapper){
        $this->mapper = $mapper;
    }

    public function findAll($userId) {
        return $this->mapper->findAll($userId);
    }

    private function handleException ($e) {
        if ($e instanceof DoesNotExistException ||
            $e instanceof MultipleObjectsReturnedException) {
            throw new NotFoundException($e->getMessage());
        } else {
            throw $e;
        }
    }

    public function find($id, $userId) {
        try {
            return $this->mapper->find($id, $userId);

            // in order to be able to plug in different storage backends like files
            // for instance it is a good idea to turn storage related exceptions
            // into service related exceptions so controllers and service users
            // have to deal with only one type of exception
        } catch(Exception $e) {
            $this->handleException($e);
        }
    }

    public function create($url, $userid) {
        $paper = new Paper();

        $info = Embed::create($url);

        $doc = new Readability();
        $doc->input($url);
        $doc->init();

        $title = $doc->articleTitle->innerHTML;
        $content = $doc->articleContent->innerHTML;

        $paper->setTitle($title);
        $paper->setDescription($info->description);
        $paper->setSite($info->providerUrl);
        $paper->setLink($info->url);
        $paper->setAuthor($info->authorName);
        $paper->setPublished($info->publishedDate);
        $paper->setReadtime('');
        $paper->setContent($content);
        $paper->setImage($info->image);
        $paper->setDatetime('');
        $paper->setUserId($userid);
        return $this->mapper->insert($paper);
    }

    public function update($id, $title, $description, $userId) {
        try {
            $paper = $this->mapper->find($id, $userId);
            $paper->setTitle($title);
            $paper->setDescription($description);
            return $this->mapper->update($paper);
        } catch(Exception $e) {
            $this->handleException($e);
        }
    }

    public function delete($id, $userId) {
        try {
            $paper = $this->mapper->find($id, $userId);
            $this->mapper->delete($paper);
            return $paper;
        } catch(Exception $e) {
            $this->handleException($e);
        }
    }
}