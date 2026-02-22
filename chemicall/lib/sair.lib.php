<?php
	//iniciar sessao
	session_start();
	
	//verificar se o usuario esta logado
	if(isset($_SESSION["login"]) && isset($_SESSION["senha"]) && isset($_SESSION["idusuario"])){

		unset($_SESSION["login"]);
		unset($_SESSION["senha"]);
		unset($_SESSION["idusuario"]);
		
		session_destroy();
		header("location: /");
		exit();
	}
?>
