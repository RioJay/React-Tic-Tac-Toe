import "./../styles/home.css";
import Tile from "./tile.tsx";
import Player  from "../resources/player.ts";
import { useState } from "react";

// create the two player objects
const players: Player[] = [new Player("bluePlayerColor"), new Player("redPlayerColor")];

export default function TicTacToeHome() {

    const [playerPos, setPlayerPos] = useState(0);

    function updateNextPlayer() {
        setPlayerPos(playerPos === 0 ? 1 : 0);
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
                    player={players[playerPos]}
                />

            } );

            // push the Tiles into a div and return
            return <div key={colVal} className='row'>{tileRow}</div>
        } 
    )

    return (
        <>
            {tiles}
        </>
    )

}