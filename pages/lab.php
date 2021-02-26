<div id="lab" class="altotal">
	<div class="altotal">
    <?php
		$app=$url[1];
		if(empty($app)){
	?>
        <div id="wall"></div>
        <a href="/lab/">
            <div id="titulo">Lab</div>
        </a>
    	<div class="almeio">
        <div id="lista">
        <?php
            $sql="SELECT * FROM `lab` ORDER BY `id`;";
            $query=mysql_query($sql);
            while($resultado=mysql_fetch_array($query)){
                $titulo=$resultado["titulo"];
                $imagem=$resultado["imagem"];
                $cor=$resultado["cor"];
				$tituloformat=$resultado["tituloformat"];
        ?>
            <a href="/lab/<?php echo $tituloformat; ?>" class="conteudo">
                <div class="item" style="background:#<?php echo $cor; ?> url(/db/lab/<?php echo $tituloformat; ?>/fundo.jpg)">
					<div class="titulo">
                        <?php echo $titulo; ?>
                    </div>
                </div>
            </a>
        <?php
            }
        ?>
        	</div>
        </div>
        <?php
		}
		else{
			$sql="SELECT * FROM `lab` WHERE `tituloformat`='$app'";
			$query=mysql_query($sql);
			$verificador=mysql_num_rows($query);
			if($verificador>0){
				$resultado=mysql_fetch_array($query);
				$titulo=$resultado["titulo"];
				$descricao=$resultado["descricao"];
				$desenvolvedor=$resultado["desenvolvedor"];
		?>
            <div class="altotal detalhes">
            	<div class="almeio">
                    <div class="desc">
                        <a href="" onclick="javascript:history.go(-1);return false" title="Voltar &agrave; pagina de aplicativos">
                            <div class="voltar"></div>
                        </a>
                    	<div class="linha">
                        	<span class="titulo">
    	                    	<span class="tit"><?php echo $titulo." - "; ?></span> Desenvolvido por <span class="aut"><?php echo $desenvolvedor; ?></span>
                            </span>
                        </div>
                        <div class="linha">
	                        <span class="texto"><p><?php echo $descricao; ?></p></span>
                        </div>
                    </div>
                    <?php
                        include("lab/$app.php");
                    ?>
                </div>
        	</div>
        <?php
			}
			else{
		?>
            <div class="almeio">
                <div id="erro" class="pagina fthin">
                    <div class="topo">
                        <span class="titulo">Erro 404</span>
                    </div>
                    <div class="conteudo">
                        <div class="esquerda">
                            <img src="/imagens/erro.png" class="imagem"/>
                        </div>
                        <div class="direita">
                            <span class="info">O aplicativo procurado n&atilde;o foi encontrado.</span>
                        </div>
                    </div>
                </div>
            </div>
		<?php
			}
		}
		?>
		<div class="clear"></div>
	</div>
</div>
