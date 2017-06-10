<?php
/**
 * Created by PhpStorm.
 * User: fsociety
 * Date: 10/06/2017
 * Time: 16.53
 */



$goose = new \Goose\Client();
$article = $goose->extractContent('https://lifehacker.com/how-to-write-like-james-comey-1795924247');

$title = $article->getTitle();
//$metaDescription = $article->getMetaDescription();
//$metaKeywords = $article->getMetaKeywords();
//$canonicalLink = $article->getCanonicalLink();
//$domain = $article->getDomain();
//$tags = $article->getTags();
//$links = $article->getLinks();
//$videos = $article->getVideos();
$articleText = $article->getCleanedArticleText();
//$entities = $article->getPopularWords();
//$image = $article->getTopImage();
//$allImages = $article->getAllImages();

echo $articleText;