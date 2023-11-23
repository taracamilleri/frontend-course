// Create 12 card objects in an array
/* EXAMPLE
    {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
    }
*/
const cardArray = [

]

// We can look at the card array in the console using
// console.log(cardArray);

// We want to randomly sort the array
// Use:
cardArray.sort(() => 0.5 - Math.random());
/* When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
If the result is negative, a is sorted before b.
If the result is positive, b is sorted before a.
If the result is 0, no changes are done with the sort order of the two values. */

// Now if we
// console.log(cardArray);
// we can see the cards are randomly shuffled so we can use the array to create our board
// Select the grid from the HTML
// The # means we are looking for the id


// For each item in the cardArray we want to create an element (HINT: Use a loop!)
// Add an image and id to the element (set src attribute to the image)
// Create an event listener to trigger a function when each card is flipped
// Append the new element to the gridDisplay
function createBoard() {

}

createBoard();

// Write a function that flips the card when we click it
// We want to get the id and name of the card clicked and to change the image of the card in the HTML
let cardsChosenIds = [];
let cardsChosen = [];
const cardsWon = [];
function flipCard() {
    // Get the id of the card clicked and save it in the cardsChosenIds array
    // The this keyword allows us to get the id of what was clicked


    // Getting the name of the card clicked from our cardArray and save it in the cardsChosen array


    // When we click the card we want the image to change
    // We need to change the src attribute of the card to the image stored in the cardArray


    // Now we want to check if the 2 selected cards match

}

const resultDisplay = document.querySelector('#result');

function checkMatch() {
    // Get every card on the grid


    // Get both of the items in the cardsChosenIds array
    // If they are a match, change the card images to white and remove the event listners

        // If they are not a match flip the cards back to hidden 


    // Update the result


    // Reset the cardsChosenIds and cardsChosen arrays


    // If all matches have been found end the game

}