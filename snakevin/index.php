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
    
            //iniciar jogo
			jQuery(".menu .iniciar").click(function(){
				jQuery("#jogotelas").fadeOut("slow",function(){
					jQuery(".tela,#pontuacoes").css("display","none");
					jogoiniciar();
				});
			});
			//botao voltar
			jQuery(".opt").click(function(){
				var tela=jQuery(this).attr("dir");
				jQuery(".tela,#pontuacoes").fadeOut("fast",function(){
					jQuery(".tela."+tela).fadeIn("slow");
				});
            });
            //pontuacoes
			jQuery(".menu .pontuacoes").click(function(){
				jQuery("#pontuacoes").fadeIn("fast");
				jQuery("#pontuacoes").animate({width:"450px",marginLeft:"450px"},function(){
					jQuery("#pontuacoes .conteudo").fadeIn("slow");
				});
				return false;
            });
            //detalhe pontuacoes
			jQuery("#pontuacoes .item").click(function(){
				var id=jQuery(this).attr("id");
				jQuery("#pontuacoes .item .balao").fadeOut("fast");
				jQuery("#pontuacoes #"+id+" .balao").fadeIn("slow");
				
	        });
            //teclado virtual
			jQuery(".teclado .item").click(function(){
				d=jQuery(this).attr("dir");
			});
			jQuery(".teclado .pausa").click(function(){
				jogopausar(d);
			});
			//mostrar teclado virtual se for celular ou tablet
			<?php
				if(preg_match('/(alcatel|amoi|android|avantgo|blackberry|benq|cell|cricket|docomo|elaine|htc|iemobile|iphone|ipad|ipaq|ipod|j2me|java|midp|mini|mmp|mobi|motorola|nec-|nokia|palm|panasonic|philips|phone|playbook|sagem|sharp|sie-|silk|smartphone|sony|symbian|t-mobile|telus|up\.browser|up\.link|vodafone|wap|webos|wireless|xda|xoom|zte)/i', $_SERVER['HTTP_USER_AGENT'])){
			?>
				jQuery(".teclado").fadeIn("slow");
			<?php
				}
			?>
            jQuery(document).keydown(function(e){
                var letra=e.which;
                //evitar movimento reverso
                if(letra=='37' && d!='direita'){
                    d='esquerda';
					return false;
                }
                else if(letra=='38' && d!='baixo'){
                    d='cima';
					return false;
                }
                else if(letra=='39' && d!='esquerda'){
                    d='direita';
					return false;
                }
                else if(letra=='40' && d!='cima'){
                    d='baixo';
					return false;
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
            var tmcel=30;
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
			//cores para comida
			var cores=new Array("e51400","ecad00","b81b1b","7d3f8a","fbe04c","00709e","00a9a9","f25822","bb1d48");
			var formulas=new Array("C","H","He","S","N","Mg","Al","Li","Na","Cl","Br","F","Sn","As","Ca","K","Fr","Sr");

			//iniciar jogo
			//jogoiniciar();
			
			function mostrartela(){
				var telas=jQuery("#jogotelas").fadeIn("fast",function(){
					jQuery(".tela").css("display","none");
					jQuery(".tela.jogofim").css("display","block");
					jQuery(".jogofim .titulo .pnt").html(pnt);
					jQuery(".jogofim .hiddenpnt").val(pnt);
					jQuery(".jogofim .nome").focus();
					jQuery(".jogofim .fundo").animate({marginTop:"0"},2000);
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
					ctx.fillStyle="#f25822";
					ctx.fillRect((l/2)-125,(a/2)-50,250,100);
					ctx.strokeStyle="#4d0000";
					ctx.strokeRect((l/2)-125,(a/2)-50,250,100)
					ctx.fillStyle="#fff";
					ctx.font="25px titillium-reg,arial";
					ctx.fillText("Jogo pausado.",(l/2)-70,(a/2)+10);
                }
                else if(situacao=='par'){
                    d=dir;
                    situacao='mov';
                    loopjogo=setInterval(desenharkevin,100);
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
				//cor da comida
				pos=Math.floor(Math.random()*8);
				cor=cores[pos];
				formula=formulas[pos];
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
                ctx.fillStyle="#333";
                ctx.fillRect(0,0,l,a);
                ctx.strokeStyle="#111";
                ctx.strokeRect(0,0,l,a);
                //linha do rodape do jogo
                ctx.fillStyle="#777";
                ctx.fillRect(10,a-50,l-20,2);
    
                //desenhar vidas
                for(var i=0;i<vidas;i++){
                    ctx.beginPath();
                    aux=i*35;
                    ctx.fillStyle="#b81b1b";
					ctx.fillRect(l-aux-40,a-40,30,30)
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
                if(nx==-1 || nx==l/tmcel || ny==15 || ny==-1 || ny==a/tmcel || colisao(nx,ny,vetorkevin)){
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
                    desenharcel(c.x,c.y,'celkevin');
                }
                desenharcel(comida.x,comida.y,'comida',cor,formula);
                //desenhar pontuacao
                pnttexto=pnttextopontos+pnt;
                ctx.fillStyle=ctxpntcor;
                ctx.font=ctxpntfonte;
                ctx.fillText(pnttexto,ctxpntposx,a-ctxpntposy);
            }
            
            //desenhar as celulas da cobrinha
            function desenharcel(x,y,tipo,cor,formula){
                if(tipo=="celkevin"){
                    ctx.fillStyle="#2d89ef";
                    ctx.strokeStyle="#00709e";
					ctx.fillRect(x*tmcel,y*tmcel,tmcel,tmcel);
					ctx.strokeRect(x*tmcel,y*tmcel,tmcel,tmcel);
                }
                else{
					ctx.fillStyle="#"+cor+"";
                    ctx.strokeStyle="#"+cor+"";
					ctx.fillRect(x*tmcel,y*tmcel,tmcel,tmcel);
					ctx.strokeRect(x*tmcel,y*tmcel,tmcel,tmcel);

					ctx.fillStyle="#fff";
					ctx.font="bold 15px arial";
					ctx.fillText(formula,(x*tmcel)+8,(y*tmcel)+20);
                }
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
#topo{width:880px}
#topo .logo{float:left;margin:20px 0 0 0}
#topo .voltar{width:54px;height:50px;float:right;margin:20px 0 0 20px;cursor:pointer;background:url(imagens/irtopo.png) no-repeat 0 0}
#topo .voltar:hover{background-position:-61px 0}
.almeio{width:95%;max-width:1000px;margin:0 auto}
.altotal{width:100%;float:left}
#conteudo{margin-top:30px}
#conteudo .almeio{max-width:900px}
#jogotelas{position:relative;z-index:9999999999;width:900px;height:500px;margin:0 0 -500px 0px;float:left}
#jogotelas .tela{position:absolute;width:100%;height:100%;display:none}
#jogotelas .principal{display:block;background:#004a00 url(imagens/wall-snakevin.png) no-repeat 0 0}
#jogotelas .controles{background:#e5e5e5 url(imagens/controles.png) no-repeat 0 0}
#jogotelas .jogofim{background:#e5e5e5}
#jogotelas .jogofim .formulario{position:absolute;z-index:9999999999;top:50%;left:50%;width:300px;height:300px;margin:-150px}
#jogotelas .jogofim .formulario .titulo,#jogotelas .jogofim .formulario .parabens{width:100%;float:left;margin-bottom:10px;color:#2d89ef;font-size:25px;text-align:center}
#jogotelas .jogofim .formulario .parabens{font-size:80px}
#jogotelas .jogofim .formulario .textarea,#jogotelas .jogofim .formulario .txt{width:290px;float:left}
#jogotelas .jogofim .formulario .textarea{width:286px;height:100px}
#jogotelas .jogofim .formulario .btn{float:right;margin-top:10px}
#jogotelas .jogofim .fundo{width:100%;height:300px;margin-top:400px;float:left;background:url(imagens/fim.png) no-repeat 0 0}
#jogotelas .sobre{background:#e5e5e5 url(imagens/sobre.png) no-repeat 0 0}
#jogotelas .voltar{width:54px;height:50px;float:left;margin:10px 0 0 20px;cursor:pointer;background:url(imagens/irtopo.png) no-repeat 0 0}
#jogotelas .voltar:hover{background-position:-61px 0}
#jogotelas .menu{width:300px;margin:250px auto}
#jogotelas .menu .item{width:250px;height:40px;font-size:25px;margin:10px auto;border:2px solid #004a00;cursor:pointer;color:#fff;background:#00709e;transition:all 0.1s;-o-transition:all 0.1s;-moz-transition:all 0.1s;-webkit-transition:all 0.1s}
#jogotelas .menu .item:hover{padding:10px 20px;border-color:#fff}
#jogotelas .menu .item:active{background:#000}
#pontuacoes{position:absolute;z-index:9999;width:0px;height:100%;float:right;margin-left:900px;background:#4d0000;border-left:1px solid #8f0100;display:block}
#pontuacoes .conteudo{display:none}
#pontuacoes .titulo{float:left;font-size:30px;color:#fff;margin:10px}
#pontuacoes .lista{width:100%;max-width:600px;float:left;margin:20px 0}
#pontuacoes .lista .item{width:100%;height:40px;float:left;text-align:left;color:#fff;font-size:20px;border-bottom:1px solid #fff}
#pontuacoes .lista .item:hover{background:#000}
#pontuacoes .lista .item .img{width:30px;height:30px;float:left;margin:5px 10px;background:url(imagens/user.png) no-repeat 0 0}
#pontuacoes .lista .item .texto{float:left;margin:10px 10px}
#pontuacoes .lista .item .pontuacao{width:50px;float:right;margin:5px 10px;text-align:center;border-left:1px solid #ddd}
#pontuacoes .lista .item .balao{width:400px;padding-bottom:10px;float:left;margin-left:-430px;color:#fff;background:#000;display:none}
#pontuacoes .lista .item .balao .triang{width:0;height:0;float:right;margin:5px -10px 0 0;border-left:10px solid #000;border-top:10px solid transparent;border-bottom:10px solid transparent}
#snake{float:left}
#game-cv{background:#555}
.teclado{width:370px;height:100px;float:left;margin:-110px 0 0 300px;display:none}
.teclado .item{position:relative;z-index:999;width:60px;height:45px;margin:2px;float:left;background-image:url(imagens/teclado.png);background-repeat:no-repeat;border:2px solid #fff}
.teclado .item:hover{border-color:#2d89ef}
.teclado .item.pausa{background-position:0 0}
.teclado .item.cima{background-position:-70px 0}
.teclado .item.baixo{background-position:-70px -52px}
.teclado .item.esquerda{background-position:0 -52px}
.teclado .item.direita{background-position:-140px -52px}
.teclado .item.vazio{padding:2px;background:none;border:none}
</style>

	<div id="topo" class="almeio">
    	<div class="altotal">
            <a href="/" title="Voltar ao site">
                <img src="imagens/logo-min.png" class="logo pretobranco"/>
            </a>
            <a href="/" title="Voltar ao site">
	            <div class="voltar"></div>
            </a>
        </div>
	</div>
    <div id="conteudo" class="altotal">
        <div class="almeio">
        	<div id="jogotelas">
            	<div class="tela principal">
                	<div class="menu">
                        <a href="#inicio">
	        	        	<div class="item iniciar">Iniciar</div>
                        </a>
                        <a href="#controles">
	    	            	<div class="item controles opt" dir="controles">Controles</div>
                        </a>
                        <a href="#pontuacoes">
	                    	<div class="item pontuacoes">Pontua&ccedil;&otilde;es</div>
                        </a>
                        <a href="#sobre">
		                	<div class="item sobre opt" dir="sobre">Sobre</div>
                        </a>
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
                            <textarea class="txt textarea comentario" name="comentario" placeholder="Deixe seu coment&aacute;rio"></textarea>
                            <input type="submit" class="btn" name="addpnt" value="Salvar"/>
                        </form>
                    </div>
                	<div class="fundo"></div>
                </div>
                <div id="pontuacoes">
                	<div class="conteudo">
                    <div class="titulo">Maiores pontua&ccedil;&otilde;es</div>
                    <div class="lista">
                        <?php
                            //incluindo a conexao
                            include('lib/conexao.lib.php');
                            $conexao=new conexao();
                            $conexao->abrir();
    
                            //incluindo funcoes
                            include('lib/funcoes.lib.php');
    
                            $sql="SELECT `nome`,SUM(`pontuacao`),`comentario`,`data` FROM `snakevin` WHERE `nome`<>'' GROUP BY `nome` ORDER BY SUM(`pontuacao`) DESC LIMIT 0,10";
                            $query=mysql_query($sql);
                            if($query){
                                $linhas=mysql_num_rows($query);
                                for($i=1;$i<=$linhas;$i++){
                                    $resultado=mysql_fetch_array($query);
                                    $nome=$resultado["nome"];
                                    $pontuacao=$resultado["SUM(`pontuacao`)"];
                                    $comentario=$resultado["comentario"];
                                    $data=$resultado["data"];
                        ?>
                        <div id="<?php echo $i; ?>" class="item">
                        	<div class="balao">
                            	<div class="triang"></div>
                                <div class="texto">
                                	Dia <?php echo formata_data($data); ?><br/><br/>
                                	<?php echo $comentario; ?>
                                </div>
                            </div>
                            <div class="img"></div>
                            <div class="texto"><?php echo "$i - ".$nome ?></div>
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
            <div id="snake">
                <canvas id="game-cv" width="900px" height="500px"></canvas>
                <div class="teclado">
                	<div class="item pausa"></div>
                	<div class="item vazio"></div>
                	<div class="item vazio"></div>
                	<div class="item cima" dir="cima"></div>
                	<div class="item vazio"></div>
                	<div class="item vazio"></div>
                	<div class="item vazio"></div>
                	<div class="item esquerda" dir="esquerda"></div>
                	<div class="item baixo" dir="baixo"></div>
                	<div class="item direita" dir="direita"></div>
                </div>
            </div>
        </div>
    </div>

</body>
</html>
