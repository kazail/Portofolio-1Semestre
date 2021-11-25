//Script Butao

const navToogle = document.querySelector('.nav_toggle');

//cada link
const navLinks = document.querySelectorAll('.nav_link');

navToogle.addEventListener('click', () => {
	document.body.classList.toggle('nav_open');
	
});



navLinks,forEach(link => {
	link.addEventListener('click', () =>{
		document.body.classList.remove('nav_open');
	})
})