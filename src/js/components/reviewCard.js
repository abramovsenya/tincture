const reviewsSection = document.querySelector('.card');
class ReviewCard {
	constructor(name, rating, about) {
		this.name = name;
		this.rating = rating;
		this.about = about;
	}

	generateCard() {
		const card = document.createElement('div');
		card.classList.add('card__content-rewiew-card');

		const upperDiv = document.createElement('div');
		upperDiv.classList.add('card__content-rewiew-card-upper');

		const namePara = document.createElement('p');
		namePara.classList.add('card__content-rewiew-name');
		namePara.textContent = this.name;
		upperDiv.appendChild(namePara);

		const ratingDiv = document.createElement('div');
		ratingDiv.classList.add('card__content-rewiew-card-upper-rating');

		const starsImg = document.createElement('img');
		starsImg.classList.add('card__content-rewiew-image');
		starsImg.src = '../assets/icons/stars.svg';
		starsImg.alt = 'stars';
		ratingDiv.appendChild(starsImg);

		const markPara = document.createElement('p');
		markPara.classList.add('card__content-rewiew-mark');
		markPara.textContent = this.rating;
		ratingDiv.appendChild(markPara);

		upperDiv.appendChild(ratingDiv);
		card.appendChild(upperDiv);

		const aboutPara = document.createElement('p');
		aboutPara.classList.add('card__content-rewiew-about');
		aboutPara.textContent = this.about;
		card.appendChild(aboutPara);

		return card;
	}
}

// Пример использования
const review = new ReviewCard(
	'Андреев Павел',
	'4/5',
	'Лучшая клубника которую я ел . в жизни, всем советую!! Прекрасно подошла к вину вместе с хумусом.'
);
const reviewCard = review.generateCard();
// document.body.appendChild(reviewCard);

reviewsSection.appendChild(reviewCard);
