<?php

	//tabela
	/*
	CREATE TABLE IF NOT EXISTS `snakevin` (
	  `id` int(11) NOT NULL auto_increment,
	  `nome` varchar(100) NOT NULL,
	  `comentario` varchar(255) NOT NULL,
	  `pontuacao` varchar(40) NOT NULL,
	  `data` datetime NOT NULL,
	  PRIMARY KEY  (`id`)
	) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
	*/

	//incluindo a conexao
	include('conexao.lib.php');
	$conexao=new conexao();
	$conexao->abrir();

	//incluindo funcoes
	include('funcoes.lib.php');

	//---------------------------------------INSERIR PONTUACAO---------------------------------------------
	if(isset($_POST["addpnt"])){
		//dados do formulario
		$nome=$_POST["nome"];
		$comentario=$_POST["comentario"];
		$pnt=$_POST["pnt"];

		$sql="INSERT INTO `snakevin` (`nome`,`comentario`,`pontuacao`,`data`) VALUES ('$nome','$comentario','$pnt',NOW())";
		$query=mysql_query($sql);
		if($query){
			$msg="Obrigado pela participação.";
		}
		else{
			$msg="Sinto muito... Ocorreu um erro ao salvar sua pontuação.";
		}
		alerta("$msg","/snakevin");
	}
?>

