
import { getTileCoordinates } from "./functions.js";
import { Board } from "./Board.js";
import { AircraftCarrier, Ship, Battlecruiser } from "./Ship.js";

// generate the 2 playing boards
const enemyPlayingBoard = new Board('enemy');
enemyPlayingBoard.generateBoard();
console.log(enemyPlayingBoard)

const playerPlayingBoard = new Board('player');
playerPlayingBoard.generateBoard();
console.log(playerPlayingBoard)



// Select the enemy board and create the tile layout
const enemyBoard = document.querySelector('.enemy-board')
for (let i = 0; i < 8; i++) {
    let oneRow = document.createElement('div')
    oneRow.className = 'enemy-' + i
    for (let x = 0; x < 10; x++) {
        let oneTile = document.createElement('div')
        oneTile.className = 'enemy-' + i + x
        oneTile.classList.add('enemy-tile')
        oneTile.classList.add('tile')
        oneTile.addEventListener('click', event => {
            getTileCoordinates(event.target)
            // Return tile faction and coordinates on click 
        })

        oneRow.appendChild(oneTile);
    }
    enemyBoard.appendChild(oneRow)
}
// Select the enemy board and create the player layout
const playerBoard = document.querySelector('.player-board')
for (let i = 0; i < 8; i++) {
    let oneRow = document.createElement('div')
    oneRow.className = 'player-' + i
    for (let x = 0; x < 10; x++) {
        let oneTile = document.createElement('div')
        oneTile.className = 'player-' + i + x
        oneTile.classList.add('player-tile')
        oneTile.classList.add('tile')
        oneTile.addEventListener('click', event => {
            getTileCoordinates(event.target)
            // Return tile faction and coordinates on click 
        })

        oneRow.appendChild(oneTile);
    }
    playerBoard.appendChild(oneRow)
}


let one_battlecruiser = new Battlecruiser
let one_aircraftcarrier = new AircraftCarrier
let one_ship = new Ship
let second_aircraftcarrier = new AircraftCarrier
second_aircraftcarrier.orientation = 'vertical'


playerPlayingBoard.placeShip({'col':3,'row':7},second_aircraftcarrier)
playerPlayingBoard.placeShip({'col':1,'row':3}, one_battlecruiser)
playerPlayingBoard.placeShip({'col':4,'row':5}, one_aircraftcarrier);
playerPlayingBoard.placeShip({'col':7,'row':4}, one_ship)
playerPlayingBoard.markTile({'col':3,'row':7})
playerPlayingBoard.markTile({'col':3,'row':2})
playerPlayingBoard.markTile({'col':1,'row':2})


enemyPlayingBoard.placeShip({'col':3,'row':7},second_aircraftcarrier)
enemyPlayingBoard.placeShip({'col':2,'row':3}, one_battlecruiser)
enemyPlayingBoard.placeShip({'col':5,'row':5}, one_aircraftcarrier);
enemyPlayingBoard.placeShip({'col':6,'row':4}, one_ship)
enemyPlayingBoard.markTile({col:2,row:4})
enemyPlayingBoard.markTile({col:2,row:3})

playerPlayingBoard.colorTilesPlayer();
enemyPlayingBoard.colorTilesEnemy();

console.log(playerPlayingBoard.gamingTiles)
console.log(enemyPlayingBoard.gamingTiles)
// console.log(playerPlayingBoard.tileToArray({'col':3,'row':2})) 