<?php

$doc = new Readability();
$doc->input('https://www.gnu.org/software/gnuzilla/');
$doc->init();

$content = $doc->getContent();

echo '<h1>'.$doc->articleTitle->innerHTML.'</h1>';
echo $doc->articleContent->innerHTML;