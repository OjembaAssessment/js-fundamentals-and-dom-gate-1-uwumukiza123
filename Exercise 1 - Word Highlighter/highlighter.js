
const paragraph = document.querySelector("#myParagraph");
const heading = document.querySelector('h2');

heading.addEventListener('click', myParagraph)

let highlighed = [];
var mainParagraph = paragraph.innerHTML;
var splited = mainParagraph.split(" ")
var newpara = splited.reduce((a, b)=> {
    if(a.includes(b)) {
        console.log(a)
    }
})