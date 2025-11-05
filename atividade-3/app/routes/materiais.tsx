import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Materiais - Via Veritas Vita" },
    { name: "description", content: "Leia nossos materiais e reflexões sobre fé e transformação." },
  ];
}

export default function MateriaisPage() {
  return (
    <div>
      <section>
        <h2>Materiais</h2>
        <div className="materiais-lista">
          <h3>Recursos para Download</h3>
          <ul>
            <li>
              <a href="https://www.bibliaonline.com.br/" target="_blank" rel="noopener">Bíblia Online</a>
              <span>- Acesse diferentes versões da Bíblia para estudo e pesquisa.</span>
            </li>
            <li>
              <a href="https://www.portaldoteologo.com/" target="_blank" rel="noopener">Portal do Teólogo</a>
              <span>- Artigos, apostilas e materiais teológicos gratuitos.</span>
            </li>
            <li>
              <a href="https://www.sociedadebiblica.com.br/" target="_blank" rel="noopener">Sociedade Bíblica do Brasil</a>
              <span>- Livros, estudos e recursos para aprofundar o conhecimento bíblico.</span>
            </li>
            <li>
              <a href="https://www.cpad.com.br/" target="_blank" rel="noopener">CPAD - Editora Cristã</a>
              <span>- Apostilas, livros e materiais para jovens e líderes cristãos.</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
