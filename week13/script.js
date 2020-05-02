// terminology check
// [] is a 'square bracket' used in an array
// {} those are 'curly braces' used in an object and function
// () those are 'parentheses' used in many different places like functions,querySelector(), etc.

// this is the OLD way we created an array. By only putting a single string in each index (between the commas,).
var oldItemsArrayExample = ['image-1.jpg', 'image-2.jpg', 'image-3.jpg', '...'];
// This is okay to use in the beginning, but it only contains a single piece of information. It won't work when you want more information for each item...

// INSTEAD
// here, we use {Objects} in each index to hold multiple pieces of information for each archive item.
// note the { property: 'value' } syntax similar to CSS, except here you get to create the property name too
var organizedArchiveItems = [
  {
    imageFile: 'fabric1.jpg',
    type: 'fabric'
  },

  {
    imageFile: 'fabric2.jpg',
    type: 'fabric'
  },

  {
    imageFile: 'fabric3.jpg',
    type: 'fabric'
  },

  {
    imageFile: 'fabric4.jpg',
    type: 'fabric'
  },

  {
    imageFile: 'fabric5.jpg',
    type: 'fabric'
  },

  {
    imageFile: 'wall1.jpg',
    type: 'walldecor'
  },

  {
    imageFile: 'wall2.jpg',
    type: 'walldecor'
  },

  {
    imageFile: 'wall3.jpg',
    type: 'walldecor'
  },

  {
    imageFile: 'wall4.jpg',
    type: 'walldecor'
  },
  
  {
    imageFile: 'wall5.jpg',
    type: 'walldecor'
  },
  
  {
    imageFile: 'wall6.jpg',
    type: 'walldecor'
  },
  
  {
    imageFile: 'book1.jpg',
    type: 'book'
  },

  {
    imageFile: 'book2.jpg',
    type: 'book'
  },

  {
    imageFile: 'book3.jpg',
    type: 'book'
  },

  {
    imageFile: 'book4.jpg',
    type: 'book'
  },

  {
    imageFile: 'book5.jpg',
    type: 'book'
  },

  {
    imageFile: 'book6.jpg',
    type: 'book'
  }

];

// we will select the single container only, so we can shove ALL content into it. No need for querySelectorAll
var grid = document.querySelector('.grid');

// main function that generates our content when the page loads, when we click the button, or when we filter
function generate(items) {
  grid.innerHTML = ''; // clear the existing items first
  items.forEach(item => {
    // we use += inside a loop to ADD every item, one after another.
    grid.innerHTML += `
  <div class="item">
    <img src="img/${item.imageFile}" class="archive-image"/>
  </div>
    `;
  });
}
generate(organizedArchiveItems); // run function on page load, passing in our full array of items

function filterContent() {
  var value = +event.target.value; // get the value from the HTML select dropdown and convert to number with "+"
  var filteredItems = organizedArchiveItems.filter(item => {
    return item.type = 'book'; // loops through all items in array and filters out items that don't have a year less than the dropdown value
  });
  generate(filteredItems); // run function to generate content with new filteredItems array
}

function randomize() {
  // array shuffle code credit: https://css-tricks.com/snippets/javascript/shuffle-array/
  // don't worry about why this works, it's complicated. We are creating a new array based on the original organizedArchiveItems
  // but the { objects } are in a different order...like shuffling a deck of cards
  var randomItems = organizedArchiveItems.sort(() => 0.5 - Math.random());
  generate(randomItems); // run function to generate content with new randomItems array
}
