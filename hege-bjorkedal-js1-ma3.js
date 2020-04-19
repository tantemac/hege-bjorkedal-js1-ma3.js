// question 1

const sum = (a, b) => a - b;

// question 2

const sporstUrl = "https://api.rawg.io/api/games?genres=sports";

fetch(sportsUrl);
	.then(function(response) {
		return response.json();
	})
	.then(function(json) {
		gameResultLoop(json);
	})
	.catch(function(error) {
		document.location.href = "error.html";
	});

	function gameResultLoop(json) {
		const games = json.results;

		for(let i = 0; i < games.length; i++) {
			console.log(games[i].name);
		}
	}
	gameResultLoop();

// question 3

const replaceWord = document.querySelector("p");
replaceWord.innerText = animals;
const changeAnimal = animals.replace(/cats/, "giraffes");
replaceWord.innerText = changeAnimal;

// question 4

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let userId = "7";

if (params.has("")) {
	userId = params.get("userId");
}

const baseUrl = "https://my.site.com?userId=7";

const url = "https://my.site.com?userId=7" + userID;


// question 5

const container = document.querySelector(".container");
const button = document.querySelector(".btn");

container.removeChild(button);

// question 6

const container = document.querySelector(".animals");
const cowElement = document.querySelector(".cows");

const listElement = document.createElement("li");
listElement.className = "parrots";

const listElementContent = document.createTextNode("Parrots");
listElement.appendChild(listElementContent);

container.appendChild(listElement);

listElement.after(cowElement);

// question 7
const baseUrl = "https://api.rawg.io/api/games/3801";

fetch(baseUrl);
	.then(function(response) {
		return response.json();
	});
	.then(function(json) {
		createDetails(json);
	})
	.catch(functin(error) {
		console.dir(error);
	});

	function createDetails(details) {
		const container = document.querySelector(".rating");
		container.innerText = rating.json;
	}

	createDetails();
