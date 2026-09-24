


// Create , Add attributes , Append Div.
export function practice() {
     // Create the element
    const newDiv = document.createElement('div');
    
    const square = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="20" width="60" height="60" fill="none" 
                    stroke="black" stroke-width="2" /></svg>`

    // Add content and attributes
    newDiv.innerHTML = square;

    // Add to the DOM
    document.body.appendChild(newDiv);

}