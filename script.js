// upon clicking the "roll" button...
var rollButton = document.getElementById("roll-button");
rollButton.addEventListener("click", function() {

	// generate a random number between 1 and 6 for both dice
	var randomNumber1 = Math.floor(Math.random() * 6) + 1;
	var randomNumber2 = Math.floor(Math.random() * 6) + 1;
	// combined total
	var rollTotal = randomNumber1 + randomNumber2;

	// change each dice image to the corresponding random number rolled + change the main text to read out the combined number
	document.querySelector(".dice-left img").setAttribute("src", "./assets/dice" + randomNumber1 + ".png");
	document.querySelector(".dice-right img").setAttribute("src", "./assets/dice" + randomNumber2 + ".png");
	document.querySelector("#main-text").textContent = String(rollTotal);
})

