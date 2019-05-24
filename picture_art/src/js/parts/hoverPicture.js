function hoverPicture(){
	
	let picWrap = document.querySelectorAll('.sizes-block'),
		picItem = document.querySelectorAll('.size-img'),
		picDescr = document.querySelectorAll('.size-descr');

	for(let i = 0; i < picItem.length; i++){
		picWrap[i].addEventListener('mouseover', () => {
			picItem[i].setAttribute('src', `src/img/sizes-${i+1}-${1}.png`);
			picDescr[i].style.display = 'none';
		});

		picWrap[i].addEventListener('mouseout', () => {
			picItem[i].setAttribute('src', `src/img/sizes-${i+1}.png`);
			picDescr[i].style.display = 'block';
		});
	}
}
module.exports = hoverPicture;