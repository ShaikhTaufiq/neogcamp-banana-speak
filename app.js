
var button = document.querySelector("#butn-translate");
var inputText = document.querySelector("#textarea");

var output = document.querySelector("#outputText");

url = "https://api.funtranslations.com/translate/minion.json";

function generateURL(text){
    return url + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("Couldn't fetch data from API", console.error());
    alert("Please try after sometime");
}

function clickHandler(){
   
    fetch(generateURL(inputText.value))
    .then(response => response.json())
    .then(json => {
        var translated = json.contents.translated;
        output.innerText = translated;
    }
        )
    .catch(errorHandler);
}

button.addEventListener("click", clickHandler);