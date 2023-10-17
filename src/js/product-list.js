// import { fetchProducts } from '../../server/api/fetchProducts';
// class ProductList extends HTMLElement {
// 	constructor() {
// 		super();
// 		this.attachShadow({ mode: 'open' });
// 	}

// 	connectedCallback() {
// 		this.fetchProducts();
// 	}

// 	async fetchProducts() {
// 		const data = await fetchProducts();
// 		this.render(data);
// 	}

// 	render(data) {
// 		this.shadowRoot.innerHTML = `
//       <style>
//         /* Стили для вашего веб-компонента */
//       </style>
//       <div class="product-list">
//         ${data
// 					.map(
// 						product => `
//           <product-card class="swiper-slide" image="${product.image}" title="${product.name}" description="${product.descriptions}" price= "${product.price}"></product-card>
//         `
// 					)
// 					.join('')}
//       </div>
//     `;
// 	}
// }

// customElements.define('product-list', ProductList);
import Swiper from 'swiper';
class ProductList extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		// replaced fetchProducts() with static data for
		this.render([
			{
				image: 'link-image-1',
				name: 'Product ',
				descriptions: 'Description 1',
				price: 'Price 1',
			},
			{
				image: 'link-to-image-2',
				name: 'Product 2',
				descriptions: 'Description 2',
				price: 'Price 2',
			},
			{
				image: 'link-to-image-3',
				name: 'Product 3',
				descriptions: 'Description 3',
				price: 'Price 3',
			},
			{
				image: 'link-to-image-4',
				name: 'Product 4',
				descriptions: 'Description 4',
				price: 'Price 4',
			},
			{
				image: 'link-to-image-4',
				name: 'Product 4',
				descriptions: 'Description 4',
				price: 'Price 4',
			},
		]);
		this.initSlider();
	}

	render(data) {
		this.shadowRoot.innerHTML = `
      <style>
			.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  position: relative;
  width: 100%;
  height: 100%;
}

.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
}

.swiper-pagination {
  position: absolute;
  text-align: center;
  width: 100%;
  bottom: 10px;
  z-index: 10;
}

.swiper-pagination-bullet {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #000;
  opacity: 0.5;
  margin: 0 5px;
}

.swiper-pagination-bullet-active {
  opacity: 1;
}

.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 50%;
  width: 40px;
  height: 40px;
  transform: translateY(-50%);
  z-index: 10;
}

.swiper-button-prev:before,
.swiper-button-next:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-width: 6px 7px 6px 0;
  border-style: solid;
  border-color: #000;
}

.swiper-button-prev:before {
  transform: translate(-50%, -50%) rotate(135deg);
}

.swiper-button-next:before {
  transform: translate(-50%, -50%) rotate(-45deg);
}

		</style>
      <div class="swiper">
        <div class="swiper-wrapper">
          ${data
						.map(
							product => `
              <div class="swiper-slide">
                <product-card image="${product.image}" title="${product.name}" description="${product.descriptions}" price="${product.price}"></product-card>
              </div>
            `
						)
						.join('')}
        </div>
        <div class="swiper-pagination"></div>
      </div>
    `;
	}

	initSlider() {
		const swiperContainer = this.shadowRoot.querySelector('.swiper');
		new Swiper(swiperContainer, {
			// Swiper options and configurations
			// For example:
			slidesPerView: 4,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
		});
	}
}

customElements.define('product-list', ProductList);
