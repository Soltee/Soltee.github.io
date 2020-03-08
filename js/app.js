window.addEventListener('load', ()=>{

	function debounce(func, wait = 20, immediate = true){
	    var timeout;
	    return function(){
	      var context = this, args = arguments;
	      var later = function(){
	        timeout = null;
	        if(!immediate) func.apply(context, args);
	      };
	      var callNow  = immediate && !timeout;
	      clearTimeout(timeout);
	      timeout = setTimeout(later, wait);
	      if(callNow) func.apply(context, args);
	    }
	  }

	let menuIcon = document.querySelector('.menu-icon');
	let links = document.querySelector('.links');
	let nav = document.querySelector('.nav');

	menuIcon.addEventListener('click', (e) => {
		if(links.classList.contains('hidden'))
		{
			links.classList.remove('hidden');

		} else {
			links.classList.add('hidden');

		}
		links.classList.toggle('open-nav');
	});

	var scroll = new SmoothScroll('a[href*="#"]',{
	    speed: 400
	});


	let topOfNav = nav.offsetTop;

	window.addEventListener('scroll', ()=>{
		if(window.scrollY > 0)
		{
			document.body.style.paddingTop = nav.offsetHeight + 'px';
			nav.classList.add('is-fixed');
		} else {
			document.body.style.paddingTop = 0;
			nav.classList.remove('is-fixed');
		}


	});

	mediumZoom('[data-zoomable]', {
		margin: 24
	});
});
