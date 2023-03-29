<?php

    $dbHost = 'Localhost';
    $dbUsername = 'root';
    $dbpassword = '';
    $dbName = 'formulario_369';

    $conexao = new msqli($dbHost, $dbUsername, $dbpassword, $dbName)

    if($conexao->connect_errno)
    {
        echo "Erro";
    }
    else
    {
        echo "Conexão efetuada com sucesso";
    }

?>