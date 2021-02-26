<?php
if(isset($_POST["ok"])){
?>
<div class="resultado">
<?php
	$m=$_POST['m'];
	$t=$_POST['t'];
	$c=$_POST['c'];
	if(!empty($m) && !empty($t) && !empty($c)){
		$q=$m*$c*$t;
		$q=number_format($q, 2, ",", "." );
		echo "<div class='texto'>A quantidade de calor será: ".$q." cal</div>";
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
	<label class='tit'>Calor Especifico (K)</label>
	<input type="text" name="c" size="20" class='txt'/>
	<label class='tit'>Tempo (s)</label>
	<input type="text" name="t" size="20" class='txt'/>
	<label class='tit'>Massa (Kg)</label>
	<input type="text" name="m" size="20" class='txt'/>
	<input type='submit' value='Ok' name='ok' class='btn'>
</form>
</div>
<?php
}
?>