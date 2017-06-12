<?php
/**
 * Created by PhpStorm.
 * User: fsociety
 * Date: 12/06/2017
 * Time: 16.16
 */

namespace OCA\Paper\Controller;

use OCP\IRequest;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\ApiController;

use OCA\Paper\Service\PaperService;


class PaperApiController extends ApiController {

    private $service;
    private $userId;

    use Errors;

    public function __construct($AppName, IRequest $request,
                                PaperService $service, $UserId){
        parent::__construct($AppName, $request);
        $this->service = $service;
        $this->userId = $UserId;
    }

    /**
     * @CORS
     * @NoCSRFRequired
     * @NoAdminRequired
     */
    public function index() {
        return new DataResponse($this->service->findAll($this->userId));
    }

    /**
     * @CORS
     * @NoCSRFRequired
     * @NoAdminRequired
     *
     * @param int $id
     */
    public function show($id) {
        return $this->handleNotFound(function () use ($id) {
            return $this->service->find($id, $this->userId);
        });
    }

    /**
     * @CORS
     * @NoCSRFRequired
     * @NoAdminRequired
     *
     * @param $url
     * @return
     */
    public function create($url) {
        return $this->service->create($url, $this->userId);
    }

    /**
     * @CORS
     * @NoCSRFRequired
     * @NoAdminRequired
     *
     * @param int $id
     * @param string $title
     * @param string $content
     */
    public function update($id, $title, $description) {
        return $this->handleNotFound(function () use ($id, $title, $description) {
            return $this->service->update($id, $title, $description, $this->userId);
        });
    }

    /**
     * @CORS
     * @NoCSRFRequired
     * @NoAdminRequired
     *
     * @param int $id
     */
    public function destroy($id) {
        return $this->handleNotFound(function () use ($id) {
            return $this->service->delete($id, $this->userId);
        });
    }

}