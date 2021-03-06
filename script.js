var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector('#output');

const serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(txtInput){
    return serverURL + "?" + "text=" + txtInput;
}

function errorHandler(error){
    console.log("error occured", error);
    alert("Something Went wrong! Please try after sometime");
}

function clickEventHandler(){

    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        console.log(json);
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
    
}

btnTranslate.addEventListener("click", clickEventHandler);


