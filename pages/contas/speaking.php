    <div class="linha">
        <div class="titulopg">Mensagens</div>
    </div>
    <div class="linha">
    	<a href="/contas/speaking/nova">
        	<div class="btn add">Nova mensagem</div>
        </a>
    	<a href="/contas/speaking/entrada">
        	<div class="btn add">Caixa de entrada</div>
        </a>
    	<a href="/contas/speaking/saida">
        	<div class="btn add">Caixa de sa&iacute;da</div>
        </a>
    	<a href="/contas/speaking/lixeira">
        	<div class="btn add">Lixeira</div>
        </a>
    </div>
    <div class="divisor"></div>
<?php
	//-------------------------------------------ADICIONAR MENSAGEM----------------------------------------------
	if($urlpag=="nova"){
?>
<form method="post" action="/lib/adm.lib.php" enctype="multipart/form-data">
    <div class="linha">
        <div class="nome">Para</div>
        <input type="text" class="txt txt-m" name="iddestinatario"/>
    </div>
    <div class="linha">
        <div class="nome">Assunto</div>
        <input type="text" class="txt txt-m" name="assunto"/>
    </div>
    <div class="divisor"></div>
    <div class="linha">
        <div class="nome">Anexo</div>
        <div class="uploadarea">
            <input type="button" value="Anexar arquivo" name="btnuploadaux" class="btnuploadaux"/>
            <input type="file" name="btnupload" class="btnupload" onchange="this.form.btnuploadaux.value=this.value;"/>
        </div>
    </div>
    <div class="divisor"></div>
    <div class="linha">
        <div class="nome">Mensagem</div>
        <textarea class="txt textarea editor" name="descricao"></textarea>
    </div>
    <div class="divisor"></div>
    <div class="linha">
        <input type="submit" class="btn" name="labadd" value="Adicionar Aplicativo"/>
    </div>
</form>
<?php
	}
	//-------------------------------------------EDITAR APLICATIVO----------------------------------------------
	if($urlpag=="editar"){
?>
<form method="post" action="/lib/adm.lib.php" enctype="multipart/form-data">
    <?php
		$formid=$urladmin[2];
        $sql="SELECT * FROM `lab` WHERE `id`='$formid'";
		$query=mysql_query($sql);
		$resultado=mysql_fetch_array($query);
		$titulo=$resultado["titulo"];
		$descricao=$resultado["descricao"];
    ?>
    <input type="hidden" name="id" value="<?php echo $formid; ?>"/>
    <div class="linha">
        <div class="titulopg">Editar Aplicativo</div>
    </div>
    <div class="linha">
        <div class="nome">Titulo</div>
        <input type="text" class="txt txt-m" name="titulo" value="<?php echo $titulo; ?>"/>
    </div>
    <div class="divisor"></div>
    <div class="linha">
        <div class="nome">Imagem</div>
        <div class="uploadarea">
            <input type="button" value="Escolher imagem" name="btnuploadaux" class="btnuploadaux"/>
            <input type="file" name="btnupload" class="btnupload" onchange="this.form.btnuploadaux.value=this.value;"/>
        </div>
    </div>
    <div class="divisor"></div>
    <div class="linha">
        <div class="nome">Descri&ccedil;&atilde;o</div>
        <textarea class="txt textarea editor" name="descricao"><?php echo $descricao; ?></textarea>
    </div>
    <div class="divisor"></div>
    <div class="linha">
        <input type="submit" class="btn" name="labeditar" value="Atualizar Aplicativo"/>
    </div>
</form>
<?php
	}
	//-------------------------------------------LISTAR APLICATIVOS----------------------------------------------
	if($urlpag=="listar"){
?>
    <div class="linha">
        <div class="titulopg">Listar Aplicativos</div>
    </div>
    <div class="linha">
    	<a href="/contas/labadd">
        	<div class="btn add">Adicionar Aplicativo</div>
        </a>
    </div>
    <div class="divisor"></div>
	<?php
        $query=mysql_query("SELECT * FROM `lab`");
        while($resultado=mysql_fetch_array($query)){
            $id=$resultado["id"];
            $titulo=$resultado["titulo"];
            $descricao=$resultado["descricao"];
            $imagem=$resultado["imagem"];
    ?>
    <div class="linha linhalista linhamaior">
		<?php
            if(empty($imagem)){
                $caminho="/imagens/adm-app.png";
            }
            else{
                $caminho="/db/lab/".$imagem;
            }
        ?>
        <img src="<?php echo $caminho; ?>" class="imagem"/>
        <div class="conteudo"><?php echo $titulo; ?></div>
        <div class="ferramentas">
            <a href="labdel!<?php echo $id; ?>" title="Deletar usuário" class="deletar">
                <img src="/imagens/adm-deletar.png" class="item"/>
            </a>
            <a href="/contas/labeditar/<?php echo $id; ?>" title="Editar p&aacute;gina">
                <img src="/imagens/adm-editar.png" class="item"/>
            </a>
        </div>
    </div>
<?php
		}
	}
?>
