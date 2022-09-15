function translator() {
    var inputvalue = document.getElementById("123").value;
    var op = document.getElementById("456");
    console.log(inputvalue);

    var str1 = "https://api.funtranslations.com/translate/minion.json";
    var str2 = "?";
    var str3 = "text=";
    var texttobtanslated = str1 + str2 + str3 + inputvalue;
    fetch(texttobtanslated)
        .then((response) => response.json())
        .then((json) => {
            console.log(json.contents.translated);
            var output = json.contents.translated;
            op.innerText = output;
        })
        .catch(error => {
            console.log(error);
            op.innerText = "We are unable to keep up with your pace. Please try again in an hour.";
            op.classList.add("error");
        });

}