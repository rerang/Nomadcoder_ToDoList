let quotes = [
    {quote : "All about me is none of your business.", author : "Unknown",},
    {quote : "You cannot change what you are, only what you do.", author : "Philip Pullman",},
    {quote : "Lay a firm foundation with the bricks that others throw at you.", author : "David Brinkley",},
    {quote : "The greatest mistake you can make in life is to be continually fearing you will make one.", author : "Elbert Hubbard",},
    {quote : "I cannot say whether things will get better if wee change; what I can say is they must change if they are to get better.", author : "George C. Lichtenberg",},
    {quote : "To create more positive results in your life, replace 'if only' with 'next time'.", author : "Unknown",},
    {quote : "As soon as anyone starts telling you to be \"realistic\", cross that person off your invitation list.", author : "John Eliot",},
    {quote : "When in doubt, choose change.", author : "Lily Leung",},
    {quote : "Sometimes good things fall apart so better things can fall together.", author : "Marilyn Monroe",},
    {quote : "Things change. And friends leave. Life doesn't stop for anybody.", author : "Stephen Chbosky",},
    {quote : "To improve is to change; to be perfect is to change often.", author : "Winston Churchill"}
]

let quote = document.querySelector("#quote span:first-child");
let author = document.querySelector("#quote span:last-child");

let todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;