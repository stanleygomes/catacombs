    <div class="linha">
        <div class="titulopg">Listar contato</div>
    </div>
    <div class="linha">
    	<a href="/contas/contato/listar">
        	<div class="btn add">Contatos novos</div>
        </a>
    	<a href="/contas/contato/listar/vistos">
        	<div class="btn add">Contatos vistos</div>
        </a>
    </div>
    <div class="divisor"></div>
<?php
	if($urlpag="listar"){
?>
    <?php
		$listacontato=$url[3];
		$valor="0";
		if($listacontato=="vistos"){
			$valor="1";
		}
	?>
	<?php
        $sql="SELECT * FROM `contato` WHERE `status`='$valor' ORDER BY `data_inclusao` DESC";
        $query=mysql_query($sql);
        while($resultado=mysql_fetch_array($query)){
            $id=$resultado["id"];
            $nome=$resultado["nome"];
            $telefone=$resultado["telefone"];
            $email=$resultado["email"];
            $assunto=$resultado["assunto"];
            $mensagem=$resultado["mensagem"];
            $data_inclusao=$resultado["data_inclusao"];
    ?>
    <div class="linha linhalista">
        <div class="conteudo">
			<strong>Nome:</strong> <?php echo $nome; ?><br/>
            <strong>Telefone:</strong> <?php echo $telefone; ?> / <strong>E-mail:</strong> <?php echo $email; ?></strong> / <strong>Data:</strong> <?php echo formata_data($data_inclusao); ?><br/>
            <strong>Assunto:</strong> <?php echo $assunto; ?><br/>
            <strong>Mensagem:</strong><br/> <?php echo $mensagem; ?>
        </div>
        <div class="ferramentas">
            <a href="contatodel!<?php echo $id; ?>" title="Deletar p&aacute;gina" class="deletar">
                <img src="/imagens/adm-deletar.png" class="item"/>
            </a>
            <a href="contatook!<?php echo $id; ?>" title="Já li" class="aceitar">
                <img src="/imagens/adm-aceitar.png" class="item"/>
            </a>
        </div>
    </div>
    <?php
        }
	}
    ?>