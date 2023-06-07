<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "album".
 *
 * @property int $id
 * @property string $title
 * @property string $author
 * @property string $description
 * @property string $image_link
 * @property int|null $likes
 */
class AlbumModel extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'album';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['title', 'author', 'description', 'image_link'], 'required'],
            [['title', 'author', 'description', 'image_link'], 'string'],
            [['likes'], 'default', 'value' => null],
            [['likes'], 'integer'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'title' => 'Title',
            'author' => 'Author',
            'description' => 'Description',
            'image_link' => 'Image Link',
            'likes' => 'Likes',
        ];
    }
}
