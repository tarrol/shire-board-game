var drinksKey = "1"
var drinksUrl = "https://www.thecocktaildb.com/api/json/v2/" + drinksKey + "/random.php"
var gamesKey = "ev1uDl61ro"
var minPlayers = 2
var gamesUrl = "https://api.boardgameatlas.com/api/search?random=true&min_players=" + minPlayers + "&client_id=" + gamesKey

fetch (drinksUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })


fetch (gamesUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })