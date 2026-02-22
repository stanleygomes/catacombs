import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Página inicial - Via Veritas Vita" },
    { name: "description", content: "Bem vindo a nossa ONG" },
  ];
}

export default function Home() {
  return (
    <main role="main" aria-label="Página inicial da ONG Via Veritas Vita">
      <h1 className="sr-only">Via Veritas Vita - Página Inicial</h1>
      <img src="images/pagina-inicial.jpg" alt="Grupo de jovens reunidos estudando em uma sala iluminada" className="index-img" />

      <section className="missao-visao-valores" aria-labelledby="missao-visao-valores-heading">
        <div className="missao-visao-valores-text">
          <h2 id="missao-visao-valores-heading">Missão, Visão e Valores</h2>
          <p><strong>Missão:</strong> Ensinar jovens sobre a Palavra de Deus e teologia, promovendo transformação social e espiritual.</p>
          <p><strong>Visão:</strong> Ser referência nacional em educação cristã para jovens.</p>
          <p><strong>Valores:</strong> Fé, respeito, ética e compromisso social.</p>
        </div>
        <div className="missao-visao-valores-img">
          <img src="images/missao-visao-valores.png" alt="Jovens estudando a Bíblia em grupo, sentados em círculo" />
        </div>
      </section>
      <section className="historico-conquistas" aria-labelledby="historico-conquistas-heading">
        <h2 id="historico-conquistas-heading">Histórico e Conquistas</h2>
        <p>Fundada em 2022, a ONG já impactou mais de 200 jovens, realizou 15 eventos e distribuiu 500 livros de teologia.</p>
        <div className="flex-row">
          <div className="conquista-card">
            <img src="images/medalha.jpg" alt="Medalha do Prêmio Jovem Transformador 2024" />
            <div>
              <strong>Prêmio Jovem Transformador 2024</strong><br />
              <span>Reconhecimento pelo impacto social e educacional promovido entre jovens da comunidade.</span>
            </div>
          </div>
          <div className="conquista-card">
            <img src="images/igreja.jpg" alt="Grupo de pessoas em frente a uma igreja, representando parceria" />
            <div>
              <strong>Parceria com 5 igrejas locais</strong><br />
              <span>Trabalho conjunto com igrejas para ampliar o alcance dos projetos e fortalecer valores cristãos.</span>
            </div>
          </div>
          <div className="conquista-card">
            <img src="images/jovens.jpg" alt="Jovens participando do Projeto Palavra Viva, estudando e interagindo" />
            <div>
              <strong>Projeto "Palavra Viva"</strong><br />
              <span>Iniciativa de estudos bíblicos e atividades culturais reconhecida pela comunidade local.</span>
            </div>
          </div>
        </div>
      </section>
      <section className="equipe" aria-labelledby="equipe-heading">
        <h2 id="equipe-heading">Equipe</h2>
        <div className="flex-row">
          <div className="equipe-card">
            <img src="images/pedro.jpg" alt="Foto de Pedro, Presidente da ONG" />
            <strong>Pedro</strong><br />
            <span>Presidente</span>
          </div>
          <div className="equipe-card">
            <img src="images/joao.jpg" alt="Foto de João, Coordenador de Projetos" />
            <strong>João</strong><br />
            <span>Coordenador de Projetos</span>
          </div>
          <div className="equipe-card">
            <img src="images/tiago.jpg" alt="Foto de Tiago, Voluntário Sênior" />
            <strong>Tiago</strong><br />
            <span>Voluntário Sênior</span>
          </div>
          <div className="equipe-card">
            <img src="images/andre.jpg" alt="Foto de André, Tesoureiro" />
            <strong>André</strong><br />
            <span>Tesoureiro</span>
          </div>
          <div className="equipe-card">
            <img src="images/rute.jpg" alt="Foto de Rute, Secretária" />
            <strong>Rute</strong><br />
            <span>Secretária</span>
          </div>
          <div className="equipe-card">
            <img src="images/maria.jpg" alt="Foto de Maria, Voluntária" />
            <strong>Maria</strong><br />
            <span>Voluntária</span>
          </div>
        </div>
      </section>
      <section className="transparencia" aria-labelledby="transparencia-heading">
        <h2 id="transparencia-heading">Relatórios de Transparência</h2>
        <p>Todos os anos publicamos relatórios de atividades e prestação de contas. Solicite pelo e-mail abaixo.</p>
      </section>
      <section className="contato" aria-labelledby="contato-heading">
        <h2 id="contato-heading">Contato</h2>
        <address className="contato-info">
          <span aria-label="Email">Email: contato@viaveritasvita.org</span><br />
          <span aria-label="Telefone">Telefone: (11) 99999-9999</span><br />
          <span aria-label="Endereço">Endereço: Rua Esperança, 123, São Paulo - SP</span>
        </address>
      </section>
    </main>
  );
}
