<?php
require_once __DIR__.'/../vendor/autoload.php'; 

$app = new Silex\Application(); 

//esta linha mostra o hello world
$app->get('/hello/{name}', function($name) use($app) { 
    return 'Hello '.$app->escape($name); 
}); 
//
// ALTERANDO ALGO MTO LOKO P/ EXPERIMENT
//

$app->run();

//ALTERAÇÕES DE TESTE

