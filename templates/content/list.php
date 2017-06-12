<?php

use Embed\Embed;

//Load any url:
$info = Embed::create('https://lifehacker.com/how-to-write-like-james-comey-1795924247');

//Get content info

echo $info->title.'<br>'; //The page title
echo $info->description.'<br>'; //The page description
echo $info->url.'<br>'; //The canonical url
echo $info->type.'<br>'; //The page type (link, video, image, rich)
echo $info->tags.'<br>'; //The page keywords (tags)

echo $info->authorName.'<br>'; //The resource author
echo $info->authorUrl.'<br>'; //The author url

echo $info->providerName.'<br>'; //The provider name of the page (Youtube, Twitter, Instagram, etc)
echo $info->providerUrl.'<br>'; //The provider url
echo $info->providerIcon.'<br>'; //The icon choosen as main icon

echo $info->publishedDate.'<br>'; //The published date of the resource
echo $info->license.'<br>'; //The license url of the resource
echo $info->linkedData.'<br>'; //The linked-data info (http://json-ld.org/)
echo $info->feeds; //The RSS/Atom feeds