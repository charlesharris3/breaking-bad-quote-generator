/* Program: Email Breaking Bad quote
   Purpose: Send an email with a Breaking Bad quote using NodeJS  inside the browser.

   This code feature is a work-in-progress. See notes below.
*/
//Import the nodemailer module.
var nodemailer = require("nodemailer");
var nodemailerBrowser = require("nodemailer-browser");
var path = require('path');
var tmpdir = path.join(__dirname, 'tmp', 'mailerbrowser');


function init() {
   //Sender's email address.
   const sender = "harris.charles95@gmail.com";

   //Sender's email address password.
   const password = "jessepinkman";

   //Create the mail transport.
   /* The email and password are only for the purposes of this project. Any other use of it
   is prohibited. */
   var transporter = nodemailer.createTransport(nodemailerBrowser({
      service: 'gmail',
      auth: {
         dir: tmpdir,
         browser: true,
         user: sender,
         pass: password
      }
   }));

   //Declare variables to hold the quote, quotee, and full quote.
   var fullQuote = "";
   var quote = "";
   var quotee = "";

   //Get the quote and the quotee
   quote = document.querySelector(".breaking-bad-quote").textContent;
   quotee = document.querySelector(".quotee").textContent;

   //Combine the quote+quotee into a full quote
   fullQuote = `${quote} ${quotee}`;

   //Get the email that the quote will be sent to.
   var targetEmailAddress = prompt("Enter an email address.");

   //Create and email object.
   var email = {
      to: targetEmailAddress,
      from: sender,
      subject: "Breaking Bad Quote - You Have To Read This!!!",
      body: fullQuote
   };

   //Send the email.
   transporter.sendMail(email, function (error, info) {
      if (error) {
         console.log(error);
      } else {
         prompt('Email sent: ' + info.response);
      }
   });
}
//Create an event handler to run init when email button is pressed.
document.querySelector("#email-share-button").addEventListener("click", init);

/*
Notes: The email is not being sent. The reason being is becasue it appears that even with
Browserify bundling the project, the Nodemailer package itself needs to be running server-side.
Not client-side. This error does not affect the rest of the project. 
*/