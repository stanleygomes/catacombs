<div id="videos" class="altotal">
	<div id="wall">
		<?php
			$video=$url[1];
			if(empty($video)){
	            $sqlvideo="SELECT * FROM `videos` ORDER BY rand()";
			}
			else{
	            $sqlvideo="SELECT * FROM `videos` WHERE `titulo` like '$video'";
			}
            $queryvideo=mysql_query($sqlvideo);
			$resultadovideo=mysql_fetch_array($queryvideo);
			$titulo=$resultadovideo["titulo"];
			$video=$resultadovideo["video"];
        ?>
        <object>
            <param name="movie" value="http://www.youtube.com/v/<?php echo $video; ?>?version=3&feature=player_detailpage">
            <param name="wmode" value="transparent"/>
            <param name="allowFullScreen" value="true"/>
            <param name="allowScriptAccess" value="always"/>
            <embed src="http://www.youtube.com/v/<?php echo $video; ?>?version=3&feature=player_detailpage" id="video" wmode="transparent" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" id="results-video-content">
        </object>
    </div>
	<div class="almeio">
		<div class="titulovideo">
			<div class="texto"><?php echo $titulo; ?></div>
		</div>
	</div>
    <div class="lista almeio">
        <div id="lista" class="altotal">
            <?php
                $sql="SELECT * FROM `videos` ORDER BY rand() LIMIT 0,12";
                $query=mysql_query($sql);
                while($resultado=mysql_fetch_array($query)){
                    $titulo=$resultado["titulo"];
                    $titulo=$resultado["titulo"];
                    $descricao=$resultado["descricao"];
                    $pasta=$resultado["pasta"];
                    $imagem=$resultado["imagem"];
            ?>
                <a href="/videos/<?php echo limparvariavel($titulo); ?>" class="conteudo">
                    <div class="item" style="background-image:url(/db/paginas/<?php echo $pasta."/1_".$imagem; ?>)">
                        <div class="ico">
                            <div class="titulo">
                                <?php echo $titulo; ?>
                            </div>
                        </div>
                    </div>
                </a>
            <?php
                }
            ?>
        </div>
	</div>
</div>