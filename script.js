const clickBtn = document.querySelector("button");
clickBtn.addEventListener("click",generate);
const quoteP = document.querySelector("#quote");
const quoteH = document.querySelector("#author");

function generate(){
const quotes = {
    '- Deepak Chopra' : '"Something about SEX"',
    '- 1 ': '"Something about SEX1"',
    '- 2' : '"Something about SEX2"',
    '- 3' : '"Something about SEX3"',
}

let authors = Object.keys(quotes);
let author = authors[Math.floor(Math.random()*authors.length)];
let quote = quotes[author];

quoteP.textContent = quote;
quoteH.textContent = author;

}
