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

/*Ajout des eventListeners sur les fléches*/
function displaySlide (slides, img){
	let img = document.getElementById('.banner-img'); //J'ai supprimé la class banner-image//
	let text= document.queryselector('p') //J'ai supprimé la balise p//
 }

//Cette fonction afficher le slide//
let slideIndex = 1;
 showSlides ( slideIndex); //Fonction de base//

 function CurrentSlide (n){
	showSlides (slideIndex = n);
  }
 
 function pludSlides(n){
	showSlides (slideIndex +=n)
  }

  function showSlides(n){
	let i;
	let slides=document.getElementsByClassName('slides');
	let dots=document.getElementsByClassName('.dots');

	//passer de l'image 4 à l'image 1//

	if (n> slides.length){
		slideIndex = 1;
	}

	// Passer de l'image 1 à l'image 4 //
    if (n<1){
		slideIndex = slides.length;
	}
    
  }
 
  
//Cette fonction cacher le slide node.removeChild(child); child est le nœud enfant à retirer du DOM.node est le nœud parent de child.//
function hideSlide (slides, img){
	banner.removeChild(document.queryselector('.banner-img')); //J'ai supprimé la class banner-image//
	banner.removeChild(document.queryselector('p')) //J'ai supprimé la balise p//
 }

 

Let arrowRight = document.querySelector(".arrow_right");

arrowRight.addEventListener('clik', fonction(){
       hideSlide();
	   showSlide()

})

Let arrowLeft = document.querySelector(".arrow_left");

arrowRight.addEventListener('clik', fonction(){
       hideSlide();
	   showSlide()

})