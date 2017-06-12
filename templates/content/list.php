<?php

use Embed\Embed;

//Load any url:
$info = Embed::create('https://www.gnu.org/software/gnuzilla/');

//Get content info

echo $info->title; //The page title