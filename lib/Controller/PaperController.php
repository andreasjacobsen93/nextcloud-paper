<?php
/**
 * Created by PhpStorm.
 * User: fsociety
 * Date: 12/06/2017
 * Time: 15.39
 */

namespace OCA\Paper\Controller;

use DOMWrap\Tests\Manipulation\parentTest;
use OCP\IRequest;
use OCP\AppFramework\Controller;

class PaperController extends Controller {

    private $mapper;
    private $userId;

    public function __construct($AppName, IRequest $request, NoteMapper $mapper, $UserId)
    {
        parent::__construct($AppName, $request);
        $this->mapper = $mapper;
        $this->userId = $UserId;
    }

    /**
     * @NoAdminRequired
     */
    public function index() {
        return new DataResponse($this->mapper->findAll($this->userId));
    }

    /**
     * @NoAdminRequired
     *
     * @param int $id
     * @return DataResponse
     */
    public function show($id) {
        try {
            return new DataResponse($this->mapper->find($id, $this->userId));
        } catch(Exception $e) {
            return new DataResponse([], Http::STATUS_NOT_FOUND);
        }
    }

    /**
     * @NoAdminRequired
     *
     * @param string $title
     * @param string $content
     * @return DataResponse
     */
    public function create($title, $description, $site, $link, $author, $published, $readtime, $content, $image, $datetime) {
        $note = new Note();
        $note->setTitle($title);
        $note->setDescription($description);
        $note->setSite($site);
        $note->setLink($link);
        $note->setAuthor($author);
        $note->setPublished($published);
        $note->setReadtime($readtime);
        $note->setContent($content);
        $note->setImage($image);
        $note->setDatetime($datetime);
        $note->setUserId($this->userId);
        return new DataResponse($this->mapper->insert($note));
    }

    /**
     * @NoAdminRequired
     *
     * @param int $id
     * @param string $title
     * @param string $content
     * @return DataResponse
     */
    public function update($id, $title, $description) {
        try {
            $note = $this->mapper->find($id, $this->userId);
        } catch(Exception $e) {
            return new DataResponse([], Http::STATUS_NOT_FOUND);
        }
        $note->setTitle($title);
        $note->setDescription($description);
        return new DataResponse($this->mapper->update($note));
    }

    /**
     * @NoAdminRequired
     *
     * @param int $id
     * @return DataResponse
     */
    public function destroy($id) {
        try {
            $note = $this->mapper->find($id, $this->userId);
        } catch(Exception $e) {
            return new DataResponse([], Http::STATUS_NOT_FOUND);
        }
        $this->mapper->delete($note);
        return new DataResponse($note);
    }
}