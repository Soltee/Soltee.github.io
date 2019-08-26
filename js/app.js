document.addEventListener('DOMContentLoaded', ()=>{
	let menuIcon = document.querySelector('.menu-icon');
	let links = document.querySelector('.links');
	let nav = document.querySelector('.nav');

	let skills = document.querySelector('.skills');
	const c = skills.children;
	menuIcon.addEventListener('click', (e) => {
		if(links.classList.contains('hidden'))
		{
			links.classList.remove('hidden');

		} else {
			links.classList.add('hidden');

		}
		links.classList.toggle('open-nav');
	});


	

	window.addEventListener('scroll', ()=>{
		if(window.pageYOffset > 0)
		{
			nav.classList.add('is-fixed');
		}else if(window.pageYOffset > 100){
			upHomeIcon.style.display = "block";
		} else {
			nav.classList.remove('is-fixed');
		}


	});


	
});