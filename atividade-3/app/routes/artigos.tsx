import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Artigos - Via Veritas Vita" },
    { name: "description", content: "Leia nossos artigos e reflexões sobre fé e transformação." },
  ];
}

export default function ArtigosPage() {
  return (
    <div>
      <section>
        <h2>Artigos e Reflexões</h2>
        <article className="blog-artigo">
          <h3>O Propósito da Juventude Cristã</h3>
          <div className="meta">Publicado em 29/10/2025 por Equipe Via Veritas Vita</div>
          <p>A juventude é um período marcado por descobertas, desafios e decisões que moldam o futuro. Para o jovem cristão, esse tempo é também uma oportunidade única de viver os valores do Evangelho e ser luz no mundo. Em meio às pressões sociais e às incertezas do cotidiano, buscar o propósito de Deus para a vida é essencial para uma caminhada significativa e transformadora.</p>
          <blockquote>“Ninguém despreze a tua mocidade; pelo contrário, sê exemplo dos fiéis, na palavra, no procedimento, no amor, na fé, na pureza.” <br /><em>1 Timóteo 4:12</em></blockquote>
          <p>Ser jovem cristão é assumir o compromisso de crescer espiritualmente, desenvolver talentos e servir ao próximo com alegria. É tempo de aprender, questionar, construir amizades verdadeiras e fortalecer a fé. Através do estudo da Bíblia, da oração e do envolvimento em projetos sociais, cada jovem pode descobrir seu chamado e impactar positivamente sua família, escola e comunidade.</p>
          <p>Na Via Veritas Vita, acreditamos que cada jovem é protagonista de sua história e pode ser instrumento de transformação. Por isso, incentivamos a busca pelo conhecimento, o engajamento em ações solidárias e o cultivo de uma espiritualidade autêntica. O propósito da juventude cristã é viver com esperança, coragem e amor, inspirando outros a seguir o caminho da verdade e da vida.</p>
        </article>
      </section>
    </div>
  );
}
