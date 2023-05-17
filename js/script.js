const ballBtn = document.querySelector('.button')
const error = document.querySelector('.error')
const input = document.querySelector('.input')
const answer = document.querySelector('.answear')
let answerArr = [
    "Nie chcesz znać odpowiedzi na to pytanie",
    "Tak",
    "Oczywiście, że nie", 
    "Jasne że tak",
    "Nie ma lepszego!"
]


const shakeBall = () => {
    ballBtn.classList.add('buttonShake');
    setTimeout(text, 1000)
}


const text = () => {
    if (input.value !== '' && input.value.slice(-1) === '?'){
        randomAnswear();
        error.textContent = ''
        console.log('ok');
    } else if (input.value !== '' && input.value.slice(-1) !== '?') {
        error.textContent = 'Pytanie musi być zakończone znakiem zapytania'
        answer.textContent = ''
        console.log(' nie ok');
    } else {
        error.textContent = 'Musisz zadać jakieś pytanie!'
        answer.textContent = ''
    }
    ballBtn.classList.remove('buttonShake')
} 

const showError = () => {
    error.innerHTML = "Wpisz pytanie"
}


const randomAnswear = () => {
    const random = Math.floor(Math.random() * 5)
    answer.innerHTML=`<span>Odpowiedź:</span> ${answerArr[random]} `
}



ballBtn.addEventListener('click', shakeBall)