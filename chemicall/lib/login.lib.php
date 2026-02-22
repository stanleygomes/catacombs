<?php
/*
 *      Stanley Gomes <stanleygomess@hotmail.com>
 */

	session_start();

	//incluindo a conexao
	include('conexao.lib.php');
	$conexao=new conexao();
	$conexao->abrir();

	//incluindo funcoes
	include('funcoes.lib.php');

	//verificar o login
	if(isset($_POST["entrar"])){
		//pegar o valor usuario
		$login=antisql($_POST["login"]);
		//pegar o valor senha
		$senha=antisql($_POST["senha"]);
		//codificar a senha
		$senhacod=md5($senha);
		
		//verificar se existe o usuario com a senha informada
		$query=mysql_query("SELECT * FROM `usuarios` WHERE (`login`='$login' OR `email`='$login') AND `senha`='$senhacod'");
		//verificar o numero de linhas
		$linhas=mysql_num_rows($query);
		//se for maior que zero deu certo
		if($linhas>0){
			//pegar os dados do usuario selecionado
			$queryid=mysql_query("SELECT * FROM `usuarios` WHERE (`login`='$login' OR `email`='$login')");
			//criar vetor com as informacoes retornadas
			$resultado=mysql_fetch_array($queryid);
			//criar variveis para receber
			$sessaoid=$resultado["id"];
			$sessaologin=$resultado["login"];
			$sessaosenha=$resultado["senha"];

			$_SESSION["idusuario"]=$sessaoid;
			$_SESSION["login"]=$sessaologin;
			$_SESSION["senha"]=$sessaosenha;
			
			//gravar na tabela de logs
			$querylog=mysql_query("INSERT INTO `entradas` (`data`,`idusuario`) VALUES (NOW(),'$sessaoid')");

			header("location: /contas/");
		}
		//se nao, rediciona para o login
		else if($linhas==0){
			alerta("Informe dados corretos para logar-se.","/contas/");
		}
	}
	//cadastrar novo usuario
	elseif(isset($_POST["cadastrar"])){
		//pegar o valor usuario
		$login=antisql($_POST["login"]);
		//pegar o valor senha
		$senha=antisql($_POST["senha"]);
		if(empty($login) || empty($senha)){
			$mensagem="Informe seus dados por favor.";
		}
		else{
			//pegar os dados do usuario selecionado
			$queryexiste=mysql_query("SELECT * FROM `usuarios` WHERE `login`='$login'");
			$linhaexiste=mysql_num_rows($queryexiste);
			if($linhaexiste==0){
				$senhacod=md5($senha);
				//verificar se existe o usuario com a senha informada
				$query=mysql_query("INSERT INTO `usuarios` (`login`,`senha`,`tipo`,`status`)VALUES('$login','$senhacod','1','1')");
				if($query){
					//pegar os dados do usuario selecionado
					$queryid=mysql_query("SELECT * FROM `usuarios` WHERE `login`='$login'");
					//criar vetor com as informacoes retornadas
					$resultado=mysql_fetch_array($queryid);
					$sessaoid=$resultado["id"];
					$sessaologin=$resultado["login"];
					$sessaosenha=$resultado["senha"];
		
					$_SESSION["idusuario"]=$sessaoid;
					$_SESSION["login"]=$sessaologin;
					$_SESSION["senha"]=$sessaosenha;
	
					//gravar na tabela de logs
					$querylog=mysql_query("INSERT INTO `entradas` (`data`,`idusuario`) VALUES (NOW(),'$idsessao')");
	
					$mensagem="Sua conta foi criada com sucesso! Voce será redirecionado para o administrativo.";
				}
				else{
					$mensagem="Ocorreu um erro no sistema! Por favor, tente novamente.";
				}
			}
			else{
				$mensagem="Este usuário já está cadastrado! Por favor, tente outro.";
			}
		}
		alerta($mensagem,"/contas/");
	}
?>
