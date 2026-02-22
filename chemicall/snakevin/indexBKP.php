<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<link rel="shortcut icon" href="/imagens/favicon.png" type="image/x-icon"/>
	<title>Snakevin - ChemicAll</title>

	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-2"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta http-equiv="content-language" content="pt-br"/>
	<meta name="author" content="Stanley Gomes"/>
	<meta name="description" content="O famoso de Snake em mais uma nova vers&atilde;o, agora em HTML5."/>
	<meta name="keywords" content="chemicall,snake,snakevin,jogo da cobrinha,snake game"/>
	<meta name="robots" content="index,follow"/>
	<meta name="reply-to" content="stanleygomess@hotmail.com"/>
	<meta name="generator" content="Notepad++"/>
    <meta name="google-site-verification" content="gtirjNda3POhhrB_PIe2zSdFakQyhKyUUsMTS1YXJc8"/>

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

	<script type="text/javascript" src="jquery-1.7.1.min.js"></script>
	<!--<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js"></script>-->

	<script type="text/javascript">
        jQuery.noConflict();
    
        jQuery(document).ready(function(){
            //KEVIN - THE SNAKE 
    
            //incializar variaveis do canvas
            var canvas=jQuery("#game-cv")[0];
            var ctx=canvas.getContext("2d");
            var ctxmenu=canvas.getContext("2d");
            var l=jQuery("#game-cv").width();
            var a=jQuery("#game-cv").height();
    
            //controles do teclado
			jQuery(".menu .iniciar").click(function(){
				jQuery("#jogotelas").fadeOut("slow",function(){
					jQuery(".tela").css("display","none");
					jQuery("#pontuacoes").fadeOut("slow");
					jogoiniciar();
				});
			});
			jQuery(".opt").click(function(){
				var tela=jQuery(this).attr("dir");
				jQuery(".tela").fadeOut("fast",function(){
					jQuery(".tela."+tela).fadeIn("slow");
				});
            });
			jQuery(".menu .pontuacoes").click(function(){
				jQuery("#pontuacoes").fadeIn("slow",function(){
	                jQuery('html,body').animate({scrollTop:jQuery('#pontuacoes').offset().top},1000);
				});
            });
            jQuery(document).keydown(function(e){
                var letra=e.which;
                //evitar movimento reverso
                if(letra=='37' && d!='direita'){
                    d='esquerda';
                }
                else if(letra=='38' && d!='baixo'){
                    d='cima';
                }
                else if(letra=='39' && d!='esquerda'){
                    d='direita';
                }
                else if(letra=='40' && d!='cima'){
                    d='baixo';
                }
                else if(letra=='80'){
                    jogopausar(d);
                }
            });
    
            //imagem de fundo do jogo
            var wall=new Image();
            //wall.src='http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';
            ctx.drawImage(wall,0,0);
    
            //variaveis
            //tamanho da celula da cobrinha
            var tmcel=20;
            //direcao padrao
            var d;
            //comida
            var comida;
            //pontuacao
            var pnt=0;
            //vidas
            var vidas=3;
            //situacao - mov=movendo e par=parado
            var situacao='mov';
            //formatar pontuacao
            var pnt=0;
            var pnttexto=0;
            var pnttextopontos="Pontos: ";
            var ctxpntposx=20;
            var ctxpntposy=15;
            var ctxpntcor="#fff";
            var ctxpntfonte="bold 30px arial";
            //formatar nivel
            var ctxfimposx=200;
            var ctxfimposy=15;
            var ctxfimcor="#fff";
            var ctxfimfonte="bold 30px arial";
            var fimtextopontos="Nivel: ";
            //variaveis para movimentar pela tela
            var nx=0;
            var ny=0;
            //linha do rodape
            var linha;
            //estilizar canvas
            //vetor com as celulas da cobrinha
            var vetorkevin;
			
			//iniciar jogo
			//jogoiniciar();
			
			function mostrartela(){
				var telas=jQuery("#jogotelas").fadeIn("fast",function(){
					jQuery(".tela").css("display","none");
					jQuery(".tela.jogofim").css("display","block");
					jQuery(".jogofim .titulo .pnt").html(pnt);
					jQuery(".jogofim .hiddenpnt").val(pnt);
					jQuery(".jogofim .nome").focus();
				});
			}
            //fim de jogo
            function jogofim(){
                clearInterval(loopjogo);
    
				mostrartela();
    
                return false;
            }
    
            //pausar jogo
            function jogopausar(dir){
                if(situacao=='mov'){
                    situacao='par';
                    clearInterval(loopjogo);
                }
                else if(situacao=='par'){
                    d=dir;
                    situacao='mov';
                    loopjogo=setInterval(desenharkevin,60);
                }
            }
    
            //iniciar jogo
            function jogoiniciar(tirarvida){
                //ainda ha vidas
                if(vidas>0){
                    if(tirarvida=='1'){
                        //tirar uma vida
                        vidas--;
                        tirarvida='0';
                    }
                    d='direita';
                    criarkevin();
                    criarcomida();
                    //mover a cobrinha com um timer de 60ms
                    if(typeof loopjogo!='undefined'){
                        clearInterval(loopjogo);
                    }
                    loopjogo=setInterval(desenharkevin,60);
                }
                else{
                    jogofim();
                }
            }
    
            //criar as comidinhas
            function criarcomida()
            {
                comida={
                    x:Math.round(Math.random()*(l-tmcel)/tmcel),
                    y:Math.round(Math.random()*(a-80)/tmcel),
                };
            }
            //inicializar funcao
            criarkevin();
            function criarkevin(){
                //qtd de celulas
                var qtdcel=5;
                vetorkevin=[];
                for(var i=qtdcel-1;i>=0;i--){
                    //inicializar a cobrinha desde o topo e a esquerda
                    vetorkevin.push({x:i,y:0});
                }
            }
            
            //desenhar a cobrinha
            function desenharkevin(){
                //mudar o fundo do canvas a cada frame
                //estilizar canvas
                ctx.fillStyle="#555";
                ctx.fillRect(0,0,l,a);
                ctx.strokeStyle="#111";
                ctx.strokeRect(0,0,l,a);
                //linha do rodape do jogo
                ctx.fillStyle="#333";
                ctx.fillRect(10,a-50,l-20,2);
    
                //desenhar vidas
                for(var i=0;i<vidas;i++){
                    ctx.beginPath();
                    aux=i*35;
                    ctx.arc(l-aux-40,a-25,15,0,2*Math.PI);
                    ctx.fillStyle="#e51400";
                    ctx.fill();
                }
    
                //mover a cobrinha
                //logica para mover a cobrinha de acordo com a primeira celula e as demais a seguem
                var nx=vetorkevin[0].x;
                var ny=vetorkevin[0].y;
    
                //calcular a direcao do movimento
                if(d=='direita'){
                    nx++;
                }
                else if(d=='esquerda'){
                    nx--;
                }
                else if(d=='cima'){
                    ny--;
                }
                else if(d=='baixo'){
                    ny++;
                }
                //verificar se a cobrinha saiu da area
                if(nx==-1 || nx==l/tmcel || ny==22 || ny==-1 || ny==a/tmcel || colisao(nx,ny,vetorkevin)){
                    //reiniciar jogo
                    jogoiniciar('1');
                    return;
                }
                
                //verificar se houve encontro entre a cobrinha e a comida
                if(nx==comida.x && ny==comida.y){
                    var cauda={x:nx,y:ny};
                    //acrescer pontuacao
                    pnt+=10;
                    //criar nova comida
                    criarcomida();
                }
                else{
                    var cauda=vetorkevin.pop();
                    cauda.x=nx;
                    cauda.y=ny;
                }
                
                //mostrar a ultima celula
                vetorkevin.unshift(cauda);
    
                for(var i=0;i<vetorkevin.length;i++){
                    var c=vetorkevin[i];
                    //desenhar 10 quadradinhos
                    desenharcel(c.x,c.y,'celkevin')
                }
                desenharcel(comida.x,comida.y,'comida')
                //desenhar pontuacao
                pnttexto=pnttextopontos+pnt;
                ctx.fillStyle=ctxpntcor;
                ctx.font=ctxpntfonte;
                ctx.fillText(pnttexto,ctxpntposx,a-ctxpntposy);
            }
            
            //desenhar as celulas da cobrinha
            function desenharcel(x,y,tipo){
                if(tipo=="celkevin"){
                    ctx.fillStyle="#2d89ef";
                    ctx.strokeStyle="#00709e";
                }
                else{
                    ctx.fillStyle="#f25822";
                    ctx.strokeStyle="#ff6020";
                }
                ctx.fillRect(x*tmcel,y*tmcel,tmcel,tmcel);
                ctx.strokeRect(x*tmcel,y*tmcel,tmcel,tmcel);
            }
            
            //verificar colisao
            function colisao(x,y,array){
                for(var i=0;i<array.length;i++){
                    if(array[i].x==x && array[i].y==y){
                        return true;
                    }
                }
                return false;
            }
        });
    </script>

</head>
<body>

<style type="text/css">
/*--------------------------RESETAR CSS--------------------------*/
html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video,span{border:0;font-size:100%;font:inherit;vertical-align:baseline;margin:0;padding:0}
article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}
body{line-height:1}
ol,ul,li{list-style:none}
blockquote,q{quotes:none}
blockquote:before,blockquote:after,q:before,q:after{content:none}
table{border-collapse:collapse;border-spacing:0}
html,body{height:100%}
::selection{background:transparent}
@font-face{font-family:'titillium-reg';src:url('/link/fonte/titillium-reg.eot');src:url('/link/fonte/titillium-reg.ttf') format('truetype');font-weight:normal;font-style:normal}
@font-face{font-family:'titillium-bold';src:url('/link/fonte/titillium-bold.eot');src:url('/link/fonte/titillium-bold.ttf') format('truetype');font-weight:normal;font-style:normal}
:focus{outline:0}
strong{font-weight:700}
a:link,a:visited{text-decoration:none;color:#2d89ef}
a:hover{text-decoration:none;color:#333}
img{border:none}
input[type=text],input[type=password],input[type=submit],input[type=button],textarea,select{-webkit-appearance:none;-webkit-border-radius:0}
select{background:#fff url(imagens/select.png) no-repeat 98% center}
.btn,.textarea,.txt{-webkit-appearance:none;-webkit-border-radius:0}
.clear{clear:both}
.txt{min-height:30px;font-size:14px;color:#555;padding-left:5px;border:2px solid #ddd}
.txt:hover{background-color:#fcfcfc;border-color:#aaa}
.txt:focus{background-color:#fcfcfc;border-color:#2d89ef}
textarea{font-size:16px;resize:none;background:#fff url(imagens/quotes.png) no-repeat 10px 10px;padding:5px}
.btn{height:35px;text-align:center;font-size:18px;color:#fff;line-height:25px;background-color:#2d89ef;border:2px solid #2d89ef;padding:0 10px}
.btn:hover{background-color:#0072c6;border:2px solid #0072c6}
.btn:active{background-color:#333;border:2px solid #333}
.pretobranco:hover{filter:grayscale(100%);-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%)}

body{font:75%/1.4 "titillium-reg",arial,sans-serif;text-align:center;margin:0;padding:0;background-color:#f2f2f2;background-repeat:no-repeat;background-position:center center;background-size:100% 100%}

/*------BASE---------*/
.almeio{width:95%;max-width:1000px;margin:0 auto}
.altotal{width:100%;float:left}
#topo .logo{float:left;margin:30px}
#conteudo{margin-top:10px}
#jogotelas{position:relative;z-index:9999999999;width:900px;height:500px;margin:0 0 -500px 50px;float:left}
#jogotelas .tela{position:absolute;width:100%;height:100%;display:none}
#jogotelas .principal{display:block;background:#004a00 url(imagens/wall-snakevin.png) no-repeat 0 0}
#jogotelas .controles{background:#e5e5e5 url(imagens/controles.png) no-repeat 0 0}
#jogotelas .jogofim{background:#e5e5e5}
#jogotelas .jogofim .formulario{width:300px;margin:70px auto 0 auto}
#jogotelas .jogofim .formulario .titulo,#jogotelas .jogofim .formulario .parabens{width:100%;float:left;margin-bottom:10px;color:#2d89ef;font-size:25px;text-align:center}
#jogotelas .jogofim .formulario .parabens{font-size:80px}
#jogotelas .jogofim .formulario .textarea,#jogotelas .jogofim .formulario .txt{width:290px;float:left}
#jogotelas .jogofim .formulario .textarea{width:286px;height:100px}
#jogotelas .jogofim .formulario .btn{float:right;margin-top:10px}
#jogotelas .sobre{background:#e5e5e5 url(imagens/sobre.png) no-repeat 0 0}
#jogotelas .voltar{width:54px;height:50px;float:left;margin:10px 0 0 20px;cursor:pointer;background:url(imagens/irtopo.png) no-repeat 0 0}
#jogotelas .voltar:hover{background-position:-61px 0}
#jogotelas .menu{width:300px;float:right;margin-top:250px}
#jogotelas .menu .item{height:40px;float:right;font-size:25px;margin-top:10px;cursor:pointer;color:#fff;background:#00709e;transition:all 0.5s;-o-transition:all 0.5s;-moz-transition:all 0.5s;-webkit-transition:all 0.5s}
#jogotelas .menu .item:hover{background:#2d89ef}
#jogotelas .menu .item:active{background:#000}
#jogotelas .menu .item.iniciar{width:300px}
#jogotelas .menu .item.controles{width:250px}
#jogotelas .menu .item.pontuacoes{width:200px}
#jogotelas .menu .item.sobre{width:150px}
#game-cv{background:#555}
#pontuacoes{width:100%;float:left;margin:50px 0;background:#4d0000;display:none}
#pontuacoes .titulo{float:left;font-size:50px;color:#fff;margin:10px 30px}
#pontuacoes .lista{width:100%;max-width:600px;float:left;margin:20px 0}
#pontuacoes .lista .item{width:100%;height:40px;float:left;margin-left:10px;padding-bottom:3px;text-align:left;color:#fff;font-size:20px;border-bottom:1px solid #fff}
#pontuacoes .lista .item:hover{border-color:#f25822}
#pontuacoes .lista .item:hover .texto{color:#f25822}
#pontuacoes .lista .item:hover .pontuacao{color:#f25822;border-color:#f25822}
#pontuacoes .lista .item .img{width:30px;height:30px;float:left;margin:5px;background:url(imagens/user.png) no-repeat 0 0}
#pontuacoes .lista .item .texto{float:left;margin:5px 10px}
#pontuacoes .lista .item .pontuacao{width:50px;float:right;margin:5px 10px;text-align:center;border-left:1px solid #ddd}
</style>

	<div id="topo" class="altotal">
    	<div class="almeio">
        	<a href="/">
	        	<img src="imagens/logo-min.png" class="logo pretobranco"/>
            </a>
        </div>
	</div>
    <div id="conteudo" class="altotal">
        <div class="almeio">
        	<div id="jogotelas">
            	<div class="tela principal">
                	<div class="menu">
                    	<div class="item iniciar">Iniciar</div>
                    	<div class="item controles opt" dir="controles">Controles</div>
                    	<div class="item pontuacoes">Pontua&ccedil;&otilde;es</div>
                    	<div class="item sobre opt" dir="sobre">Sobre</div>
                    </div>
                </div>
                <div class="tela controles">
                	<div class="voltar opt" title="Voltar a tela inicial" dir="principal"></div>
                </div>
                <div class="tela sobre">
                	<div class="voltar opt" title="Voltar a tela inicial" dir="principal"></div>
                </div>
                <div class="tela jogofim">
                	<div class="voltar opt" title="Voltar a tela inicial" dir="principal"></div>
                    <div class="formulario">
                    	<span class="parabens">Parab&eacute;ns</span>
                    	<span class="titulo">Voc&ecirc; obteve <span class="pnt">x</span> pontos.</span>
                    	<form class="form" method="post" action="lib/snakevin.lib.php">
                        	<input type="hidden" class="hiddenpnt pnt" value="" name="pnt"/>
                        	<input type="text" class="txt nome" placeholder="Seu nome" name="nome"/>
                            <textarea class="txt textarea comentario" name="comentario" placeholder="Deixe coment&aacute;rio"></textarea>
                            <input type="submit" class="btn" name="addpnt"/>
                        </form>
                    </div>
                </div>
            </div>
            <div id="snake">
                <canvas id="game-cv" width="900px" height="500px"></canvas>
            </div>
            <div id="pontuacoes">
            	<div class="titulo">Maiores pontua&ccedil;&otilde;es</div>
                <div class="lista">
                	<?php
						//incluindo a conexao
						include('lib/conexao.lib.php');
						$conexao=new conexao();
						$conexao->abrir();

						//incluindo funcoes
						include('lib/funcoes.lib.php');

						$sql="SELECT * FROM `snakevin` WHERE `nome`<>'' ORDER BY `pontuacao` DESC LIMIT 0,10";
						$query=mysql_query($sql);
						if($query){
							$linhas=mysql_num_rows($query);
							for($i=0;$i<$linhas;$i++){
								$resultado=mysql_fetch_array($query);
								$nome=$resultado["nome"];
								$pontuacao=$resultado["pontuacao"];
								$data=$resultado["data"];
					?>
                    <div class="item">
                        <div class="img"></div>
                        <div class="texto"><?php echo "$i - ".$nome." - ".formata_data($data); ?></div>
                        <div class="pontuacao"><?php echo $pontuacao; ?></div>
                    </div>
                    <?php
							}
						}
					?>
                </div>
            </div>
        </div>
    </div>

</body>
</html>