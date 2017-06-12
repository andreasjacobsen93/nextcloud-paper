<?php
namespace OCA\Paper\AppInfo;
/*
$application = new Application();
$application->registerRoutes($this, array(
    'resources' => [
        'paper' => ['url' => '/papers'],
        'paper_api' => ['url' => '/api/0.1/papers']
    ],
    'routes' => [
        ['name' => 'page#index', 'url' => '/', 'verb' => 'GET'],
        ['name' => 'paper_api#preflighted_cors', 'url' => '/api/0.1/{path}',
            'verb' => 'OPTIONS', 'requirements' => ['path' => '.+']]
    ]
));*/

return array(
    'resources' => [
        'paper' => ['url' => '/papers'],
        'paper_api' => ['url' => '/api/0.1/papers']
    ],
    'routes' => [
        ['name' => 'page#index', 'url' => '/', 'verb' => 'GET'],
        ['name' => 'paper_api#preflighted_cors', 'url' => '/api/0.1/{path}',
            'verb' => 'OPTIONS', 'requirements' => ['path' => '.+']]
    ]
);