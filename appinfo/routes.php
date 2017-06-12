<?php
namespace OCA\Paper\AppInfo;

$application = new Application();

/**
 * Create your routes in here. The name is the lowercase name of the controller
 * without the controller part, the stuff after the hash is the method.
 * e.g. page#index -> OCA\Paper\Controller\PageController->index()
 *
 * The controller class has to be registered in the application.php file since
 * it's instantiated in there
 */
$application->registerRoutes($this, array('routes' => [
    'resources' => [
        'paper' => ['url' => '/papers'],
        'paper_api' => ['url' => '/api/0.1/papers']
    ],
    'routes' => [
	    ['name' => 'page#index', 'url' => '/', 'verb' => 'GET'],
        ['name' => 'paper_api#preflighted_cors', 'url' => '/api/0.1/{path}',
            'verb' => 'OPTIONS', 'requirements' => ['path' => '.+']]
    ]
]));
