<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration,
    Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your need!
 */
class Version20140318172534 extends AbstractMigration
{
    public function up(Schema $schema)
    {
        // this up() migration is autogenerated, please modify it to your needs
    	$this->addSql("ALTER TABLE `member_history` CHANGE `boughtPrice` `boughtPrice` FLOAT UNSIGNED NOT NULL DEFAULT '0' COMMENT '购买价格';");
    	$this->addSql("ALTER TABLE `member_history` ADD `boughtUnit` ENUM('none','month','year') NOT NULL DEFAULT 'none' AFTER `boughtDuration`;");
    }

    public function down(Schema $schema)
    {
        // this down() migration is autogenerated, please modify it to your needs

    }
}
