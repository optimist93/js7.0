function burgerMenu(){
	
	let burger = document.querySelector('.burger'),
		burgerMenu = document.querySelector('.burger-menu');
	
		burger.addEventListener('click', ()=> {
			if(document.documentElement.clientWidth < 768){
				burgerMenu.classList.toggle('show');
			}
		});

	window.addEventListener('resize', ()=> {
		if(document.documentElement.clientWidth > 768) {
			burgerMenu.classList.remove('show');
		}
	});
}
module.exports = burgerMenu;