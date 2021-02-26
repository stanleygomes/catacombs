<div class="almeio">
    <form method="post" action="/lib/mail.lib.php">
        <div id="contato" class="pagina fthin">
            <div class="topo">
                <span class="titulo">Deixe sua mensagem</span>
            </div>
            <div class="conteudo">
                <div class="esquerda">
                    <div class="campo">
                        <select name="assunto" class="txt">
                            <option value="Dúvida">D&uacute;vida</option>
                            <option value="Sugestao">Sugest&atilde;o</option>
                            <option value="Comentário">Coment&aacute;rio</option>
                            <option value="Crítica">Cr&iacute;tica</option>
                            <option value="Erro">Reportar erro</option>
                        </select>
                    </div>
                    <div class="campo">
                        <textarea name="mensagem" id="mensagem" class="txt" rows="0" cols="0" required="required"></textarea>
                    </div>
                </div>
                <div class="direita">
                    <div class="campo">
                        <input type="text" name="nome" id="nome" class="txt" required="required" placeholder="José joao"/>
                    </div>
                    <div class="campo">
                        <input type="text" name="email" id="email" class="txt" required="required" placeholder="Exemplo@exemplo.com"/>
                    </div>
                    <div class="campo">
                        <input type="submit" name="enviarmsg" class="btn btn-branco" id="enviarmsg" value="Enviar"/>
                    </div>
                </div>
            </div>
        </div>
    </form>
    <div class="altotal sobrecontato">
        <div id="sobre">
            <div class="item verde">
                <div class="social">
                    <a href="http://www.facebook.com/matheus.martins.583234" target="_blank">
                        <div class="sc fb"></div>
                    </a>
                    <a href="http://www.linkedin.com/pub/matheus-martins-oliveira/43/460/a47" target="_blank">
                        <div class="sc li"></div>
                    </a>
                    <a href="https://plus.google.com/112881819378573136218" target="_blank">
                        <div class="sc gp"></div>
                    </a>
                </div>
                <img src="/imagens/proj-matheus.jpg" class="perfil"/>
                <span class="nome">Matheus Martins</span>
                <span class="form">Desenvolvedor Chefe e Expert em Efeitos Especiais</span>
            </div>
            <div class="item laranja">
                <div class="social">
                    <a href="http://www.facebook.com/renato.argondizzi" target="_blank">
                        <div class="sc fb"></div>
                    </a>
                </div>
                <img src="/imagens/proj-renato.jpg" class="perfil"/>
                <span class="nome">Renato Argondizzi</span>
                <span class="form">Analista e Desenvolvedor Web</span>
            </div>
            <div class="item azul">
                <div class="social">
                    <a href="https://www.facebook.com/stanleygomesdasilva" target="_blank">
                        <div class="sc fb"></div>
                    </a>
                    <a href="http://br.linkedin.com/pub/stanley-gomes/51/679/68b" target="_blank">
                        <div class="sc li"></div>
                    </a>
                </div>
                <img src="/imagens/proj-stanley.jpg" class="perfil"/>
                <span class="nome">Stanley Gomes</span>
                <span class="form">WebMaster e Designer Digital</span>
            </div>
            <div class="item vermelho">
                <div class="social">
                    <a href="https://www.facebook.com/profile.php?id=100004368096044&fref=ts" target="_blank">
                        <div class="sc fb"></div>
                    </a>
                </div>
                <img src="/imagens/proj-thiago.jpg" class="perfil"/>
                <span class="nome">Thiago Ara&uacute;jo</span>
                <span class="form">Administrador de Banco de Dados</span>
            </div>
        </div>
    </div>
</div>
