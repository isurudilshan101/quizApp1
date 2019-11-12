const startButton= document.getElementById('start-btn')
const questionContainerElement=document.getElementById('quection-container')
const questionElement=document.getElementById('question')
const answerButtonsElement=document.getElementById('answer-buttons')

let shuffledQuestions, currentQuectionIndex

startButton.addEventListener('click',startGame)

function startGame()
{
     console.log('Started')
     startButton.classList.add('hide') 
     shuffledQuestions=questions.sort(()=>Math.random()- .5)
     currentQuestionIndex=0
      questionContainerElement.classList.remove('hide')
      setNextQuestion()

}

function setNextQuestion()
{ 
    showQuestion(shuffledQuestion[currentQuestionIndex])
}

function showQuestion(question)
{
    questionElement.innerText=questions.question
}


function slectAnswer()
{

}

const questions=[
{
    question:'What is 2+2',
    answers:[
        {text:'4',correct:true },
        {text:'22',correct:false}
            
    ]
}

]