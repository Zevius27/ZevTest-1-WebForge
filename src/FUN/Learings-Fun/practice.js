import {Bridge, square, circle, triangle} from './Legos/big-blocks/Bridge'


// Create , Add attributes , Append Div.
export function practice() {
     // Create the element
    const newDiv = document.createElement('div');
    console.log(Bridge);
    
    // Add content and attributes
    newDiv.innerHTML = square;
                            // square is just an svg code
    // Add content and attributes
    newDiv.innerHTML = triangle;
                            // square is just an svg code
    // Add content and attributes
    newDiv.innerHTML = circle;
                            // square is just an svg code
    // Add to the DOM
    document.body.appendChild(newDiv);
    

}