<?php

// ADICIONADO NOVA LINHA DE TESTE NO COMEÇO

require_once __DIR__.'/../vendor/autoload.php'; 

$app = new Silex\Application(); 

// endereço de email
// bla bla bla
// suporte.nti@ufms.br

//esta linha mostra o hello world
$app->get('/hello/{name}', function($name) use($app) { 
    return 'Hello '.$app->escape($name); 
}); 

$app->run();

//
// RODAPE BLA BLA BLA
// MAIS RODAPE BLA BLA BLA
//
