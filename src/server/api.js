// import { promise } from './fetch.js';

// promise
// 	.then(products => {
// 		const productsContainer = document.querySelector('.swiper-wrapper');

// 		products.forEach(post => {
// 			const productsElement = document.createElement('div');
// 			productsElement.classList.add('swiper-slide');
// 			productsElement.innerHTML = `<a class='swiper-slide__link' href='/src/pages/card.html'>
// 			<img
// 				class='swiper-slide__image'
// 				src='${post.image}'
// 				alt='eda'
// 			/>
// 			<div class='swiper-slide__about-inner'>
// 				<p class='swiper-slide__about-inner-name'>${post.name}</p>
// 				<p class='swiper-slide__about-inner-about'>${post.descriptions}</p>
// 				<div class='swiper-slide__about-inner-down'>
// 					<p class='swiper-slide__about-inner-down-price'>${post.price} ₽</p>
// 					<a class='swiper-slide__about-inner-down-btn' href='#'>
// 						<img src='/src/assets/icons/corzina.svg' alt='corzina' />В заказ
// 					</a>
// 				</div>
// 			</div>
// 		</a>`;

// 			productsContainer.appendChild(productsElement);
// 		});
// 	})
// 	.catch(error => {
// 		console.log(error);
// 	});

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
				productsElement.innerHTML = `<a class='swiper-slide__link' href='/src/pages/card.html'>
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
