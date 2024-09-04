import '.././sass/style.scss'
import { Howl, Howler } from 'howler'



//seleccionamos los elementos necesarios del html
let title = document.querySelector('h1')
let main = document.getElementById('main-principal')
let preguntas = document.getElementById('pregunta')
let palabrasCorrectas = document.getElementById('palabra-correcta')
let palabrasIncorrectas = document.getElementById('palabra-incorrecta')
let dibujoAhorcado = document.getElementById('dibujo-ahorcado')
let ctx = dibujoAhorcado.getContext('2d')
let buttonAdivina = document.getElementById('adivina-palabra')
let message = document.getElementById('message')
let buttonRestart = document.getElementById('restart-button')

//variables de musica
let musicaFondo = new Howl({
    src: ['/music/song-game-ahorcado.mp3'],
    volume: 0.0,
    loop: true,
})

let correctWord = new Howl({
    src: ['/music/palabra-correcta.wav'],
    volume: 0.5,
    loop: false,
})

let wrongWord = new Howl({
    src: ['/music/wrong-words.wav'],
    volume: 0.3,
    loop: false,
})

//creamos un array con las preguntas
let arrayPreguntas = ['¿Cual el personaje principal en el juego Poppy PlayTime?',
    '¿Como se llama el juego que se gana desactivando la spike?',
    '¿Cual es juego que gano el goty en el año 2022?',
    '¿Como se llama el proceso por el cual las plantas expulsan oxigeno?',
    '¿En que oceano se hundio el Titanic?']

//creamos un array con las respuestas
let arrayRespuestas = ['huggywuggy',
    'valorant',
    'eldenring',
    'fotosintesis',
    'atlantico'
]

function iniciarGame(){
    preguntaRespuesta()
    comprobarLetra()
    musicaFondo.play()
}


let respuesta;
let palabraIncorrecta = []
let maxFallos = 6
let fallos = 0
let palabraCorrecta = [];


function preguntaRespuesta(){
    let pregunta = arrayPreguntas[Math.floor(Math.random() * arrayPreguntas.length)]
    preguntas.textContent = pregunta
    let indexPregunta = arrayPreguntas.findIndex(question => question === pregunta)
    respuesta = arrayRespuestas[indexPregunta]
}


function comprobarLetra(){
    let palabraAdivinar = Array(respuesta.length).fill('_')
    buttonAdivina.addEventListener('click', () => {
        let valor = document.getElementById('input-letra').value.toLowerCase()
        let letraCorrecta = false
        let numerosLetras = /^[a-zA-Z0-9]+$/
        if(!numerosLetras.test(valor)){
            alert('No ha introducido un caracter correcto')
        }else{
            for(let i = 0; i < respuesta.length; i++){
                if(respuesta[i] === valor){
                    palabraAdivinar[i] = valor
                    palabraCorrecta[i] = valor
                    letraCorrecta = true
                    correctWord.play()
                    comprobarVictoria()
                }
            }
            if(!letraCorrecta){
                palabraIncorrecta.push(valor)
                palabrasIncorrectas.textContent = palabraIncorrecta.join(' ')
                fallos += 1
                letraCorrecta = false
                wrongWord.play()
                comprobarDerrota()
                dibujarAhorcado()
            }
        }
        palabrasCorrectas.textContent = palabraAdivinar.join(' ')
    })
}

function comprobarDerrota(){
    let inputLetra = document.getElementById('input-letra')
    if(fallos >= maxFallos){
        message.textContent = `¡Has perdido todas la vidas! La respuesta era: ${respuesta}`
        buttonAdivina.disabled = true
        buttonRestart.style.display = 'block'
        inputLetra.disabled = true
        buttonRestart.addEventListener('click', () => {
            location.reload()
        })
    }
}

function comprobarVictoria(){
    let inputLetra = document.getElementById('input-letra')
    if(palabraCorrecta.join(',').replaceAll(',' ,'') === respuesta){
        message.textContent = 'Has ganado!'
        buttonAdivina.disabled = true
        buttonRestart.style.display = 'block'
        inputLetra.disabled = true
        buttonRestart.addEventListener('click', () => {
            location.reload()
        })
    }
}

function dibujarAhorcado(){
    //base
    if(fallos >= 1){
        ctx.lineWidth = 3
        ctx.strokeStyle = 'brown'
        ctx.beginPath()
        ctx.moveTo(30, 140)
        ctx.lineTo(30, 150)
        ctx.moveTo(30,140)
        ctx.lineTo(150,140)
        ctx.moveTo(150, 140)
        ctx.lineTo(150, 150)
        ctx.stroke()
    }

    //poste
    if(fallos >= 2){
        ctx.lineWidth = 3
        ctx.strokeStyle = 'brown'
        ctx.beginPath()
        ctx.moveTo(70, 140)
        ctx.lineTo(70, 10)
        ctx.moveTo(70, 10)
        ctx.lineTo(110, 10)
        ctx.moveTo(110, 10)
        ctx.lineTo(110, 140)
        ctx.stroke()
    }

    //soporte cuerda
    if(fallos >= 3){
        ctx.lineWidth = 3
        ctx.strokeStyle = 'brown'
        ctx.beginPath();
        ctx.moveTo(110, 25)
        ctx.lineTo(220, 10)
        ctx.moveTo(220, 10)
        ctx.lineTo(240, 20)
        ctx.moveTo(240, 20)
        ctx.lineTo(110, 38)
        ctx.stroke()
    }

    //cuerda
    if(fallos >= 4){
        ctx.lineWidth = 4
        ctx.strokeStyle = 'black'
        ctx.beginPath();
        ctx.moveTo(220, 23);
        ctx.lineTo(220, 55);
        ctx.stroke();
    }

    //cabeza
    if(fallos >= 5){
        ctx.lineWidth = 2
        ctx.strokeStyle = 'pink'
        ctx.beginPath();
        ctx.arc(220, 69, 15, 0, Math.PI * 2);
        ctx.moveTo(225, 65)
        ctx.arc(225, 65, 1, 0 , Math.PI * 2)
        ctx.moveTo(215, 65)
        ctx.arc(215, 65, 1, 0 , Math.PI * 2)
        ctx.moveTo(225, 77)
        ctx.arc(220, 77, 5, 0, Math.PI, true )
        ctx.stroke();
    }

    //cuerpo
    if(fallos >= 6){
        ctx.lineWidth = 2
        ctx.strokeStyle = 'pink'
        ctx.beginPath()
        ctx.moveTo(220,85)
        ctx.lineTo(220, 120)
        ctx.moveTo(220,90)
        ctx.lineTo(200, 115)
        ctx.moveTo(220, 119)
        ctx.lineTo(200, 140)
        ctx.moveTo(220, 90)
        ctx.lineTo(240, 115)
        ctx.moveTo(220, 119)
        ctx.lineTo(240, 140)
        ctx.stroke()
    }
}



// //cabeza


// //cuerpo


iniciarGame()

