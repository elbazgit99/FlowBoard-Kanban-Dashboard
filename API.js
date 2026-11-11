let cardsDb = []
let resetWrapper = document.getElementById('resetWrapper')
let resError = document.createElement('p')
let retryBtn = document.createElement('button')
let todoElementsWrapper = document.getElementById('todoElementsWrapper')
let todoTitle = document.createElement('h6')
let url = "https://flowboard-api-virid.vercel.app/cards"

function ResponseFunc(resolve,reject){

  fetch(url)
  .then(res => {
    if(!res.ok){
      throw new Error(`enable to fetch ${res.status}`)
    }
    return res.json()
  })
  .then(data => {
    cardsDb = data
    console.log(cardsDb);
    displayCards()
  })
  .catch(error => {
    resError.textContent = error
    resetWrapper.insertBefore(resError, resetWrapper.firstChild)

  })
}

function displayCards(){
  todoElementsWrapper.replaceChildren()
  cardsDb.forEach(card => {
    
    todoTitle.textContent = card.title
    todoElementsWrapper.insertBefore(todoTitle, todoElementsWrapper.firstChild)
  })
}
ResponseFunc()
