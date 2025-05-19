// 移动端菜单的交互功能
document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('menuButton');
  const closeMenu = document.getElementById('closeMenu');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuButton && closeMenu && mobileMenu) {
    menuButton.addEventListener('click', () => {
      mobileMenu.classList.remove('-translate-x-full');
    });

    closeMenu.addEventListener('click', () => {
      mobileMenu.classList.add('-translate-x-full');
    });
  }
}); 