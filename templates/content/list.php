<?php

use Embed\Embed;

//Load any url:
$info = Embed::create('https://www.youtube.com/watch?v=PP1xn5wHtxE');

//Get content info

echo $info->title; //The page title