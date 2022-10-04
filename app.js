var inputxt = document.querySelector("#txt-input");
var translatebtn = document.querySelector("#btn-translate");
var outputxt = document.querySelector(".output");
var errMsg = document.querySelector("#errorMsg");

var url = "https://api.funtranslations.com/translate/minion.json"

function geturl(text) {
    return url + "?" + "text=" + text

}

function errorhandler(error) {
    console.log("error occured " + error);
    alert("There is some problem in server please try again");
}
function clickresponse() {
    var answer = inputxt.value;
    if (answer === "") {
        errMsg.innerText = "Field can not be empty.";
    } else {
        fetch(geturl(answer))
            .then(response => response.json())
            .then(json => {
                errMsg.innerText = "";
                outputxt.innerText = json.contents.translated;
                inputxt.value = "";

            })
            .catch(errorhandler)
    }
};
translatebtn.addEventListener("click", clickresponse)