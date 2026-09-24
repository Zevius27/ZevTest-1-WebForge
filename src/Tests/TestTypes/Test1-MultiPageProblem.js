
///////////////////////////////////////////////////////////////////////////
// Function calls will work Immediate Even if they aren't Connected
// [Problem : Multi page Unexpected Behaviour]
//////////////////////////////////////////////////////////////////



function Test1MultiPageProblem() {
    // Create the element
    const newDiv = document.createElement('div');

    // Add content and attributes
    newDiv.textContent = 'Hello From MainTest! : MultiPage Problem';

    // Add to the DOM
    document.body.appendChild(newDiv);

    // Test 
    console.log(" Test1MultiPageProblem ");
}

export default Test1MultiPageProblem


/////////////////////////////////////////////////////////////////
// These Are Not working Then Porblems. 
// Look Down Fix First Build later.
///////////////////////////////////////////////////


//////////////////////// NO
// Test1MultiPageProblem()
// Function calls are working all check. 



//////////////////////// NO
// Test1MultiPageProblem()
// Updating speed check All working. 


////////////////////////////////////////////////






// OUTDATED :
                // Function calls are working + 1 Dir all check. 
                
