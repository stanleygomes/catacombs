<?php
if(isset($_POST["ok"])){
?>
<div class="resultado">
<?php
	$q1=$_POST['q1'];
	$q2=$_POST['q2'];
	$d=$_POST['d'];
	if(!empty($q1) && !empty($q2) && !empty($d)){
		$k=pow(10,9);
		$k=$k*9;
		$f=$k*$q1*$q2;
		$d=pow($d,2);
		$f=$f/$d;
		$f=number_format($f, 2, ",", "." );
		echo "<div class='texto'>A força elétrica será: ".$f." N</div>";
	}
	else{
		echo "Preencha todos os campos!";
	}
?>
</div>
<?php
}
else{
?>
<div class="formulario">
<form method="post" action="">
    <label class='tit'>Carga 1 (C)</label>
    <input type="text" name="q1" size="20" class='txt'/>
    <label class='tit'>Carga 2 (C)</label>
    <input type="text" name="q2" size="20" class='txt'/>
    <label class='tit'>Distância (m)</label>
    <input type="text" name="d" size="20" class='txt'/>
    <input type='submit' value='Ok' name='ok' class='btn'>
</form>
</div>
<?php
}
?>
