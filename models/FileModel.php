<?php

namespace app\models;

use Yii;
use Imagick;

/**
 * This is the model class for table "file".
 *
 * @property int $id
 * @property string $data
 */
class AlbumImage extends \yii\db\ActiveRecord
{

    public $imageFile;
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'album_image';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['data'], 'required'],
            [['data'], 'safe'],
            [['imageFile'], 'file', 'skipOnEmpty' => false, 'extensions' => 'png, jpg, jpeg webp svg'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'data' => 'Data'
        ];
    }

    public static function generateRandomString($length) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[random_int(0, $charactersLength - 1)];
        }
        return $randomString;
    }

    public static function thumbnailImage($image) {
        list($width, $height) = getimagesize($image);
        if ($width >= 300 && $height >= 300) {
            $imagick = new Imagick($image);
            $imagick->setImageFormat('webp');
            $format = $imagick->getImageFormat();
            $filepath = 'ng2app/src/assets/img/' . Yii::$app->helper->getRandomString(10) . '.' . $format;
            $imagick->thumbnailImage(300, 300, true);
            $imagick->setImageCompressionQuality(80);
            $imagick->writeImage($filepath);
            return ['path' => $filepath];
        } else {
            return false;
        }
    }


    public function upload($filename)
    {
        $this->imageFile->saveAs('uploads/' . $filename . '.' .'jpg');
        return 'done';
    }
}
