import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Materiais - Via Veritas Vita" },
    { name: "description", content: "Leia nossos materiais e reflexões sobre fé e transformação." },
  ];
}

export default function MateriaisPage() {
  return (
    <main role="main" aria-label="Materiais para Download">
      <h1 className="sr-only">Materiais para Download</h1>
      <section aria-labelledby="materiais-heading">
        <div className="materiais-lista" aria-labelledby="materiais-lista-heading">
          <h3 id="materiais-lista-heading">Recursos para Download</h3>
          <ul>
            <li>
              <a href="https://www.bibliaonline.com.br/" target="_blank" rel="noopener" aria-label="Bíblia Online - Acesse diferentes versões da Bíblia para estudo e pesquisa">Bíblia Online</a>
              <span>- Acesse diferentes versões da Bíblia para estudo e pesquisa.</span>
            </li>
            <li>
              <a href="https://www.portaldoteologo.com/" target="_blank" rel="noopener" aria-label="Portal do Teólogo - Artigos, apostilas e materiais teológicos gratuitos">Portal do Teólogo</a>
              <span>- Artigos, apostilas e materiais teológicos gratuitos.</span>
            </li>
            <li>
              <a href="https://www.sociedadebiblica.com.br/" target="_blank" rel="noopener" aria-label="Sociedade Bíblica do Brasil - Livros, estudos e recursos para aprofundar o conhecimento bíblico">Sociedade Bíblica do Brasil</a>
              <span>- Livros, estudos e recursos para aprofundar o conhecimento bíblico.</span>
            </li>
            <li>
              <a href="https://www.cpad.com.br/" target="_blank" rel="noopener" aria-label="CPAD - Editora Cristã - Apostilas, livros e materiais para jovens e líderes cristãos">CPAD - Editora Cristã</a>
              <span>- Apostilas, livros e materiais para jovens e líderes cristãos.</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
