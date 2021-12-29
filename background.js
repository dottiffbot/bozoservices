let picNum = 0;

const cellNums = document.querySelectorAll(".cell")
let buttons = document.querySelectorAll(".button")
const next = document.querySelector(".next")
const prev = document.querySelector(".prev")
const main = document.querySelector("main")

const pics = [
"url(./assets/jack.png)",
"url(./assets/icky.png)",
"url(./assets/bpdoti.png)",
"url(./assets/ingrid.png)",
"url(./assets/origins.png)",
"url(./assets/moo.png)"

]



const nextSlide = function (){
	
	picNum = picNum + 1
	if (picNum > pics.length - 1){

		picNum = 0

	}

	updateSection()
}

const prevSlide = function (){
	
	picNum = picNum - 1
	if (picNum < 0){

		picNum = pics.length - 1

	}

	updateSection()
}


const updateSection = function(){
	
main.style.backgroundImage = pics[picNum]
main.style.backgroundSize = "100vw"
main.style.transition = "background-image 2s"
}

next.addEventListener('click', function(){
	nextSlide()
})

next.addEventListener('scroll', function(){
	nextSlide()
})

prev.addEventListener('click', function(){
	prevSlide()
})

document.addEventListener("keyup", function(event){
	if(event.key == "ArrowDown"){
		nextSlide()
	}

	if(event.key == "ArrowUp"){
		prevSlide()
	}
})










