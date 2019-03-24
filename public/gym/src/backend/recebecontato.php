<?php
$arquivo = fopen('menssagens.hd', 'a');
$nome = str_replace('#', '-', $_POST['nome']);
$email = str_replace('#', '-', $_POST['email']);
$menssagem = str_replace('#', '-', $_POST['menssagem']);
$linha = $nome . '#' . $email . '#' . $menssagem . PHP_EOL;
fwrite($arquivo, $linha);
fclose($arquivo);
header('location: /src/frontend/html/contato.html');
?>