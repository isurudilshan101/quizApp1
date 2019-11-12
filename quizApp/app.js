const startButton= document.getElementById('start-btn')
const questionContainerElement=document.getElementById('quection-container')
startButton.addEventListener('click',startGame)

function startGame()
{
     console.log('Started')
     startButton.classList.add('hide') 
     const questionContainerElement.classList.remove('hide')

}

function setNextQuestion()
{ 

}

function slectAnswer()
{

}