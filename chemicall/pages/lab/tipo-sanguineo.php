<?php
if(isset($_POST["ok"])){
	$tm=$_POST['tm'];
	$tp=$_POST['tp'];
	switch($tm){
				case "O": $gm="ii"; break;
				case "A": $gm="aa"; break;
				case "B": $gm="bb"; break;
				case "AB": $gm="ab"; break;
	}
	switch($tp){
				case "O": $gp="ii"; break;
				case "A": $gp="aa"; break;
				case "B": $gp="bb"; break;
				case "AB": $gp="ab"; break;
	}
	$g1=$gm[0].$gp[0];
	$g1;
	$g2=$gm[0].$gp[1];
	$g2;
	$g3=$gm[1].$gp[0];
	$g3;
	$g4=$gm[1].$gp[1];
	$g4;
	$t1=0;
	$t2=0;
	$t3=0;
	$t4=0;
	switch($g1){
				case "ii": $t1++; break;
				case "aa": $t2++; break;
				case "bb": $t3++; break;
				case "ai": $t2++; break;
				case "bi": $t3++; break;
				case "ia": $t2++; break;
				case "ib": $t3++; break;
				case "ba": $t4++; break;
				case "ab": $t4++; break;
				
	}
	switch($g2){
				case "ii": $t1++; break;
				case "aa": $t2++; break;
				case "bb": $t3++; break;
				case "ab": $t4++; break;
				case "ai": $t2++; break;
				case "bi": $t3++; break;
				case "ia": $t2++; break;
				case "ib": $t3++; break;
				case "ba": $t4++; break;
	}
	switch($g3){
				case "ii": $t1++; break;
				case "aa": $t2++; break;
				case "bb": $t3++; break;
				case "ab": $t4++; break;
				case "ai": $t2++; break;
				case "bi": $t3++; break;
				case "ia": $t2++; break;
				case "ib": $t3++; break;
				case "ba": $t4++; break;
	}
	switch($g4){
				case "ii": $t1++; break;
				case "aa": $t2++; break;
				case "bb": $t3++; break;
				case "ab": $t4++; break;
				case "ai": $t2++; break;
				case "bi": $t3++; break;
				case "ia": $t2++; break;
				case "ib": $t3++; break;
				case "ba": $t4++; break;
	}
	$p1=number_format( $t1*100/4, 0, ",", "." );
	$p2=number_format( $t2*100/4, 0, ",", "." );
	$p3=number_format( $t3*100/4, 0, ",", "." );
	$p4=number_format( $t4*100/4, 0, ",", "." );
	echo"
		<div id='todas'>
		<div class='cada'>
		<img src='/db/lab/tipo-sanguineo/o.jpg'>
		<div class='titulo'>
		<span class='percent'>O</span><span class='nro_percent'>".$p1."%</span><br>
		</div>
		</div>
		<div class='cada'>
		<img src='/db/lab/tipo-sanguineo/a.jpg'>
		<div class='titulo'>
		<span class='percent'>A</span><span class='nro_percent'> ".$p2."%</span><br>
		</div>
		</div>
		<div class='cada'>
		<img src='/db/lab/tipo-sanguineo/b.jpg'>
		<div class='titulo'>
		<span class='percent'>B</span><span class='nro_percent'> ".$p3."%</span><br>
		</div>
		</div>
		<div class='cada'>
		<img src='/db/lab/tipo-sanguineo/ab.jpg'>
		<div class='titulo'>
		<span class='percent'>AB</span><span class='nro_percent'>".$p4."%</span><br>
		</div>
		</div>
		</div>
	";
	
}else{
?>
<div class="formulario">
<form method="post" action="">
	<label class='tit'>Tipo sanguíneo do pai:</label>
	<select name='tp' class="txt">
		<option value="O">O&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
		<option value="A">A</option>
		<option value="B">B</option>
		<option value="AB">AB</option>
	</select>
	<label class='tit'>Tipo sanguíneo da mãe:</label>
	<select name='tm' class="txt">
		<option value="O">O&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
		<option value="A">A</option>
		<option value="B">B</option>
		<option value="AB">AB</option>
	</select>
	<input type='submit' value='Ok' name='ok' class='btn'>
</form>
</div>
<?php
}
?>