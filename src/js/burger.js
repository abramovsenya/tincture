const menuBtn = document.querySelector('.header__burger');
const menu = document.querySelector('.header__nav-mobile');
const menuClose = document.querySelectorAll('.header__menu-mobile-link');

menuBtn.addEventListener('click', () => {
	menu.classList.toggle('show');
	menuBtn.classList.toggle('active');
});

menuClose.forEach(link =>
	link.addEventListener('click', () => {
		menuBtn.classList.remove('active'), menu.classList.remove('show');
	})
);
