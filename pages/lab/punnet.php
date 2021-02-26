<style>
.cab{
	font-size:20px;
	color: white;
}
.tab{
		font-size:28px;
		color: white;
}
.percent{
		background-color: black;
		width: 400px;
		height: 200px;
		color:white;
		margin-top: 100px;
		font-size:16px;
	}
.maior{
	width: 100%;
	height: 100%;
}
.nro_percent{
	color: red;
}
</style>
<?php
if(isset($_POST["ok"])){
	//echo"<script>alert('deu');</script>";
	$g1=$_POST['genotipo1'];
	$g2=$_POST['genotipo2'];
	
	$genotipo[1]=$g1[0].$g2[0];
	$genotipo[2]=$g1[0].$g2[1];
	$genotipo[3]=$g1[1].$g2[0];
	$genotipo[4]=$g1[1].$g2[1];
	
	$t1=0;
	$t2=0;
	$t3=0;
	
	for($i=1; $i<5;$i++){
		$cont1=0;
		//echo $genotipo[$i]."<br>";
		if(preg_match('/^[^a-z]*$/', $genotipo[$i]{0})) {
				$cont1++;
		}
		if(preg_match('/^[^a-z]*$/', $genotipo[$i]{1})) {
				$cont1++;
		}
		if($cont1==0){
				$t1++;
		}
		if($cont1==1){
				$t2++;
		}
		if($cont1==2){
				$t3++;
		}
			
	}
	echo"<span class='percent'><span class='maior'><br><br>
		Hm.R. -> <span class='nro_percent'>".$t1."</span><br>
		Ht -> <span class='nro_percent'>".$t2."</span><br>
		Hm.D. -> <span class='nro_percent'>".$t3."</span><br>
	</span></span>";







}else{
?>
<div class="formulario">
<form method="post" action="">
	<div class='titulo'>Informe os genótipos</div><br>
	<label class='tit'>Gen&oacute;tipo 1</label>
	<input type="text" name="genotipo1" size="20" class='txt'/>
	<label class='tit'>Gen&oacute;tipo 2</label>
	<input type="text" name="genotipo2" size="20" class='txt'/>
	<input type='submit' value='Ok' name='ok' class='btn'>
</form>
</div>
<?php
}
?>


