class ProductCard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['title', 'description', 'price'];
	}

	attributeChangedCallback(attrName, oldValue, newValue) {
		// При изменении атрибутов, обновите внутренний шаблон компонента
		if (
			attrName === 'image' ||
			attrName === 'title' ||
			attrName === 'description' ||
			attrName === 'price'
		) {
			this.render();
		}
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
      <style>
        /* Стили для вашего веб-компонента */
				img{
					border-radius: 20px;
				}
				.swiper-slide__about{
				 max-width: 250px;
				 border-radius: 20px;
			   background: #4F4F4F;
				}
				.swiper-slide__about-inner{
					margin: 10px;
				}
				.swiper-slide__about-name {
 					font-size: 18px;
 				}
 				.swiper-slide__about-about {
 					font-size: 14px;
 					font-weight: 400;
 					color: rgba(227, 227, 227, 0.6);
 				}
 				.swiper-slide__about-about-price {
 					font-size: 22px;
 					font-weight: 700;
 				}
 				.swiper-slide__about-btn {
 					@include button(7px 15px, $primary-color, $secondary-color);
 				}
      </style>
			
      <div class="swiper-slide__about">
			 		<img src="${this.getAttribute('image')}">	
					<div class="swiper-slide__about-inner">
       			<p class="swiper-slide__about-name">${this.getAttribute('title')}</p>
       			<p class="swiper-slide__about-about">${this.getAttribute(
							'description'
						)}</p>
			 			<p class="swiper-slide__about-about-price">${this.getAttribute('price')}$</p>
				</div>
       </div>
    `;
	}
}

customElements.define('product-card', ProductCard);
