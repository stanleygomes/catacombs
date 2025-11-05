import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Estudos - Via Veritas Vita" },
    { name: "description", content: "Leia nossos estudos e reflexões sobre fé e transformação." },
  ];
}

export default function EstudosPage() {
  return (
    <div>
      <section>
        <h2>Recursos de Estudos</h2>
        <p>Nossos estudos bíblicos são desenvolvidos especialmente para jovens que desejam crescer na fé e no conhecimento da Palavra de Deus. Através de materiais didáticos, apostilas e recursos interativos, oferecemos conteúdo estruturado para facilitar o aprendizado teológico de forma prática e acessível. Cada material é cuidadosamente elaborado por nossa equipe de voluntários capacitados, visando fortalecer os fundamentos cristãos e promover reflexões profundas sobre as Escrituras.</p>
        
        <p>Além dos estudos tradicionais, disponibilizamos roteiros temáticos que abordam questões relevantes do cotidiano jovem sob a perspectiva bíblica. Temas como propósito de vida, relacionamentos, liderança cristã e serviço ao próximo são explorados de maneira dinâmica e contextualizada. Nosso objetivo é equipar os jovens não apenas com conhecimento teórico, mas também com ferramentas práticas para aplicar os ensinamentos bíblicos em suas vidas diárias, contribuindo para sua formação integral como cidadãos e cristãos comprometidos.</p>
      </section>
    </div>
  );
}
