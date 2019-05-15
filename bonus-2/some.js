window.addEventListener('DOMContentLoaded', function() {
'use strict';

let popupWrap = document.querySelector('.popup__call-phoneblock'),
	popupCall = document.querySelector('.popup__call-wrap'),
	popupInput = document.querySelectorAll('.popup__call-phone'),
	popupInputHidden = document.querySelector('.popup__call-phone.popup__call-phone-hidden'),
	arrow = document.querySelector('.popup__call-svg');

	popupWrap.addEventListener('click', function(event) {
		let target = event.target;
		console.log(target);
		if(target && target.classList.contains('popup__call-svg') || target.classList.contains('popup__call-country')) {
			console.log(88);
			if(arrow.hasAttribute('style') == false) {
				popupInput.forEach(function(item) {
					if(item.classList.contains('popup__call-phone-hidden')) {
						item.removeAttribute('style');
						arrow.style.transform = "rotate(180deg)";
					}
				});
			} else {
				popupInput.forEach(function(item) {
					if(item.classList.contains('popup__call-phone-hidden')) {
						item.style.visibility = 'hidden';
						arrow.removeAttribute('style');
					}
				});
			}
		}

		popupInputHidden.addEventListener('click', () => {
			replace();
		});

	});

	function replace() {
		popupWrap.insertBefore(popupInputHidden, popupInput[0]);
		popupInputHidden.classList.remove('popup__call-phone-hidden');
		popupInput[0].classList.add('popup__call-phone-hidden');
		popupInput[0].style.visibility = 'hidden';
	}



}); // -> end scripts