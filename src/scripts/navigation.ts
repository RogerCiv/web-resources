// Navigation related scripts
export function initMobileMenu(): void {
  const mobileMenuButton = document.getElementById('mobile-menu-button') as HTMLButtonElement | null;
  const mobileMenu = document.getElementById('mobile-menu') as HTMLDivElement | null;
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Cerrar menú móvil al hacer click en un enlace
  document.querySelectorAll('#mobile-menu a').forEach((link: Element) => {
    link.addEventListener('click', () => {
      if (mobileMenu) {
        mobileMenu.classList.add('hidden');
      }
    });
  });
}