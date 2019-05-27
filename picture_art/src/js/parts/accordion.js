function accordion(){

	let accordionTitle = document.querySelectorAll('.accordion-heading'),
		accordionDescr = document.querySelectorAll('.accordion-block');

	for(let i = 0; i < accordionTitle.length; i++){
		accordionDescr[i].style.display = 'none';
		accordionTitle[i].addEventListener('click', ()=> {
			if(accordionDescr[i].style.display == 'block'){
				accordionDescr[i].style.display = 'none';
				accordionTitle[i].classList.remove('ui-accordion-header-active');
			} else {
				for(let k = 0; k < accordionTitle.length; k++){
					accordionDescr[k].style.display = 'none';
					accordionTitle[k].classList.remove('ui-accordion-header-active');
				}
				accordionDescr[i].style.display = 'block';
				accordionDescr[i].classList.add('fadeIn');
				accordionTitle[i].classList.add('ui-accordion-header-active');
			}
		});

	}

}

module.exports = accordion;