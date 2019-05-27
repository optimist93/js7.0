function gift(){
	
	let gift = document.querySelector('.fixed-gift'),
		giftPopup = document.querySelector('.popup-gift');

	function showGift() {
		gift.style.display = 'none';
		giftPopup.style.display = 'flex';
		document.body.style.overflow = 'hidden';
	}

	function hideGift() {
		giftPopup.style.display = 'none';
		document.body.style.overflow = '';
	}

	function activeGift() {
		gift.addEventListener('click', () => {
			showGift();
		});
		giftPopup.addEventListener('click', () => {
			let target = event.target;
			if(target.classList.contains('popup-close') || target.classList.contains('popup-gift')){
				gift.style.display = 'none';
				hideGift();
			}
		});
	}
	activeGift();
}
module.exports = gift;