<?php
	//-------------------------------------------EDITAR USUARIO----------------------------------------------
	if($urlpag=="editar"){
?>
<form method="post" action="/lib/adm.lib.php" enctype="multipart/form-data">
    <div class="linha">
        <div class="titulopg">Adicionar Página</div>
        <input type="hidden" name="id" value="<?php echo $usuarioid; ?>"/>
    </div>
    <div class="linha">
        <div class="nome">Nome Completo</div>
        <input type="text" class="txt txt-m" name="nomecompleto" value="<?php echo $usuarionomecompleto; ?>"/>
    </div>
    <div class="linha">
        <div class="nome">Login</div>
        <input type="text" class="txt txt-p" name="login" value="<?php echo $usuariologin; ?>"/>
    </div>
    <div class="linha">
        <div class="nome">E-mail</div>
        <input type="text" class="txt txt-m" name="email" value="<?php echo $usuarioemail; ?>"/>
    </div>
    <div class="divisor"></div>
    <div class="linha">
        <div class="nome">Imagem de perfil</div>
        <div class="uploadarea">
            <input type="button" value="Escolher imagem" name="btnuploadaux" class="btnuploadaux"/>
            <input type="file" name="btnupload" class="btnupload" onchange="this.form.btnuploadaux.value=this.value;"/>
        </div>
    </div>
    <div class="divisor"></div>
    <div class="linha">
        <div class="nome">Data de Anivers&aacute;rio</div>
        <input type="text" class="txt txt-p" name="data_aniver" value="<?php echo $usuariodata; ?>"/>
    </div>
    <div class="linha">
        <input type="submit" class="btn" name="usuarioeditar" value="Atualizar Perfil"/>
    </div>
</form>
<div class="divisor"></div>
<form method="post" action="/lib/adm.lib.php">
    <div class="linha">
        <div class="titulopg">Alterar Senha</div>
    </div>
    <div class="linha">
        <div class="nome">Senha atual</div>
		<input type="password" id="senha_atual" class="txt txt-m" name="senha_atual"/>
    </div>
    <div class="linha">
        <div class="nome">Nova senha</div>
		<input type="password" id="senha_nova" class="txt txt-m" name="senha_nova"/>
    </div>
    <div class="linha">
        <div class="nome">Confirmar senha</div>
		<input type="password" id="senha_confirmar" class="txt txt-m" name="senha_confirmar"/>
    </div>
    <div class="linha">
        <input type="submit" class="btn" name="usuariosenha" value="Atualizar Senha"/>
    </div>
</form>
<?php
	}
	//-------------------------------------------LISTAR USUARIOS----------------------------------------------
	if($urlpag=="listar"){
?>
<div class="linha">
    <div class="titulopg">Listar Usu&aacute;rios</div>
</div>
<?php
	$query=mysql_query("SELECT * FROM `usuarios`");
	while($resultado=mysql_fetch_array($query)){
		$id=$resultado["id"];
		$nomecompleto=$resultado["nomecompleto"];
		$imagem=$resultado["imagem"];
		$data=$resultado["data_aniver"];
		$tipo=$resultado["tipo"];
		$status=$resultado["status"];
?>
<div class="linha linhalista linhamaior">
	<?php
        if(empty($imagem)){
            $caminho="/imagens/adm-usu.png";
        }
        else{
            $caminho="/db/usuarios/".$imagem;
        }
		if($tipo=="0" || $tipo=="1"){
			$tipo="Administrador";
		}
		if($tipo=="2"){
			$tipo="Usuário";
		}
		if($status=="1"){
			$status="Conta ativa";
		}
		if($status=="0"){
			$status="Conta desativada";
		}
    ?>
    <img src="<?php echo $caminho; ?>" class="imagem"/>
    <div class="conteudo">
		<?php echo $nomecompleto; ?> - <?php echo $data; ?> - <?php echo $tipo; ?> - <?php echo $status; ?>
    </div>
    <div class="ferramentas">
    	<a href="usuariosdel!<?php echo $id; ?>" title="Deletar usu&aacute;rio" class="deletar">
	        <img src="/imagens/adm-deletar.png" class="item"/>
        </a>
    	<a href="usuariospromo!<?php echo $id; ?>" title="Promover usu&aacute;rio" class="promover">
	        <img src="/imagens/adm-promo.png" class="item"/>
        </a>
    </div>
</div>
<?php
		}
	}
?>