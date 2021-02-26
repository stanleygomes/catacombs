<?php
	//incluindo a conexao
	include('conexao.lib.php');
	$conexao=new conexao();
	$conexao->abrir();

	//incluindo a conexao
	include('funcoes.lib.php');

	header("Content-Type: text/html; charset=iso-8859-1",true);

	$q=strtolower($_GET["q"]);
	$sql="SELECT * FROM `busca` WHERE `titulo` like '$q%'";
	$query=mysql_query($sql) or die("Erro na busca! Tente novamente.");
	$linhas=mysql_num_rows($query);
?>
<div class="almeio">
    <div id="resbusca">
        <span id="titulo">Resultados para "<?php echo $q; ?>"</span>
        <div id="lista">
		<?php
            for($i=0;$i<$linhas;$i++){
				$resultado=mysql_fetch_array($query);
				$titulo=$resultado["titulo"];
				$conteudo=$resultado["conteudo"];
				$cor=$resultado["cor"];
				//0 = busca e 1 = lab e 2 = video
				$tipo=$resultado["tipo"];
				if($tipo=="0"){
					$tipo="busca";
				}
				else if($tipo=="1"){
					$tipo="lab";
				}
				else{
					$tipo="videos";
				}
        ?>
            <a href="/<?php echo $tipo."/".limparvariavel($titulo); ?>" class="conteudo">
                <div class="item bg<?php echo $tipo; ?>">
                    <div class="titulo">
                    	<div class="imagem im<?php echo $tipo; ?>"></div>
                        <?php echo limitartexto("$titulo","12"); ?>
                    </div>
                    <div class="texto">
                        <?php echo limitartexto("$conteudo","130"); ?>
                    </div>
                </div>
            </a>
		<?php
            }
        ?>
    </div>
</div>
