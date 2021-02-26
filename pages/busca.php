<div class="almeio">
	<?php
		$q=$url[1];
		if(!empty($q)){
			$sql="SELECT * FROM `paginas` WHERE `tituloprincipal` LIKE '$q'";
			$query=mysql_query($sql);
			$linhas=mysql_num_rows($query);

			if($linhas==0){
	?>
			<div id="erro" class="pagina">
				<div class="topo">
					<span class="titulo">Resultados para "<?php echo $q; ?>"</span>
				</div>
				<div class="conteudo">
					<div class="esquerda">
						<img src="/imagens/erro.png" class="imagem"/>
					</div>
					<div class="direita">
						<span class="info">A sua pesquisa n&atilde;o retornou resultados, por favor tente novamente.</span>
					</div>
				</div>
			</div>
	<?php
			}
			else{
	?>
		<div id="resultados">
	<?php
			if($linhas==1){
				for($i=1;$i<=$linhas;$i++){
					$resultado=mysql_fetch_array($query);
				}
				$id=$resultado["id"];
				$tituloprincipal=$resultado["tituloprincipal"];
				$titulo1=$resultado["titulo1"];
				$titulo2=$resultado["titulo2"];
				$titulo3=$resultado["titulo3"];
				$titulo4=$resultado["titulo4"];
				$texto1=$resultado["texto1"];
				$texto2=$resultado["texto2"];
				$texto3=$resultado["texto3"];
				$texto4=$resultado["texto4"];
				$curiosidades=$resultado["curiosidades"];
				$caracteristicas=$resultado["caracteristicas"];
				$video=$resultado["video"];
				$referencias=$resultado["referencias"];
				$cor=$resultado["cor"];
				$pasta=$resultado["pasta"];
				$imagem=$resultado["imagem"];
				$data_inclusao=$resultado["data_inclusao"];
				$data_alteracao=$resultado["data_alteracao"];
				$idusuario=$resultado["idusuario"];
				$queryusuario=mysql_query("SELECT * FROM `paginas` a,`usuarios` b WHERE a.`idusuario`='$idusuario' AND b.`id`=a.`idusuario`");
				$vetusuario=mysql_fetch_array($queryusuario);
				$nomeusuario=$vetusuario["nomecompleto"];
	?>
		<div id="esquerda">
			<div id="img">
				<img src="/db/paginas/<?php echo "$pasta/1_$imagem"; ?>" class="img imgprincipal" alt="<?php echo $titulo; ?>"/>
			</div>
			<div class="titulo aldireita flight">Caracter&iacute;sticas Gerais</div>
			<div class="bloco aldireita">
            	<div class="caracteristicas">
					<?php echo $caracteristicas; ?>
                </div>
			</div>
            <?php
				if(!empty($curiosidades)){
			?>
			<div class="titulo aldireita flight">Curiosidades</div>
			<div class="bloco aldireita">
            	<div class="curiosidades">
					<?php echo $curiosidades; ?>
                </div>
			</div>
            <?php
				}
			?>
			<div class="titulo aldireita">Social</div>
			<div class="bloco aldireita social">
				<?php
					$servidor=$_SERVER['SERVER_NAME'];
					$endereco=$_SERVER['REQUEST_URI'];
					$enderecopagina="http://".$servidor.$endereco;
				?>
				<div class="item">
	                <div id="fb-root"></div>
					<script>(function(d, s, id){var js, fjs = d.getElementsByTagName(s)[0];if(d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = "//connect.facebook.net/pt_BR/all.js#xfbml=1";fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));</script>
                    <div class="fb-like" data-href="https://www.facebook.com/ChemicAllEducation" data-send="false" data-layout="button_count" data-width="200" data-show-faces="false" data-font="arial"></div>
				</div>
				<div class="item">
					<script type="text/javascript">window.___gcfg = {lang: 'pt-BR'};(function(){var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;po.src = 'https://apis.google.com/js/plusone.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);})();</script>
					<g:plusone></g:plusone>
				</div>
				<div class="item">
					<a href="http://www.facebook.com/share.php?v=4&src=bm&u=<?php echo $enderecopagina; ?>" target="_blank">
						<img src="/imagens/f-compartilhar.png" class="fcompartilhar"/>
					</a>
				</div>
			</div>
			<?php
                $sqlquest="SELECT * FROM `quest` WHERE `status`='1' ORDER BY rand()";
                $queryquest=mysql_query($sqlquest);
				$linhasquest=mysql_num_rows($queryquest);
				if($linhasquest>0){
            ?>
          <div class="titulo aldireita quest"><div class="ico"></div>Quest</div>
			<div class="bloco quest">
				<?php
					$resultadoquest=mysql_fetch_array($queryquest);
					$pergunta=$resultadoquest["pergunta"];
					$idquest=$resultadoquest["id"];
					$op1=$resultadoquest["op1"];
					$op2=$resultadoquest["op2"];
					$op3=$resultadoquest["op3"];
					$op4=$resultadoquest["op4"];
				?>
                <form class="formquest" method="post" action="">
				<div class="item"><?php echo $pergunta; ?></div>
                <input type="hidden" class="id" name="idquest" value="<?php echo $idquest; ?>"/>
                <?php if(!empty($op1)){ ?>
					<div class="item"><input type="radio" name="opok" value="op1"/> <?php echo $op1; ?></div>
                <?php } ?>
                <?php if(!empty($op2)){ ?>
					<div class="item"><input type="radio" name="opok" value="op2"/> <?php echo $op2; ?></div>
                <?php } ?>
                <?php if(!empty($op3)){ ?>
					<div class="item"><input type="radio" name="opok" value="op3"/> <?php echo $op3; ?></div>
                <?php } ?>
                <?php if(!empty($op4)){ ?>
					<div class="item"><input type="radio" name="opok" value="op4"/> <?php echo $op4; ?></div>
                <?php } ?>
					<div class="item"><input type="submit" name="questok" class="btn" value="Ok"/></div>
                </form>
                <div class="bloco questresult">
                	<span class="val"></span>
                </div>
			</div>
            <?php
				}
			?>
		</div>
		<div id="direita">
			<div class="bloco blocotitulo">
				<div id="titulo" class="aldireita flight" style="background:#<?php echo $cor; ?>"><h1><?php echo $tituloprincipal; ?></h1></div>
			</div>
			<div class="bloco ferramentas">
            	<a href="" title="Diminuir fonte">
 		           	<div class="item fmais">A+</div>
                </a>
            	<a href="" title="Aumentar fonte">
 		           	<div class="item fmenos">A-</div>
        	    </a>
 			</div>
			<div class="bloco">
				<div class="titulo alesquerda flight"><h2><?php echo $titulo1; ?></h2></div>
				<div class="texto textototal alesquerda"><?php echo $texto1; ?></div>
			</div>
			<div class="bloco">
				<div class="titulo alesquerda flight"><h2><?php echo $titulo2; ?></h2></div>
				<div class="texto alesquerda"><?php echo $texto2; ?></div>
				<div class="areaimagem aldireita">
					<img src="/db/paginas/<?php echo "$pasta/2_$imagem"; ?>" class="img aldireita" alt="<?php echo $titulo; ?>"/>
				</div>
			</div>
			<div class="bloco">
				<div class="titulo alesquerda flight"><h2><?php echo $titulo3; ?></h2></div>
				<div class="areaimagem alesquerda">
					<img src="/db/paginas/<?php echo "$pasta/3_$imagem" ?>" class="img aldireita" alt="<?php echo $titulo; ?>"/>
				</div>
				<div class="texto alesquerda"><?php echo $texto3; ?></div>
			</div>
			<div class="bloco">
				<div class="titulo alesquerda flight"><h2>V&iacute;deo</h2></div>
				<object>
					<param name="movie" value="http://www.youtube.com/v/<?php echo $video; ?>?version=3&feature=player_detailpage">
					<param name="wmode" value="transparent"/>
					<param name="allowFullScreen" value="true"/>
					<param name="allowScriptAccess" value="always"/>
					<embed src="http://www.youtube.com/v/<?php echo $video; ?>?version=3&feature=player_detailpage" id="video" wmode="transparent" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" id="results-video-content">
				</object>
			</div>
			<div class="bloco">
				<div class="titulo alesquerda"><h2><?php echo $titulo4; ?></h2></div>
				<div class="texto alesquerda"><?php echo $texto4; ?></div>
			</div>
			<div class="bloco">
				<div class="titulo alesquerda"><h2>Refer&ecirc;ncias</h2></div>
				<div class="texto alesquerda fontes">
					<?php
						$vetreferencias=explode(";",$referencias);
						$qtdreferencias=count($vetreferencias);
						for($i=0;$i<$qtdreferencias;$i++){
							$referencias=$vetreferencias[$i];
					?>
					<a href="<?php echo $referencias; ?>" target="_blank">
						<li class="link"><?php echo $referencias; ?></li>
					</a>
					<?php
						}
					?>
				</div>
			</div>
			<div class="bloco">
				<div class="titulo alesquerda"><h2>P&aacute;ginas relacionadas</h2></div>
					<div class="listarel">
                    	<?php
							$sqlrel="SELECT * FROM `paginas` ORDER BY rand() LIMIT 0,3";
							$queryrel=mysql_query($sqlrel);
							while($resultadorel=mysql_fetch_array($queryrel)){
								$pastarel=$resultadorel["pasta"];
								$titulorel=$resultadorel["tituloprincipal"];
								$imagemrel=$resultadorel["imagem"];
						?>
                        	<a href="/busca/<?php echo limparvariavel($titulorel); ?>">
                                <div class="item">
                                    <img src="/db/paginas/<?php echo "$pastarel/1_$imagemrel"; ?>" class="imagemrel"/>
                                    <div class="titulorel"><?php echo $titulorel; ?></div>
                                </div>
                            </a>
                        <?php
							}
						?>
                    </div>
			</div>
			<div class="bloco blocoautor">
				<div class="autor">Esta p&aacute;gina foi alterada pela &uacute;tima vez em <strong><?php echo formata_data($data_inclusao); ?></strong>.</div>
			</div>
		</div>
		<?php
			}
			else if($linhas>1){
		?>
			<div id="variosresultados">
				<span id="titulo">Resultados para "<?php echo $q; ?>"</span>
				<div id="lista">
				<?php
					$sql="SELECT * FROM `paginas` WHERE `tituloprincipal` LIKE '%$q%'";
					$query=mysql_query($sql);
					while($resultado=mysql_fetch_array($query)){
						$titulo=$resultado["tituloprincipal"];
						$texto1=$resultado["texto1"];
						$cor=$resultado["cor"];
				?>
					<a href="/busca/<?php echo limparvariavel($titulo); ?>" class="conteudo">
						<div class="item" style="background:#<?php echo $cor; ?>">
							<div class="titulo">
								<?php echo $titulo; ?>
							</div>
							<div class="texto">
								<?php echo limitartexto("$texto1","130"); ?>
							</div>
						</div>
					</a>
				<?php
					}
				?>
			</div>
		<?php
			}
		?>
		</div>
		<?php
			}
		}
		?>
		<div class="clear"></div>
	</div>
</div>