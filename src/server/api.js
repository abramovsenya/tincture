import { promise } from './fetch.js';

promise
	.then(products => {
		const swiperContainers = document.querySelectorAll('.swiper');
		swiperContainers.forEach((swiperContainer, index) => {
			const productsContainer =
				swiperContainer.querySelector('.swiper-wrapper');

			products.forEach(post => {
				const productsElement = document.createElement('div');
				productsElement.classList.add('swiper-slide');
				productsElement.innerHTML = `<a class='swiper-slide__link' href='#'>
       <img
        class='swiper-slide__image'
        src='${post.image}'
        alt='eda'
       />
       <div class='swiper-slide__about-inner'>
        <p class='swiper-slide__about-inner-name'>${post.name}</p>
        <p class='swiper-slide__about-inner-about'>${post.descriptions}</p>
        <div class='swiper-slide__about-inner-down'>
         <p class='swiper-slide__about-inner-down-price'>${post.price} ₽</p>
         <a class='swiper-slide__about-inner-down-btn' href='#'>
          <img src='/src/assets/icons/corzina.svg' alt='corzina' />В заказ
         </a>
        </div>
       </div>
      </a>`;

				productsContainer.appendChild(productsElement);
			});

			new Swiper(swiperContainer, {
				// настройки слайдера
				spaceBetween: 30,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				pagination: {
					el: '.swiper-pagination',
					dynamicBullets: true,
					dynamicMainBullets: 1,
				},
				mousewheel: {
					enabled: false,
				},
				touch: {
					enabled: false,
				},

				autoplay: { delay: '5000' },

				loop: true,
				lazyPreloadPrevNext: 4,
				slidesPerView: 1,
				breakpoints: {
					768: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 40,
					},
					1440: {
						slidesPerView: 4,
						spaceBetween: 50,
					},
				},

				mousewheel: true,
				keyboard: true,
			});
		});
	})
	.catch(error => {
		console.log(error);
	});
// import { promise } from './fetch.js';

// promise
// 	.then(products => {
// 		const categories = {}; // Создаем объект для хранения товаров по категориям
// 		products.forEach(product => {
// 			if (!categories[product.category]) {
// 				categories[product.category] = []; // Если категория еще не создана, создаем новый массив для товаров этой категории
// 			}
// 			categories[product.category].push(product); // Добавляем товар в соответствующую категорию
// 		});

// 		const swiperContainers = document.querySelectorAll('.swiper');

// 		Object.keys(categories).forEach(category => {
// 			const categoryProducts = categories[category];
// 			const swiperContainer = document.createElement('div');
// 			swiperContainer.classList.add('swiper');
// 			const productsContainer = document.createElement('div');
// 			productsContainer.classList.add('swiper-wrapper');

// 			categoryProducts.forEach(post => {
// 				const productsElement = document.createElement('div');
// 				productsElement.classList.add('swiper-slide');
// 				productsElement.innerHTML = `<a class='swiper-slide__link' href='#'>
// 					<img
// 						class='swiper-slide__image'
// 						src='${post.image}'
// 						alt='eda'
// 					/>
// 					<div class='swiper-slide__about-inner'>
// 						<p class='swiper-slide__about-inner-name'>${post.name}</p>
// 						<p class='swiper-slide__about-inner-about'>${post.descriptions}</p>
// 						<div class='swiper-slide__about-inner-down'>
// 							<p class='swiper-slide__about-inner-down-price'>${post.price} ₽</p>
// 							<a class='swiper-slide__about-inner-down-btn' href='#'>
// 								<img src='/src/assets/icons/corzina.svg' alt='corzina' />В заказ
// 							</a>
// 						</div>
// 					</div>
// 				</a>`;
// 				console.log(productsElement);
// 				productsContainer.appendChild(productsElement);
// 			});

// 			swiperContainer.appendChild(productsContainer);

// 			document.body.appendChild(swiperContainer);

// 			new Swiper(swiperContainer, {
// 				// настройки слайдера
// 				spaceBetween: 30,
// 				navigation: {
// 					nextEl: '.swiper-button-next',
// 					prevEl: '.swiper-button-prev',
// 				},
// 				pagination: {
// 					el: '.swiper-pagination',
// 					dynamicBullets: true,
// 					dynamicMainBullets: 1,
// 				},
// 				mousewheel: {
// 					enabled: false,
// 				},
// 				touch: {
// 					enabled: false,
// 				},

// 				autoplay: { delay: '5000' },

// 				loop: true,
// 				lazyPreloadPrevNext: 4,
// 				slidesPerView: 1,
// 				breakpoints: {
// 					768: {
// 						slidesPerView: 2,
// 						spaceBetween: 20,
// 					},
// 					1024: {
// 						slidesPerView: 3,
// 						spaceBetween: 40,
// 					},
// 					1440: {
// 						slidesPerView: 4,
// 						spaceBetween: 50,
// 					},
// 				},

// 				mousewheel: true,
// 				keyboard: true,
// 			});
// 		});
// 	})
// 	.catch(error => {
// 		console.log(error);
// 	});
