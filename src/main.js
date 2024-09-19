import '.././sass/style.scss'
import { Howl, Howler } from 'howler'
import Game from './class/game'

let comprobarDificultad = Game.comprobarDificultad()
let game = new Game(comprobarDificultad.dificultad)

