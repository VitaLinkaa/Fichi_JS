function parallax(event) {
	this.querySelectorAll('.layout').forEach(layout => {
		let spead = layout.getAttribute('data-spead');
		layout.style.transform = `translateX(${event.clientX * spead/1000}px)`;
	});
}


document.addEventListener('mousemove', parallax);