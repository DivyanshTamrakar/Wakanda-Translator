var input = document.querySelector(".input");
var button = document.querySelector(".btn");
var output = document.querySelector(".output");

var service = "https://api.funtranslations.com/translate/emoji.json";


button.addEventListener("click", clickHandler)

function clickHandler() {


    fetch(fullApi(input.value)).then(response => response.json()).then(json => {
        console.log(json);
        output.innerText = json.contents.translated;

    }).catch(Errohandler);


}

function fullApi(text) {

    var url = service + "?" + "text=" + text;

    console.log(url);

    return url;
}

function Errohandler (error) {
    console.log(error);

}