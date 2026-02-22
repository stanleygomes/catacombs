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
	$g1=$_POST['genotipo1'];
	$g2=$_POST['genotipo2'];
	
	$gameta11=$g1[0].$g1[2];
	$gameta12=$g1[0].$g1[3];
	$gameta13=$g1[1].$g1[2];
	$gameta14=$g1[1].$g1[3];
	
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
	echo"<br><br><span class='tab'> Resultado do cruzamento</span><br><br>";
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
				$cont2++;
		}
		if(preg_match('/^[^a-z]*$/', $genotipo[$i]{3})) {
				$cont2++;
		}
		
		switch($cont1){
				case "0": $status1="homozigoto recesivo"; break;
				case "1": $status1="heterozigoto"; break;
				case "2": $status1="homozigoto dominante"; break;
		}
		switch($cont2){
				case "0": $status2="homozigoto recesivo"; break;
				case "1": $status2="heterozigoto"; break;
				case "2": $status2="homozigoto dominante"; break;
		}
		if($cont1==0){
			if($cont2==0){
				$t1++;
			}
			if($cont2==1){
				$t2++;
			}
			if($cont2==2){
				$t3++;
			}
		}
		if($cont1==1){
			if($cont2==0){
				$t4++;
			}
			if($cont2==1){
				$t5++;
			}
			if($cont2==2){
				$t6++;
			}
		}
		if($cont1==2){
			if($cont2==0){
				$t7++;
			}
			if($cont2==1){
				$t8++;
			}
			if($cont2==2){
				$t9++;
			}
		}
		//echo"<br>".$status1."/".$status2."<br><br>";
	}
	echo"<span class='percent'><span class='maior'><br><br>
		Hm.R./Hm.R. -> <span class='nro_percent'>".$t1."</span><br>
		Hm.R./Ht -> <span class='nro_percent'>".$t2."</span><br>
		Hm.R./Hm.D. -> <span class='nro_percent'>".$t3."</span><br>
		
		Ht/Hm.R. -> <span class='nro_percent'>".$t4."</span><br>
		Ht/Ht -> <span class='nro_percent'>".$t5."</span><br>
		Ht/Hm.D. -> <span class='nro_percent'>".$t6."</span><br>
		
		Hm.D./Hm.R. -> <span class='nro_percent'>".$t7."</span><br>
		Hm.D./Ht -> <span class='nro_percent'>".$t8."</span><br>
		Hm.D./Hm.D. -> <span class='nro_percent'>".$t9."</span><br>
	</span></span>";
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
	/*$palavra = "abc";
if(preg_match('/^[^a-z]*$/', $palavra{0})) {
echo "É maiúscula";
} else {
echo "É minuscula";
}*/
}else{
?>
<div class="formulario">
<form method="post" action="">
	<div class='cab'>Informe os genótipos</div><br>
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