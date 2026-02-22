<?php
/*
	Copyright 2012	-	CHEMICALL
		Matheus Martins 		<matheusm-o@hotmail.com>
		Renato Argondizzi 		<renatoargondizzi@yahoo.com.br>
		Stanley Gomes 			<stanleygomess@hotmail.com>
		Thiago Araújo 			<thiago.araujo@hotmail.com.br>
*/

	session_start();

	//incluindo a conexao
	include('lib/conexao.lib.php');
	$conexao=new conexao();
	$conexao->abrir();

	//conjunto de funcoes php
	include("lib/funcoes.lib.php");

	//pegar a pagina atual a partir da url
	$url=$_GET['pg'];
	if(empty($url)){
		$url="home";
	}
	//lista de permissoes de paginas que serao exibidas no site
	$perm=array('home','busca','contas','403','404','405','lab','videos','consciencia','projeto','contato');
	//pasta que contem os arquivos das paginas a serem exibidas
	$dir='pages';

	if(substr_count($_GET['pg'],"/")>0){
		$url=explode('/', $_GET['pg']);
		$pagina=(file_exists("$dir/".$url[0].'.php') && in_array($url[0], $perm))? $url[0]: '404';
	}
	else{
		$pagina=(file_exists("$dir/".$url.'.php') && in_array($url, $perm))? $url: '404';
	}
	//verificar se usuario esta logado
	if(isset($_SESSION["login"]) && isset($_SESSION["senha"]) && isset($_SESSION["idusuario"])){
		$sessaoid=$_SESSION["idusuario"];
		$sessaologin=$_SESSION["login"];
		$sessaosenha=$_SESSION["senha"];
		$logado=true;
	}
	//formatar o titulo da pagina
	$titulo=$pagina;
	if($titulo=="home"){
		$titulo="Toda a quimica está aqui";
	}
	$titulo=str_replace("-"," ",$titulo);
	$titulo=ucfirst($titulo);
	//valor para preencher a meta description
	//verificar se e preciso carregar o topo e rodape na pagina atual
	$vetcontas=array('contas');
	if(in_array($pagina,$vetcontas)){
		$precisa=true;
	}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<link rel="shortcut icon" href="/imagens/favicon.png" type="image/x-icon"/>
	<title><?php echo $titulo; ?> - ChemicAll</title>

	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta http-equiv="content-language" content="pt-br"/>
	<meta name="author" content="Stanley Gomes"/>
	<meta name="description" content="Um estudo sobre todos os elementos da química moderna e antiga e suas propriedades."/>
	<meta name="keywords" content="química, elementos, história da química, tecnologia química, seção da química, objetos químicos, elementos químicos,elements,chemicall,tabela,periodica,<?php echo $titulo; ?>,atomico,elementos"/>
	<meta name="robots" content="index,follow"/>
	<meta name="reply-to" content="stanleygomess@hotmail.com"/>
	<meta name="generator" content="Notepad++"/>
    <meta name="google-site-verification" content="gtirjNda3POhhrB_PIe2zSdFakQyhKyUUsMTS1YXJc8"/>

    <link rel="stylesheet" type="text/css" href="/link/css-principal.css"/>
    <?php
		if($pagina=="contas"){
	?>
    <link rel="stylesheet" type="text/css" href="/link/css-contas.css"/>
    <?php
		}
	?>
	<script type="text/javascript">
		var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-33372591-2']);
	  _gaq.push(['_trackPageview']);
	  (function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();
	</script>
	<script type="text/javascript" src="/link/jquery-1.7.1.min.js"></script>
	<script type="text/javascript">
		jQuery.noConflict();
	</script>
	<!--[if lt IE 9]>
		<script src="/link/html5-ie.js"></script>
	<![endif]-->
    <?php
		if($logado==true && $pagina=="contas"){
	?>
	<script src="/link/jquery.cleditor.js" type="text/javascript"></script>
    <?php
		}
	?>
	<script type="text/javascript">
		jQuery(document).ready(function(){
			jQuery("#formentrar").submit(function(){
				if(jQuery("#txt-login").val()==""){
		    		jQuery("#txt-login").focus();
					jQuery("#txt-login").css("border-color","#e51400");
					return false;
				}
				if(jQuery("#txt-senha").val()==""){
		    		jQuery("#txt-senha").focus();
					jQuery("#txt-senha").css("border-color","#e51400");
					return false;
				}
			});
			jQuery("#btn-entrar-cad-most").click(function(){
				jQuery("#login-load").animate({height:"500px"},800,function(){
					jQuery("#login-load .cadastrar").fadeIn("slow");
					jQuery("#txt-login-cad").focus();
					return false;
				});
			});
			//------------------------------------------TABELA PERIODICA------------------------------------------
			jQuery(".btnanimado").click(function(){
				obj=jQuery(this).attr("dir");
				pag=obj.split("-")[0];
				jQuery("#"+obj+"").animate({left:"50%"},800,function(){
 					jQuery("#"+pag+"-load #conteudo").fadeIn("slow");
					jQuery("#"+pag+"-load #conteudo").load("/lib/"+pag+".inc.php", function(){
						jQuery("#"+pag+"-load .carregando").css("display","none");
					});
					if(obj=="login-load"){
						jQuery("#txt-login").focus();
					}
				});
				return false;
			});
			jQuery(".pagina .fechar").click(function(){
				largura=jQuery(window).width();
				jQuery("#"+obj+"").animate({left:largura+1200},1000,function(){
				jQuery("#"+obj+" #conteudo").css("display","none");
					jQuery("#busca #txt").focus();
				});
			});
			//------------------------------------------TOOLTIP------------------------------------------
			jQuery("#menu .item").hover(function(){
				var largura=jQuery(window).width();
				var positem=jQuery(this).offset().left;
				var pos=(largura-positem)-100;
				var titulo=jQuery(this).attr("alt");
				jQuery(".tooltip .conteudo").css("right",pos);
				jQuery(".tooltip .conteudo p").html(titulo);
				jQuery(".tooltip .conteudo").fadeIn("fast");
			});
			jQuery("#menu .item").mouseleave(function(){
				jQuery(".tooltip .conteudo").fadeOut("fast");
			});
			//------------------------------------------BOTAO IR AO TOPO------------------------------------------
			if(jQuery(window).width()>1100){
				jQuery(window).scroll(function(){
					if(jQuery(this).scrollTop()!=0){
						jQuery("#irtopo").fadeIn();
					}
					else{
						jQuery("#irtopo").fadeOut();
					}
				});
				jQuery("#irtopo").click(function(){
					jQuery("body,html").animate({scrollTop:0},800);
				});
			}
			<?php
				if($logado==true && $pagina=="contas"){
			?>
			//------------------------------------------SUBMETER FORMULARIOS------------------------------------------
			jQuery(".deletar,.aceitar,.promover").click(function(){
				addalerta=jQuery(this).attr("title").toLowerCase();
				resposta=confirm("Deseja "+addalerta+"?");
				if(resposta){
					valor=jQuery(this).attr("href");
					form=valor.split("!")[0];
					id=valor.split("!")[1];
					window.location.href="/lib/adm.lib.php?pagina="+form+"&formid="+id;
				}
				return false;
			});
			//------------------------------------------EDITOR DE TEXTO------------------------------------------
	        jQuery("textarea.editor").cleditor({
				controls:
				"bold italic underline strikethrough subscript superscript "+
				"| color highlight removeformat | bullets numbering "+
				"| undo redo | "+
				"link unlink | cut copy paste pastetext"
			});
			<?php
				}
				if($pagina=="home"){
			?>
			//------------------------------------------HOMEPAGE------------------------------------------
			jQuery("#home #txt").focus();
			//------------------------------------------CARREGAR PLANO DE FUNDO------------------------------------------
		    jQuery(window).load(function(){
				<?php
					$sql="SELECT * FROM `configuracoes` WHERE `titulo`='plano-de-fundo'";
					$query=mysql_query($sql);
					if($query){
						$resultado=mysql_fetch_array($query);
						$valor=$resultado["valor"];
					}
				?>
				jQuery("body").css("background-image","url(/db/configuracoes/<?php echo $valor; ?>)");
			});
			<?php
				}
				if($pagina=="busca"){
			?>
			//------------------------------------------AJUSTAR FONTE------------------------------------------
			areatexto=jQuery(".bloco .texto");
			jQuery(".fmais").click(function (){
				var size=areatexto.css('font-size');
				size=size.replace('px', '');
				size=parseInt(size)+2;
				areatexto.animate({'font-size':size+'px'},1500);
				return false;
			});
			jQuery(".fmenos").click(function(){
				var size=areatexto.css('font-size');
				size=size.replace('px', '');
				size=parseInt(size)-2;
				areatexto.animate({'font-size':size+'px'},1500);
				return false;
			}); 
			<?php
				}
			?>
			//------------------------------------------SUBMETER FORMULARIOS GERAL-------------------------------------------
			jQuery("form.formquest").submit(function(){
				var opokval=false;
				jQuery('.quest input:radio[name=opok]').each(function(){
                    if(jQuery(this).is(':checked')){
						opokval=jQuery(this).val();
					}
				});
				var idval=jQuery(".quest .id").attr("value");
				if(opokval){
					jQuery.post('../lib/quest.lib.php',{questok:"ok",opok:opokval,idquest:idval},function(data){
						jQuery('.formquest').fadeOut("slow",function(){
							jQuery('.questresult').fadeIn("slow");
							jQuery('.questresult').empty().html(data);
						});
					});
				}
				else{
					alert("Por favor, escolha alguma alternativa.")
				}
				return false;
			});
			//------------------------------------------VALIDAR BUSCA------------------------------------------
			jQuery('#busca .form').submit(function(){
				return false;
			});
			jQuery("#busca .txt").keyup(function(){
				var q=jQuery(this).val();
				jQuery("#meio #busca .txt").val(q);
				if(q!=""){
					if(q.match(/^[a-z\A-Z\0-9]+$/)){
						jQuery("#home").fadeOut("fast");
						jQuery("#meio").fadeIn("fast",function(){
							jQuery("#conteudo-site").fadeOut("slow",function(){
								jQuery("#meio #busca .txt").focus();
								buscar("resbusca","../lib/buscaajax.inc.php?q="+q);
								jQuery("#principal").fadeOut("slow");
								jQuery("#resbusca").fadeIn("slow");
							});
						});
					}
				}
				else{
					jQuery("#conteudo-site").fadeIn("slow");
					jQuery("#resbusca").fadeOut("slow");
				}
				return false;
			});
		});
		//----------------------ABRIR CONEXAO COM AJAX--------------------------------
		function openAjax(){
			var Ajax;
			try {
				Ajax = new XMLHttpRequest(); // XMLHttpRequest para browsers mais populares, como: Firefox, Safari, dentre outros.
			}
			catch(ee){
				try {
					Ajax = new ActiveXObject("Msxml2.XMLHTTP"); // Para o IE da MS
				}
				catch(e){
					try {
						Ajax = new ActiveXObject("Microsoft.XMLHTTP"); // Para o IE da MS
					}
					catch(e){
						Ajax = false;
					}
				}
			}
			return Ajax;
		}
		//funcao para buscar
		function buscar(div, getURL){
			document.getElementById(div).style.display = "block";
			if(document.getElementById){ // Para os browsers complacentes com o DOM W3C.
				var exibeResultado=document.getElementById(div); // div que exibirá o resultado.
				var Ajax=openAjax(); // Inicia o Ajax.
				Ajax.open("GET",getURL,true); // fazendo a requisição
				Ajax.onreadystatechange=function(){
					if(Ajax.readyState==1){ // Quando estiver carregando, exibe: carregando...
						exibeResultado.innerHTML="<div class='carregando'></div>";
					}
					if(Ajax.readyState==4){ // Quando estiver tudo pronto.
						if(Ajax.status==200) {
							var resultado=Ajax.responseText; // Coloca o retornado pelo Ajax nessa variável
							resultado=resultado.replace(/\+/g,""); // Resolve o problema dos acentos (saiba mais aqui: http://www.plugsites.net/leandro/?p=4)
							//resultado = resultado.replace(/ã/g,"a");
							resultado=unescape(resultado); // Resolve o problema dos acentos
							exibeResultado.innerHTML=resultado;
						}
						else{
							exibeResultado.innerHTML="Ocorreu um erro! Por favor tente novamente.";
						}
					}
				}
				Ajax.send(null);
			}
		}
	</script>

</head>
<body>

    <div id="tudo">
        <?php
			if(!$precisa || $logado!=true){
		?>
		<div id="tabela-load" class="pagina sombra animado">
			<div class="topo">
				<div class="titulo">Tabela Periódica</div>
			    <div class="fechar" title="Fechar"></div>
			</div>
            <img src="/imagens/load-tb.gif" class="carregando"/>
            <div id="conteudo"></div>
        </div>
		<div id="login-load" class="pagina sombra animado">
			<div class="topo">
				<div class="titulo">Login</div>
			    <div class="fechar" title="Fechar"></div>
			</div>
            <div id="formulario">
                <div class="conteudo">
                    <div class="esquerda">
                        <img src="/imagens/login.png" class="imagem"/>
                    </div>
                    <div class="direita">
                        <form id="formentrar" method="post" action="/lib/login.lib.php">
                            <div class="linha">
                                <input type="text" id="txt-login" value="" class="txt" name="login" maxlength="150" placeholder="Usuário ou e-mail"/>
                            </div>
                            <div class="linha">
                                <input type="password" id="txt-senha" class="txt" value="" name="senha" maxlength="40" placeholder="*****"/>
                            </div>
                            <div class="linha">
                                <input type="submit" id="btn-entrar" class="btn" value="Entrar" name="entrar"/>
                                <input type="button" id="btn-entrar-cad-most" class="btn" value="Criar conta"/>
                            </div>
                        </form>
                    </div>
                    <div class="cadastrar">
                        <form id="formcadastrar" method="post" action="/lib/login.lib.php">
                            <div class="linha">
                                <input type="password" id="txt-senha-cad" class="txt" value="" name="senha" maxlength="40" placeholder="*****"/>
                            </div>
                            <div class="linha">
                                <input type="text" id="txt-login-cad" value="" class="txt" name="login" maxlength="150" placeholder="Usuário ou e-mail"/>
                            </div>
                            <div class="linha">
                                <input type="submit" id="btn-entrar-cad" class="btn" value="Cadastrar" name="cadastrar"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    	<div id="topo">
        	<div id="menu">
            	<div id="conteudo">
                    <div dir="tabela-load" class="tabela btnanimado" title="Tabela periódica">
                    	<div class="retang"></div>
                    	<div class="triang"></div>
                    </div>
                    <div class="tooltip">
                        <div class="conteudo">
                            <p>Página inicial do site</p>
                            <div class="triang"></div>
                        </div>
                    </div>
            		<a href="/contato">
	            		<li class="item<?php if($pagina=="contato"){echo " atual";} ?>" alt="Fale conosco">Contato</li>
                	</a>
            		<a href="/snakevin">
	            		<li class="item" alt="Jogo de Snake">SnaKevin</li>
                	</a>
            		<a href="/videos/">
	            		<li class="item" alt="V&iacute;deos de qu&iacute;mica">V&iacute;deos</li>
                	</a>
           		 	<a href="/lab/">
	            		<li class="item<?php if($pagina=="lab"){echo " atual";} ?>" alt="Aplicativos ChemicAll">Lab</li>
               	 	</a>
           		 	<a href="/projeto">
	            		<li class="item<?php if($pagina=="projeto"){echo " atual";} ?>" alt="Conhe&ccedil;a mais sobre n&oacute;s">Projeto</li>
               	 	</a>
           		 	<a href="/contas/">
	            		<li dir="login-load" class="item<?php if(!$logado){echo " btnanimado";} ?>" alt="Administre suas p&aacute;ginas">Contas</li>
               	 	</a>
                </div>
            </div>
	        	<div id="meio" style="display:<?php if($pagina=="home"){echo "none";} ?>">
                	<div id="conteudo">
                        <div id="logo">
							<a href="/">
								<img src="/imagens/logo-min.png" class="logo pretobranco"/>
							</a>
						</div>
		    			<div id="busca">
   		    				<form class="form" method="get" action="/lib/busca.lib.php">
    							<input type="text" name="q" id="txt" class="txt" value="" autocomplete="off"/>
       					    </form>
		   				</div>
	                </div>
                </div>
            <?php
				}
			?>
        </div>
        <div id="centro">
        	<div id="resbusca"></div>
        	<div id="conteudo-site">
			<?php
                //incluir a pagina da url
                switch($pagina){
                    case "$pagina": include("$dir/$pagina.php");
                    break;
                    default:include("$dir/home.php");
                }
            ?>
            </div>
            <div class="clear"></div>
        </div>
   	<?php
		if($pagina!="home"){
	?>
		<div id="irtopo" title="Voltar ao topo"></div>
	<?php
		}
		else if(strpos($_SERVER['HTTP_USER_AGENT'], "MSIE")){
			if($pagina=="home"){
	?>
	    <!--[if lte IE 9]>
		<a href="/405" id="alerta-link">
			<div id="alerta">
				<div class="titulo">
					<div class="texto">Caro usuário, este navegador está muito desatualizado.</div>
					<div class="link fbold">Saiba mais</div>
				</div>
			</div>
		</a>
		<![endif]-->
	<?php
			}
		}
	?>

</body>
</html>
