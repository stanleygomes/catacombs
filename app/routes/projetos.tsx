import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projetos - Via Veritas Vita" },
    { name: "description", content: "Conheça nossos projetos e como apoiar." },
  ];
}

export default function ProjetosPage() {
  return (
    <div>
        <img src="../images/projetos.jpg" alt="Doação" className="header-img" />

        <section>
        <h2>Projetos em Destaque</h2>
        <div className="projetos-lista">
          <div className="projeto-card">
            <img src="../images/familia-crista.jpg" alt="Família Bíblica" className="projeto-img" />
            <h3>Construção de Famílias para Jovens</h3>
            <p>Projeto voltado para jovens e adolescentes, com encontros e palestras sobre o papel da família segundo os princípios bíblicos. Abordamos temas como respeito, amor, perdão e comunhão, fortalecendo os laços familiares e promovendo valores cristãos para a formação de lares sólidos.</p>
            <blockquote>"Eu e minha casa serviremos ao Senhor."<br/><em>Josué 24:15</em></blockquote>
          </div>
          <div className="projeto-card">
            <img src="../images/homem-cristao.jpg" alt="Homem Cristão" className="projeto-img" />
            <h3>Construção do Homem Cristão</h3>
            <p>Encontros e estudos voltados para o desenvolvimento do caráter masculino cristão, incentivando liderança, responsabilidade, integridade e fé. O projeto busca inspirar homens a serem exemplos de conduta, servindo a Deus e à sociedade com humildade e coragem.</p>
            <blockquote>"Sede firmes, inabaláveis, sempre abundantes na obra do Senhor."<br/><em>1 Coríntios 15:58</em></blockquote>
          </div>
          <div className="projeto-card">
            <img src="../images/mulher-crista.jpg" alt="Mulher Cristã" className="projeto-img" />
            <h3>Construção da Mulher Cristã</h3>
            <p>Projeto dedicado ao fortalecimento da identidade feminina cristã, com oficinas, rodas de conversa e estudos sobre virtudes, fé, coragem e sabedoria. Incentivamos mulheres a serem luz em seus lares e comunidades, seguindo o exemplo de mulheres virtuosas da Bíblia.</p>
            <blockquote>"A mulher sábia edifica a sua casa."<br/><em>Provérbios 14:1</em></blockquote>
          </div>
        </div>
      </section>
      <section>
        <h2>Como Doar</h2>
        <div className="doacao-box">
          <div>
            <p>Ajude nossa missão com doações. Toda contribuição é bem-vinda!</p>
            <p>Você pode doar de forma simples e segura para apoiar nossos projetos sociais. Aceitamos doações via Pix, transferência bancária ou presencialmente em nossa sede. Sua doação será utilizada para ampliar o alcance das atividades, adquirir materiais e beneficiar jovens e famílias. Para doar, basta escolher a forma mais conveniente e entrar em contato conosco caso tenha dúvidas. Juntos, podemos transformar vidas!</p>
          </div>
        </div>
      </section>
    </div>
  );
}
