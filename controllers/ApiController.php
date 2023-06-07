<?php

namespace app\controllers;

use yii\web\Controller;
use yii\web\Response;


class ApiController extends Controller {

//    public $enableCsrfValidation = false;
//
    public function behaviors()
    {
        return [
            'corsFilter' => [
                'class' => \yii\filters\Cors::class,
                'cors' => [
                    'Origin' => ['http://localhost:4200'],
                    'Access-Control-Allow-Origin' => ['http://localhost:4200'],
                    'Access-Control-Request-Method' => ['GET', 'POST'],
                    'Access-Control-Request-Headers' => ['*'],
                    'Access-Control-Allow-Credentials' => true,
                    'Access-Control-Max-Age' => 86400,
                    'Access-Control-Expose-Headers' => [],
                ],
            ],
        ];
    }

    public function beforeAction($action)
    {
        \Yii::$app->response->format = Response::FORMAT_JSON;
        return parent::beforeAction($action);
    }

    public function debug($arr) {
        echo '<pre>' . print_r($arr, true) . '</pre>';
    }
}