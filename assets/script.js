var drinksKey = "1"
var drinksUrl = "https://www.thecocktaildb.com/api/json/v2/" + drinksKey + "/random.php"
var gamesKey = "ev1uDl61ro"
var numPlayers = 4
var gamesUrl = "https://api.boardgameatlas.com/api/search?random=true&gt_max_players=" + numPlayers-- + "&lt_min_players=" + numPlayers++ + "&client_id=" + gamesKey

function fetchDrink() {
    fetch (drinksUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
        })
}

function fetchGame() {
    fetch (gamesUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
        })
}