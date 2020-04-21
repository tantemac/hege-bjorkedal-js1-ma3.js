// question 1

const sum = (a, b) => a - b;

// question 2

const sportsUrl = "https://api.rawg.io/api/games?genres=sports";

fetch(sportsUrl)
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

// question 3

const text = "These cats are outrageous.";
const newText = text.replace("cats","giraffes");

// question 4

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const userId = params.get("userId");

if(userId) {
	if(Number(userId < 10) {
		document.location.href = "first.html";
	}
	else (Number(userId >= 10) {
		document.location.href = "second.html";
	} 
}
document.location.href = "third.html";

// question 5

const container = document.querySelector(".container");
const button = document.querySelector(".btn");

container.removeChild(button);

// question 6

const container = document.querySelector(".animals");
const elephantsElement = document.querySelector(".elephants");

const listElement = document.createElement("li");
listElement.className = "parrots";

const listElementContent = document.createTextNode("Parrots");
listElement.appendChild(listElementContent);

container.appendChild(listElement);

listElement.after(elephantsElement);

// question 7
const baseUrl = "https://api.rawg.io/api/games/3801";

fetch(baseUrl)
	.then(function(response) {
		return response.json();
	});
	.then(function(json) {
		createDetails(json);
	})
	.catch(function(error) {
		console.dir(error);
	});

	function createDetails(details) {
		const container = document.querySelector(".rating");
		container.innerText = details.rating;
	}

	createDetails();

