<?php

$readability = new andreskrey\Readability\HTMLParser();
$html = file_get_contents('https://www.gnu.org/software/gnuzilla/');
$result = $readability->parse($html);

echo $result['article'];
?>