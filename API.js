export let cardsDb = []
import {displayCards} from './UI.js'
let resetWrapper = document.getElementById('resetWrapper')
let resError = document.createElement('p')
let retryBtn = document.createElement('button')

let url = "https://flowboard-api-virid.vercel.app/cards"

export function ResponseFunc(resolve,reject){

  fetch(url)
  .then(res => {
    if(!res.ok){
      throw new Error(`enable to fetch ${res.status}`)
    }
    return res.json()
  })

  .then(data => {
    cardsDb = data
    displayCards()
    
  })

  .catch(error => {
    
    resError.textContent = error
    resetWrapper.insertBefore(resError, resetWrapper.firstChild)
    
  })
}

ResponseFunc()