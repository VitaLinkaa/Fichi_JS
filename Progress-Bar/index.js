// Прокрутку страницы (на сколько страница прокрyчена) делим на высоту страницы и множим на 100%

const progress = document.querySelector('.progress');

window.addEventListener('scroll', progressBar);

	function progressBar(event) {
		let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
		let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		let per = windowScroll / windowHeight * 100;

		progress.style.width = per + '%';
	}


// Свойство scrollTop считывает или устанавливает количество пикселей, прокрученных от верха элемента. 
// scrollTop измеряет дистанцию от верха элемента до верхней точки видимого контента. 
// Когда контент элемента не создаёт вертикальную прокрутку, его scrollTop равно 0.


// Document.documentElement - свойство только для чтения, которое возвращает элемент Element,
// который является коренным элементом документа  document (например элемент <html> для HTML документов).


// Свойство Element.scrollHeight (только чтение) - измерение высоты контента в элементе, 
// включая содержимое, невидимое из-за прокрутки.

 // Значение scrollHeight  равно минимальному clientHeight, 
 // которое потребуется элементу для того, чтобы поместить всё содержимое в видимую область (viewport), 
 // не используя вертикальную полосу прокрутки. 
 // Оно включает в себя padding элемента, но не его margin.