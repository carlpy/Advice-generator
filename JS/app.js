window.addEventListener('DOMContentLoaded', getAdvices)

const ADVICE_API = 'https://api.adviceslip.com/advice';

const adviceNumber = document.getElementById('advice-id');
const adviceContainer = document.querySelector('.advice');
const apiBtn = document.querySelector('.api-btn');

async function getAdvices() {
    try { 
        const response = await fetch(ADVICE_API);
        const data = await response.json();
        const {id, advice} = data.slip;
    
        adviceNumber.innerText = id;
        adviceContainer.innerText = advice;
    } 
    catch {
        throw new Error('something went wrong: ' + response.status);
    }
}

apiBtn.addEventListener('click', getAdvices);