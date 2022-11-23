var drinksKey = 9973533
var drinksUrl = "https://www.thecocktaildb.com/api/json/v2/" + drinksKey + "/random.php"
var gameSkip = 0
var gamesUrl = "https://api.boardgameatlas.com/api/search?min_players=6&skip=" + gameSkip +"&client_id=ev1uDl61ro"
var gamesUrl2

// fetch (drinksUrl)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//     })

function gameFetch() {
    fetch (gamesUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data.count);
            gameSkip = Math.floor(Math.random() * 1000);
            console.log(gameSkip);
            gamesUrl2 = "https://api.boardgameatlas.com/api/search?min_players=6&skip=" + gameSkip +"&client_id=ev1uDl61ro"
            console.log(gamesUrl2);
            fetch (gamesUrl2)
                .then(function(response2) {
                    return response2.json();
                })
                .then(function(data2) {
                    console.log(data2);
                })
        })

}
    
gameFetch()