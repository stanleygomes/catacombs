<?php
if(isset($_POST["ok"])){
?>
<div class="resultado">
<?php
	$vo=$_POST['vo'];
	$t=$_POST['t'];
	$a=$_POST['a'];
	if(!empty($vo) && !empty($t) && !empty($a)){
		$v=$vo*$t;
		//echo $v."<br>";
		$d2=$t*$t;
		//echo $d2."<br>";
		$d2=$d2*$a;
		//echo $d2."<br>";
		$d2=$d2/2;
		//echo $d2."<br>";
		//echo $v."<br>";
		//echo $v."+".$d2."=".$v+$d2."<br>";
		$v=$v+$d2;
		$v=number_format($v, 2, ",", "." );
		echo "<div class='texto'>A velocidade final é: ".$v." m/s</div>";
	}
	else{
		echo "Preencha todos os campos!";
	}
?>
</div>
<?php
}else{
?>
<div class="formulario">
<form method="post" action="">
	<label class='tit'>Velocidade Inicial (m/s)</label>
	<input type="text" name="vo" size="20" class='txt'/>
	<label class='tit'>Tempo (s)</label>
	<input type="text" name="t" size="20" class='txt'/>
	<label class='tit'>Aceleração (m/s²)</label>
	<input type="text" name="a" size="20" class='txt'/>
	<input type='submit' value='Ok' name='ok' class='btn'>
</form>
</div>
<?php
}
?>