<?php

namespace app\components;

use Yii;
use yii\filters\Cors;


class CorsFilter extends Cors {

    function beforeAction($action) {
        $this->cors['Access-Control-Allow-Credentials'] = true;
        $this->cors['Origin'] = [
            'http://localhost:4200',
            'https://localhost:8000',
            Yii::$app->request->hostInfo
        ];

        $res=parent::beforeAction($action);

//        if ($res) {
//             if this is CORS Options request, respond with empty content
//            if (Yii::$app->request->isOptions) {
//                Yii::$app->response->content = '';
//                return false;
//            }
//        }

        return $res;
    }
}