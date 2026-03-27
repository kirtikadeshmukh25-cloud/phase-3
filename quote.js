
let btn = document.getElementById("btn");
let quote = document.getElementById("quote");

let quotes = [
  "Believe in yourself.",
  "Never give up.",
  "Dream big and work hard.",
  "Success is not final, failure is not fatal.",
  "Stay positive, work hard, make it happen.",
  "Difficult roads often lead to beautiful destinations.",
  "Be kind, it costs nothing."

];

btn.addEventListener("click", function(){

    let randomIndex = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[randomIndex];

});

back.addEventListener("click", () => {
    window.location.href = "index.html";
});





