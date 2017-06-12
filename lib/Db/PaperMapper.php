<?php
/**
 * Created by PhpStorm.
 * User: fsociety
 * Date: 12/06/2017
 * Time: 15.56
 */

namespace OCA\Paper\Db;

use OCP\IDbConnection;
use OCP\AppFramework\Db\Mapper;

class PaperMapper extends Mapper {

    public function __construct(IDbConnection $db) {
        parent::__construct($db, 'paper_papers', '\OCA\Paper\Db\Paper');
    }

    public function find($id, $userId) {
        $sql = 'SELECT * FROM *PREFIX*paper_papers WHERE id = ? AND user_id = ?';
        return $this->findEntity($sql, [$id, $userId]);
    }

    public function findAll($userId) {
        $sql = 'SELECT * FROM *PREFIX*paper_papers WHERE user_id = ?';
        return $this->findEntities($sql, [$userId]);
    }
}