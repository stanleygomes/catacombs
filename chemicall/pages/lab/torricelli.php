<?php
if(isset($_POST["ok"])){
	$vo=$_POST['vo'];
	$d=$_POST['d'];
	$a=$_POST['a'];
	$v=$vo*$vo;
	//echo $v."<br>";
	$d2=$d*$a;
	//echo $d2."<br>";
	$d2=$d2*2;
	//echo $d2."<br>";
	$v=$v+$d2;
	$v=number_format( sqrt($v), 2, ",", "." );
	echo $v;
}else{
?>
<form method="post" action="">
	Velocidade Inicial<br>
	<input type="text" name="vo" size="20" /><br>
	Deslocamento<br>
	<input type="text" name="d" size="20" /><br>
	Aceleração<br>
	<input type="text" name="a" size="20" /><br>
	<input type='submit' value='Ok' name='ok'>
</form>
<?php
}
?>