
// On the deployed API, additions, modifications and deletions (POST, PUT, PATCH, DELETE, and POST /reset) require the parameter 
// ?password=…. Without him, the answer is 401. Readings remain free.
let cardsDb = []


const url = `https://flowboard-api-virid.vercel.app`
const delayurl = `https://flowboard-api-virid.vercel.app?_delay=2000`
const failedurl = `https://flowboard-api-virid.vercel.app?_fail=404`
const failed500 = `https://flowboard-api-virid.vercel.app?_fail=500` //?_fail=503
const cards = "https://flowboard-api-virid.vercel.app/cards"
const docs = "https://flowboard-api-virid.vercel.app/docs"
const members = "https://flowboard-api-virid.vercel.app/members"
const openapi = "https://flowboard-api-virid.vercel.app/openapi.json"
const reset = "https://flowboard-api-virid.vercel.app/reset"

fetch(cards)
.then(res => {
  if(!res.ok){
      throw new Error('failed to fetch data')
    }
    return res.json()
  })
  .then(data =>{
     cardsDb = data
     displayCards()
     displayByName()
     displayByDescription()
     displayByStatus()
     displayByPriority()
     
  })
  .catch(error => console.log(error.message))
  

// const listCardsUrl = 'https://flowboard-api-virid.vercel.app/cards?assignee=Lucas%20Martin&q=fetch&title_like=%5Ecr&tags_like=front&_sort=dueDate'
// fetch(listCardsUrl, {
//   headers: {
//     'X-Workspace': 'public'
//   }
// })
// .then(res => {
//   if(!res.ok){
//         throw new Error('failed to display  cards')
//   }
//   return res.json()
// })
// .then(data => console.log(data))
// .catch(error => console.log(error.message))

function displayCards(){
  
console.log(cardsDb);

}


function displayByName(){
    cardsDb.forEach(card => {
    console.log(card.title);
    
  })
}

function displayByDescription(){
      cardsDb.forEach(card => {
    console.log(card.description);
    
  })
}

function displayByStatus(){
        cardsDb.forEach(card => {
    console.log(card.status);
    
  })
}

function displayByPriority(){
          cardsDb.forEach(card => {
    console.log(card.priority);
    
  })
}