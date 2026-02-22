import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import React, { useEffect } from "react";
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
  const [theme, setTheme] = React.useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem('theme');
      if (stored === 'dark' || stored === 'light') return stored;
    }
    return 'light';
  });

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', theme);
    }
    const root = document.documentElement;
    if (theme === 'dark') {
      root.style.setProperty('--color-primary', '#222e2c');
      root.style.setProperty('--color-secondary', '#23272b');
      root.style.setProperty('--color-accent', '#1a1d1f');
      root.style.setProperty('--color-success', '#21897e');
      root.style.setProperty('--color-danger', '#c0392b');
      root.style.setProperty('--color-warning', '#e1a948');
      root.style.setProperty('--color-info', '#1565c0');
      root.style.setProperty('--color-neutral', '#181a1b');
      root.style.setProperty('--color-dark', '#f3efe1');
    } else {
      root.style.setProperty('--color-primary', '#357960');
      root.style.setProperty('--color-secondary', '#f3efe1');
      root.style.setProperty('--color-accent', '#e6e2b6');
      root.style.setProperty('--color-success', '#21897e');
      root.style.setProperty('--color-danger', '#c0392b');
      root.style.setProperty('--color-warning', '#e1a948');
      root.style.setProperty('--color-info', '#1565c0');
      root.style.setProperty('--color-neutral', '#f5f5dc');
      root.style.setProperty('--color-dark', '#2e3236');
    }
  }, [theme]);

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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h1>Via Veritas Vita</h1>
              <button
                type="button"
                aria-label={theme === 'dark' ? 'Alternar para modo claro' : 'Alternar para modo escuro'}
                className="btn"
                style={{ marginLeft: 16, minWidth: 44 }}
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              >
                {theme === 'dark' ? '🌙 Modo Escuro' : '☀️ Modo Claro'}
              </button>
            </div>
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
