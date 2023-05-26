let bodyBg = document.getElementsByTagName('body'),
    //buttons = document.querySelectorALL('.btn'),
    quoteContainer = document.querySelector('#quoteTxt'),
    eren = document.querySelector('#eren'),
    mikasa = document.querySelector('#mikasa'),
    levi = document.querySelector('#levi'),
    armin = document.querySelector('#armin'),
    erwin = document.querySelector('#erwin'),
    quoteBox = document.getElementsByClassName('quote'),
    quotes = [];

/*
buttons.addEventListener('click', () => {
    let quoteBox = document.querySelector('quote');
    quoteBox.style.opacity = 1;
});
*/

/*
buttons.forEach(
    button => {
        addEventListener('click',() => {
            let quoteBox = document.querySelector('quote');
            quoteBox.style.opacity = 1;
        });
});
*/

btn.addEventListener('click', ()=>{
    quoteBox.style.opacity = 1;
});

function erenSaid(){
    //QUOTES IN AN ARRAY
    quotes = [
        "I want to see and understand the world outside. I don't want to die inside these walls without knowing what's out there!",
        "Nothing can suppress a human's curiosity.",
        "What is th end point if those with the means and power do not fight?",
        "I can do this. No, we can do this! Because we've all been special since the day we were born. We're free!",
        "I'll slaughter you all and take back what you stole. All of it!",
        "It is true, I did see everything on the other side of the ocean as my enemy. Then, I crossed it...Sure, there were people who pissed me off, but there are good people too. Past the ocean, inside the walls, we are all the same.",
        "What's so good about giving up? Is it better to escape from reality to the point where you're throwing away your hope?",
        "You know what i hate most in this world? People who aren't free. They're no more than cattle.",
        "I disposed of some dangerous beasts - mere animals that just happened to resemble humans"
    ];

    //GENERATING A RANDOM NUMBER from 0 to length of array
    let randomQuote = Math.floor(
        Math.random() * (quotes.length)
    );

    //using the number generated to select a quote to display
    quoteContainer.innerHTML = `"${quotes[randomQuote]}"`;

    bodyBg.style.background = "url('/images/Eren-shingeki no kyojin.jpg')";
}
erenSaid();

function mikasaSaid(){
    //QUOTES IN AN ARRAY
    quotes = [
        "Asking me for compasion is mistaken. After all, I have no heart or time to spare.",
        "I am strong, Really Strong. None of you come close.",
        "Once I'm dead I won't be able to remember you. So, I'll win no matter what. I'lllive no matter what.",
        "This world is merciless, and it's also beautiful.",
        "Believe in your own power!",
        "If you think it's natural for people to sacrifice their own lives to save others, surely, you understand that sometimes a single death can save many lives.",
        "My speciality is lacerating flesh. Anyone intrested in experiencing my skill firsthand, step right up!",
        "I don't want to loose what little family i have left"
    ];

    //GENERATING A RANDOM NUMBER from 0 to length of array
    let randomQuote = Math.floor(
        Math.random() * (quotes.length)
    );

    //using the number generated to select a quote to display
    quoteContainer.innerHTML = `"${quotes[randomQuote]}"`;

    bodyBg.style.background = "url('')";
}
mikasaSaid();

function leviSaid(){
    //QUOTES IN AN ARRAY
    quotes = [
        "I thought I heard dirt moving around in the shape of an idiot. So, it was you?",
        "Some scouts' lives are more valuable than others, only those dumb enough to acknowledge that join us.",
        "I don't know which option you should choose....No matter what kind of wisdom dictates the option you pick, no one will be able to tell if it's right or wrong until you arrive at some sort of outcome from your choice",
        "If you don't want to die, think!",
        "We pay a price for believing.",
        "I don't know, and I never have, but i can beleive in my own abilities or the choices of the companions I trust. But no one ever knows how it will turn out.So, choose for yourself - Whichever decision you will regret the least"
    ];

    //GENERATING A RANDOM NUMBER from 0 to length of array
    let randomQuote = Math.floor(
        Math.random() * (quotes.length)
    );

    //using the number generated to select a quote to display
    quoteContainer.innerHTML = `"${quotes[randomQuote]}"`;

    bodyBg.style.background = "url('')";
}
leviSaid();

function arminSaid(){
    //QUOTES IN AN ARRAY
    quotes = [
        "I was, I am, and I remain a sildier, sworn to devote my heart and soul to the restoration of human kind. There is no greater glory than dying for that belief!",
        "Endure it. Don't let go!",
        "The people who have the ability to change something in this world, all, without exception, have the guts to abandon things important to them if they have to.",
        "I think there are times people have to die...Even if i don't like it",
        "Willpower alone isn't enoughin battle.",
        "Everyone can make a choice after they have learned what it will result in. It is so easy to say we should have done it in this way afterwards. But you can't know what your choice will result in before actually choosing."
    ];

    //GENERATING A RANDOM NUMBER from 0 to length of array
    let randomQuote = Math.floor(
        Math.random() * (quotes.length)
    );

    //using the number generated to select a quote to display
    quoteContainer.innerHTML = `"${quotes[randomQuote]}"`;

    bodyBg.style.background = "url('')";
}
arminSaid();

function erwinSaid(){
    //QUOTES IN AN ARRAY
    quotes = [
        "",
        "",
        "",
        "",
        "",
        ""
    ];

    //GENERATING A RANDOM NUMBER from 0 to length of array
    let randomQuote = Math.floor(
        Math.random() * (quotes.length)
    );

    //using the number generated to select a quote to display
    quoteContainer.innerHTML = `"${quotes[randomQuote]}"`;

    bodyBg.style.background = "url('')";
}
erwinSaid();