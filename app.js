var userinput = document.querySelector('#user-input');

var tranletedbtn = document.querySelector('#translet-btn');

var outputtransleted = document.querySelector("#output-transleted");

var serverURL = "";

function gettransletedURL(userinput){
return serverURL = "?" + "text=" + userinput
}

function insertTransleted(transletedText) {
    return outputtransleted.innerHTML = transletedText;
 }

function clickHandler() {
    var userinput = userinput.value;
    fetch(gettrnaletedURL(userinput)).then(respone => responce.json()
        .then(data => {
            var transletedYText = data.contents.tranleted;
            console.log(data)
            insertyTransletedoutput(tram = nsleted)
        }

            )


transletedbtn = addEventListener("click",clickHandler)