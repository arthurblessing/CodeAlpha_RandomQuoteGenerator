const quotes = [
{
quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
author: "Winston Churchill"
},
{
quote: "The future belongs to those who believe in the beauty of their dreams.",
author: "Eleanor Roosevelt"
},
{
quote: "Do something today that your future self will thank you for.",
author: "Sean Patrick Flanery"
},
{
quote: "Believe you can and you're halfway there.",
author: "Theodore Roosevelt"
},
{
quote: "Don't watch the clock; do what it does. Keep going.",
author: "Sam Levenson"
},
{
quote: "Hard work beats talent when talent doesn't work hard.",
author: "Tim Notke"
},
{
quote: "Stay hungry, stay foolish.",
author: "Steve Jobs"
},
{
quote: "Dream big and dare to fail.",
author: "Norman Vaughan"
},
{
quote: "Your limitation—it's only your imagination.",
author: "Unknown"
},
{
quote: "Push yourself because no one else is going to do it for you.",
author: "Unknown"
}
];

function newQuote() {
const random = Math.floor(Math.random() * quotes.length);

document.getElementById("quote").innerText =
quotes[random].quote;

document.getElementById("author").innerText =
"- " + quotes[random].author;
}

window.onload = newQuote;