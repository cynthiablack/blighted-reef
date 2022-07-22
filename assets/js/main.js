/** Add drink images from CocktailDB API **/
window.addEventListener('DOMContentLoaded', function() {
    const drink = ['zombie', 'mai tai', 'pina colada', 'dark and stormy', 'rum punch', 'rum runner', 'singapore sling'];

    // Get a random element from the array
    function getRandomDrink(drink) {
        let index = Math.floor(Math.random() * drink.length);
        return drink[index];
    }

    // Create a new array with 3 random elements from drink array
    let randomDrinkArray = [];

    for (let i = 0; i < 3; i++) {
        // Check for drinks in array & remove any duplicates
        /*randomDrinkArray.indexOf(drink) === index ?*/ randomDrinkArray.push(getRandomDrink(drink)) /*: console.log("This item already exists");*/
        };

    // Fetch an image of each element in the randomDrinkArray
    fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${randomDrinkArray[0]}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.drinks[0])
        //document.querySelector('h2').innerText = data.drinks[0].strDrink;
        document.querySelector('#imageOne').src = data.drinks[0].strDrinkThumb;
        //document.querySelector('h3').innerText = data.drinks[0].strInstructions;
    })
    .catch(err => {
        console.log(`error${err}`)
    })

    fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${randomDrinkArray[1]}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.drinks[0])
        //document.querySelector('h2').innerText = data.drinks[0].strDrink;
        document.querySelector('#imageTwo').src = data.drinks[0].strDrinkThumb;
        //document.querySelector('h3').innerText = data.drinks[0].strInstructions;
    })
    .catch(err => {
        console.log(`error${err}`)
    })

    fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${randomDrinkArray[2]}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.drinks[0]);
        document.querySelector('#imageThree').src = data.drinks[0].strDrinkThumb;
    })
    .catch(err => {
        console.log(`error${err}`)
    })
});