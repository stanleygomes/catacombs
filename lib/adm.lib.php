<?php
	session_start();

	//incluindo a conexao
	include('conexao.lib.php');
	$conexao=new conexao();
	$conexao->abrir();

	//conjunto de funcoes php
	include("funcoes.lib.php");

	//------------------------------------------ALTERAR PERFIL-----------------------------------------------------------------------
	if(isset($_POST["usuarioeditar"])){
		//dados do formulario
		$id=$_POST["id"];
		$nomecompleto=$_POST["nomecompleto"];
		$login=$_POST["login"];
		$email=$_POST["email"];
		$btnupload=$_FILES["btnupload"];
		$data_aniver=$_POST["data_aniver"];

		//se houver alteracao na imagem
		if(!empty($btnupload["name"])){
			$btnuploadnome="btnupload";
			$arquivonome=md5(time()).".jpg";
			$arquivocaminho="../db/usuarios";
			$arquivotipo="imagem";

			//funcao para fazer upload da imagem da noticia
			upload("$btnuploadnome","$arquivonome","$arquivocaminho","$arquivotipo");
			$sqladd="`imagem`='$arquivonome',";
		}
		$sql="UPDATE `usuarios` SET `nomecompleto`='$nomecompleto',`email`='$email',`login`='$login',$sqladd`data_aniver`='$data_aniver' WHERE `id`='$id'";
		query($sql,"/contas/usuarios/editar");
	}
	//------------------------------------------ALTERAR SENHA-----------------------------------------------------------------------
	if(isset($_POST["usuariosenha"])){
		//dados do formulario
		$login=$_SESSION["login"];
		$senha_atual=md5($_POST['senha_atual']);
		$senha_nova=md5($_POST['senha_nova']);
		$senhaconfirmar=md5($_POST['senha_confirmar']);
		//verificar senha do usuario
		$query=mysql_query("SELECT * FROM `usuarios` WHERE `login`='$login'");
		$resultado=mysql_fetch_array($query);
		$senhabd=$resultado["senha"];

		if($senha_atual!=$senhabd){
			$erro="Senha atual errada!";
		}
		else{
			if($senha_nova!=$senhaconfirmar){
				$erro="Repita a nova senha corretamente!!";
			}
			else{
				$queryupdate=mysql_query("UPDATE `usuarios` SET `senha`='$senha_nova' WHERE `login`='$login'");

				if($queryupdate){
					$msg="Senha alterada com Sucesso! Faça seu login novamente para confirmar a alteraçao.";
				}
				else{
					$erro="Senha nao alterada!";
				}
			}
		}
		if($erro==""){
			alerta($msg,"/lib/sair.lib.php");
		}
		else{
			alerta($erro,"/contas/usuarios/editar");
		}
	}
	//------------------------------------------ADICIONAR PAGINA-----------------------------------------------------------------------
	if(isset($_POST["paginaadd"])){
		$idusuario=$_POST["idusuario"];
		$tituloprincipal=$_POST["tituloprincipal"];
		$titulo1=$_POST["titulo1"];
		$titulo2=$_POST["titulo2"];
		$titulo3=$_POST["titulo3"];
		$titulo4=$_POST["titulo4"];
		$texto1=$_POST["texto1"];
		$texto2=$_POST["texto2"];
		$texto3=$_POST["texto3"];
		$texto4=$_POST["texto4"];
		$curiosidades=$_POST["curiosidades"];
		$caracteristicas=$_POST["caracteristicas"];
		$referencias=$_POST["referencias"];
		$video=$_POST["video"];
		$categoria=$_POST["categoria"];
		//formatar video para insercao
		$video=str_replace("http://www.youtube.com/watch?v=","",$video);
		//cor da pagina
		$cores=array("00709e","004050","088a68","008a00","4d90fe","e41300","5032aa","008287","f7941d","8a0868","018388");
		$rand=rand(0,7);
		$cor=$cores[$rand];
		//imagens
		$btnupload1=$_FILES["btnupload1"];
		$btnupload2=$_FILES["btnupload2"];
		$btnupload3=$_FILES["btnupload3"];
		$pasta=limparvariavel($tituloprincipal);
		$caminho="../db/paginas/".$pasta;
		$imagem=md5(time()*time()/2).".jpg";
		//criar pasta para imagens
		if(!is_dir($caminho)){
			$res=mkdir($caminho,0777);
		}
		//se houver alteracao na imagem
		if(!empty($btnupload1["name"])){
			$btnuploadnome="btnupload1";
			$arquivonome="1_".$imagem;
			$arquivocaminho=$caminho;
			$arquivotipo="imagem";

			//funcao para fazer upload da imagem da noticia
			upload("$btnuploadnome","$arquivonome","$arquivocaminho","$arquivotipo");
		}
		//se houver alteracao na imagem
		if(!empty($btnupload2["name"])){
			$btnuploadnome="btnupload2";
			$arquivonome="2_".$imagem;
			$arquivocaminho=$caminho;
			$arquivotipo="imagem";

			//funcao para fazer upload da imagem da noticia
			upload("$btnuploadnome","$arquivonome","$arquivocaminho","$arquivotipo");
		}
		//se houver alteracao na imagem
		if(!empty($btnupload3["name"])){
			$btnuploadnome="btnupload3";
			$arquivonome="3_".$imagem;
			$arquivocaminho=$caminho;
			$arquivotipo="imagem";

			//funcao para fazer upload da imagem da noticia
			upload("$btnuploadnome","$arquivonome","$arquivocaminho","$arquivotipo");
		}
		$sql="INSERT INTO `paginas` (`tituloprincipal`,`titulo1`,`titulo2`,`titulo3`,`titulo4`,`texto1`,`texto2`,`texto3`,`texto4`,`caracteristicas`,`curiosidades`,`categoria`,`data_inclusao`,`data_alteracao`,`idusuario`,`referencias`,`video`,`cor`,`pasta`,`imagem`) VALUES ('$tituloprincipal','$titulo1','$titulo2','$titulo3','$titulo4','$texto1','$texto2','$texto3','$texto4','$caracteristicas','$curiosidades','$categoria',NOW(),NOW(),'$idusuario','$referencias','$video','$cor','$pasta','$imagem')";
		query($sql,"/contas/paginas/listar");
	}
	//------------------------------------------ALTERAR PAGINA-----------------------------------------------------------------------
	if(isset($_POST["paginaseditar"])){
		$id=$_POST["id"];
		$idusuario=$_POST["idusuario"];
		$tituloprincipal=$_POST["tituloprincipal"];
		$titulo1=$_POST["titulo1"];
		$titulo2=$_POST["titulo2"];
		$titulo3=$_POST["titulo3"];
		$titulo4=$_POST["titulo4"];
		$texto1=$_POST["texto1"];
		$texto2=$_POST["texto2"];
		$texto3=$_POST["texto3"];
		$texto4=$_POST["texto4"];
		$curiosidades=$_POST["curiosidades"];
		$caracteristicas=$_POST["caracteristicas"];
		$referencias=$_POST["referencias"];
		$video=$_POST["video"];
		$categoria=$_POST["categoria"];
		//formatar video para insercao
		$video=str_replace("http://www.youtube.com/watch?v=","",$video);
		//imagens
		$btnupload1=$_FILES["btnupload1"];
		$btnupload2=$_FILES["btnupload2"];
		$btnupload3=$_FILES["btnupload3"];
		$pasta=limparvariavel($tituloprincipal);
		$caminho="../db/paginas/".$pasta;
		$imagem=md5(time()*time()/2).".jpg";
		//criar pasta para imagens
		if(!is_dir($caminho)){
			$res=mkdir($caminho,0777);
		}
		//se houver alteracao na imagem
		if(!empty($btnupload1["name"])){
			$btnuploadnome="btnupload1";
			$arquivonome="1_".$imagem;
			$arquivocaminho=$caminho;
			$arquivotipo="imagem";

			//funcao para fazer upload da imagem da noticia
			upload("$btnuploadnome","$arquivonome","$arquivocaminho","$arquivotipo");
		}
		//se houver alteracao na imagem
		if(!empty($btnupload2["name"])){
			$btnuploadnome="btnupload2";
			$arquivonome="2_".$imagem;
			$arquivocaminho=$caminho;
			$arquivotipo="imagem";

			//funcao para fazer upload da imagem da noticia
			upload("$btnuploadnome","$arquivonome","$arquivocaminho","$arquivotipo");
		}
		//se houver alteracao na imagem
		if(!empty($btnupload3["name"])){
			$btnuploadnome="btnupload3";
			$arquivonome="3_".$imagem;
			$arquivocaminho=$caminho;
			$arquivotipo="imagem";

			//funcao para fazer upload da imagem da noticia
			upload("$btnuploadnome","$arquivonome","$arquivocaminho","$arquivotipo");
		}
		$sql="UPDATE `paginas` SET `tituloprincipal`='$tituloprincipal',`titulo1`='$titulo1',`titulo2`='$titulo2',`titulo3`='$titulo3',`titulo4`='$titulo4',`texto1`='$texto1',`texto2`='$texto2',`texto3`='$texto3',`texto4`='$texto4',`caracteristicas`='$caracteristicas',`curiosidades`'$curiosidades',`categoria`='$categoria',`data_alteracao`=NOW(),`idusuario`='$idusuario',`referencias`='$referencias',`video`='$video',`cor`='$cor',`pasta`='$pasta',`imagem`='$imagem' WHERE `id`='$id'";
		query($sql,"/contas/paginas/listar");
	}
	//------------------------------------------ADICIONAR APLICATIVO-----------------------------------------------------------------------
	if(isset($_POST["labadd"])){
		//dados do formulario
		$titulo=$_POST["titulo"];
		$descricao=$_POST["descricao"];
		$btnupload=$_FILES["btnupload"];
		$tituloformat=limparvariavel($titulo);

		//cor da pagina
		$cores=array("00709e","004050","088a68","008a00","4d90fe","e41300","5032aa","008287","f7941d","8a0868","018388");
		$rand=rand(0,7);
		$cor=$cores[$rand];

		$sql="INSERT INTO `lab` (`titulo`,`tituloformat`,`descricao`,`cor`,`data_inclusao`,`data_alteracao`,`tipo`)VALUES('$titulo','$tituloformat','$descricao','$cor',NOW(),NOW(),'1')";
		query($sql,"/contas/lab/listar");
	}
	//------------------------------------------EDITAR APLICATIVO-----------------------------------------------------------------------
	if(isset($_POST["labeditar"])){
		//dados do formulario
		$id=$_POST["id"];
		$titulo=$_POST["titulo"];
		$descricao=$_POST["descricao"];
		$tituloformat=limparvariavel($titulo);

		$sql="UPDATE `lab` SET `titulo`='$titulo',`tituloformat`='$tituloformat',`descricao`='$descricao',`data_alteracao`=NOW() WHERE `id`='$id'";
		query($sql,"/contas/lab/listar");
	}
	//------------------------------------------ADICIONAR PERGUNTA-----------------------------------------------------------------------
	if(isset($_POST["questadd"])){
		//dados do formulario
		$idusuario=$_POST["idusuario"];
		$pergunta=$_POST["pergunta"];
		$op1=$_POST["op1"];
		$op2=$_POST["op2"];
		$op3=$_POST["op3"];
		$op4=$_POST["op4"];
		$opok=$_POST["opok"];
		$categoria=$_POST["categoria"];

		$sql="INSERT INTO `quest` (`pergunta`,`op1`,`op2`,`op3`,`op4`,`opok`,`data_inclusao`,`idusuario`,`categoria`,`status`)VALUES('$pergunta','$op1','$op2','$op3','$op4','$opok',NOW(),'$idusuario','$categoria','0')";
		query($sql,"/contas/quest/listar");
	}
	//------------------------------------------EDITAR PERGUNTA-----------------------------------------------------------------------
	if(isset($_POST["questeditar"])){
		//dados do formulario
		$id=$_POST["id"];
		$idusuario=$_POST["idusuario"];
		$pergunta=$_POST["pergunta"];
		$op1=$_POST["op1"];
		$op2=$_POST["op2"];
		$op3=$_POST["op3"];
		$op4=$_POST["op4"];
		$opok=$_POST["opok"];
		$categoria=$_POST["categoria"];

		$sql="UPDATE `quest` SET `pergunta`='$pergunta',`op1`='$op1',`op2`='$op2',`op3`='$op3',`op4`='$op4',`opok`='$opok',`categoria`='$categoria',`data_alteracao`=NOW(),`idusuario`='$idusuario' WHERE `id`='$id'";
		query($sql,"/contas/quest/listar");
	}
	//------------------------------------------ADICIONAR CONFIGURACAO-----------------------------------------------------------------------
	if(isset($_POST["configuracoesadd"])){
		//dados do formulario
		$titulo=$_POST["titulo"];
		$valor=$_POST["valor"];
		$btnupload=$_FILES["btnupload"];
		
		//se houver alteracao na imagem
		if(!empty($btnupload["name"])){
			$btnuploadnome="btnupload";
			$arquivonome=md5(time()).".jpg";
			$arquivocaminho="../db/configuracoes";
			$arquivotipo="imagem";

			//funcao para fazer upload da imagem
			upload("$btnuploadnome","$arquivonome","$arquivocaminho","$arquivotipo");
			$valor=$arquivonome;
		}
		$sql="INSERT INTO `configuracoes` (`titulo`,`valor`,`data_inclusao`)VALUES('$titulo','$valor',NOW())";
		query($sql,"/contas/configuracoes/listar");
	}
	//------------------------------------------ALTERAR CONFIGURACAO-----------------------------------------------------------------------
	if(isset($_POST["configuracoeseditar"])){
		//dados do formulario
		$id=$_POST["id"];
		$titulo=$_POST["titulo"];
		$valor=$_POST["valor"];
		$btnupload=$_FILES["btnupload"];

		//se houver alteracao na imagem
		if(!empty($btnupload["name"])){
			$btnuploadnome="btnupload";
			$arquivonome=md5(time()).".jpg";
			$arquivocaminho="../db/configuracoes";
			$arquivotipo="imagem";

			//funcao para fazer upload da imagem da noticia
			upload("$btnuploadnome","$arquivonome","$arquivocaminho","$arquivotipo");
			$valor=$arquivonome;
		}
		$sql="UPDATE `configuracoes` SET `titulo`='$titulo',`valor`='$valor',`data_alteracao`=NOW() WHERE `id`='$id'";
		query($sql,"/contas/configuracoes/listar");
	}
	//------------------------------------------LIMPAR CONFIGURACAO-----------------------------------------------------------------------
	if(isset($_POST["configuracoesdel"])){
		$id=$_POST["id"];
		$sql="UPDATE `configuracoes` SET `valor`='',`data_alteracao`=NOW() WHERE `id`='$id'";
		query($sql,"/contas/configuracoes/listar");
	}
	//tipo de operacao
	$pagina=$_GET["pagina"];
	//Operacoes de busca pelo valor na ulr
	//------------------------------------------DELETAR USUARIO-----------------------------------------------------------------------
	if($pagina=="usuariosdel"){
		$id=$_GET["formid"];
		$sql="DELETE FROM `usuarios` WHERE `id`='$id'";
		query($sql,"/contas/usuarios/listar");
	}
	//------------------------------------------DELETAR PAGINA-----------------------------------------------------------------------
	if($pagina=="paginasdel"){
		$id=$_GET["formid"];
		$sql="DELETE FROM `paginas` WHERE `id`='$id'";
		query($sql,"/contas/paginas/listar");
	}
	//------------------------------------------DELETAR CONTATO-----------------------------------------------------------------------
	if($pagina=="contatodel"){
		$id=$_GET["formid"];
		$sql="DELETE FROM `contato` WHERE `id`='$id'";
		query($sql,"/contas/contato/listar");
	}
	//------------------------------------------CONTATO LIDO-----------------------------------------------------------------------
	if($pagina=="contatook"){
		$id=$_GET["formid"];
		$sql="UPDATE `contato` SET `status`='1' WHERE `id`='$id'";
		query($sql,"/contas/contato/listar");
	}
	//------------------------------------------PROMOVER USUARIO-----------------------------------------------------------------------
	if($pagina=="usuariospromo"){
		$id=$_GET["formid"];
		$sql="UPDATE `usuarios` SET `tipo`='0' WHERE `id`='$id'";
		query($sql,"/contas/usuarios/listar");
	}
	//------------------------------------------REMOVER APLICATIVO-----------------------------------------------------------------------
	if($pagina=="labdel"){
		$id=$_GET["formid"];
		$sql="DELETE FROM `lab` WHERE `id`='$id'";
		query($sql,"/contas/lab/listar");
	}
	//------------------------------------------DELETAR PERGUNTA-----------------------------------------------------------------------
	if($pagina=="questdel"){
		$id=$_GET["formid"];
		$sql="DELETE FROM `quest` WHERE `id`='$id'";
		query($sql,"/contas/quest/listar");
	}
	//------------------------------------------ACEITAR PERGUNTA-----------------------------------------------------------------------
	if($pagina=="questok"){
		$id=$_GET["formid"];
		$sql="UPDATE `quest` SET `status`='1'";
		query($sql,"/contas/quest/listar");
	}
?>