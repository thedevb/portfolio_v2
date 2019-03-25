<?php
session_start();
    $login = ['bruno', 'senha'];
    if($_POST['nome'] === $login[0] && $_POST['senha'] === $login[1]){
        echo 'login realizado com sucesso';
        $_SESSION['login'] = 'SIM';
        echo print_r($_SESSION);
        header('location: /src/frontend/html/gerenciador.php');
        
    }else{
        $_SESSION['login'] = 'NAO';
        header('location: /src/frontend/html/gerenciador.php');
    }
?>
