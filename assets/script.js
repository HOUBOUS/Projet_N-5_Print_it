const arrowRightElement = document.querySelector(".arrow_right");
const arrowLeftElement = document.querySelector(".arrow_left");
const divDotsElement = document.querySelector(".dots");
const bannerImage =document.querySelector(".banner-img");
const bannerText =document.querySelector("#banner p");
const alldot =document.getElementsByClassName("dot");
let selectedImage=0;
let selectedText="";
let slectedsrc="";



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

];

// Création des Dots//

for (let i = 0; i < slides.length; i++) {
	let dottoadd= document.createElement("span");
	dottoadd.classList.add("dot");
	if(i==selectedImage+1){
		dottoadd.classList.add("dot_selected");
	}
	
	divDotsElement.appendChild(dottoadd);

  }
 
//Changement des images avec les textes corrependants//

  function switchingImageText(){

	bannerImage.src="./assets/images/slideshow/"+slectedsrc; //pour changer l'image j'ai rajouté le chemin des images//
	bannerText.innerHTML=selectedText;// La propriété innerHtml pour changer le texte existant par le nouveau p qui correspond à l'image//
}

 //*Ajout des eventListeners sur les fléches*//

 

 arrowRightElement.addEventListener("click", FunctionRight);

 function myFunctionRight() {
	 
	 document.getElementById("").innerHTML = "";


   }


arrowLeftElement.addEventListener("click", FunctionLeft);

	function myFunctionLeft() {
		
		document.getElementById("").innerHTML = "";


	  }
       
	  