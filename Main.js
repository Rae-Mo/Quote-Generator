let generateQuote = document.querySelector(".generator");

generateQuote.addEventListener('click',() => {
    let quoteTxt = document.querySelector("#quoteText"),
        quoteAuthor = document.querySelector("#quoteAuthor");
    
    var quotes ={
        " - Iron Fist : Defenders" : '" In kanlan they taught me there is a lesson in every tragedy, and anytime experiencing pain there is an opportunity to grow and find clarity "',
        " - Morgan Freeman : Ted 2 " : '" What defines a person? what defines property? whats the difference? the anthropologist and ethisists Don prince hues, argues that the standards for personhood include: self awareness, an ability to understand complex emotions and a capacity for empathy "',
        "- Galaxything " : '" Greatness is about what you leave behind, and the effect you have on those around you "',
        "- Einstein " : '" Imagination is greater than knowledge "'
    }
    
    var authors = Object.keys(quotes);
    
    var author = authors[Math.floor(Math.random()*authors.length)];

    var quote = quotes[author];

    quoteTxt.innerHTML = quote;
    quoteAuthor.innerHTML = author;
});