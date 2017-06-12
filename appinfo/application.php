<?php
namespace OCA\Paper\AppInfo;

use \OCP\AppFramework\App;

use \OCA\Paper\Controller\AuthorController;
use \OCA\Paper\Service\AuthorService;
use \OCA\Paper\Db\AuthorMapper;

/**
 * Created by PhpStorm.
 * User: fsociety
 * Date: 12/06/2017
 * Time: 17.26
 */
class Application extends App {

    public function __construct(array $urlParams=array()){
        parent::__construct('Paper', $urlParams);

        $container = $this->getContainer();

        /**
         * Controllers
         */
        $container->registerService('PageController', function($c) {
            return new PageController(
                $c->query('AppName'),
                $c->query('Request')
            );
        });
        $container->registerService('PaperController', function($c) {
            return new PaperController(
                $c->query('AppName'),
                $c->query('Request'),
                $c->query('PaperService')
            );
        });
        $container->registerService('PaperApiController', function($c) {
            return new PaperApiController(
                $c->query('AppName'),
                $c->query('Request'),
                $c->query('PaperService')
            );
        });

        /**
         * Services
         */
        $container->registerService('PaperService', function($c){
            return new PaperService(
                $c->query('PaperMapper')
            );
        });

        /**
         * Mappers
         */
        $container->registerService('PaperMapper', function($c){
            return new PaperMapper(
                $c->query('ServerContainer')->getDb()
            );
        });
    }

}