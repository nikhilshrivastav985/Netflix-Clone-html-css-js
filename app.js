// Grabbing All Questions
const faqQuestions = document.querySelectorAll('.faq-question');

// looping through all questions
faqQuestions.forEach((question) => {

    question.addEventListener('click', (event) => {

        // storing clicked question
        const clickedQuestion = event.currentTarget;

        // functionality for showing answer only for clickedQuestion , and closing all other answer
        faqQuestions.forEach((question) => {

            // closing answer of questions which are not clicked
            if (question !== clickedQuestion) {
                question.parentElement.classList.remove('show-answer');
            }

        });

        // showing answer of clicked question
        clickedQuestion.parentElement.classList.toggle('show-answer');
    })
})