<?php

use yii\db\Migration;

/**
 * Class m230605_215406_modify_file_table
 */
class m230605_215406_modify_file_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->execute('ALTER TABLE file ADD COLUMN album_id INTEGER NOT NULL REFERENCES album(id);');
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m230605_215406_modify_file_table cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m230605_215406_modify_file_table cannot be reverted.\n";

        return false;
    }
    */
}
