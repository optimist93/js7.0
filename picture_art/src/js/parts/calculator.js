function calculator(){

	let size = document.querySelector('#size'),
		material = document.querySelector('#material'),
		options = document.querySelector('#options'),
		promo = document.querySelector('.promocode'),
		price = document.querySelector('.calc-price'),
		sizeVal = 0,
		materialVal = 0,
		optionsVal = 0,
		total = 0;

	size.addEventListener('change', ()=>{
		sizeVal = +size.options[size.selectedIndex].value;
		console.log(sizeVal);
		calc();
	});

	material.addEventListener('change', ()=>{
		materialVal = +material.options[material.selectedIndex].value;
		console.log(materialVal);
		calc();
	});
	options.addEventListener('change', ()=>{
		optionsVal = +options.options[options.selectedIndex].value;
		console.log(optionsVal);
		calc();
	});
	
	promo.addEventListener('change', ()=> {
		if(promo.value.trim() == 'IWANTPOPART'){
			price.textContent = total*0.7;
		}else {
			price.textContent = total;
		}
		if(sizeVal == 0 || materialVal == 0){
			price.textContent = 0;
		}
	});

	function calc(){
		total = sizeVal * materialVal + optionsVal;
		price.textContent = total;
		if(promo.value.trim() == 'IWANTPOPART'){
			price.textContent = total*0.7;
		}
		if(sizeVal == 0 || materialVal == 0){
			price.textContent = 0;
		}
	}
	
}

module.exports = calculator;