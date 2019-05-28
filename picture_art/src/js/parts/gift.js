function gift(){
	
	let gift = document.querySelector('.fixed-gift'),
		giftPopup = document.querySelector('.popup-gift'),
		counter = 0;

	// если не открыли ни одного окна и проскролили в самый низ - отрывается окно с подарком
	window.addEventListener('click', (event)=> {
		let target = event.target;
			if(target.classList.contains('popup-close') || target.classList.contains('popup-gift') || target.classList.contains('popup-design') || target.classList.contains('popup-consultation')){
				counter++;
			}
	});

	window.addEventListener('scroll', ()=> {
		if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
				if(counter == 0){
					showGift();
					giftPopup.addEventListener('click', () => {
						hideGift();
					});
				 }
			}
		});
	function showGift() {
		gift.style.display = 'none';
		giftPopup.style.display = 'flex';
		document.body.style.overflow = 'hidden';
	}

	function hideGift() {
		let target = event.target;
			if(target.classList.contains('popup-close') || target.classList.contains('popup-gift')){
				giftPopup.style.display = 'none';
				document.body.style.overflow = '';
				gift.style.display = 'none';
			}
	}

	function activeGift() {
		gift.addEventListener('click', () => {
			showGift();
		});
		giftPopup.addEventListener('click', () => {
			hideGift();
		});
	}
	activeGift();


}
module.exports = gift;