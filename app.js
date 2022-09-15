var btnTranslet = document.querySelector("#btn-translet");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

console.log(txtInput);
function clickhandler() {
    outputDiv.innerText = "ajsjsjsjjsjsj" + txtInput.value
};
btnTranslet.addEventListener("click", clickhandler)