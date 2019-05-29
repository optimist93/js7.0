function ajax(){
	let message = {
		loading: 'Загрузка...',
		success: '',
		failure: 'Что-то пошло не так...'
	};
	let consultationForm = document.querySelector('.popup-consultation form'),
		designForm = document.querySelector('.popup-design form'),
		bottomForm = document.querySelector('.bottom-form'),
		inputPhone = document.querySelectorAll('input[type="tel"]'),
		inputName = document.querySelectorAll('input[name="name"]'),
		inputMessage = document.querySelectorAll('*[name="message"]'),
		popupThx = document.querySelector('.popup-thx'),
		statusMessage = document.createElement('div');

	function showThx(){
		popupThx.style.display = 'block';
	}

	//маска для телефона
	for(let i = 0; i < inputPhone.length; i++){
		inputPhone[i].addEventListener('keydown', function(event) {
			if( !(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) { event.preventDefault() }
			 let mask = '+7 (111) 111-11-11'; // Задаем маску
		
			 if (/[0-9\+\ \-\(\)]/.test(event.key)) {
					 // Здесь начинаем сравнивать this.value и mask
					 let currentString = this.value,
						currentLength = currentString.length;
					 if (/[0-9]/.test(event.key)) {
							 if (mask[currentLength] == '1') {
									 this.value = currentString + event.key;
							 } else {
									 for (var i=currentLength; i<mask.length; i++) {
									 if (mask[i] == '1') {
											 this.value = currentString + event.key;
											 break;
									 }
									 currentString += mask[i];
									 }
							 }
					 }
			 } 
		});
	}
	// ввод только русских букв и пробелов
	function russianLetter(input){
		input.forEach(function(item) {
			item.addEventListener('input', function() {
				this.value = this.value.replace(/[^А-Яа-яЁё0-9! ]/g, '');
			});
		});
	}
	russianLetter(inputName);
	russianLetter(inputMessage);

	function sendForm(elem) {
		elem.addEventListener('submit', (event) => {
			event.preventDefault();
			elem.appendChild(statusMessage);
			let input = elem.getElementsByTagName('input'),
				textarea = elem.getElementsByTagName('textarea');
			let formData = new FormData(elem);
			statusMessage.style.display = 'block';

			// close.addEventListener('click', () => { // закрываем модальное окно
			// 	statusMessage.style.display = 'none';
			// });
		
			function postData(data){
				return new Promise((resolve,reject) => {
					let request = new XMLHttpRequest();
					request.open('POST', 'server.php');
					request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

					request.addEventListener('readystatechange', () => {
						if (request.readyState < 4){
							resolve();
						} else if(request.readyState === 4 && request.status === 200) {
							resolve();
						} else {
							reject();
						}

					});

					let obj = {};
					formData.forEach((value, key) => {
						obj[key] = value;
					});
					let json = JSON.stringify(obj);
					request.send(json);

				});
			} // postData

			function clearInput(){ // очищаем поля ввода при успешной отправке
				for(let i = 0; i < input.length; i++) { 
					input[i].value = '';
				}
				if(elem.contains(textarea[0]) === true){
					textarea[0].value = '';
				}
			}
			
			postData(formData)
				.then(()=> statusMessage.innerHTML = message.loading)
				.then(()=> {
					//statusMessage.innerHTML = message.success;
					showTnx();
					setTimeout(()=> { // удаляем сообщение об отправке через 5 секунд
						statusMessage.style.display = 'none';
					}, 5000);
				})
				.catch(()=> statusMessage.innerHTML = message.failure)
				.then(clearInput);
		});
	} // end sendForm
	sendForm(consultationForm);
	sendForm(designForm);
	sendForm(bottomForm);
}

module.exports = ajax;