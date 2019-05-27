function filter(){

	let menu = document.querySelector('.portfolio-menu'),
		menuItem = document.querySelectorAll('.portfolio-menu li'),
		portfolioBlock = document.querySelectorAll('.portfolio-block'),
		noBlocks = document.querySelector('.portfolio-no');

	function hidePortfolioBlock(k){
		for(let i = k; i < portfolioBlock.length; i++){
			portfolioBlock[i].classList.remove('all');
			portfolioBlock[i].style.display = 'none';
		}
	}
	function showAllBlock(){
		for(let i = 0; i < portfolioBlock.length; i++){
			portfolioBlock[i].classList.add('all', 'portfolio-block');
			portfolioBlock[i].style.display = 'block';
		}
	}

	menu.addEventListener('click', (event)=> {
		let target = event.target;
		console.log(target);
		menuItem.forEach((item)=>{
			item.classList.remove('active');
		});
		hidePortfolioBlock(0);
		portfolioBlock.forEach(function(item){
			let filter = target.getAttribute('class');
			console.log(filter);
			if(!item.classList.contains(filter)){
				item.style.display = 'none';
			}else if(target.classList.contains('all')){
					showAllBlock();
			}	else {
				item.style.display = 'block';
			}
			// item.classList.remove('portfolio-block');
			// //target.classList.remove('active');
			// if(target.getAttribute('class').slice('active', '') == item.getAttribute('class')){
			// 	target.classList.add('active');
			// 	item.classList.add('portfolio-block');
			// 	item.style.display = 'block';
			// }else if(target.classList.contains('all')){
			// 	showAllBlock();
			// }
		});

		// если нет работ
		let k = 0;
		for(let i = 0; i < portfolioBlock.length; i++){
			if(portfolioBlock[i].style.display == 'block'){
				k++;
				return k;
			}
			
		}
		if(k == 0){
			noBlocks.style.display = 'block';
		} else {
			noBlocks.style.display = 'none';
		}
	});
}

module.exports = filter;