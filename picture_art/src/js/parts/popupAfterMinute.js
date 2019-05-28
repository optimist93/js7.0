function popupAfterMinute(){

	let popup = document.querySelector('.popup-consultation'),
		popupClose = document.querySelector('.popup-close'),
		counter = 0;

	window.addEventListener('click', (event)=> {
		let target = event.target;
		if(target.classList.contains('popup-close') || target.classList.contains('fixed-gift') || target.classList.contains('button-design') || target.classList.contains('button-consultation')){
				counter++;
			}
	});

	let timer = setTimeout(()=>{
		if(counter > 0){
			clearInterval(timer);
		}else{
			popup.style.display = 'flex';
			popup.style.zIndex = '1000001';
			document.body.style.overflow = 'hidden';
		}
	},60000);
	

}

module.exports = popupAfterMinute;