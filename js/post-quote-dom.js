/* Program: Post Breaking Bad quote to the DOM.
   Purpose: Retrieve the quote using API and post it to the DOM.
*/

//Use fetch api to retrieve a random Breaking Bad quote.
function getQuote(){
    fetch("https://www.breakingbadapi.com/api/quote/random")
        .then(response => response.json())
        .then(quote => {
            document.querySelector(".breaking-bad-quote").innerHTML = `\"${quote[0].quote}\"`;
            document.querySelector(".quotee").innerHTML = `- ${quote[0].author}`;
        });
}

//Event listener for button to get a quote.
window.onload = function() {
    document.querySelector(".quote-button").addEventListener("click", getQuote);
}



