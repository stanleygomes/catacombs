
			<div class="bloco" class="aldireita">
				<?php
					//include("inc/tempo.inc.php");
				?>
			</div>
<!--	<script src="/link/jquery.cufon.ui.js" type="text/javascript"></script>
	<script src="/link/jquery.cufon.titillium.js" type="text/javascript"></script>
	<script type="text/javascript">
		Cufon.replace('.fthin', { fontFamily: 'TitilliumText22L-Thin', hover: true });
		Cufon.replace('.flight', { fontFamily: 'TitilliumText22L-Light', hover: true });
		Cufon.replace('.fbold', { fontFamily: 'TitilliumText22L-Bold', hover: true });
	</script>
       
    
                  if((jQuery.browser.msie) && (jQuery.browser.version!="10.0" && jQuery.browser.version!="9.0")){
				  texto="Caro usuário, este navegador está muito desatualizado.";
				  url="/405";
			  }
			  else{
				  texto="<?php //echo $valor[1]; ?>";
				  url="/porque-chemicall";
			  }
			  jQuery("#alerta .titulo .texto").html(texto);
			  jQuery("#alerta-link").attr("href",url);
			  jQuery("#alerta").css("display","block");
			  jQuery("#alerta").animate({right:"0"},800,function(){});

-->
            <!--
			<div class="bloco">
				<div class="titulo alesquerda flight"><h2>Coment&aacute;rios</h2></div>
				<div class="texto textototal alesquerda">
					<div id="fb-root"></div>
					<script>(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = "//connect.facebook.net/pt_BR/all.js#xfbml=1";fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));</script>
					<div class="fb-comments" data-href="<?php //echo $enderecopagina; ?>" data-num-posts="2"></div>
				</div>
			</div>
            -->
<?php
	//incluindo a conexao
	include('conexao.lib.php');
	$conexao=new conexao();
	$conexao->abrir();

	$sql="SELECT * FROM `paginas`";
	$query=mysql_query($sql) or die ("Erro". mysql_query());
	$linhas=mysql_num_rows($query);

	/*
//---------------------------------------------------------------------------
$categoria="
Oxirreduçao,
Número de Oxidaçao,
Cinética Química,
Eletrólitos,
Ácidos, Base, Sal e Óxidos,
Eletroquímica,
Velocidade das Reaçoes,
Estequiometria,
Reaçoes Inorgânicas,
Reaçoes Orgânicas,
Carbono,
Funçoes Orgânicas,
Funçoes Inorgânicas,
Tabela Periódica Geral,
Propriedades dos Elementos,
Eletronegatividade e Eletropositividade,
Raio Atômico,
Lei de Lavoisier,
Propriedades Gerais da Matéria,
Propriedades Específicas da Matéria,
Alotropia,
Dispersoes e Coloides,
Sistema, Substancia e Mistura,
Isobaria, Isotonia e Isotopia,
Átomos,
Pontes de Hidrogenio,
Fenômenos Físicos e Químicos,
Oxigenio, Nitrogenio e Hidrogenio,
Nitrogenio - Ciclo,
Césio-137 em Goiânia,
Soluçoes Saturada, Insaturadas e Supersaturadas,
Estados da matéria,
Gases Ideais,
Efeito estufa e Gás Carbônico,
Forças Intermoleculares,
Disposiçao Espacial das Moléculas,
Dissoluçao,
Distribuiçao Eletrônica,
Fulerenos,
Polaridade,
Mol,
Ligaçao Metálica, Iônica e Covalente
";
	$vetcategoria=explode(",",$categoria);
	for($i=1;$i<=$linhas;$i++){
		$titulo=$vetcategoria[$i];
		echo "<br/>";
		$sql="INSERT INTO `categorias`(`titulo`,`data_inclusao`,`idusuario`,`status`)VALUES('$titulo',NOW(),'2','1')";
		$query=mysql_query($sql) or die ("Erro $i ". mysql_query());
	}

//---------------------------------------------------------------------------
	for($i=1;$i<=$linhas;$i++){
		$sql2="SELECT * FROM `teste` where `id`='$i'";
		$query2=mysql_query($sql2) or die ("Erro". mysql_query());
		$resultado=mysql_fetch_array($query2);
		$descobridornome=$resultado["descobridornome"];
		$descoberta=$resultado["descoberta"];
		$definicao=$resultado["definicao"];
		$usabilidade=$resultado["usabilidade"];
		$adicional=$resultado["adicional"];
		$formula=$resultado["formula"];
		$massa=$resultado["massa"];
		$familia=$resultado["familia"];
		$estadofisico=$resultado["estadofisico"];
		$densidade=$resultado["densidade"];
		$eletronegatividade=$resultado["eletronegatividade"];
		$distribuicaoeletronica=$resultado["eletronegatividade"];
		$distribuicaoeletronica=$resultado["distribuicaoeletronica"];
		$grupotabela=$resultado["grupotabela"];
		$ptfusao=$resultado["ptfusao"];
		$ptebulicao=$resultado["ptebulicao"];
		$area=$resultado["area"];
		$tituloprincipal=$resultado["tituloprincipal"];

		echo $caracteristicas="
            <div><b>F&oacute;rmula:</b>&nbsp;$formula</div>
            <div><b>Massa:</b>&nbsp;$massa u</div>
            <div><b>Fam&iacute;lia:</b>&nbsp;$familia</div>
            <div><b>Estado F&iacute;sico:</b>&nbsp;$estadofisico nas CNTP</div>
            <div><b>Densidade:</b>&nbsp;$densidade Kg/m&sup3;</div>
            <div><b>Eletronegatividade:</b>&nbsp;$eletronegatividade</div>
            <div><b>Ponto de fus&atilde;o:</b>&nbsp;$ptfusao oC</div>
            <div><b>Ponto de ebuli&ccedil;&atilde;o:</b>&nbsp;$ptebulicao oC</div>
            <div><b>Val&ecirc;ncia:</b>&nbsp;$distribuicaoeletronica</div>
            <div><b>Grupo:</b>&nbsp;$grupotabela</div>
		";
		$sql3="UPDATE `paginas` SET `caracteristicas`='$caracteristicas' where `id`='$i'";
		$query3=mysql_query($sql3) or die (mysql_error());
		if($query3){
			echo "Sucesso: ".$i."<br/>";
		}
	}
//---------------------------------------------------------------------------
	for($i=1;$i<=$linhas;$i++){
		$query=mysql_query("UPDATE `paginas` SET `idusuario`='2',`data_inclusao`='2011-07-20 12:00:00'") or die (mysql_error());
	}
//---------------------------------------------------------------------------
	for($i=1;$i<=$linhas;$i++){
		$query=mysql_query("UPDATE `paginas` SET `pasta`='$i',`imagem`='$i.jpg' WHERE `id`='$i'") or die (mysql_error());
	}
//---------------------------------------------------------------------------
	for($i=1;$i<=$linhas;$i++){
		$pasta1="imgprincipal";
		$ext1="1_";
		$pasta2="imgsecundaria";
		$ext2="2_";
		$pasta3="imgdescobridor";
		$ext3="3_";

		if(!is_dir("db/paginas/".$i)){
			$criar=mkdir("db/paginas/$i",0777);
			if($criar){
				echo "pasta $i criada com sucesso.";
			}
		}
		if(copy("db/paginas/$pasta3/$i.jpg","db/paginas/$i/$ext3$i.jpg")){
			echo "<br/>";
			echo "Arquivo $i movido com sucesso.";
			echo "<br/>";
		}
		else{
			echo "erro $i";
		}
	}
//---------------------------------------------------------------------------
	$sql="SELECT * FROM `conteudos`";
	$query=mysql_query($sql) or die ("Erro". mysql_query());

	while($resultado=mysql_fetch_array($query)){
		$titulo=$resultado["titulo"];
		$formula=strtolower($resultado["formula"]);
		$titulo="http://pt.wikipedia.org/wiki/".$titulo;
		$formula="http://www.chemicalelements.com/elements/".$formula.".html";
		echo $id=$id1.".jpg";
		echo "<br/>";
		echo $sql2="update `conteudos` set `fontes`='$titulo;$formula'";
		$query2=mysql_query($sql2) or die ("Erro". mysql_query());
	}
//---------------------------------------------------------------------------
	$cores=array("333","707070","004050","088a68","3d9000","4d90fe","e41300","5032aa","008287","f7941d","8a0868","018388");

	$sql="SELECT * FROM `paginas`";
	$query=mysql_query($sql) or die ("Erro". mysql_query());
	$linhas=mysql_num_rows($query);

	for($i=0;$i<$linhas;$i++){
		$rand=rand(0,7);
		$cor=$cores[$rand];
		
		$resultado=mysql_fetch_array($query);
		$id=$resultado["id"];
		echo $sql2="update `paginas` set `cor`='$cor' where `id`='$id'";
		echo "<br/>";
		$query2=mysql_query($sql2);
		if($query2){
			echo "<br/>";
			echo "deu certo: a linha $id = $cor ";
			echo "<br/>";
		}
	}
	*/
?>