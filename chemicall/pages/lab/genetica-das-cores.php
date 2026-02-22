<?php
if(isset($_POST["ok"])){
	echo $g1=$_POST['genotipo1'];
echo "<br/>";
	echo $g2=$_POST['genotipo2'];
	
echo "<br/>";
echo "<br/>";

	echo$gameta11=$g1[0].$g1[2];
echo "<br/>";
	echo $gameta12=$g1[0].$g1[3];
echo "<br/>";
	echo $gameta13=$g1[1].$g1[2];
echo "<br/>";
	echo $gameta14=$g1[1].$g1[3];
	
	$gameta21=$g2[0].$g2[2];
	$gameta22=$g2[0].$g2[3];
	$gameta23=$g2[1].$g2[2];
	$gameta24=$g2[1].$g2[3];
	/*echo"
		".$gameta21."<br>
		".$gameta22."<br>
		".$gameta23."<br>
		".$gameta24."<br>
	";*/
	$genotipo1=$gameta11[0].$gameta21[0].$gameta11[1].$gameta21[1];
	$genotipo2=$gameta11[0].$gameta22[0].$gameta11[1].$gameta22[1];
	$genotipo3=$gameta11[0].$gameta23[0].$gameta11[1].$gameta23[1];
	$genotipo4=$gameta11[0].$gameta24[0].$gameta11[1].$gameta24[1];
	
	$genotipo5=$gameta12[0].$gameta21[0].$gameta12[1].$gameta21[1];
	$genotipo6=$gameta12[0].$gameta22[0].$gameta12[1].$gameta22[1];
	$genotipo7=$gameta12[0].$gameta23[0].$gameta12[1].$gameta23[1];
	$genotipo8=$gameta12[0].$gameta24[0].$gameta12[1].$gameta24[1];
	
	$genotipo9=$gameta13[0].$gameta21[0].$gameta13[1].$gameta21[1];
	$genotipo10=$gameta13[0].$gameta22[0].$gameta13[1].$gameta22[1];
	$genotipo11=$gameta13[0].$gameta23[0].$gameta13[1].$gameta23[1];
	$genotipo12=$gameta13[0].$gameta24[0].$gameta13[1].$gameta24[1];
	
	$genotipo13=$gameta14[0].$gameta21[0].$gameta14[1].$gameta21[1];
	$genotipo14=$gameta14[0].$gameta22[0].$gameta14[1].$gameta22[1];
	$genotipo15=$gameta14[0].$gameta23[0].$gameta14[1].$gameta23[1];
	$genotipo16=$gameta14[0].$gameta24[0].$gameta14[1].$gameta24[1];
	
	
	
	
	$genotipo[1]=$gameta11[0].$gameta21[0].$gameta11[1].$gameta21[1];
	$genotipo[2]=$gameta11[0].$gameta22[0].$gameta11[1].$gameta22[1];
	$genotipo[3]=$gameta11[0].$gameta23[0].$gameta11[1].$gameta23[1];
	$genotipo[4]=$gameta11[0].$gameta24[0].$gameta11[1].$gameta24[1];
	
	$genotipo[5]=$gameta12[0].$gameta21[0].$gameta12[1].$gameta21[1];
	$genotipo[6]=$gameta12[0].$gameta22[0].$gameta12[1].$gameta22[1];
	$genotipo[7]=$gameta12[0].$gameta23[0].$gameta12[1].$gameta23[1];
	$genotipo[8]=$gameta12[0].$gameta24[0].$gameta12[1].$gameta24[1];
	
	$genotipo[9]=$gameta13[0].$gameta21[0].$gameta13[1].$gameta21[1];
	$genotipo[10]=$gameta13[0].$gameta22[0].$gameta13[1].$gameta22[1];
	$genotipo[11]=$gameta13[0].$gameta23[0].$gameta13[1].$gameta23[1];
	$genotipo[12]=$gameta13[0].$gameta24[0].$gameta13[1].$gameta24[1];
	
	$genotipo[13]=$gameta14[0].$gameta21[0].$gameta14[1].$gameta21[1];
	$genotipo[14]=$gameta14[0].$gameta22[0].$gameta14[1].$gameta22[1];
	$genotipo[15]=$gameta14[0].$gameta23[0].$gameta14[1].$gameta23[1];
	$genotipo[16]=$gameta14[0].$gameta24[0].$gameta14[1].$gameta24[1];
	
	
	$cont1=0;
	$cont2=0;
	$t1=0;
	$t2=0;
	$t3=0;
	$t4=0;
	$t5=0;
	$t6=0;
	$t7=0;
	$t8=0;
	$t9=0;
	echo"<br><br><span class='titulores'> Resultado do cruzamento</span><br><br>";
	for($i=1; $i<17;$i++){
		while($j<4){
			echo "<span class='tab'>".$genotipo[$i]."</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
			$i++;
			$j++;
		}
		$j=0;
		echo "<br>";
		$i++;
	}
	for($i=1; $i<17;$i++){
		$cont1=0;
		$cont2=0;
		//echo $genotipo[$i]."<br>";
		if(preg_match('/^[^a-z]*$/', $genotipo[$i]{0})) {
				$cont1++;
		}
		if(preg_match('/^[^a-z]*$/', $genotipo[$i]{1})) {
				$cont1++;
		}
		if(preg_match('/^[^a-z]*$/', $genotipo[$i]{2})) {
				$cont1++;
		}
		if(preg_match('/^[^a-z]*$/', $genotipo[$i]{3})) {
				$cont1++;
		}
		
		switch($cont1){
				case "0": $status="Branco"; $t1++; break;
				case "1": $status="Mulato Claro"; $t2++; break;
				case "2": $status="Mulato Medio"; $t3++; break;
				case "3": $status="Mulato Escuro"; $t4++; break;
				case "4": $status="Negro"; $t5++; break;
		}
		
		//echo"<br>".$status1."/".$status2."<br><br>";
	}
	$p1=number_format( $t1*100/16, 0, ",", "." );
	$p2=number_format( $t2*100/16, 0, ",", "." );
	$p3=number_format( $t3*100/16, 0, ",", "." );
	$p4=number_format( $t4*100/16, 0, ",", "." );
	$p5=number_format( $t5*100/16, 0, ",", "." );
	echo"<br><br>
		<div id='todas'>
		<div class='cada'>
		<img src='/db/lab/genetica-das-cores/branco.jpg'>
		<div class='titulo'>
		<span class='percent'>Branco</span><span class='nro_percent'>".$p1."%</span><br>
		</div>
		</div>
		<div class='cada'>
		<img src='/db/lab/genetica-das-cores/mulato0.jpg'>
		<div class='titulo'>
		<span class='percent'>Mulato Claro</span><span class='nro_percent'> ".$p2."%</span><br>
		</div>
		</div>
		<div class='cada'>
		<img src='/db/lab/genetica-das-cores/mulato1.jpg'>
		<div class='titulo'>
		<span class='percent'>Mulato Médio</span><span class='nro_percent'> ".$p3."%</span><br>
		</div>
		</div>
		<div class='cada'>
		<img src='/db/lab/genetica-das-cores/mulato2.jpg'>
		<div class='titulo'>
		<span class='percent'>Mulato Escuro</span><span class='nro_percent'>".$p4."%</span><br>
		</div>
		</div>
		<div class='cada'>
		<img src='/db/lab/genetica-das-cores/negro.jpg'>
		<div class='titulo'>
		<span class='percent'>Negro</span><span class='nro_percent'>".$p5."%</span><br>
		</div>
		</div>
		</div>
		
	";
	/*echo"
		".$genotipo1."<br>
		".$genotipo2."<br>
		".$genotipo3."<br>
		".$genotipo4."<br>
		".$genotipo5."<br>
		".$genotipo6."<br>
		".$genotipo7."<br>
		".$genotipo8."<br>
		".$genotipo9."<br>
		".$genotipo10."<br>
		".$genotipo11."<br>
		".$genotipo12."<br>
		".$genotipo13."<br>
		".$genotipo14."<br>
		".$genotipo15."<br>
		".$genotipo16."<br>
	";*/
	/*
$palavra = "abc";
if(preg_match('/^[^a-z]*$/', $palavra{0})) {
echo "É maiúscula";
} else {
echo "É minuscula";
}
*/
}
else{
?>
<div class="formulario">
<form method="post" action="">
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