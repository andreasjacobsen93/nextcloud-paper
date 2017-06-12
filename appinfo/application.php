<?php

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
                $c->query('Request')
            );
        });
        $container->registerService('PaperApiController', function($c) {
            return new PaperApiController(
                $c->query('AppName'),
                $c->query('Request')
            );
        });
    }

}