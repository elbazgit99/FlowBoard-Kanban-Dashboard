let cardsDb = []
let resetWrapper = document.getElementById('resetWrapper')
let resError = document.createElement('p')
let retryBtn = document.createElement('button')


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
    displayTodoCardsTitle()
    displayinProgressTitle()
    displayDoneTitle()
    console.log(cardsDb);
    
  })
  .catch(error => {
    
    resError.textContent = error
    resetWrapper.insertBefore(resError, resetWrapper.firstChild)
    
  })
}

let todoElementsWrapper = document.getElementById('todoElementsWrapper')
let todoSelection = document.getElementById('todoSelection')

function displayTodoCardsTitle(){
  
  // todoSelection.replaceChildren()
  cardsDb.find((card) =>  {
    console.log(card.status);
    
    if(card.status === "todo"){
      let todoOptions = document.createElement('option')
      todoOptions.style.color = "white"
      todoOptions.textContent = `${card.title}`
      todoOptions.value = card.title

      let 
      todoSelection.insertBefore(todoOptions, todoSelection.firstChild)

    }
  }) 
 
}

todoSelection.addEventListener('change',function addTodoCart(event){
      let todoTitle = document.createElement('span')
      todoTitle.classList.add("bg-[#2A2A2D]","rounded-md")  //add() remove() toggle() replace() contains()
      todoTitle.textContent += `${event.target.value}`

      let todoPrierity = document.createElement('small')
      todoPrierity.classList.add("bg-[#2A2A2D]","rounded-md")
      todoPrierity.textContent += event.target.value

      todoElementsWrapper.append(todoTitle)
        
    })


let inProgressSelection = document.getElementById('inProgressSelection')
let inProgressElementsWrapper = document.getElementById('inProgressElementsWrapper')

function displayinProgressTitle() {
  cardsDb.find(card => {
    console.log(card.status);

    
    if (card.status === "in-progress") {
      let inProgressOption = document.createElement('option')
      inProgressOption.style.color = "white"
      inProgressOption.value = card.title
      inProgressOption.textContent = card.title
      inProgressSelection.append(inProgressOption)
    }
  })
}
//you have to check if aleady existed
inProgressSelection.addEventListener('change', function addInProgress(event){
  let inProgressTitle = document.createElement('h6')
  inProgressTitle.classList.add("bg-[#2A2A2D]","rounded-md")
  inProgressTitle.draggable = true

  inProgressTitle.textContent += event.target.value
  inProgressElementsWrapper.append(inProgressTitle)
})

let doneSelection = document.getElementById('doneSelection')
let doneElementWrapper = document.getElementById('doneElementWrapper')

function displayDoneTitle(){
  cardsDb.find(card => {
    if (card.status === "done") {
      let doneOption = document.createElement('option')
      doneOption.style.color = "white"
      doneOption.value = card.title
      doneOption.textContent = card.title
      doneSelection.append(doneOption)
    }
    
  })
}

doneSelection.addEventListener('change', function addInDone(event){
  let doneTitle = document.createElement('h6')
  doneTitle.classList.add("bg-[#2A2A2D]","rounded-md")
  doneTitle.textContent = event.target.value
  doneElementWrapper.append(doneTitle)
})

let createCardBtn = document.getElementById('createCardBtn')
createCardBtn.addEventListener('click', function cartCreation(){

})

ResponseFunc()
