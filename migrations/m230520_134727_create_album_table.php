<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%album}}`.
 */
class m230520_134727_create_album_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->execute('CREATE TABLE "album" (
            "id" bigserial NOT NULL,
            PRIMARY KEY ("id"),
            "title" text NOT NULL,
            "author" text NOT NULL,
            "description" TEXT NOT NULL,
            "image_link" TEXT NOT NULL,
            "likes" INTEGER DEFAULT 0
        )');
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%album}}');
    }
}
