<div class="altotal">
    <div id="consciencia">
	<?php
		$consc=$url[1];
		if(empty($consc)){
	?>
    	<div id="lista" class="almeio">
        	<div class="item altotal vermelho">
            	<div class="esquerda">
                    <span class="titulo altotal">Doa&ccedil;&atilde;o de sangue</span>
                    <span class="texto altotal">
                    	Ter sangue em estoque &eacute; fundamental para que qualquer hospital ou centro de sa&uacute;de possa funcionar.
                        Esse sangue presciosso, s&oacute; &eacute; obtido atrav&eacute;s da doa&ccedil;&atilde;o de volunt&aacute;rios, por isso se voc&ecirc; puder doe sangue...
                    </span>
                    <a href="/consciencia/doacao">
                    <div class="btn">Veja mais</div>
				  </a>
				</div>
                <div class="direita">
                	<img src="/db/consciencia/doacao/wall.jpg" class="imagem"/>
                </div>
            </div>
        </div>
    	<div id="lista" class="almeio">
        	<div class="item altotal verde">
            	<div class="esquerda">
                    <span class="titulo altotal">Consci&ecirc;ncia Ecol&oacute;gica</span>
                    <span class="texto altotal">
						&Eacute; uma das pr&aacute;ticas mais importantes na reciclagem, pois &eacute; respons&aacute;vel pela separa&ccedil;&atilde;o e
                        reaproveitamento do lixo descartado, evitando assim o desperdicio de materiais...
                    </span>
                    <a href="/consciencia/eco">
                    <div class="btn">Veja mais</div>
				  </a>
				</div>
                <div class="direita">
                	<img src="/db/consciencia/eco/wall.jpg" class="imagem"/>
                </div>
            </div>
        </div>
    	<div id="lista" class="almeio">
        	<div class="item altotal preto">
            	<div class="esquerda">
                    <span class="titulo altotal">Desperd&iacute;cio de Alimentos</span>
                    <span class="texto altotal">
                    	Segundo pesquisas do EMBRAPA 64% dos alimentos produzidos no Brasil sao jogados fora.
                        Tal número é inadimissivel, já que no país 13,9 milhoes de pessoas passam fome...
                    </span>
                    <a href="/consciencia/desperdicio">
                    <div class="btn">Veja mais</div>
				  </a>
				</div>
                <div class="direita">
                	<img src="/db/consciencia/desperdicio/wall.jpg" class="imagem"/>
                </div>
            </div>
        </div>
	<?php
		}
		else{
			include("consciencia/$consc.php");
		}
	?>
    </div>
</div>