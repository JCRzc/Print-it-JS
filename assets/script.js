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
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Récupérer les éléments HTML 
let arrowLeft = document.querySelector(".arrow_left")
let arrowRight = document.querySelector(".arrow_right")
let dot = document.querySelectorAll(".dot")
let slideImage = document.querySelector(".banner-img")
let tagline = document.getElementById("tagline")

let currentIndex = 0; 

// Fonction pour mettre à jour la diapositive actuelle 
function updateSlide(index) {
	let slide = slides[index]
	slideImage.src = slide.image
	tagline.innerHTML = slide.tagLine

// Mettre à jour les bullet points 
	dot.forEach((bullet, i) => {
		if (i === index) {
			bullet.classList.add("dot_selected")
		} else {
			bullet.classList.remove("dot_selected")
		}
	})
}

// Écouteur de clic pour la flèche de droite 
arrowRight.addEventListener("click", () => {
	currentIndex = (currentIndex + 1) % slides.length;
	updateSlide (currentIndex)
})

// Écouteur de clic pour la flèche de gauche
arrowLeft.addEventListener("click", () => {
	currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	updateSlide (currentIndex)
})

// Initialiser la première diapositive
updateSlide(currentIndex)