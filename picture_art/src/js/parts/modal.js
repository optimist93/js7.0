function modal(){
	
	function showModal(modal) {
		modal.style.display = 'flex';
		modal.style.zIndex = '1000001';
		document.body.style.overflow = 'hidden';
	}
	function hideModal(modal) {
		modal.style.display = 'none';
		document.body.style.overflow = '';
	}

	function activeModal(designBtn, modalName) {
		let modalBtn = document.querySelectorAll(`.${designBtn}`),
		modal = document.querySelector(`.${modalName}`);
		
		for(let i = 0; i < modalBtn.length; i++) {

			modalBtn[i].addEventListener('click', () => {
				showModal(modal);
			});

			modal.addEventListener('click', (event) => {
				let target = event.target;
				//console.log(target);
				if(target.classList.contains('popup-close') || target.classList.contains(`${modalName}`)){
					hideModal(modal);
				}
			});
		}
	} //activeModal
	
	activeModal('button-design', 'popup-design');
	activeModal('button-consultation', 'popup-consultation');
}
module.exports = modal;