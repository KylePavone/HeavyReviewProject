<?php

namespace app\controllers;

use app\models\FileModel;
use yii\web\UploadedFile;
use Yii;


class FileController extends ApiController {
    
    public function beforeAction($action) 
    { 
        $this->enableCsrfValidation = false;
        return parent::beforeAction($action); 
    }

    public function actionUploadImage() {
        $trx = Yii::$app->db->beginTransaction();
        $image = $_FILES['image']['tmp_name'];
        $errors = [];
        $imageName = $_FILES['image']['name'];

        $model = new FileModel();
        $model->imageFile = UploadedFile::getInstanceByName('image');
        $model->data = ['image_name' => '$imageName'];
        
        if ($model->validate()) {
            if ($model->save(false)) {

                if (FileModel::thumbnailImage($image, $imageName)) {
                    $trx->commit();
                    return ['status' => 'success'];
                } else {
                    $trx->rollBack();
                    return ['errors' => 'unsupported image sizes, width and height must be greater then 400'];
                }
            } else {
                $trx->rollBack();
                $errors = $model->errors;
                return ['errors' => $errors];
            }
        }
    }
}

?>