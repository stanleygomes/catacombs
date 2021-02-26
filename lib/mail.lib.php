<?php
	//incluindo a conexao
	include('conexao.lib.php');
	$conexao=new conexao();
	$conexao->abrir();

	//incluindo funcoes
	include('funcoes.lib.php');

	//---------------------------------------CONTATO---------------------------------------------
	if(isset($_POST["enviarmsg"])){
		//dados do formulario
		$nome=$_POST["nome"];
		$email=$_POST["email"];
		$telefone=$_POST["tel"];
		$assunto=$_POST["assunto"];
		$mensagem=nl2br($_POST["mensagem"]);
		
		$sql="INSERT INTO `contato` (`data_inclusao`,`nome`,`email`,`assunto`,`telefone`,`mensagem`) VALUES (NOW(),'$nome','$email','$assunto','$telefone','$mensagem')";
		query($sql,"/contato");
	}
	else if($_GET["enviar"]=="ok"){
		//conteudos para fazer email profissional
		$headers="MIME-Version: 1.0"."\r\n";
		$headers.="Content-type: text/html; charset=iso-8859-1"."\r\n";

		$headers.="To: Stanley Gomes <stanleygomess@hotmail.com>"."\r\n";
		$headers.="From: ChemicAll <marketing@chemicall.edu>"."\r\n";
		$pastaimagens="http://chemicall.freeiz.com/db/mail";

    	echo $corpo="
        <div id='mail' style='width:100%;max-width:1000px;height:100%;float:left;font-family:arial,helvetica,sans-serif'>
            <div class='topo' style='width:100%;height:100px;float:left;background:#2d89ef'>
                <span class='titulo' style='font-size:60px;color:#fff;line-height:100px;margin-left:30px'>ChemicAll Newsletter</span>
            </div>
           	<span class='subtitulo' style='width:96%;padding:20px 2%;font-size:30px;background:#0072c6;color:#fff;float:left;margin-bottom:30px'>ChemicAll está de cara nova</span>
            <div class='conteudo' style='width:96%;height:100%;float:left;margin:0 2% 0 2%'>
                <div class='esquerda' style='width:60%;height:320px;float:left;padding:30px 0 0 5%;background:#004050'>
                	<div class='titulo' style='width:90%;margin:30px 5%;color:#fff;font-size:30px'>Sua tabela peri&oacute;dica portátil</div>
                    <div class='texto' style='width:250px;margin:40px 0 0 50px;float:left;font-size:18px;color:#fff'>Descubra as curiosidades e tudo que h&iacute; sobre toda a qu&iacute;mica, f&aacute;cil e rapidamente.</div>
                    <img src='$pastaimagens/tbperiodica.png' style='float:right;padding-top:85px'/>
                </div>
                <div class='direita' style='width:33%;height:350px;float:right;margin-bottom:20px;background:#088a68'>
                    <img src='$pastaimagens/contas.png' style='float:right;margin-bottom:20px;'/>
                    <span class='texto' style='width:90%;float:left;color:#fff;text-align:center;font-size:20px;margin-top:30px'>Crie e edite suas p&aacute;ginas com atualiza&ccedil;&atilde;o instant&acirc;nea e segura.</span>
                </div>
                <div class='total' style='width:100%;height:240px;float:left;margin-bottom:20px;margin:30px 0;background:#e51400'>
                	<span class='texto' style='width:40%;float:right;color:#fff;text-align:center;font-size:20px;padding-top:30px'>Aproveite a experi&ecirc;ncia de navega&ccedil;&atilde;o, limpa de propagandas e veloz.</span>
                    <img src='$pastaimagens/resultados.png' style='float:left;padding-top:87px'/>
                </div>
                <div class='total' style='width:100%;float:left;margin-bottom:30px'>
                    <a href='http://www.chemicall.freeiz.com' target='_blank' style='text-decoration:none'>
                        <div class='botao' style='float:right;margin:50px 40px 0 0'>
                            <div class='texto' style='padding:13px 25px 12px 25px;float:left;color:#fff;font-size:30px;background:#2d89ef'>Visitar o site</div>
                            <div class='triang' style='width:0;height:0;float:left;border-left:50px solid #2d89ef;border-top:30px solid transparent;border-bottom:37px solid transparent'></div>
                        </div>
                    </a>
                </div>
                <div class='clear' style='clear:both'></div>
            </div>
            <div class='rodape' style='width:96%;padding:20px 2%;margin:120px 0 30px 0;float:left;background:#333'>
            	<div class='logo' style='float:left;font-size:30px'><span class='chemic' style='color:#2d89ef'>Chemic</span><span class='all' style='color:#fff'>All</span></div>
                <div class='nome' style='float:left;color:#fff;padding-top:7px;padding-left:10px'> | Stanley Gomes</div>
            </div>
        </div>
		";
		exit;
		$assunto="Química Online - Tabela e conhecimentos sobre a química";
		$emailto="stanleygomess@yahoo.com.br";
		//mail('destinario','assunto','mensagem','from:remetente');
		for($i=0;$i<30;$i++){
			if(mail($emailto,trim($assunto),$corpo,$headers)){
				$alerta="Sua mensagem foi enviada com sucesso.";
			}
			else{
				$alerta="Sua mensagem não foi enviada! Por favor, tente novamente mais tarde.";
			}
			alerta($alerta,"");
		}
	}
?>

