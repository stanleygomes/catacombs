// utils/focusNavigation.ts
// Utilitário para navegação por teclado em formulários

export function enableKeyboardNavigation(formSelector: string) {
  const form = document.querySelector(formSelector);
  if (!form) return;

  const focusable = Array.from(
    form.querySelectorAll<HTMLElement>(
      'input:not([disabled]), textarea:not([disabled]), select:not([disabled]), button:not([disabled])'
    )
  );

  form.addEventListener('keydown', (e: Event) => {
    const event = e as KeyboardEvent;
    if (event.key === 'Enter' || event.key === 'ArrowDown') {
      const idx = focusable.indexOf(document.activeElement as HTMLElement);
      if (idx > -1 && idx < focusable.length - 1) {
        focusable[idx + 1].focus();
        event.preventDefault();
      }
    } else if (event.key === 'ArrowUp') {
      const idx = focusable.indexOf(document.activeElement as HTMLElement);
      if (idx > 0) {
        focusable[idx - 1].focus();
        event.preventDefault();
      }
    }
  });
}
