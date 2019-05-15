$(document).ready(function() {

	

	function modal(target) {
		target.on('click', function() {
			$('.overlay').animate({
				opacity: 'show'
			},1000 );
			$('.modal').animate({
				opacity: 'show',
				marginTop: '8rem'
			},1000);
		});
	
		$('.close').on('click', function() {
			$('.overlay').animate({
				opacity: 'hide'
			}, 1000);
			$('.modal').animate({
				opacity: 'hide',
				marginTop: '-8rem'
			}, 1000);
		});
	}

	modal($('.main_btn'));
	modal($('.main_btna'));
	modal($('a[href="#sheldure"'));

}); // -> end Jquery