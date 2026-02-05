import "./../styles/home.css";
import Tile from "./tile.tsx";
import Player  from "../resources/player.ts";
import { useState } from "react";

// create the two player objects
const players: Player[] = [new Player("bluePlayerColor"), new Player("redPlayerColor")];

function hasPlayerWon( player: Player ) : boolean {
    
    const capturedPositions = player.getCapturedPositions();

    const playerColRowCount : Record<string, number> = {};

    for( let pos of capturedPositions ) {

        playerColRowCount[pos.colVal] = playerColRowCount[pos.colVal] ? playerColRowCount[pos.colVal] + 1 : 1;
        playerColRowCount[pos.rowVal] = playerColRowCount[pos.rowVal] ? playerColRowCount[pos.rowVal] + 1 : 1;


        if( playerColRowCount[pos.colVal] === 3 || playerColRowCount[pos.rowVal] === 3) {
            return true;
        }
    }

    return false;
}


export default function TicTacToeHome() {

    const [playerPos, setPlayerPos] = useState(0);
    const [victoryMessage, setVictoryMessage] = useState('');

    function updateNextPlayer() {
        setPlayerPos(playerPos === 0 ? 1 : 0);
    }

    /**
     * Check for victory or draw
     * game progresses if neither
     * @returns 
     */
    function isGameOver() : boolean {
        
        if( hasPlayerWon( players[0] ) ) {
            setVictoryMessage("Player 1 Won");
            return true;
        }

        if( hasPlayerWon( players[1] ) ) {
            setVictoryMessage("Player 2 Won");
            return true;
        }

        // check for draw
        // TODO

        return false;

    }

    // redering the game tiles with data
    const tiles: React.ReactElement[] = ['A', 'B', 'C'].map( (colVal : string) => {

        // get the array of Tile for rendering a row
        let tileRow: React.ReactElement[] = ['1', '2', '3'].map( (rowVal : string) => {

                return <Tile 
                    key={colVal + rowVal} 
                    colVal={colVal} 
                    rowVal={rowVal}
                    updateNextPlayer={updateNextPlayer}
                    isGameOver={isGameOver}
                    player={players[playerPos]}
                />

            } );

            // push the Tiles into a div and return
            return <div key={colVal} className='row'>{tileRow}</div>
        } 
    )

    return (
        <>
            <h1 className="victoryMessage">{victoryMessage}</h1>
            {tiles}
        </>
    )

}