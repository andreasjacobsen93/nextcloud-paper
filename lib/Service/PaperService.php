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
use Readability;
use Goose\Client as GooseClient;

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

    private function getEmbed($url)
    {
        return Embed::create($url);
    }

    private function getReadability($url)
    {
        $doc = new Readability();
        $doc->input($url);
        $doc->init();

        return $doc;
    }

    private function getGoose($url)
    {
        $goose = new GooseClient();
        return $goose->extractContent($url);
    }

    public function create($url, $userid) {
        $paper = new Paper();

        //$embed = $this->getEmbed($url);
        //$readability = $this->getReadability($url);
        $goose = $this->getGoose($url);

        $title = $goose->getTitle();
        $description = $goose->getMetaDescription();
        $site = $goose->getCanonicalLink();
        $link = $url;
        $author = '';
        $published = '';
        $readtime = '';
        $content = $goose->getCleanedArticleText();
        $image = $goose->getTopImage();
        $datetime = '';

        $paper->setTitle(substr($title,0,200));
        $paper->setDescription(substr($description,0,200));
        $paper->setSite(substr($site,0,200));
        $paper->setLink(substr($link,0,200));
        $paper->setAuthor(substr($author,0,200));
        $paper->setPublished($published);
        $paper->setReadtime($readtime);
        $paper->setContent($content);
        $paper->setImage($image);
        $paper->setDatetime($datetime);
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