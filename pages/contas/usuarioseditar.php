<form method="post" action="/lib/adm.lib.php" enctype="multipart/form-data">
    <div class="linha">
        <div class="titulopg">Adicionar Página</div>
        <input type="hidden" name="id" value="<?php echo $usuarioid; ?>"/>
    </div>
    <div class="linha">
        <div class="nome">Nome Completo</div>
        <input type="text" class="txt txt-m" name="nomecompleto" value="<?php echo $usuarionomecompleto; ?>"/>
    </div>
    <div class="linha">
        <div class="nome">Login</div>
        <input type="text" class="txt txt-p" name="login" value="<?php echo $usuariologin; ?>"/>
    </div>
    <div class="linha">
        <div class="nome">E-mail</div>
        <input type="text" class="txt txt-m" name="email" value="<?php echo $usuarioemail; ?>"/>
    </div>
    <div class="divisor"></div>
    <div class="linha">
        <div class="nome">Imagem de perfil</div>
        <div class="uploadarea">
            <input type="button" value="Escolher imagem" name="btnuploadaux" class="btnuploadaux"/>
            <input type="file" name="btnupload" class="btnupload" onchange="this.form.btnuploadaux.value=this.value;"/>
        </div>
    </div>
    <div class="divisor"></div>
    <div class="linha">
        <div class="nome">Data de Anivers&aacute;rio</div>
        <input type="text" class="txt txt-p" name="data_aniver" value="<?php echo $usuariodata; ?>"/>
    </div>
    <div class="linha">
        <input type="submit" class="btn" name="usuarioeditar" value="Atualizar Perfil"/>
    </div>
</form>
<div class="divisor"></div>
<form method="post" action="/lib/adm.lib.php">
    <div class="linha">
        <div class="titulopg">Alterar Senha</div>
    </div>
    <div class="linha">
        <div class="nome">Senha atual</div>
		<input type="password" id="senha_atual" class="txt txt-m" name="senha_atual"/>
    </div>
    <div class="linha">
        <div class="nome">Nova senha</div>
		<input type="password" id="senha_nova" class="txt txt-m" name="senha_nova"/>
    </div>
    <div class="linha">
        <div class="nome">Confirmar senha</div>
		<input type="password" id="senha_confirmar" class="txt txt-m" name="senha_confirmar"/>
    </div>
    <div class="linha">
        <input type="submit" class="btn" name="usuariosenha" value="Atualizar Senha"/>
    </div>
</form>