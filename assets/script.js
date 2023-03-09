const arrowRightElement = document.querySelector(".arrow_right");
const arrowLeftElement = document.querySelector(".arrow_left");
const divDotsElement = document.querySelector(".dots");
const alldot = document.getElementsByClassName("dot");
var selectedImage= 1;
 


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

// Création des Dots//

for(let i=0; i<slides.length; i+1){
	var dottoadded=document.createElement("span");
	dottoadded.classList.add("dot");
	if(i == selectedImage-1){
		dottoadded.classList.add("dot_selected");
	}
    divDotsElement.appendChild(dottoadded);
}
 
  
//fonction cacher le slide (node.removeChild(child); child est le nœud enfant à retirer du DOM.node est le nœud parent de child.//
function hideSlide (slides, img){
	banner.removeChild(document.queryselector('.banner-img')); //J'ai supprimé la class banner-image//
	banner.removeChild(document.queryselector('p')) //J'ai supprimé la balise p//
 }

 //*Ajout des eventListeners sur les fléches*//

 

arrowRightElement.addEventListener("click", myFunctionRight);

    function myFunctionRight() {
	document.getElementById("").innerHTML = "";
  }


arrowLeftElement.addEventListener("click", myFunctionLeft);

	function myFunctionLeft() {
		document.getElementById("").innerHTML = "";
	  }
       