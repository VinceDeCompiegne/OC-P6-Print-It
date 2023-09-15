const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/** Initialisation à l'ouverture de la page **/
var index = 0;

/** Connexion aux flêche et image du carrousel **/
var arrowArrowLeft = document.querySelector('.arrow_left');
var arrowArrowRight = document.querySelector('.arrow_right');
var imageCarrousel = document.querySelector('.banner-img');
var imagetagLine = document.querySelector('#tagLine');

//Attachement des indicateurs au centre en bas du carroussel
const dots = document.querySelectorAll('.dot');
//Init de l'animation des dots
dots[0].classList.toggle('dot_selected');

//L'appui sur l'un des dots envoi directement sur l'image de son rang
dots.forEach(dot => {
	dot.addEventListener("click",function(event){
		
		index = event.target.dataset.id;
		for(let i = 0; i < dots.length; i++){
			if (i==index){dots[index].classList.add('dot_selected');}else{dots[i].classList.remove('dot_selected');}
		}

		imageCarrousel.src = `./assets/images/slideshow/${slides[index].image}`;
		imagetagLine.innerHTML = `${slides[index].tagLine}`;

	});
});

/*** Flêche Gauche ***/
arrowArrowLeft.addEventListener("click",function(event){

	dots[index].classList.toggle('dot_selected');
	index=Number(index)-1;

	(index<0)?index=(dots.length-1):index;

	imageCarrousel.src = `./assets/images/slideshow/${slides[index].image}`;
	imagetagLine.innerHTML = `${slides[index].tagLine}`;
	dots[index].classList.toggle('dot_selected');
});

// /*** Flêche Droite ***/
arrowArrowRight.addEventListener("click",function(){

	dots[index].classList.toggle('dot_selected');
	index=Number(index)+1;

	(index>dots.length-1)?index=0:index;

	dots[index].classList.toggle('dot_selected');
	imageCarrousel.src = `./assets/images/slideshow/${slides[index].image}`;
	imagetagLine.innerHTML = `${slides[index].tagLine}`;

});