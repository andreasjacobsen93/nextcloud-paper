<?php

/**
 * Created by PhpStorm.
 * User: fsociety
 * Date: 12/06/2017
 * Time: 15.52
 */
namespace OCA\Paper\Db;

use JsonSerializable;

use OCP\AppFramework\Db\Entity;

class Paper extends Entity implements JsonSerializable {

    protected $title;
    protected $description;
    protected $site;
    protected $link;
    protected $author;
    protected $published;
    protected $readtime;
    protected $content;
    protected $image;
    protected $datetime;
    protected $userId;

    /**
     * Specify data which should be serialized to JSON
     * @link http://php.net/manual/en/jsonserializable.jsonserialize.php
     * @return mixed data which can be serialized by <b>json_encode</b>,
     * which is a value of any type other than a resource.
     * @since 5.4.0
     */
    function jsonSerialize()
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'site' => $this->site,
            'link' => $this->link,
            'author' => $this->author,
            'published' => $this->published,
            'readtime' => $this->readtime,
            'content' => $this->content,
            'image' => $this->image,
            'datetime' => $this->datetime
        ];
    }
}