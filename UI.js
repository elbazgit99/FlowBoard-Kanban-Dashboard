import {cardsDb} from "./API.js"


let todoElementsWrapper = document.getElementById('todoElementsWrapper')
let todoSelection = document.getElementById('todoSelection')

let todoFilter = []
export function displayTodoCardsTitle(){
    todoFilter = []
    
  // todoSelection.replaceChildren()
  cardsDb.forEach((card) =>  {
    
    if(card.status === "todo"){
      let todoOptions = document.createElement('option')
      todoOptions.style.color = "white"
      todoOptions.textContent = card.title
      todoOptions.value = card.title
      // todoOptions.dataset.todoPrioritySelectionAttribute = card.priority
      // console.log(todoOptions.dataset.todoPrioritySelectionAttribute);
      todoSelection.insertBefore(todoOptions, todoSelection.firstChild)

      if (!todoFilter.includes(card.priority)) {
      todoFilter.push(card.priority)
        }
    }
  }) 

}
todoSelection.addEventListener('change', addTodoCart)
function addTodoCart(event){
        let todoTitle = document.createElement('span')
      todoTitle.classList.add("bg-[#2A2A2D]","rounded-md")  //add() remove() toggle() replace() contains()
      todoTitle.textContent += event.target.value

      let todoPrioritySelection = document.createElement('select')


      todoFilter.forEach(priorety => {
        console.log(priorety);
        
        let prioretyOptions = document.createElement('option')
        prioretyOptions.classList.add("bg-[#2A2A2D]","rounded-md")
        prioretyOptions.textContent = priorety
        prioretyOptions.value = priorety

        todoPrioritySelection.append(prioretyOptions)
      })
      
      todoTitle.append(todoPrioritySelection )
      
    
      todoElementsWrapper.append(todoTitle);
    }


let inProgressElementsWrapper = document.getElementById('inProgressElementsWrapper')
let inProgressSelection = document.getElementById('inProgressSelection')

let inProgressFilter = []
export function displayinProgressTitle() {
  inProgressFilter = []
  console.log(inProgressFilter);
  cardsDb.forEach(card => {
    if (card.status === "in-progress") {
      let inProgressOption = document.createElement('option')
      inProgressOption.style.color = "white"
      inProgressOption.value = card.title
      inProgressOption.textContent = card.title

      inProgressSelection.insertBefore(inProgressOption, inProgressSelection.firstChild)

      if (!inProgressFilter.includes(card.priority)) {
        inProgressFilter.push(card.priority)
        
      }
      console.log(card.title, card.priorety)
    }
  })
}
//you have to check if aleady existed
inProgressSelection.addEventListener('change', addInProgress)

 function addInProgress(event){
  let inProgressTitle = document.createElement('span')  
  inProgressTitle.classList.add("bg-[#2A2A2D]","rounded-md")
  inProgressTitle.draggable = true

  inProgressTitle.textContent += event.target.value

  let inProgressPrioretySelection = document.createElement('select')

  inProgressFilter.forEach(priorety => {
    let prioretyOptions = document.createElement('option')
    prioretyOptions.classList.add("bg-[#2A2A2D]","rounded-md")
    prioretyOptions.textContent = priorety
    prioretyOptions.value = priorety

    inProgressPrioretySelection.append(prioretyOptions)
  })
  inProgressTitle.append(inProgressPrioretySelection)
  
  inProgressElementsWrapper.append(inProgressTitle)
}


let doneSelection = document.getElementById('doneSelection')
let doneElementWrapper = document.getElementById('doneElementWrapper')

export function displayDoneTitle(){
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


