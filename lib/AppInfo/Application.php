<?php
/**
 * Created by PhpStorm.
 * User: fsociety
 * Date: 10/06/2017
 * Time: 17.34
 */

require_once __DIR__ . '/../../vendor/autoload.php';
require_once __DIR__ . '/../JSLikeHTMLElement.php';
require_once __DIR__ . '/../Readability.php';

use andreskrey\Readability\HTMLParser;

$readability = new HTMLParser();