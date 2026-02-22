<?php
	//-------------------------------------------ADICIONAR PAGINA----------------------------------------------
	if($urlpag=="add"){
?>
<form method="post" action="/lib/adm.lib.php" enctype="multipart/form-data">
    <div class="linha">
        <div class="titulopg">Adicionar P&aacute;gina</div>
    </div>
    <input type="hidden" name="idusuario" value="<?php echo $usuarioid;?>"/>
    <div class="linha">
        <div class="nome">Nome da p&aacute;gina</div>
        <input type="text" class="txt txt-m" name="tituloprincipal"/>
    </div>
    <div class="alerta alertatotal">
    	<p>Lado esquerdo</p>
    </div>
    <div class="divisor"></div>
    <div class="linha">
        <div class="nome">Imagem principal</div>
        <div class="uploadarea">
            <input type="button" value="Escolher imagem" name="btnuploadaux1" class="btnuploadaux"/>
            <input type="file" name="btnupload1" class="btnupload" onchange="this.form.btnuploadaux1.value=this.value;"/>
        </div>
    </div>
    <div class="divisor"></div>
    <div class="linha">
        <div class="nome">Caracter&iacute;sticas (Preferencialmente em lista)</div>
        <textarea class="txt textarea editor" name="caracteristicas"></textarea>
    </div>
    <div class="linha">
        <div class="nome">Curiosidades (Texto curto)</div>
        <textarea class="txt textarea editor" name="curiosidades"></textarea>
    </div>
    <div class="alerta alertatotal">
    	<p>Lado direito</p>
    </div>
    <div class="linha">
        <div class="nome">Primeiro t&iacute;tulo</div>
        <input type="text" class="txt txt-m" name="titulo1"/>
    </div>
    <div class="linha">
        <div class="nome">Primeiro texto</div>
        <textarea class="txt textarea editor" name="texto1"></textarea>
    </div>
    <div class="linha">
        <div class="nome">Segundo t&iacute;tulo</div>
        <input type="text" class="txt txt-m" name="titulo2"/>
    </div>
    <div class="linha">
        <div class="nome">Segundo texto</div>
        <textarea class="txt textarea editor" name="texto2"></textarea>
    </div>
    <div class="divisor"></div>
    <div class="linha">
        <div class="nome">Segunda imagem</div>
        <div class="uploadarea">
            <input type="button" value="Escolher imagem" name="btnuploadaux2" class="btnuploadaux"/>
            <input type="file" name="btnupload2" class="btnupload" onchange="this.form.btnuploadaux2.value=this.value;"/>
        </div>
    </div>
    <div class="divisor"></div>
    <div class="linha">
        <div class="nome">Terceiro t&iacute;tulo</div>
        <input type="text" class="txt txt-m" name="titulo3"/>
    </div>
    <div class="linha">
        <div class="nome">Terceiro texto</div>
        <textarea class="txt textarea editor" name="texto3"></textarea>
    </div>
    <div class="divisor"></div>
    <div class="linha">
        <div class="nome">Terceira imagem</div>
        <div class="uploadarea">
            <input type="button" value="Escolher imagem" name="btnuploadaux3" class="btnuploadaux"/>
            <input type="file" name="btnupload3" class="btnupload" onchange="this.form.btnuploadaux3.value=this.value;"/>
        </div>
    </div>
    <div class="divisor"></div>
    <div class="linha">
        <div class="nome">Quarto t&iacute;tulo</div>
        <input type="text" class="txt txt-m" name="titulo4"/>
    </div>
    <div class="linha">
        <div class="nome">Quarto texto</div>
        <textarea class="txt textarea editor" name="texto4"></textarea>
    </div>
    <div class="linha">
        <div class="nome">Refer&ecirc;ncias (separá-las por ;)</div>
        <textarea class="txt textarea txt-m" name="referencias"></textarea>
    </div>
    <div class="linha">
        <div class="nome">V&iacute;deo (URL Youtube)</div>
        <input type="text" class="txt txt-m" name="video"/>
    </div>
    <div class="linha">
        <div class="nome">Categoria</div>
    	<select name="categoria" class="txt txt-m">
        	<?php
				$sql="SELECT * FROM `categorias`";
				$query=mysql_query($sql);
				$linhas=mysql_num_rows($query);
				while($resultadocat=mysql_fetch_array($query)){
					$id=$resultadocat["id"];
					$titulo=$resultadocat["titulo"];
			?>
					<option value="<?php echo $id; ?>"><?php echo $titulo; ?></option>
            <?php
				}
			?>
        </select>
    </div>
    <div class="linha">
        <input type="submit" class="btn" name="paginaadd" value="Adicionar Página"/>
    </div>
</form>
<?php
	}
	//-------------------------------------------EDITAR PAGINA----------------------------------------------
	if($urlpag=="editar"){
?>
<?php
	$formid=$urladmin[2];
	if(!empty($formid)){
		$sql="SELECT * FROM `paginas` WHERE `id`='$formid'";
		$query=mysql_query($sql);
		$resultado=mysql_fetch_array($query);

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
		$area=$resultado["area"];
		$referencias=$resultado["referencias"];
	}
	else{
		echo "Por favor, Escolha uma página.";
		exit;
	}
?>
<form method="post" action="/lib/adm.lib.php">
    <div class="linha">
        <div class="titulopg">Editar p&aacute;gina</div>
    </div>
    <input type="hidden" name="id" value="<?php echo $id;?>"/>
    <input type="hidden" name="idusuario" value="<?php echo $usuarioid;?>"/>
    <div class="linha">
        <div class="nome">Nome da p&aacute;gina</div>
        <input type="text" class="txt txt-m" name="tituloprincipal" value="<?php echo $tituloprincipal;?>"/>
    </div>
    <div class="alerta alertatotal">
    	<p>Lado esquerdo</p>
    </div>
    <div class="divisor"></div>
    <div class="linha">
        <div class="nome">Imagem principal</div>
        <div class="uploadarea">
            <input type="button" value="Escolher imagem" name="btnuploadaux1" class="btnuploadaux"/>
            <input type="file" name="btnupload1" class="btnupload" onchange="this.form.btnuploadaux1.value=this.value;"/>
        </div>
    </div>
    <div class="divisor"></div>
    <div class="linha">
        <div class="nome">Caracter&iacute;sticas (Preferencialmente em lista)</div>
        <textarea class="txt textarea editor" name="caracteristicas"><?php echo $caracteristicas;?></textarea>
    </div>
    <div class="linha">
        <div class="nome">Curiosidades (Texto curto)</div>
        <textarea class="txt textarea editor" name="curiosidades"><?php echo $curiosidades;?></textarea>
    </div>
    <div class="alerta alertatotal">
    	<p>Lado direito</p>
    </div>
    <div class="linha">
        <div class="nome">Primeiro t&iacute;tulo</div>
        <input type="text" class="txt txt-m" name="titulo1" value="<?php echo $titulo1;?>"/>
    </div>
    <div class="linha">
        <div class="nome">Primeiro texto</div>
        <textarea class="txt textarea editor" name="texto1"><?php echo $texto1;?></textarea>
    </div>
    <div class="linha">
        <div class="nome">Segundo t&iacute;tulo</div>
        <input type="text" class="txt txt-m" name="titulo2" value="<?php echo $titulo2;?>"/>
    </div>
    <div class="linha">
        <div class="nome">Segundo texto</div>
        <textarea class="txt textarea editor" name="texto2"><?php echo $texto2;?></textarea>
    </div>
    <div class="divisor"></div>
    <div class="linha">
        <div class="nome">Segunda imagem</div>
        <div class="uploadarea">
            <input type="button" value="Escolher imagem" name="btnuploadaux2" class="btnuploadaux"/>
            <input type="file" name="btnupload2" class="btnupload" onchange="this.form.btnuploadaux2.value=this.value;"/>
        </div>
    </div>
    <div class="divisor"></div>
    <div class="linha">
        <div class="nome">Terceiro t&iacute;tulo</div>
        <input type="text" class="txt txt-m" name="titulo3" value="<?php echo $titulo3;?>"/>
    </div>
    <div class="linha">
        <div class="nome">Terceiro texto</div>
        <textarea class="txt textarea editor" name="texto3"><?php echo $texto3;?></textarea>
    </div>
    <div class="divisor"></div>
    <div class="linha">
        <div class="nome">Terceira imagem</div>
        <div class="uploadarea">
            <input type="button" value="Escolher imagem" name="btnuploadaux3" class="btnuploadaux"/>
            <input type="file" name="btnupload3" class="btnupload" onchange="this.form.btnuploadaux3.value=this.value;"/>
        </div>
    </div>
    <div class="divisor"></div>
    <div class="linha">
        <div class="nome">Quarto t&iacute;tulo</div>
        <input type="text" class="txt txt-m" name="titulo4" value="<?php echo $titulo4;?>"/>
    </div>
    <div class="linha">
        <div class="nome">Quarto texto</div>
        <textarea class="txt textarea editor" name="texto4"><?php echo $texto4;?></textarea>
    </div>
    <div class="linha">
        <div class="nome">Refer&ecirc;ncias (separá-las por ;)</div>
        <textarea class="txt textarea" name="referencias"><?php echo $referencias;?></textarea>
    </div>
    <div class="linha">
        <div class="nome">V&iacute;deo (URL Youtube)</div>
        <input type="text" class="txt txt-m" name="video" value="http://www.youtube.com/watch?v=<?php echo $video;?>"/>
    </div>
    <div class="linha">
        <div class="nome">Categoria</div>
    	<select name="categoria" class="txt txt-m">
        	<?php
				$sql="SELECT * FROM `categorias`";
				$query=mysql_query($sql);
				$linhas=mysql_num_rows($query);
				while($resultadocat=mysql_fetch_array($query)){
					$id=$resultadocat["id"];
					$titulo=$resultadocat["titulo"];
			?>
					<option value="<?php echo $id; ?>"><?php echo $titulo; ?></option>
            <?php
				}
			?>
        </select>
    </div>
    <div class="linha">
        <input type="submit" class="btn" name="paginaeditar" value="Atualizar Página"/>
    </div>
</form>
<?php
	}
	//-------------------------------------------LISTAR PAGINA----------------------------------------------
	if($urlpag=="listar"){
?>
    <div class="linha">
        <div class="titulopg">Listar Suas P&aacute;ginas</div>
    </div>
    <div class="linha">
    	<a href="/contas/paginas/add">
        	<div class="btn add">Adicionar p&aacute;gina</div>
        </a>
    </div>
    <div class="divisor"></div>
	<?php
        if($usuariotipo==2){
            $sql="SELECT * FROM `paginas`";
        }
        else{
            $sql="SELECT * FROM `paginas` WHERE `idusuario`='$usuarioid'";
        }
        $query=mysql_query($sql);
		$linhas=mysql_num_rows($query);
		if($linhas>0){
			while($resultado=mysql_fetch_array($query)){
				$id=$resultado["id"];
				$tituloprincipal=$resultado["tituloprincipal"];
				$pasta=$resultado["pasta"];
                $imagem=$resultado["imagem"];
    ?>
    <div class="linha linhalista linhamaior">
        <img src="/db/paginas/<?php echo "$pasta/1_$imagem"; ?>" class="imagem"/>
        <div class="conteudo"><?php echo $tituloprincipal; ?></div>
        <div class="ferramentas">
            <a href="paginasdel!<?php echo $id; ?>" title="Deletar p&aacute;gina" class="deletar">
                <img src="/imagens/adm-deletar.png" class="item"/>
            </a>
            <a href="/contas/paginas/editar/<?php echo $id; ?>" title="Editar p&aacute;gina">
                <img src="/imagens/adm-editar.png" class="item"/>
            </a>
        </div>
    </div>
    <?php
        	}
		}
		else{
    ?>
        <div id="erro" class="pagina">
            <div class="topo">
                <span class="titulo">Lista vazia</span>
            </div>
            <div class="conteudo">
                <div class="esquerda">
                    <img src="/imagens/erro.png" class="imagem"/>
                </div>
                <div class="direita">
                    <span class="info">
                        Voc&ecirc; ainda n&atilde;o tem p&aacute;ginas.<br/>Crie uma nova
                        <a href="/contas/paginas/add"><span class="btn">aqui</span></a>
                    </span>
                </div>
            </div>
        </div>
	<?php
		}
	}
?>
