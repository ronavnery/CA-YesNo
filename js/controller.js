'use strict';

function onInit() {
    addEventListener();
}

function addEventListener() {
    let elInput = document.querySelector('input');
    elInput.addEventListener('input', function() {
        let isQuestion = checkIfQuestion(this.value);
        if (isQuestion) getAnswer(handleResult);
    })
}

function handleResult(result) {
    let elQuestionCont = document.querySelector('.question-container');
    elQuestionCont.hidden = true;
    let elAnswerCont = document.querySelector('.answer-container');
    elAnswerCont.innerHTML = `<br><img src="${result.image}"/>`
}