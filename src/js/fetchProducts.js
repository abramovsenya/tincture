const postContainer = document.querySelector('.post-container');
let start = 0;
let limit = 10;

// Функция для загрузки и отображения постов
// ?_start=${start}&_limit=${limit} мб в ссылке должно быть
// `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}` - бывшая ссылка
async function getPosts(start, limit) {
	try {
		const response = await fetch(`/data/products.json`);
		const posts = await response.json();
		posts.forEach(post => {
			const postElement = document.createElement('div');
			postElement.classList.add('post');
			postElement.innerHTML = `
				<img src="${post.image}">
				<div class="swiper-slide__about">
        <p class="swiper-slide__about-name">${post.name}</p>
        <p class="swiper-slide__about-about">${post.descriptions}</p>
				<p class="swiper-slide__about-about-price">${post.price}₽</p>
				<a class="swiper-slide__about-btn" href="#"><img src="./src/assets/icons/podond.svg" alt="icon" />В	заказ</a>
				</div>
      `;
			postContainer.appendChild(postElement);
		});
	} catch (error) {
		console.error(error);
	}
}

// Загрузка первых 10 постов
getPosts(start, limit);

// Функция для проверки, была ли страница прокручена до конца
function isPageBottom() {
	return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

// Обработчик события прокрутки страницы
window.addEventListener('scroll', async () => {
	if (isPageBottom()) {
		start += limit;
		console.log(start);
		await getPosts(start, limit);
	}
});
