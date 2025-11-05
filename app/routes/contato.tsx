import type { Route } from "./+types/home";

import { useEffect } from "react";
import { enableKeyboardNavigation } from "../utils/focusNavigation";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contato - Via Veritas Vita" },
    { name: "description", content: "Entre em contato e saiba como ajudar." },
  ];
}

export default function ContatoPage() {
  useEffect(() => {
    enableKeyboardNavigation(".formulario");
  }, []);

  return (
    <main role="main" aria-label="Página de contato da ONG Via Veritas Vita">
      <h1 className="sr-only">Contato - Via Veritas Vita</h1>
      <img src="../images/contato.jpg" alt="Equipe da ONG Via Veritas Vita pronta para atender" className="header-img" />
      <section aria-labelledby="contato-heading">
        <h2 id="contato-heading">Fale Conosco</h2>
        <div className="contato-box">
          <div className="contato-info">
            <p>Entre em contato com a equipe da ONG Via Veritas Vita para dúvidas, sugestões, parcerias ou informações sobre nossos projetos.</p>
            <ul>
              <li><strong>Email:</strong> <span aria-label="Email">contato@viaveritasvita.org</span></li>
              <li><strong>Telefone:</strong> <span aria-label="Telefone">(11) 99999-9999</span></li>
              <li><strong>Endereço:</strong> <span aria-label="Endereço">Rua Esperança, 123, São Paulo - SP</span></li>
            </ul>
            <p>Você também pode nos enviar uma mensagem pelo formulário abaixo:</p>
          </div>
          <form autoComplete="on" className="formulario" aria-labelledby="formulario-contato-legend">
            <fieldset>
              <legend id="formulario-contato-legend">Mensagem</legend>
              <label htmlFor="nome">Nome:</label>
              <input type="text" id="nome" name="nome" required className="input-campo" />
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" name="email" required className="input-campo" />
              <label htmlFor="assunto">Assunto:</label>
              <input type="text" id="assunto" name="assunto" required className="input-campo" />
              <label htmlFor="mensagem">Mensagem:</label>
              <textarea id="mensagem" name="mensagem" required rows={5} className="input-campo"></textarea>
              <button type="submit" className="btn">Enviar</button>
            </fieldset>
            <div style={{ marginTop: "20px" }}>
              <span className="badge badge-info">Fale Conosco</span>
              <span className="badge badge-success">Equipe Pronta</span>
              <span className="badge badge-danger">Resposta Rápida</span>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
