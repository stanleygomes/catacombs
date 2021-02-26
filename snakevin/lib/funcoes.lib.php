<?php
	//verificar se o numero e primo
	function primo($num){
		for($i=0;$i<=50;$i++){
			for($i=1;$i<=$num;$i++){
				if($num % $i==0){
					$ndiv+=1;
				}
			}
			if($ndiv==2){
				$qtdprimos+=1;
				echo "O n˙mero ".$num." È primo. Pois tem ".$ndiv." divisores.";
			}
			else{
				echo "O n˙mero ".$num." nao È primo. Pois tem ".$ndiv." divisores.";
			}
		}
	}
	//verificar se precisa de ... no final da string
	function limitartexto($valor,$tam){
		$valortam=strlen($valor);
		if($valortam>$tam){
			$valor=substr($valor,0,$tam)."...";
		}
		return $valor.$ret;
	}
	//gerar valor aleatorio para alguma string
	function aleatorio($string){
		$string=md5(time().mt_rand(1,1000000));
	}
	//verificar se ha a necessidade de reticencias no final da frase
	function reticen($string,$tam){
		$tamstring=strlen($string);
		if($tamstring>$tam){
			$string=$string."...";
		}
		return $string;
	}
	//retorna o valor da url atual
	function enderecopagina(){
		$servidor=$_SERVER['SERVER_NAME'];
		$endereco=$_SERVER['REQUEST_URI'];
		$enderecopagina="http://".$servidor.$endereco;
		return $enderecopagina;
	}
	//formatar a data
	function formata_data($data){
		$data=explode(" ","$data");
		$hora=$data[1];
		$hora=explode(":","$hora");
		$data=explode("-","$data[0]");
		$data="$data[2]/$data[1]/$data[0] as $hora[0]:$hora[1]";
		return $data;
	}
	//criar campo breadcrumb
	function limparvariavel($v){
		$v=strtolower($v);
		$v=ereg_replace("[^a-zA-Z0-9]","-", strtr($v,"·‡„‚ÈÍÌÛÙı˙¸Á¡¿√¬… Õ”‘’⁄‹«","aaaaeeiooouucAAAAEEIOOOUUC"));

		$v=str_replace("--","-",$v);
		$v=str_replace(",","",$v);
		$v=str_replace(".","",$v);
		$v=str_replace(";","",$v);
		$v=str_replace(":","",$v);
		return $v;
	}
	//funcao para fazer upload de arquivo
	function upload($campo,$nome,$diretorio,$tipo){
		//arquivo para fazer upload
		$nomeantes=$_FILES[$campo]["name"];
		$tamanho=($_FILES[$campo]["size"]/1024);
		//formato do numero com 2 casas apos a virgula
		$tamformat=number_format($tamanho,2,".","")."KB";

		//verificar se o arquivo e permitido
		if($tipo=="imagem"){
			//se for imagem
			$_UP["extensoes"]=array("jpg","gif","bmp","png");
		}
		else if($tipo=="arquivo"){
			//se for documento
			$_UP["extensoes"]=array("txt","pdf","doc");
		}
		//pegar a extensao
		$extensao=strtolower(end(explode(".", $_FILES[$campo]["name"])));
		if(array_search($extensao, $_UP["extensoes"])===false){
			alerta("Envie um aquivo v·lido.","");
			$erro.="Extens„o inv·lida!<br/>";
			exit;
		}
		//tamanho em bytes do arquivo
		$max=2000000;
		if($tamanho>$max){
			alerta("O arquivo È muito grande! Por favor, envie outro.","");
			$erro.="Arquivo grande!<br/>";
			exit;
		}
		else if($tamanho==0){
			alerta("Envie algum arquivo v·lido.","");
			$erro.="Sem arquivo!<br/>";
			exit;
		}
		else{
			$src=$diretorio."/".$nome;
			//move o arquivo do temp para o diretorio especificado nome do arquivo
			$move=move_uploaded_file($_FILES[$campo]["tmp_name"],"$src");
			if(!$move){
				echo "N„o moveu!<br/>";
			}
		}
	}
	//deletar arquivo do site
	function deletar($diretorio,$nome){
		//pegar caminho
		$caminhodel="$diretorio/$imagem";
		if(file_exists($caminhodel)){
			$del=unlink($caminhodel);
			if(!$del){
				alerta("Ocorreu um erro! Tente novamente.","");
			}
		}
	}
	//executar e verificar comando sql
	function query($sql,$href){
		$exe=mysql_query($sql);
		if($exe){
			alerta("OperaÁ„o efetuada com sucesso!","$href");
		}
		else{
			alerta("Erro na operaÁ„o!!","$href");
		}
		
	}
	//mostrar mensagem na tela com javascript e redirecionar para pagina
	function alerta($msg,$href){
		if(empty($href)){
			$mensagem="
				alert('$msg');
			";
		}
		else{
			$mensagem="
				alert('$msg');
				window.location.href='$href';			
			";
		}
		echo "<script>$mensagem</script>";
	}
	//retirar caracteres nao permitidos de variavel
	function antisql($campo){
		//remove palavras que contenham sintaxe sql
		$campo=preg_replace(sql_regcase("/(from|select|insert|delete|where|drop table|show tables|#|\*|--|\\\\)/"),"",$campo);
		//limpa espaÁos vazio
		$campo=trim($campo);
		//tira tags html e php
		$campo=strip_tags($campo);
		//adiciona barras invertidas
		$campo=addslashes($campo);
		return $campo;
   }
?>