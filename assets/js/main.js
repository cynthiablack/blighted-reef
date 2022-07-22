/** Add drink images from CocktailDB API **/
window.addEventListener('DOMContentLoaded', function() {
    const drink = ['zombie', 'mai tai', 'pina colada', 'dark and stormy', 'rum punch', 'rum runner', 'singapore sling'];

    // Shuffle the order of the array
    function shuffleArray(drink) {
        drink.sort(() => Math.random() - 0.5);
      }
      shuffleArray(drink);

      // Return 1st 3 drinks of shuffled array
      let randomDrinkArray = drink.slice(0, 3);

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