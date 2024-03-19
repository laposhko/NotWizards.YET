const coversSection = document.querySelector('.covers-section');

let observer = new IntersectionObserver( function (entries) {
	
	for (let entry of entries) {

		if (entry.isIntersecting) {
			coversSection.classList.add('in-viewport');
		} else {
			coversSection.classList.remove('in-viewport')
		}
	}	
});

observer.observe(coversSection);