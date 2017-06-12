<?php
use andreskrey\Readability\HTMLParser;

$readability = new HTMLParser();
$html = file_get_contents('https://github.com/andreskrey/readability.php');
$result = $readability->parse($html);

echo $result->author;
?>