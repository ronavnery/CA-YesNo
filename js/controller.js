'use strict';

function onInit() {
    addEventListener();
    // getFakeDetails(handleDetails)
}

function addEventListener() {
    let elInput = document.querySelector('input');
    elInput.addEventListener('input', function() {
        let isQuestion = checkIfQuestion(this.value);
        if (isQuestion) getAnswer(handleAnswer);
    })
}

function handleAnswer(answer) {
    console.log(answer);
    let elQuestionCont = document.querySelector('.question-container');
    elQuestionCont.hidden = true;
    // let elAskAnother = document.querySelector('.ask-another');
    // elAskAnother.hidden = false;
    let elAnswerCont = document.querySelector('.answer-container');
    elAnswerCont.innerHTML = `<br><img src="${answer.image}"/>`
}

// function onAskAnother() {
    
// }