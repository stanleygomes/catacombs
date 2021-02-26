<?php
	//-------------------------------------------ADICIONAR APLICATIVO----------------------------------------------
	if($urlpag=="add"){
?>
<form method="post" action="/lib/adm.lib.php" enctype="multipart/form-data">
    <div class="linha">
        <div class="titulopg">Adicionar Aplicativo</div>
    </div>
    <div class="linha">
        <div class="nome">Titulo</div>
        <input type="text" class="txt txt-m" name="titulo"/>
    </div>
    <div class="divisor"></div>
    <div class="linha">
        <div class="nome">Descri&ccedil;&atilde;o</div>
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
		$formid=$urladmin[3];
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
    	<a href="/contas/lab/add">
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
    ?>
    <div class="linha linhalista linhamaior">
        <img src="/imagens/adm-lab.png" class="imagem"/>
        <div class="conteudo"><?php echo $titulo; ?></div>
        <div class="ferramentas">
            <a href="labdel!<?php echo $id; ?>" title="Deletar usu&aacute;rio" class="deletar">
                <img src="/imagens/adm-deletar.png" class="item"/>
            </a>
            <a href="/contas/lab/editar/<?php echo $id; ?>" title="Editar p&aacute;gina">
                <img src="/imagens/adm-editar.png" class="item"/>
            </a>
        </div>
    </div>
<?php
		}
	}
?>
