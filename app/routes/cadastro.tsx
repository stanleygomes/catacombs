import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cadastro - Via Veritas Vita" },
    { name: "description", content: "Faça parte da transformação na vida de jovens e famílias." },
  ];
}

export default function CadastroPage() {
  return (
    <div>
      <img src="../images/projetos.jpg" alt="Doação" className="header-img" />

      <section className="cadastro-box">
          <h2>Formulário de Cadastro</h2>
          <div className="cadastro-box-flex">
            <div className="cadastro-info">
              <p><strong>Junte-se a nós e faça parte da transformação!</strong></p>
              <p>Acreditamos que cada pessoa pode ser instrumento de mudança na vida de jovens e famílias. Seja voluntário ou apoiador e contribua para espalhar a Palavra de Deus e valores cristãos na sociedade.</p>
              <div className="cadastro-tipos">
                <div className="cadastro-tipo">
                  <h3>Quero ser Voluntário</h3>
                  <p>Como voluntário, você participa diretamente dos projetos, eventos e ações sociais, ajudando jovens a crescerem na fé e no conhecimento bíblico. Receba capacitação, faça parte de uma equipe engajada e seja exemplo de amor ao próximo.</p>
                </div>
                <div className="cadastro-tipo">
                  <h3>Quero ser Apoiador</h3>
                  <p>Como apoiador, você contribui para a sustentabilidade dos projetos, seja com doações, divulgação ou apoio institucional. Sua participação é fundamental para que mais jovens sejam alcançados e transformados.</p>
                </div>
              </div>
            </div>
            <form id="cadastroForm" autoComplete="on" className="formulario cadastro-form">
            <fieldset>
              <legend>Dados Pessoais</legend>
              <label htmlFor="nome">Nome Completo:</label>
              <input type="text" id="nome" name="nome" required placeholder="Ex: João da Silva" className="input-campo" />

              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" name="email" required placeholder="Ex: joao@email.com" className="input-campo" />

              <label htmlFor="cpf">CPF:</label>
              <input type="text" id="cpf" name="cpf" required maxLength={14} pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" placeholder="Ex: 000.000.000-00" className="input-campo" />

              <label htmlFor="telefone">Telefone:</label>
              <input type="tel" id="telefone" name="telefone" required maxLength={15} pattern="\(\d{2}\) \d{5}-\d{4}" placeholder="Ex: (11) 91234-5678" className="input-campo" />

              <label htmlFor="nascimento">Data de Nascimento:</label>
              <input type="date" id="nascimento" name="nascimento" required className="input-campo" />
            </fieldset>
            <fieldset>
              <legend>Endereço</legend>
              <label htmlFor="endereco">Endereço:</label>
              <input type="text" id="endereco" name="endereco" required placeholder="Ex: Rua Esperança, 123" className="input-campo" />

              <label htmlFor="cep">CEP:</label>
              <input type="text" id="cep" name="cep" required maxLength={9} pattern="\d{5}-\d{3}" placeholder="Ex: 00000-000" className="input-campo" />

              <label htmlFor="cidade">Cidade:</label>
              <input type="text" id="cidade" name="cidade" required placeholder="Ex: São Paulo" className="input-campo" />

              <label htmlFor="estado">Estado:</label>
              <input type="text" id="estado" name="estado" required maxLength={2} pattern="[A-Za-z]{2}" placeholder="Ex: SP" className="input-campo" />
            </fieldset>
            <fieldset>
              <legend>Tipo de Participação</legend>
              <label><input type="radio" name="tipo" value="voluntario" required /> Voluntário</label>
              <label><input type="radio" name="tipo" value="apoiador" required / > Apoiador</label>
            </fieldset>
            <button type="submit" className="btn">Enviar</button>
            <div className="cadastro-badges">
              <span className="badge badge-success">Novo Voluntário</span>
              <span className="badge badge-warning">Apoiador</span>
              <span className="badge badge-secondary">Cadastro Aberto</span>
            </div>
          </form>
        </div>
  <section className="cadastro-instrucoes">
          <h3>Instruções</h3>
          <ul>
            <li>Após o envio, nossa equipe entrará em contato por e-mail.</li>
            <li>Voluntários recebem certificado digital de participação.</li>
            <li>Apoiadores recebem relatórios de transparência anuais.</li>
          </ul>
        </section>
      </section>
    </div>
  );
}
