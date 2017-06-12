<h1>Hello world, this is the list of articles.</h1>


<?php
$readability = new HTMLParser();
$html = file_get_contents('https://github.com/andreskrey/readability.php');
$result = $readability->parse($html);
?>