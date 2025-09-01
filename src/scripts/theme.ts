export function initThemeToggle(): void {
  const themeToggle = document.getElementById('theme-toggle') as HTMLButtonElement | null;
  
  // Aplicar tema inicial inmediatamente (antes de DOMContentLoaded)
  const savedTheme = localStorage.getItem('darkMode');
  if (savedTheme === 'true') {
    document.documentElement.classList.add('dark');
  }
  
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      // Usar requestAnimationFrame para optimizar el cambio
      requestAnimationFrame(() => {
        const isDark = document.documentElement.classList.contains('dark');
        
        if (isDark) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('darkMode', 'false');
        } else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('darkMode', 'true');
        }
      });
    });
  }
}

// Ejecutar inmediatamente para evitar flash
(function() {
  const savedTheme = localStorage.getItem('darkMode');
  if (savedTheme === 'true') {
    document.documentElement.classList.add('dark');
  }
})();