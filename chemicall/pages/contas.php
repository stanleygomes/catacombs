<?php
	//verificar se o usuario esta logado
	if($logado==true){
		//dados do usuario
		$usuarioid=$sessaoid;
		$usuarioquery=mysql_query("SELECT * FROM `usuarios` WHERE `id`='$usuarioid'");
		$usuarioresultado=mysql_fetch_array($usuarioquery);
		$usuarionomecompleto=$usuarioresultado["nomecompleto"];
		$usuarioimagem=$usuarioresultado["imagem"];
		$usuariologin=$usuarioresultado["login"];
		$usuarioemail=$usuarioresultado["email"];
		$usuariodata=$usuarioresultado["data_aniver"];
		$usuariotipo=$usuarioresultado["tipo"];
		$usuariostatus=$usuarioresultado["status"];

		//pegar a pagina atual a partir da url
		$urladmin=$url[1];
		$urlpag=$url[2];
		if(empty($urladmin)){
			$urladmin="home";
		}
		//lista de permissoes de paginas que serao exibidas no site
		$perm=array('home','usuarios','paginas','lab','configuracoes','quest','contato','404');
		//pasta que contem os arquivos das paginas a serem exibidas
		$dir='pages/contas';

		if(substr_count($_GET['pg'],"/")>1){
			$urladmin=explode('/', $_GET['pg']);
			$urladmin[1];
			$paginaadmin=(file_exists("$dir/".$urladmin[1].'.php') && in_array($urladmin[1], $perm))? $urladmin[1]: '404';
		}
		else{
			$paginaadmin=(file_exists("$dir/".$urladmin.'.php') && in_array($urladmin, $perm))? $urladmin: '404';
		}
?>
<div id="containercontas">
<div id="contas">
	<div id="topocontas">
    	<div id="logo" class="fthin">Contas</div>
    </div>
	<div id="menulateral" class="fbold">
        <a href="/contas/usuarios/editar">
            <div id="imagem">
	            <?php
					if(empty($usuarioimagem)){
						$caminho="/imagens/login.png";
					}
					else{
						$caminho="/db/usuarios/".$usuarioimagem;
					}
				?>
                <img src="<?php echo $caminho; ?>" class="perfil"/>
                <span class="nome"><?php echo $usuarionomecompleto; ?></span>
            </div>
        </a>
        <a href="/">
	    	<div class="item">
            	<div class="imagem"></div>Voltar ao site
            </div>
        </a>
        <a href="/contas/">
	    	<div class="item <?php if($paginaadmin=="home"){echo"ativo";} ?>">
    	        <div class="imagem"></div>Boas vindas
            </div>
        </a>
        <a href="/contas/usuarios/editar">
	    	<div class="item">
            	<div class="imagem"></div>Perfil
            </div>
        </a>
        <a href="/contas/paginas/listar">
	    	<div class="item <?php if($paginaadmin=="paginas"){echo"ativo";} ?>">
    	        <div class="imagem"></div>P&aacute;ginas
            </div>
        </a>
        <?php
			$queryquest=mysql_query("SELECT * FROM `quest` WHERE `status`='0'");
			$linhasquest=mysql_num_rows($queryquest);
		?>
        <a href="/contas/quest/<?php if($usuariotipo==0 || $usuariotipo==2){echo "listar";}else{echo "add";} ?>">
	    	<div class="item <?php if($paginaadmin=="quest"){echo"ativo";} ?>">
    	        <div class="imagem"></div>Perguntas <span class="notif"><?php echo $linhasquest; ?></span>
            </div>
        </a>
        <?php
			if($usuariotipo==0 || $usuariotipo==2){
				$querycontato=mysql_query("SELECT * FROM `contato` WHERE `status`='0'");
				$linhascontato=mysql_num_rows($querycontato);
		?>
        <a href="/contas/lab/listar">
	    	<div class="item <?php if($paginaadmin=="lab"){echo"ativo";} ?>">
            	<div class="imagem"></div>Aplicativos
            </div>
        </a>
        <a href="/contas/usuarios/listar">
	    	<div class="item <?php if($paginaadmin=="usuarios"){echo"ativo";} ?>">
            	<div class="imagem"></div>Usu&aacute;rios
            </div>
        </a>
        <a href="/contas/configuracoes/listar">
	    	<div class="item <?php if($paginaadmin=="configuracoes"){echo"ativo";} ?>">
	            <div class="imagem"/></div>Configuraç&otilde;es
            </div>
        </a>
        <a href="/contas/contato/listar">
	    	<div class="item <?php if($paginaadmin=="contato"){echo"ativo";} ?>">
	            <div class="imagem"/></div>Contato <span class="notif"><?php echo $linhascontato; ?></span>
            </div>
        </a>
        <?php
			}
		?>
        <a href="/lib/sair.lib.php">
	    	<div class="item">
	            <div class="imagem sair spcontas"></div>Sair
            </div>
        </a>
    </div>
    <div id="editor" class="flight">
    	<?php
			switch($paginaadmin){
				case "$paginaadmin": include("$dir/$paginaadmin.php");
			}
		?>
        <div class="clear"></div>
    </div>
</div>
<?php
	}
	else{
?>
<div id="erro" class="pagina">
    <div class="topo">
        <span class="titulo">Usu&aacute;rio n&atilde;o autenticado</span>
    </div>
    <div class="conteudo">
        <div class="esquerda">
    	    <img src="/imagens/erro.png" class="imagem"/>
        </div>
        <div class="direita">
	        <span class="info">
            	Voc&acirc; n&atilde;o est&aacute; logado no site, por favor fa&ccedil;a seu login
	        	<a href=""><span dir="login-load" class="btn btnanimado">aqui</span></a>
	       	</span>
        </div>
    </div>
</div>
<?php
	}
?>
</div>