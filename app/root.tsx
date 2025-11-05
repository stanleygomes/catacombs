import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400;700&family=Geist+Mono:wght@400;700&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="ONG Via Veritas Vita - Ensino de jovens sobre a Palavra de Deus e Teologia" />

      <Meta />
      <Links />
    </head>
    <body>
      <div className="container">
        <header className="header">
          <h1>Via Veritas Vita</h1>
          <input type="checkbox" id="menu-hamburger" className="menu-hamburger" />
          <label htmlFor="menu-hamburger" className="menu-toggle-label" aria-label="Abrir menu" tabIndex={0}>
            <span></span>
            <span></span>
            <span></span>
          </label>
          <nav className="menu">
            <a href="/">Início</a>
            <a href="/projetos">Projetos</a>
            <a href="/cadastro">Cadastro</a>
            <a href="/contato">Contato</a>
            <div className="menu-item">
              <a href="#" className="menu-link" tabIndex={0}>Conteúdo ▼</a>
              <div className="dropdown">
                <a href="/estudos">Estudos Bíblicos</a>
                <a href="/artigos">Artigos</a>
                <a href="/materiais">Materiais</a>
              </div>
            </div>
          </nav>
        </header>
        <main>
          {children}
          <ScrollRestoration />
          <Scripts />
        </main>
        <footer className="footer">
          <p>&copy; 2025 Via Veritas Vita. Todos os direitos reservados.</p>
        </footer>
      </div>
    </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
