var gameRandomize = document.getElementById('randomGame');
var drinkRandomize = document.getElementById('randomDrink');


// Listen for a click event on game button game randomizer
gameRandomize.addEventListener("click", function (event) {
  event.preventDefault;

  fetchGame();

});


// listen for a click event on drink button randomizer
drinkRandomize.addEventListener("click", function (event) {
  event.preventDefault;

  fetchDrink();

});