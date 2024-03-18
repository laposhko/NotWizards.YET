const coversSection = document.querySelector('.covers-section');

let observer = new IntersectionObserver(function (entries, observer) {
	coversSection.classList.toggle('in-viewport');
});

observer.observe(coversSection);