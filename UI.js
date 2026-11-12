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


      todoFilter.forEach(priority => {
        console.log(priority);
        
        let priorityOptions = document.createElement('option')
        priorityOptions.classList.add("bg-[#2A2A2D]","rounded-md")
        priorityOptions.textContent = priority
        priorityOptions.value = priority

        todoPrioritySelection.append(priorityOptions)
      })
      
      todoTitle.append(todoPrioritySelection )
      
    
      todoElementsWrapper.append(todoTitle);
    }


let inProgressElementsWrapper = document.getElementById('inProgressElementsWrapper')
let inProgressSelection = document.getElementById('inProgressSelection')

let inProgressFilter = []
export function displayinProgressTitle() {
  inProgressFilter = []
  // console.log(inProgressFilter);
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
      // console.log(card.title, card.priority)
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

  let inProgressprioritySelection = document.createElement('select')

  inProgressFilter.forEach(priority => {
    let priorityOptions = document.createElement('option')
    priorityOptions.classList.add("bg-[#2A2A2D]","rounded-md")
    priorityOptions.textContent = priority
    priorityOptions.value = priority

    inProgressprioritySelection.append(priorityOptions)
  })
  inProgressTitle.append(inProgressprioritySelection)
  
  inProgressElementsWrapper.append(inProgressTitle)
}


let doneSelection = document.getElementById('doneSelection')
let doneElementWrapper = document.getElementById('doneElementWrapper')

let doneFilter = []
export function displayDoneTitle(){
  doneFilter = []
  console.log(doneFilter);
  
  cardsDb.forEach(card => {
    if (card.status === "done") {
      let doneOption = document.createElement('option')
      doneOption.style.color = "white"
      doneOption.value = card.title
      doneOption.textContent = card.title
      doneSelection.insertBefore(doneOption, doneSelection.firstChild)

      if (!doneFilter.includes(card.priority)) {
        doneFilter.push(card.priority)
      }
      console.log(card.title, card.priority);
      
    }
    // KEEP NOTE : priority was miss pronunciation !!!!!
  })
}

doneSelection.addEventListener('change',addInDone )
function addInDone(event){
  let doneTitle = document.createElement('span')
  doneTitle.classList.add("bg-[#2A2A2D]","rounded-md")
  doneTitle.textContent += event.target.value


  let donePrioritySelection = document.createElement('select')

  doneFilter.forEach(priority => {
    let donePriorityOptions = document.createElement('option')
    donePriorityOptions.classList.add("bg-[#2A2A2D]","rounded-md")
    donePriorityOptions.textContent = priority
    donePriorityOptions.value = priority
    donePrioritySelection.append(donePriorityOptions)
  })

  doneTitle.append(donePrioritySelection)
  doneElementWrapper.append(doneTitle);
}






let myModal = document.getElementById("myModal");
let openModal = document.getElementById("openModal");

let addBtn = document.getElementById("addBtn");
  let removeBtn = document.getElementById("removeBtn");

let title = document.getElementById("title");
  let description = document.getElementById("description");
let status = document.getElementById("status");
let priority = document.getElementById("priority");


openModal.addEventListener("click", function() {
    myModal.style.display = "flex";
});



addBtn.addEventListener("click", function() {

    if (title.value === "") {
        return;
    }

    let newTask = {
        title: title.value,
        description: description.value,
        status: status.value,
        priority: priority.value
    };

    cardsDb.push(newTask)

    if (newTask.status === "todo") {

        if (!todoFilter.includes(newTask.priority)) {
            todoFilter.push(newTask.priority);
        }

        let newOption = document.createElement("option")
        newOption.value = newTask.title;
        newOption.textContent = newTask.title;

      todoSelection.append(newOption);
    todoSelection.value = newTask.title;  
        todoSelection.dispatchEvent(new Event("change"))

        // Set the selected priority
        todoElementsWrapper.lastElementChild.querySelector("select").value = newTask.priority;

    } else if (newTask.status === "in-progress") {

        if (!inProgressFilter.includes(newTask.priority)) {
            inProgressFilter.push(newTask.priority);
        }

            let newOption = document.createElement("option")
            newOption.value = newTask.title
            newOption.textContent = newTask.title

        inProgressSelection.append(newOption)

        inProgressSelection.value = newTask.title
        inProgressSelection.dispatchEvent(new Event('change'))

        inProgressElementsWrapper.lastElementChild.querySelector('select').value = newTask.priority

    }  else if (newTask.status === "done") {

        if (!doneFilter.includes(newTask.priority)) {
            doneFilter.push(newTask.priority)
        }

            let newOption = document.createElement("option")
               newOption.value = newTask.title
            newOption.textContent = newTask.title

          doneSelection.append(newOption)

        doneSelection.value = newTask.title
    doneSelection.dispatchEvent(new Event('change'))

        doneElementWrapper.lastElementChild.querySelector("select").value = newTask.priority;
  }

            myModal.style.display = 'none'
});



removeBtn.addEventListener('click', function() {

     myModal.style.display = "none"
})


