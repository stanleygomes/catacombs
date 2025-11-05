import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Página inicial - Via Veritas Vita" },
    { name: "description", content: "Bem vindo a nossa ONG" },
  ];
}

export default function Home() {
  return (
    <div>
      <img src="images/pagina-inicial.jpg" alt="Jovens reunidos estudando" className="index-img" />

      <section className="missao-visao-valores">
        <div className="missao-visao-valores-text">
          <h2>Missão, Visão e Valores</h2>
          <p><strong>Missão:</strong> Ensinar jovens sobre a Palavra de Deus e teologia, promovendo transformação social e espiritual.</p>
          <p><strong>Visão:</strong> Ser referência nacional em educação cristã para jovens.</p>
          <p><strong>Valores:</strong> Fé, respeito, ética e compromisso social.</p>
        </div>
        <div className="missao-visao-valores-img">
          <img src="images/missao-visao-valores.png" alt="Jovens estudando a Bíblia" />
        </div>
      </section>
      <section className="historico-conquistas">
        <h2>Histórico e Conquistas</h2>
        <p>Fundada em 2022, a ONG já impactou mais de 200 jovens, realizou 15 eventos e distribuiu 500 livros de teologia.</p>
        <div className="flex-row">
          <div className="conquista-card">
            <img src="images/medalha.jpg" alt="Prêmio Jovem Transformador" />
            <div>
              <strong>Prêmio Jovem Transformador 2024</strong><br />
              <span>Reconhecimento pelo impacto social e educacional promovido entre jovens da comunidade.</span>
            </div>
          </div>
          <div className="conquista-card">
            <img src="images/igreja.jpg" alt="Parceria Igrejas" />
            <div>
              <strong>Parceria com 5 igrejas locais</strong><br />
              <span>Trabalho conjunto com igrejas para ampliar o alcance dos projetos e fortalecer valores cristãos.</span>
            </div>
          </div>
          <div className="conquista-card">
            <img src="images/jovens.jpg" alt="Projeto Palavra Viva" />
            <div>
              <strong>Projeto "Palavra Viva"</strong><br />
              <span>Iniciativa de estudos bíblicos e atividades culturais reconhecida pela comunidade local.</span>
            </div>
          </div>
        </div>
      </section>
      <section className="equipe">
        <h2>Equipe</h2>
        <div className="flex-row">
          <div className="equipe-card">
            <img src="images/pedro.jpg" alt="Pedro" />
            <strong>Pedro</strong><br />
            Presidente
          </div>
          <div className="equipe-card">
            <img src="images/joao.jpg" alt="João" />
            <strong>João</strong><br />
            Coordenador de Projetos
          </div>
          <div className="equipe-card">
            <img src="images/tiago.jpg" alt="Tiago" />
            <strong>Tiago</strong><br />
            Voluntário Sênior
          </div>
          <div className="equipe-card">
            <img src="images/andre.jpg" alt="André" />
            <strong>André</strong><br />
            Tesoureiro
          </div>
          <div className="equipe-card">
            <img src="images/rute.jpg" alt="Rute" />
            <strong>Rute</strong><br />
            Secretária
          </div>
          <div className="equipe-card">
            <img src="images/maria.jpg" alt="Maria" />
            <strong>Maria</strong><br />
            Voluntária
          </div>
        </div>
      </section>
      <section className="transparencia">
        <h2>Relatórios de Transparência</h2>
        <p>Todos os anos publicamos relatórios de atividades e prestação de contas. Solicite pelo e-mail abaixo.</p>
      </section>
      <section className="contato">
        <h2>Contato</h2>
        <address className="contato-info">
          Email: contato@viaveritasvita.org<br />
          Telefone: (11) 99999-9999<br />
          Endereço: Rua Esperança, 123, São Paulo - SP
        </address>
      </section>      
    </div>
  );
}
