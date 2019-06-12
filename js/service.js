'use strict';


function getAnswer(onSuccess) {
    let httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", "https://yesno.wtf/api", true)
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
            const answer = JSON.parse(httpRequest.responseText);
            onSuccess(answer);
        }
    }
    httpRequest.send();
} 


function checkIfQuestion(str) {
    var regEx = new RegExp(/.+\?/); // At least 1 chars & ending with a question mark
    if (regEx.test(str)) return true;
    else return false;
}