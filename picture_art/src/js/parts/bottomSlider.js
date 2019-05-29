function bottomSlider(){

	let slideIndex = 1,
		slides = document.querySelectorAll('.feedback-slider-item'),
		sliderWrap = document.querySelector('.feedback-slider'),
		prev = document.querySelector('.main-prev-btn'),
		next = document.querySelector('.main-next-btn');

		showSlides(slideIndex);
		function showSlides(n) {

			if (n > slides.length) { // когда перелистываем последний слайд, возвращаемся на первый
				slideIndex = 1;
			}
			if (n < 1) {
				slideIndex = slides.length;
			}
			slides.forEach((item) => {
				item.style.display = 'none';
				//item.classList.remove('fadeInLeft', 'fadeInRight');
				});

			slides[slideIndex - 1].style.display = 'block';
		} // show slides

		function plusSlides(n) {
			showSlides(slideIndex += n);
		}
		function currentSlide(n){
			showSlides(slideIndex = n);
		}

		prev.addEventListener('click', () => {
			plusSlides(-1);
			slides[slideIndex - 1].classList.remove('animated', 'fadeInLeft');
			slides[slideIndex - 1].classList.add('animated', 'fadeInRight');
		});
		next.addEventListener('click', () => {
			plusSlides(1);
			slides[slideIndex - 1].classList.remove('animated', 'fadeInRight');
			slides[slideIndex - 1].classList.add('animated', 'fadeInLeft');
		});

		let autoSlider;
		sliderWrap.addEventListener('mouseenter', stopSlider);
		sliderWrap.addEventListener('mouseleave', startSlider);
		function showSlide(){
			for(let i = 0; i < slides.length; i++){
				slides[i].classList.add('animated', 'fadeInRight');
			}
			showSlides(slideIndex += 1);
		}
		//setInterval(showSlide, 5000);
		function startSlider(){
			autoSlider = setInterval(showSlide, 5000);
		}
		function stopSlider(){
			clearInterval(autoSlider);
		}
		startSlider();
			// let autoSlider = setInterval(() => {
			// 	for(let i = 0; i < slides.length; i++){
			// 		slides[i].classList.add('animated', 'fadeInRight');
			// 	}
			// 	showSlides(slideIndex += 1);
			// }, 5000);

}

module.exports = bottomSlider;