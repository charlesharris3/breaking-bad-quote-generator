/* Program: Post Breaking Bad quote to Twitter.
   Purpose: Get the quote from the DOM and send the Breaking Bad quote to Twitter via their API. 
*/

//Create variables to hold the quote, quotee, combined full quote and base URL for the href of the Twitter API.
var quote;
var quotee;
var fullQuoteArray;
var fullQuote = "";
var baseURL = "https://twitter.com/intent/tweet?text="
var fullQuoteURL;


function setTwitterAPI() {
   //Get quote and quotee from the DOM.
   quote = document.querySelector(".breaking-bad-quote").textContent;
   quotee = document.querySelector(".quotee").textContent;

   //Create the full quote.
   fullQuoteArray = quote + " " + quotee;

   //Split the quote into individual words.
   fullQuoteArray = fullQuoteArray.split(" ");

   //Iterate through the quote and add the space flags needed to space words in the tweet.
   for (var i = 0; i < fullQuoteArray.length; i++){
      fullQuote += fullQuoteArray[i] + "%20";
   }

   //Add the fullQuote to the base URL then initialize it to the full quote URL variable.
   //This creates the URL needed to post the quote to Twitter.
   fullQuoteURL = baseURL + fullQuote;

   //Add the full quote URL to the href of the Twitter API anchor element.
   document.querySelector(".twitter-share-button").setAttribute("href", fullQuoteURL);
}

//Set an event listener for the Twitter share button to run the setTwitterAPI function.
document.querySelector(".twitter-share-button").addEventListener("click", setTwitterAPI);