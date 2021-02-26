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
            $caminho="/imagens/login.png";
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
?>