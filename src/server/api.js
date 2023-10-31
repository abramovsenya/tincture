import { promise } from './fetch.js';

promise
	.then(products => {
		const productsContainer = document.querySelector('.swiper-wrapper');

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
	})
	.catch(error => {
		console.log(error);
	});
/* import { promise } from './fetch.js';

promise
	.then(products => {
		const firstProductsContainer = document.querySelector(
			'.swiper-wrapper:first-child'
		);
		const secondProductsContainer = document.querySelector(
			'.swiper-wrapper:last-child'
		);

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
			console.log(firstProductsContainer);
			firstProductsContainer.appendChild(productsElement.cloneNode(true));
			secondProductsContainer.appendChild(productsElement);
		});
	})
	.catch(error => {
		console.log(error);
	});*/
