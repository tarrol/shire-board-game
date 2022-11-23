//navigate to page
//presented with the page
//three sections
// two random generate buttons, favorite button, click on the favorites list to display what we want
//Quantifiers: # players


// >game random >drink random >favorites list
//Game & Drinks
//randomizer

//>>>button
// event listener
// randomizer || Math.floor(Math.and()

// fetch requests drink[randomizerOutput]
// obtain information
// store information
// display information


var drinksUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/random.php"

var drinkObject

fetch(drinksUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    drinkObject = data
    console.log(drinkObject);
  })

