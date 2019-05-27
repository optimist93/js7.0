function topSlider(){

	let slideIndex = 1,
		slides = document.querySelectorAll('.main-slider-item');

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