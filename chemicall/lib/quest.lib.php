<?php
	//incluindo a conexao
	include('conexao.lib.php');
	$conexao=new conexao();
	$conexao->abrir();

	//incluindo funcoes
	include('funcoes.lib.php');

	//---------------------------------------PERGUNTA---------------------------------------------
	if(isset($_POST["questok"])){
		//dados do formulario
		$opok=$_POST["opok"];
		$idquest=$_POST["idquest"];
		
		$sqlquest="SELECT * FROM `quest` WHERE `id`='$idquest' AND `opok`='$opok'";
		$queryquest=mysql_query($sqlquest);
		$linhasquest=mysql_num_rows($queryquest);
		if($linhasquest>0){
			echo "Parab&eacute;ns!<br/> Sua resposta est&aacute; correta.";
		}
		else{
			echo "Sinto muito...<br/> Sua resposta est&aacute; errrada.";
		}
	}
?>

