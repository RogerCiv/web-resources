// Theme related scripts
export function initThemeToggle(): void {
  const themeToggle = document.getElementById('theme-toggle') as HTMLButtonElement | null;
  
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('darkMode', document.documentElement.classList.contains('dark').toString());
    });
    
    // Cargar preferencia de tema
    if (localStorage.getItem('darkMode') === 'true') {
      document.documentElement.classList.add('dark');
    }
  }
}