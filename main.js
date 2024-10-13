const galleryPhotos = document.querySelectorAll('.galeria-img');
const galleryPhotosNumber = galleryPhotos.length;
let galleryPhotoIndex = 0; 

function showGalleryPhoto(){
	galleryPhotos.forEach(photo => {
		photo.classList.remove('galeria-current-photo', 'galeria-left-photo', 'galeria-right-photo');
	});

	let left = galleryPhotoIndex == 0 ? galleryPhotosNumber-1 : galleryPhotoIndex - 1;
	let right = galleryPhotoIndex == galleryPhotosNumber - 1 ? 0 : galleryPhotoIndex + 1;

	galleryPhotos[left].classList.add('galeria-left-photo')
	galleryPhotos[galleryPhotoIndex].classList.add('galeria-current-photo')
	galleryPhotos[right].classList.add('galeria-right-photo')
}

document.getElementById('galeria-arrow-left').addEventListener('click', function() {
	if(galleryPhotoIndex > 0){
		galleryPhotoIndex -= 1;
	} else {
		galleryPhotoIndex = galleryPhotosNumber -1;
	}
	showGalleryPhoto()
});

document.getElementById('galeria-arrow-right').addEventListener('click', function() {
	if(galleryPhotoIndex < galleryPhotosNumber-1){
		galleryPhotoIndex += 1;
	} else {
		galleryPhotoIndex = 0;
	}
	showGalleryPhoto()
});

let splash = document.querySelector('.splash')
let logoText = document.querySelectorAll('.splash-text')

window.addEventListener('DOMContentLoaded', () =>{
	setTimeout(() => {
		logoText.forEach((text, idx)=> {
			setTimeout(() => {
				text.classList.add('active')
			}, 400);	
		});

		setTimeout(() => {
			logoText.forEach((text, idx)=> {
				setTimeout(() => {
					text.classList.remove('active')
					text.classList.add('fade')
				}, 100);
			});
		}, 2000);

		setTimeout(() => {
			splash.style.opacity = "0"	
		}, 2300);

		setTimeout(() => {
			splash.style.display = "none"	
		}, 3000);

	});

})


document.getElementById('card-right').addEventListener('click', function() {
	if(rightCardExpanded == false){
		document.getElementById('card-right-text').style.display = 'block';
	} else {
		document.getElementById('card-right-text').style.display = 'none';
	}
});

document.getElementById('card-left').addEventListener('click', function() {
	if(leftCardExpanded == false){
		document.getElementById('card-left-text').style.display = 'block';
	} else {
		document.getElementById('card-left-text').style.display = 'none';
	}
});		

let rightCardsIndex = 0;
let rightCardExpanded = false

document.addEventListener('DOMContentLoaded', function() {
	const cards = document.querySelectorAll('#cards-right .card');
	const bookmarks = document.querySelectorAll('#bookmarks-right button');

	let currentCard = document.querySelector('#cards-right .card--current') || cards[cards.length - 1];

	function showCard(index) {
		document.getElementById('card-right-text').style.display = 'none';
		if(index === cards.length){
			rightCardsIndex = -1;
		}
		if (index >= 0 && index < cards.length) {
			if (currentCard !== cards[index]) {
				cards.forEach(card => {
					card.classList.remove('card--current', 'card--out', 'card--next');
				});

				currentCard.classList.add('card--out');
				currentCard = cards[index];
				currentCard.classList.add('card--current');

				let nextCard = currentCard.nextElementSibling || cards[0];
				nextCard.classList.add('card--next');
			}
		}
	}

	cards.forEach((card, index) => {
		card.addEventListener('click', () => {
			if(index == 0 && !rightCardExpanded){
				rightCardExpanded = true;
				return;
			}

			rightCardExpanded = false
			rightCardsIndex +=1;
			showCard(rightCardsIndex);
		});
	});

	bookmarks.forEach(button => {
		button.addEventListener('click', () => {
			rightCardsIndex = parseInt(button.getAttribute('data-card-index'), 10);
			showCard(rightCardsIndex);
		});
	});

	if (!document.querySelector('#cards-right .card--current')) {
		showCard(0);
	} else {
		showCard([...cards].indexOf(currentCard));
	}
});

let leftCardsIndex = 0;
let leftCardExpanded = false

document.addEventListener('DOMContentLoaded', function() {
	const cards = document.querySelectorAll('#cards-left .card');
	const bookmarks = document.querySelectorAll('#bookmarks-left button');

	let currentCard = document.querySelector('#cards-left .card--current') || cards[cards.length - 1];

	function showCard(index) {
		document.getElementById('card-left-text').style.display = 'none';
		if(index === cards.length){
			leftCardsIndex = -1;
		}
		if (index >= 0 && index < cards.length) {
			if (currentCard !== cards[index]) {
				cards.forEach(card => {
					card.classList.remove('card--current', 'card--out', 'card--next');
				});

				currentCard.classList.add('card--out');
				currentCard = cards[index];
				currentCard.classList.add('card--current');

				let nextCard = currentCard.nextElementSibling || cards[0];
				nextCard.classList.add('card--next');
			}
		}
	}

	// Click event for cards
	cards.forEach((card, index) => {
		card.addEventListener('click', () => {
			if(index == 0 && !leftCardExpanded){
				leftCardExpanded = true;
				return;
			}

			leftCardExpanded = false
			leftCardsIndex +=1;
			showCard(leftCardsIndex);
		});
	});

	// Click event for bookmark buttons
	bookmarks.forEach(button => {
		button.addEventListener('click', () => {
			leftCardsIndex = parseInt(button.getAttribute('data-card-index'), 10);
			showCard(leftCardsIndex);
		});
	});

	// Set initial state
	if (!document.querySelector('#cards-left .card--current')) {
		showCard(0);
	} else {
		showCard([...cards].indexOf(currentCard));
	}
});
