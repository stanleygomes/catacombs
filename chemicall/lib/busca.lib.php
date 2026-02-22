<?php

	session_start();
	ob_start();
	
	include("funcoes.lib.php");

	$busca=$_GET["q"];
	$busca=limparvariavel($busca);
	if(preg_match("/lab/",$busca)){
		$local="lab";
		$busca=str_replace("-lab","",$busca);
	}
	else{
		$local="busca";
		$busca=str_replace("-paginas","",$busca);
	}
	
	$busca=str_replace("-","+",$busca);
	
	header("location: /$local/$busca");
?>
