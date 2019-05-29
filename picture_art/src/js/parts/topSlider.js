function topSlider(){

	let slideIndex = 1,
		sliderWrap = document.querySelector('.main-slider'),
		slides = document.querySelectorAll('.main-slider-item'),
		slidesImg = document.querySelectorAll('.main-slider-item img');

	sliderWrap.style.overflow = 'hidden';
	showSlides(slideIndex);

	function showSlides(n){

		if(n > slides.length){
			slideIndex = 1;
		}
		if(n < 1) {
			slideIndex = slides.length;
		}

		for(let i = 0; i < slides.length; i++){
			slides[i].style.display = 'none';
			slidesImg[i].style.maxWidth = '100%';
		}

		slides[slideIndex - 1].style.display = 'block';
	}	

	let show = setInterval(function() {
		showSlides(slideIndex += 1);
	}, 4000);


	function currentSlide (n) {
		showSlides(slideIndex = n);
	}

}

module.exports = topSlider;