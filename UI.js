import {cardsDb} from "./API.js"

function SetLetters(name) { return /^[A-Za-z]+(?: [A-Za-z]*)?$/.test(name) }
function SetMaxLength(inputName, MaxLengthNum) { return inputName.maxLength = MaxLengthNum }
function SetDescription(dscrip) { return /^[\p{L}\p{N} .,:\n]*$/u.test(dscrip) }
function setRequired(inputName, boolean) { return inputName.required = boolean }

let todoElementsWrapper = document.getElementById('todoElementsWrapper')
let todoSelection = document.getElementById('todoSelection')
//const bouton = event.target.closest('button');
let cardsFilter = []
console.log(cardsFilter);


export function displayCards(boardFilter = cardsFilter ) {
  for( let card of cardsDb){
    // title, status,priority,assignee

    cardsFilter.push({
      cardTitle : card.title,
      cardStatus : card.status,
      cardPriority: card.priority,
      assignedTo : card.assignee
    })
    
  }
}





// export function displayTodoCardsTitle(){ 
//     todoFilter = []
    
//   // todoSelection.replaceChildren()
//   cardsDb.forEach((card) =>  {
    
//     if(card.status === "todo"){
//       let todoOptions = document.createElement('option')
//       todoOptions.style.color = "white"
//       todoOptions.textContent = card.title
//       todoOptions.value = card.title
//       // todoOptions.dataset.todoPrioritySelectionAttribute = card.priority
//       // console.log(todoOptions.dataset.todoPrioritySelectionAttribute);
//       todoSelection.insertBefore(todoOptions, todoSelection.firstChild)

//       if (!todoFilter.includes(card.priority)) {
//       todoFilter.push(card.priority)
//         }
//     }
//   }) 

// }
// todoSelection.addEventListener('change', addTodoCart)
// function addTodoCart(event){
//         let todoTitle = document.createElement('span')
//       todoTitle.classList.add("bg-[#2A2A2D]","rounded-md")  //add() remove() toggle() replace() contains()
//       todoTitle.textContent += event.target.value

//       let todoPrioritySelection = document.createElement('select')


//       todoFilter.forEach(priority => {
//         console.log(priority);
        
//         let priorityOptions = document.createElement('option')
//         priorityOptions.classList.add("bg-[#2A2A2D]","rounded-md")
//         priorityOptions.textContent = priority
//         priorityOptions.value = priority

//         todoPrioritySelection.append(priorityOptions)
//       })
      
//       todoTitle.append(todoPrioritySelection )
      
    
//       todoElementsWrapper.append(todoTitle);
//     }


// let inProgressElementsWrapper = document.getElementById('inProgressElementsWrapper')
// let inProgressSelection = document.getElementById('inProgressSelection')

// let inProgressFilter = []
// export function displayinProgressTitle() {
//   inProgressFilter = []
//   // console.log(inProgressFilter);
//   cardsDb.forEach(card => {
//     if (card.status === "in-progress") {
//       let inProgressOption = document.createElement('option')
//       inProgressOption.style.color = "white"
//       inProgressOption.value = card.title
//       inProgressOption.textContent = card.title

//       inProgressSelection.insertBefore(inProgressOption, inProgressSelection.firstChild)

//       if (!inProgressFilter.includes(card.priority)) {
//         inProgressFilter.push(card.priority)
        
//       }
//       // console.log(card.title, card.priority)
//     }
//   })
// }
// //you have to check if aleady existed
// inProgressSelection.addEventListener('change', addInProgress)

//  function addInProgress(event){
//   let inProgressTitle = document.createElement('span')  
//   inProgressTitle.classList.add("bg-[#2A2A2D]","rounded-md")
//   inProgressTitle.draggable = true

//   inProgressTitle.textContent += event.target.value

//   let inProgressprioritySelection = document.createElement('select')

//   inProgressFilter.forEach(priority => {
//     let priorityOptions = document.createElement('option')
//     priorityOptions.classList.add("bg-[#2A2A2D]","rounded-md")
//     priorityOptions.textContent = priority
//     priorityOptions.value = priority

//     inProgressprioritySelection.append(priorityOptions)
//   })
//   inProgressTitle.append(inProgressprioritySelection)
  
//   inProgressElementsWrapper.append(inProgressTitle)
// }


// let doneSelection = document.getElementById('doneSelection')
// let doneElementWrapper = document.getElementById('doneElementWrapper')

// let doneFilter = []
// export function displayDoneTitle(){
//   doneFilter = []
//   console.log(doneFilter);
  
//   cardsDb.forEach(card => {
//     if (card.status === "done") {
//       let doneOption = document.createElement('option')
//       doneOption.style.color = "white"
//       doneOption.value = card.title
//       doneOption.textContent = card.title
//       doneSelection.insertBefore(doneOption, doneSelection.firstChild)

//       if (!doneFilter.includes(card.priority)) {
//         doneFilter.push(card.priority)
//       }
//       console.log(card.title, card.priority);
      
//     }
//     // KEEP NOTE : priority was miss pronunciation !!!!!
//   })
// }

// doneSelection.addEventListener('change',addInDone )
// function addInDone(event){
//   let doneTitle = document.createElement('span')
//   doneTitle.classList.add("bg-[#2A2A2D]","rounded-md")
//   doneTitle.textContent += event.target.value


//   let donePrioritySelection = document.createElement('select')

//   doneFilter.forEach(priority => {
//     let donePriorityOptions = document.createElement('option')
//     donePriorityOptions.classList.add("bg-[#2A2A2D]","rounded-md")
//     donePriorityOptions.textContent = priority
//     donePriorityOptions.value = priority
//     donePrioritySelection.append(donePriorityOptions)
//   })

//   doneTitle.append(donePrioritySelection)
//   doneElementWrapper.append(doneTitle);
// }




//         // todoSelection.dispatchEvent(new Event("change")) // used to add an event for the created titles



// let searchInput = document.querySelector('#searchInput')
// let searchTitlesSelection = document.querySelector('#searchTitles')
// let searchTerm = '' // searchTerm is whatever we input in our search field.
// function showList(params) {
 
  
// }



