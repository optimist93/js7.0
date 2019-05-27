function more(){

	let moreBtn = document.querySelector('.button-styles'),
		showBlocks = document.querySelectorAll('.styles-2');
	moreBtn.addEventListener('click', ()=> {
		for(let i = 0; i < showBlocks.length; i++){
			showBlocks[i].classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
			showBlocks[i].classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
		}
		moreBtn.style.display = 'none';
	});

}

module.exports = more;