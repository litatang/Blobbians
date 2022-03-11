// $(window).scroll(function(){
// 	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
// });
window.onscroll = function() {
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
};

if(document.querySelector('.pp-scrollable')){
	const scrollDemo  = document.querySelector('.pp-scrollable');

	scrollDemo.addEventListener("scroll", event => {
	  $('nav').toggleClass('scrolled', scrollDemo.scrollTop > 50);
	});
}




// $('.toggle-menu-icon').click(function() {
// 	const burgerIcon = document.querySelector('.burger-icon');
// 	const closeIcon = document.querySelector('.close-icon');
// 	burgerIcon.classList.toggle('d-none');
// 	closeIcon.classList.toggle('d-none');
// });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
  	});
});

document.querySelectorAll('.nav-menu-yellow-link').forEach(button => {

	let div = document.createElement('div'),
		letters = button.textContent.trim().split('');

	function elements(letter, index, array) {

		let element = document.createElement('span'),
			part = (index >= array.length / 2) ? -1 : 1,
			position = (index >= array.length / 2) ? array.length / 2 - index + (array.length / 2 - 1) : index,
			move = position / (array.length / 2),
			rotate = 1 - move;

		element.innerHTML = !letter.trim() ? '&nbsp;' : letter;
		element.style.setProperty('--move', move);
		element.style.setProperty('--rotate', rotate);
		element.style.setProperty('--part', part);

		div.appendChild(element);

	}

	letters.forEach(elements);

	button.innerHTML = div.outerHTML;

	button.addEventListener('mouseenter', e => {
		if(!button.classList.contains('out')) {
			button.classList.add('in');
		}
	});

	button.addEventListener('mouseleave', e => {
		if(button.classList.contains('in')) {
			button.classList.add('out');
			setTimeout(() => button.classList.remove('in', 'out'), 950);
		}
	});

});

document.querySelectorAll('.nav-menu-white-link').forEach(button => {

	let div = document.createElement('div'),
		letters = button.textContent.trim().split('');

	function elements(letter, index, array) {

		let element = document.createElement('span'),
			part = (index >= array.length / 2) ? -1 : 1,
			position = (index >= array.length / 2) ? array.length / 2 - index + (array.length / 2 - 1) : index,
			move = position / (array.length / 2),
			rotate = 1 - move;

		element.innerHTML = !letter.trim() ? '&nbsp;' : letter;
		element.style.setProperty('--move', move);
		element.style.setProperty('--rotate', rotate);
		element.style.setProperty('--part', part);

		div.appendChild(element);

	}

	letters.forEach(elements);

	button.innerHTML = div.outerHTML;

	button.addEventListener('mouseenter', e => {
		if(!button.classList.contains('out')) {
			button.classList.add('in');
		}
	});

	button.addEventListener('mouseleave', e => {
		if(button.classList.contains('in')) {
			button.classList.add('out');
			setTimeout(() => button.classList.remove('in', 'out'), 950);
		}
	});

});

// let timedelay = 1;

// function delayCheck() {
//   if (timedelay == 1) {
//     $('#customCursor').fadeOut();
//     timedelay = 1;
//   }
//   timedelay += 1;
// }
// $(document).mousemove(function() {
//   $('#customCursor').fadeIn();
//   timedelay = 1;
//   clearInterval(_delay);
//   _delay = setInterval(delayCheck, 1000);
// });
// _delay = setInterval(delayCheck, 1000);

// var cursor = document.getElementById('customCursor');
// document.onmousemove = function (e){
// 	cursor.style.left = (e.pageX - 10) + "px";
// 	cursor.style.top = (e.pageY - 0) + "px";
// }

// document.onwheel = function (e){
// 	cursor.style.top = (e.pageY  + e.deltaY) + "px";
// }

document.querySelector('.second-button').addEventListener('click', function () {
	document.querySelector('.animated-icon2').classList.toggle('open');
	var navbars = document.getElementById('navbarNav').classList		
});


var curColor;
var myCollapsible = document.getElementById('navbarNav');
myCollapsible.addEventListener('shown.bs.collapse', function () {		
	setTimeout(function(){ 
		document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#46acc2');
	}, 350);
	
});

myCollapsible.addEventListener('show.bs.collapse', function () {
	curColor = document.querySelector("meta[name=theme-color]").content; 
});

myCollapsible.addEventListener('hide.bs.collapse', function () {
	setTimeout(function(){ 
		document.querySelector('meta[name="theme-color"]').setAttribute('content',  curColor);
	}, 175);		
});
