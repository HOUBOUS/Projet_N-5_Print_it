const arrowRightElement = document.querySelector(".arrow_right");
const arrowLeftElement = document.querySelector(".arrow_left");
const dot = document.querySelector(".dots");
const banner = document.querySelector ("#banner");
var position = 0;

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

function nbreOfDots(tab){
    return(tab.length);

}

function createDots(DOMelt,tab){
    for(let i=0; i< nbreOfDots(tab);i++){
        let dottoadd = document.createElement("span");//Création de nombre de span autant que la taille du tableau
        dottoadd.classList.add("dot");//Ajout de la classe dot
        DOMelt.appendChild(dottoadd);//Ajout des elements en tant que DOM element

    }
     
}

createDots(document.querySelector(".dots"),slides);

 
//Changement des images avec les textes corrependants//

  function setImage(DOMelt, tabelt){
    const image = document.createElement("img");//Création de la balise image
    image.classList.add("banner-img");// Ajout de la classe banner-img dans la balise image
	image.setAttribute("src", tabelt.image);//Ajout d'un attribut src = slides[0].image pour que la propriété image du premier element du tableau slides
    DOMelt.appendChild(image);// Créer un enfant image à la span au parent #banner
}
   function setText(DOMelt, tabelt) {
     const text = document.createElement("p");// Création de la balise p 
     text.innerHTML = tabelt.tagLine;//
     DOMelt.appendChild(text);// Créer un enfant text à la span au parent #banner

   }

   function switchDotSelected(DOMelt){
    DOMelt.classList.add("dot_selected");//Ajout de la classe dot_selected
   
   }
    
   function switchingSlide(DOMbanner,DOMdot,tab, tabelt){
    setImage(DOMbanner, tabelt);
    setText(DOMbanner, tabelt);
    switchDotSelected(DOMdot)

   }

   function hideSlide(DOMelt, DOMdot){
    DOMelt.removeChild(document.querySelector('.banner-img'));
    DOMelt.removeChild(document.querySelector('p'));
    DOMdot.classList.remove("dot_selected");

   }

   switchingSlide(banner, dot.children[0],slides,slides[0])

 //*Ajout des eventListeners sur les fléches*//

 

 arrowRightElement.addEventListener("click", function(){
    hideSlide(banner, dot.children[position])
    position = (position == slides.length-1) ? 0 : position+1;
    switchingSlide(banner, dot[position],slides,slides[position]);
 }
 );

 
arrowLeftElement.addEventListener("click", function(){
    hideSlide(banner, dot.children[position])
    position = (position == 0) ? position=slides.length-1 : position-1;
    switchingSlide(banner, dot[position],slides,slides[position]);

});

	
	  