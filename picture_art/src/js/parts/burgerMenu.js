function burgerMenu(){
	
	let burger = document.querySelector('.burger'),
		burgerMenu = document.querySelector('.burger-menu');
	
		function activeMenuBurger() {
			if(document.documentElement.clientWidth <= 768) {
				console.log(1);
				burgerMenu.removeAttribute('style');
				burger.addEventListener('click', ()=> {
					if(burgerMenu.style.display == 'block'){
						burgerMenu.style.display = 'none';
					} else {
						burgerMenu.style.display = 'block';
					}
				});
			}
		}
		activeMenuBurger();
	window.addEventListener('resize', ()=> {
		if(document.documentElement.clientWidth > 768) {
			burgerMenu.removeAttribute('style');
		}
	});
}
module.exports = burgerMenu;