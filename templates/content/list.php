<?php
use andreskrey\Readability\HTMLParser;

$readability = new HTMLParser();
$html = file_get_contents('https://www.gnu.org/software/gnuzilla/');
$result = $readability->parse($html);

echo $result['article'];
?>