<?php
	//-------------------------------------------ADICIONAR CONFIGURACAO----------------------------------------------
	if($urlpag=="add"){
?>
<form method="post" action="/lib/adm.lib.php">
    <div class="linha">
        <div class="titulopg">Adicionar Configura&ccedil;&atilde;o</div>
    </div>
    <div class="linha">
        <div class="nome">Titulo</div>
        <input type="text" class="txt" name="titulo"/>
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
        <div class="nome">Valor</div>
        <input type="text" class="txt" name="valor"/>
    </div>
    <div class="linha">
        <input type="submit" class="btn" name="configuracoesadd" value="Adicionar configura&ccedil;&atilde;o"/>
    </div>
</form>
<?php
	}
	//-------------------------------------------EDITAR CONFIGURACAO----------------------------------------------
	if($urlpag=="editar"){
?>
<form method="post" action="/lib/adm.lib.php" enctype="multipart/form-data">
    <div class="linha">
        <div class="titulopg">Editar Configura&ccedil;&atilde;o</div>
    </div>
    <?php
		$formid=$urladmin[3];
        $sql="SELECT * FROM `configuracoes` WHERE `id`='$formid'";
		$query=mysql_query($sql);
		$resultado=mysql_fetch_array($query);
		$titulo=$resultado["titulo"];
		$valor=$resultado["valor"];
    ?>
    <div class="linha">
        <div class="nome">Titulo</div>
        <input type="text" class="txt" name="titulo" value="<?php echo $titulo;?>"/>
    </div>
    <div class="divisor"></div>
    <div class="linha">
        <div class="nome">Imagem</div>
        <input type="hidden" name="id" value="<?php echo $formid; ?>"/>
        <div class="uploadarea">
            <input type="button" value="Escolher imagem" name="btnuploadaux" class="btnuploadaux"/>
            <input type="file" name="btnupload" class="btnupload" onchange="this.form.btnuploadaux.value=this.value;"/>
        </div>
    </div>
    <div class="divisor"></div>
    <div class="linha">
        <div class="nome">Valor</div>
        <input type="text" class="txt" name="valor" value="<?php echo $valor;?>"/>
    </div>
    <div class="linha">
        <input type="submit" class="btn" name="configuracoeseditar" value="Atualizar Configura&ccedil;&atilde;o"/>
        <input type="submit" class="btn" name="configuracoesdel" value="Voltar Backup"/>
    </div>
</form>
<?php
	}
	//-------------------------------------------LISTAR CONFIGURACAO----------------------------------------------
	if($urlpag=="listar"){
?>
    <div class="linha">
        <div class="titulopg">Listar Configura&ccedil;&otilde;es</div>
    </div>
    <div class="linha">
    	<a href="/contas/configuracoes/add">
        	<div class="btn add">Adicionar Configura&ccedil;&otilde;es</div>
        </a>
    </div>
    <div class="divisor"></div>
    <?php
        $sql="SELECT * FROM `configuracoes`";
		$query=mysql_query($sql);
		while($resultado=mysql_fetch_array($query)){
			$id=$resultado["id"];
			$titulo=$resultado["titulo"];
			$valor=$resultado["valor"];
    ?>
        <a href="/contas/configuracoes/editar/<?php echo $id; ?>" title="<?php echo $titulo; ?>">
            <div class="linha linhalista linhamaior">
                <img src="/imagens/adm-conf.png" class="imagem"/>
                <div class="conteudo"><?php echo $titulo; ?></div>
            </div>
        </a>
    <?php
		}
	?>
<?php
	}
?>
