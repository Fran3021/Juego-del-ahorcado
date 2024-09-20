import { Howl, Howler } from "howler"

class Game{

    constructor(nivelDificultad){
        this.nivelDificultad = nivelDificultad
        this.respuesta = ''
        this.palabraCorrecta = []
        this.palabraIncorrecta = []
        this.fallos = 0
        this.maxFallos = 6
        //musica de fondo del juego
        this.musicaFondo =  new Howl({
            src: ['../../music/musica-fondo-ahorcado.wav'],
            volume: 0.1,
            loop: true
        })
        this.iniciarGame()
    }

    static comprobarDificultad(){
        //metodo estatico que lo llamamos para poder comprobar la dificultad introducida por el usuario
        let dificultad = prompt('Introduzca la dificultad: Facil | Medio | Dificil ').toLowerCase()
        if(dificultad === 'facil' && dificultad === 'medio' && dificultad === 'dificil'){
            return {
                dificultad: dificultad,
            }
        }else{
            while(dificultad != 'facil' && dificultad != 'medio' && dificultad != 'dificil'){
                alert('No ha introducido un nivel correcto')
                dificultad = prompt('Introduzca la dificultad: Facil | Medio | Dificil ').toLowerCase()
            }
            return {
                dificultad: dificultad,
            }
        }
    }

    iniciarGame(){
        //metodo para iniciar el juego segun la dificultad
        if(this.nivelDificultad === 'facil'){
            this.preguntasRespuestasFacil()
            this.comprobarLetra()
            this.musicaFondo.play()
        }else if(this.nivelDificultad === 'medio'){
            this.preguntasRespuestasMedio()
            this.comprobarLetra()
            this.musicaFondo.play()
        }else if(this.nivelDificultad === 'dificil'){
            this.preguntasRespuestasDificil()
            this.comprobarLetra()
            this.musicaFondo.play()
        }
    }

    preguntasRespuestasFacil(){
        //metodo donde sacamos las preguntas y respuestas

        //seleccionamos el div de la pregunta
        let preguntas = document.getElementById('pregunta')
        //array de preguntas
        let arrayPreguntasFacil = [
            '¿Mes que tiene 28 o 29 días?',
            '¿Planeta donde vivimos?',
            '¿Elemento del cuerpo que se usa para caminar?',
            '¿Instrumento musical con cuerdas?',
            '¿En que oceano se hundio el Titanic?',
            '¿Líquido transparente y vital para los seres vivos?',
            '¿Verdura verde con forma de árbol pequeño?',
            '¿Fruta de color amarillo y alargada?',
            '¿Animal que dice "miau"?',
            '¿Parte del cuerpo usada para escuchar?',
        ]
        //array de respuestas
        let arrayRespuestasFacil = [
            'febrero',
            'tierra',
            'pierna',
            'guitarra',
            'atlantico',
            'agua',
            'brocoli',
            'platano',
            'gato',
            'oreja',
        ]

        //sacamos la pregunta aleatoria
        let pregunta = arrayPreguntasFacil[Math.floor(Math.random() * arrayPreguntasFacil.length)]
        preguntas.textContent = pregunta
        let indexPregunta = arrayPreguntasFacil.findIndex(question => question === pregunta)
        this.respuesta = arrayRespuestasFacil[indexPregunta]
    }

    preguntasRespuestasMedio(){
        //metodo donde sacamos las preguntas y respuestas

        //seleccionamos el div de la pregunta
        let preguntas = document.getElementById('pregunta')
        //array de preguntas
        let arrayPreguntasMedio = [
            '¿Animal que es el más grande en la Tierra?',
            '¿Elemento químico cuyo símbolo es "O"?',
            '¿País donde se encuentra la Torre Eiffel?',
            '¿Deporte que se juega con una pelota y canasta?',
            '¿Reptil que puede cambiar de color?',
            '¿Moneda usada en Japón?',
            '¿Cual es el metal más común en los cables eléctricos?',
            '¿Animal que pone huevos y tiene plumas?',
            '¿País sudamericano famoso por su carnaval?',
            '¿Mineral que compone los huesos?',
        ]
        //array de respuestas
        let arrayRespuestasMedio = [
            'ballena',
            'oxigeno',
            'francia',
            'baloncesto',
            'camaleon',
            'yen',
            'cobre',
            'gallina',
            'brasil',
            'calcio',
        ]
        //sacamos la pregunta aleatoria
        let pregunta = arrayPreguntasMedio[Math.floor(Math.random() * arrayPreguntasMedio.length)]
        preguntas.textContent = pregunta
        let indexPregunta = arrayPreguntasMedio.findIndex(question => question === pregunta)
        this.respuesta = arrayRespuestasMedio[indexPregunta]
    }

    preguntasRespuestasDificil(){
        //metodo donde sacamos las preguntas y respuestas

        //seleccionamos el div de la pregunta
        let preguntas = document.getElementById('pregunta')
        //array de preguntas
        let arrayPreguntasDificil = [
            '¿Héroe mitológico griego que mató a Medusa?',
            '¿Término usado para referirse al estudio de las estrellas?',
            '¿Sistema de gobierno donde el poder está en una sola persona?',
            '¿País de origen de la empresa Samsung?',
            '¿Cómo se llama el proceso de conversión de vapor a líquido?',
            '¿Año de la caída del muro de Berlín?',
            '¿Partícula subatómica sin carga?',
            '¿Especie de ave conocida por su capacidad para imitar sonidos?',
            '¿Estado de la materia que es más abundante en el universo?',
            '¿Instrumento de viento utilizado en música clásica con cuerpo de madera?',
        ]
        //array de respuestas
        let arrayRespuestasDificil = [
            'perseo',
            'astronomia',
            'dictadura',
            'coreadelsur',
            'condensacion',
            '1989',
            'neutron',
            'loro',
            'plasma',
            'fagot',
        ]
        //sacamos la pregunta aleatoria
        let pregunta = arrayPreguntasDificil[Math.floor(Math.random() * arrayPreguntasDificil.length)]
        preguntas.textContent = pregunta
        let indexPregunta = arrayPreguntasDificil.findIndex(question => question === pregunta)
        this.respuesta = arrayRespuestasDificil[indexPregunta]
    }

    comprobarLetra(){
        //musica de letra correcta
        let sonidoPalabraCorrecta = new Howl({
            src: ['../../music/palabra-correcta.wav'],
            volume:0.7,
            loop: false,
        })
         //musica de letra incorrecta
        let sonidoPalabraIncorrecta = new Howl ({
            src: ['../../music/wrong-words.wav'],
            volume: 0.3,
            loop: false,
        })
        //seleccionamos el boton de adivinar
        let buttonAdivina = document.getElementById('adivina-palabra')
        //seleccionamos el div para poner las palabras correctas
        let palabrasCorrectas = document.getElementById('palabra-correcta')
        //seleccionamos el div para poner las palabras incorrectas
        let palabrasIncorrectas = document.getElementById('palabra-incorrecta')
        let palabraAdivinar = Array(this.respuesta.length).fill('_')
        buttonAdivina.addEventListener('click', () => {
            //ponemos a la escucha el boton para sacar el valor del input y comprobar si el valor introducido es correcto
            let valor = document.getElementById('input-letra').value.toLowerCase()
            let letraCorrecta = false
            let numerosLetras = /^[a-zA-Z0-9]+$/
            //nos aseguramos que introduce un caracter correcto
            if(!numerosLetras.test(valor)){
                alert('No ha introducido un caracter correcto')
            }else{
                for(let i = 0; i < this.respuesta.length; i++){
                    //si es correcto comprobamos si el valor es una letra de la respuesta
                    if(this.respuesta[i] === valor){
                        palabraAdivinar[i] = valor
                        this.palabraCorrecta[i] = valor
                        letraCorrecta = true
                        sonidoPalabraCorrecta.play()
                        this.comprobarVictoria()
                    }
                }
                if(!letraCorrecta){
                    this.palabraIncorrecta.push(valor)
                    palabrasIncorrectas.textContent = this.palabraIncorrecta.join(' ')
                    this.fallos += 1
                    letraCorrecta = false
                    sonidoPalabraIncorrecta.play()
                    this.comprobarDerrota()
                    this.dibujarAhorcado()
                }
            }
            //anadimos la letra al conteneder correspondiente
            palabrasCorrectas.textContent = palabraAdivinar.join(' ')
        })
    }

    comprobarDerrota(){
        //musica de game over
        let gameOver = new Howl ({
            src: ['../../music/game-over-ahorcado.wav'],
            volume: 0.7,
            loop: false,
        })
        //seleccionamos el boton de adivinar
        let buttonAdivina = document.getElementById('adivina-palabra')
        //contenedor del mensaje de ganar o perder
        let mensaje = document.getElementById('message')
        //seleccionamos el boton de restar
        let buttonRestart = document.getElementById('restart-button')
        let inputLetra = document.getElementById('input-letra')
        if(this.fallos >= this.maxFallos){
            mensaje.textContent = `Has perdido todas las vida. La respuesta era: ${this.respuesta.toUpperCase()} `
            buttonAdivina.disabled = true
            buttonAdivina.style.pointerEvents = 'none'
            buttonRestart.style.display = 'block'
            inputLetra.disabled = true
            this.musicaFondo.stop()
            gameOver.play()
            buttonRestart.addEventListener('click', () => {
                location.reload()
            })
        }
    }

    comprobarVictoria(){
        //musica de ganar
        let win = new Howl({
            src: ['../../music/win-game-ahorcado.wav'],
            volume: 0.1,
            loop: false
        })
        let inputLetra = document.getElementById('input-letra')
        //contenedor del mensaje de ganar o perder
        let mensaje = document.getElementById('message')
        //seleccionamos el boton de adivinar
        let buttonAdivina = document.getElementById('adivina-palabra')
        //seleccionamos el boton de restart
        let buttonRestart = document.getElementById('restart-button')
        if(this.palabraCorrecta.join(''.replaceAll(',', '')) === this.respuesta){
            mensaje.textContent = 'Has ganado!'
            win.play()
            this.musicaFondo.stop()
            inputLetra.disabled = true
            buttonAdivina.disabled = true
            buttonAdivina.style.pointerEvents = 'none'
            buttonRestart.style.display = 'block'
            buttonRestart.addEventListener('click', () => {
                location.reload()
            })
        }
    }

    dibujarAhorcado(){
        // seleccionamos el dibujo del ahorcado
        let dibujoAhorcado = document.getElementById('dibujo-ahorcado')
        //seleccionamos el contenido en 2d
        let ctx = dibujoAhorcado.getContext('2d')

                //base
        if(this.fallos >= 1){
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
        if(this.fallos >= 2){
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
        if(this.fallos >= 3){
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
        if(this.fallos >= 4){
            ctx.lineWidth = 4
            ctx.strokeStyle = 'black'
            ctx.beginPath();
            ctx.moveTo(220, 23);
            ctx.lineTo(220, 55);
            ctx.stroke();
        }

        //cabeza
        if(this.fallos >= 5){
            ctx.lineWidth = 2
            ctx.strokeStyle = 'red'
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
        if(this.fallos >= 6){
            ctx.lineWidth = 2
            ctx.strokeStyle = 'red'
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
}

export default Game