<?php

require_once "../../lib/Readability.php";

$doc = new Readability();
$doc->input('http://google.com');
$doc->init();

$content = $doc->getContent();

echo $doc->articleContent;