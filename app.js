
var button = document.querySelector("#butn-translate");
var inputText = document.querySelector("#textarea");

var output = document.querySelector("#outputText");

button.addEventListener("click", function (){
    output.innerText = "gyji "+inputText.value;
});