const arrowRightElement = document.querySelector(".arrow_right");
const arrowLeftElement = document.querySelector(".arrow_left");
const banner = document.querySelector ("#banner");
const divDotsElement = document.querySelector (".dots");
const bannerImage = document.querySelector (".banner-img");
const bannerText = document.querySelector ("#banner p");
const allDot = document.getElementsByClassName (".dot");
let selectedImage = 0;
let selectedText = "";
let slectedSrc = "";


const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.jpg",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},	
]

// Création des Dots//

function nbrOfDots(tab){
    return (tab.length)
}



