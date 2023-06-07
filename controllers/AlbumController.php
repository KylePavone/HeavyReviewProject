<?php 

namespace app\controllers;

use Yii;
use app\models\AlbumModel;
use yii\helpers\ArrayHelper;

class AlbumController extends ApiController {


    public function actionList($limit, $offset=4) {
        $data = AlbumModel::find()->limit($limit)->offset($offset)->all();
        return $data;
    }

    public function actionGet($id) {
        $model = AlbumModel::findOne($id);
        return $model->toArray();
    }

    public function actionSave() {
        $data = Yii::$app->request->getBodyParams();
        $trx = Yii::$app->db->beginTransaction();
        $model = new AlbumModel();
        $model->load($data, '');
        if ($model->validate()) {
            $model->save();
            $trx->commit();
        } else {
            $trx->rollBack();
        }

        return ['model' => $model->toArray()];
    }
}


?>