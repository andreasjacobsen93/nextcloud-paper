<?php
/**
 * Created by PhpStorm.
 * User: fsociety
 * Date: 12/06/2017
 * Time: 16.12
 */

namespace OCA\Paper\Controller;

use Closure;

use OCP\AppFramework\Http;
use OCP\AppFramework\Http\DataResponse;

use OCA\Paper\Service\NotFoundException;


trait Errors {

    protected function handleNotFound (Closure $callback) {
        try {
            return new DataResponse($callback());
        } catch(NotFoundException $e) {
            $message = ['message' => $e->getMessage()];
            return new DataResponse($message, Http::STATUS_NOT_FOUND);
        }
    }

}