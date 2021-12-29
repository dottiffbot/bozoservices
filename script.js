
const down = document.querySelector(".down");
const up = document.querySelector(".up");


let selectIndex = 0;
let cellCount = 6;


const cells = document.querySelectorAll(".cell")
const carousel = document.querySelector(".carousel")


let cellWidth = carousel.offsetWidth;
let cellHeight = carousel.offsetHeight;


let colors = [
"#9CBB3E",
"#8CD9AA",
"#329572",
"#7F6ECF",
]


function spinTheWheel (){
	let angle = selectIndex / cellCount * -360;
	carousel.style.transform = 'translateZ(-188px) rotateX(' + angle + 'deg)';
}

// random colors
function randomColors (){
	let titles = document.querySelectorAll(".titles")
   titles.style.backgroundColor = colors[Math.floor(Math.random()* colors.length)]
  
 console.log(colors)
}



up.addEventListener('click', function(){
	selectIndex--;
	spinTheWheel();

	console.log("touched it");
})


down.addEventListener('click', function(){
	selectIndex++;
	spinTheWheel();
	console.log("touched tit")
})

document.addEventListener("keyup", function(event){
	if(event.key == "ArrowDown"){
		selectIndex++
		spinTheWheel()
	
	}

	if(event.key == "ArrowUp"){
		selectIndex --
		spinTheWheel()

	}
})










