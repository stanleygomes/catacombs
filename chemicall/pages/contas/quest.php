<?php
	//-------------------------------------------ENVIAR PERGUNTA----------------------------------------------
	if($urlpag=="add"){
?>
<form method="post" action="/lib/adm.lib.php">
    <div class="linha">
        <div class="titulopg">Enviar Pergunta</div>
    </div>
    <input type="hidden" name="idusuario" value="<?php echo $usuarioid;?>"/>
    <div class="linha">
        <div class="nome">Pergunta</div>
        <textarea class="txt textarea editor" name="pergunta"></textarea>
    </div>
    <div class="alerta alertatotal">
    	<p>Preencha apenas os campos necess&aacute;rios</p>
    </div>
    <div class="linha">
        <div class="nome">Alternativa 1</div>
        <input type="text" class="txt txt-m" name="op1"/>
    </div>
    <div class="linha">
        <div class="nome">Alternativa 2</div>
        <input type="text" class="txt txt-m" name="op2"/>
    </div>
    <div class="linha">
        <div class="nome">Alternativa 3</div>
        <input type="text" class="txt txt-m" name="op3"/>
    </div>
    <div class="linha">
        <div class="nome">Alternativa 4</div>
        <input type="text" class="txt txt-m" name="op4"/>
    </div>
    <div class="linha">
        <div class="nome">Alternativa correta</div>
        <div class="radio">
        	<input type="radio" name="opok" value="op1"/> Alternativa 1
        </div>
        <div class="radio">
    	    <input type="radio" name="opok" value="op2"/> Alternativa 2
        </div>
        <div class="radio">
	        <input type="radio" name="opok" value="op3"/> Alternativa 3
        </div>
        <div class="radio">
            <input type="radio" name="opok" value="op4"/> Alternativa 4
        </div>
    </div>
    <div class="linha">
        <div class="nome">Categoria</div>
    	<select name="categoria" class="txt txt-m">
        	<?php
				$sql="SELECT * FROM `categorias`";
				$query=mysql_query($sql);
				$linhas=mysql_num_rows($query);
				while($resultadocat=mysql_fetch_array($query)){
					$id=$resultadocat["id"];
					$titulo=$resultadocat["titulo"];
			?>
					<option value="<?php echo $id; ?>"><?php echo $titulo; ?></option>
            <?php
				}
			?>
        </select>
    </div>
    <div class="divisor"></div>
    <div class="linha">
        <input type="submit" class="btn" name="questadd" value="Enviar pergunta"/>
    </div>
</form>
<?php
	}
	//-------------------------------------------EDITAR PERGUNTA----------------------------------------------
	if($urlpag=="editar"){
?>
<form method="post" action="/lib/adm.lib.php" enctype="multipart/form-data">
    <div class="linha">
        <div class="titulopg">Editar Pergunta</div>
    </div>
    <?php
		$formid=$urladmin[3];
        $sql="SELECT * FROM `quest` WHERE `id`='$formid'";
		$query=mysql_query($sql);
		$resultado=mysql_fetch_array($query);
		$id=$resultado["id"];
		$pergunta=$resultado["pergunta"];
		$op1=$resultado["op1"];
		$op2=$resultado["op2"];
		$op3=$resultado["op3"];
		$op4=$resultado["op4"];
    ?>
    <input type="hidden" name="idusuario" value="<?php echo $usuarioid;?>"/>
    <input type="hidden" name="id" value="<?php echo $id;?>"/>
    <div class="linha">
        <div class="nome">Pergunta</div>
        <textarea class="txt textarea editor" name="pergunta"><?php echo $pergunta;?></textarea>
    </div>
    <div class="alerta alertatotal">
    	<p>Preencha apenas os campos necess&aacute;rios</p>
    </div>
    <div class="linha">
        <div class="nome">Alternativa 1</div>
        <input type="text" class="txt txt-m" name="op1" value="<?php echo $op1;?>"/>
    </div>
    <div class="linha">
        <div class="nome">Alternativa 2</div>
        <input type="text" class="txt txt-m" name="op2" value="<?php echo $op2;?>"/>
    </div>
    <div class="linha">
        <div class="nome">Alternativa 3</div>
        <input type="text" class="txt txt-m" name="op3" value="<?php echo $op3;?>"/>
    </div>
    <div class="linha">
        <div class="nome">Alternativa 4</div>
        <input type="text" class="txt txt-m" name="op4" value="<?php echo $op4;?>"/>
    </div>
    <div class="linha">
        <div class="nome">Alternativa correta</div>
        <div class="radio">
        	<input type="radio" name="opok" value="op1"/> Alternativa 1
        </div>
        <div class="radio">
    	    <input type="radio" name="opok" value="op2"/> Alternativa 2
        </div>
        <div class="radio">
	        <input type="radio" name="opok" value="op3"/> Alternativa 3
        </div>
        <div class="radio">
            <input type="radio" name="opok" value="op4"/> Alternativa 4
        </div>
    </div>
    <div class="linha">
        <div class="nome">Categoria</div>
    	<select name="categoria" class="txt txt-m">
        	<?php
				$sql="SELECT * FROM `categorias`";
				$query=mysql_query($sql);
				$linhas=mysql_num_rows($query);
				while($resultadocat=mysql_fetch_array($query)){
					$id=$resultadocat["id"];
					$titulo=$resultadocat["titulo"];
			?>
					<option value="<?php echo $id; ?>"><?php echo $titulo; ?></option>
            <?php
				}
			?>
        </select>
    </div>
    <div class="divisor"></div>
    <div class="linha">
        <input type="submit" class="btn" name="questeditar" value="Atualizar pergunta"/>
    </div>
</form>
<?php
	}
	//-------------------------------------------LISTAR CONFIGURACAO----------------------------------------------
	if($urlpag=="listar"){
?>
    <div class="linha">
        <div class="titulopg">Listar Perguntas</div>
    </div>
    <div class="linha">
    	<a href="/contas/quest/add">
        	<div class="btn add">Enviar Pergunta</div>
        </a>
    </div>
    <div class="divisor"></div>
    <?php
        $sql="SELECT * FROM `quest`";
		$query=mysql_query($sql);
		while($resultado=mysql_fetch_array($query)){
			$id=$resultado["id"];
			$pergunta=$resultado["pergunta"];
            $status=$resultado["status"];
            if($status=="0"){
                $msg="<br/> - N&atilde;o confirmado!";
            }
    ?>
        <div class="linha linhalista linhamaior">
            <img src="/imagens/adm-quest.png" class="imagem"/>
            <div class="conteudo"><?php echo limitartexto("$pergunta",60).$msg; ?></div>
            <div class="ferramentas">
                <a href="questdel!<?php echo $id; ?>" title="Deletar pergunta" class="deletar">
                    <img src="/imagens/adm-deletar.png" class="item"/>
                </a>
                <a href="/contas/quest/editar/<?php echo $id; ?>" title="Editar pergunta" class="editar">
                    <img src="/imagens/adm-editar.png" class="item"/>
                </a>
                <a href="questok!<?php echo $id; ?>" title="Aceitar pergunta" class="aceitar">
                    <img src="/imagens/adm-aceitar.png" class="item"/>
                </a>
            </div>
        </div>
    <?php
		}
	?>
<?php
	}
?>
