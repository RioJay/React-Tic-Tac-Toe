import "./../styles/home.css";
import Tile from "./tile.tsx";
import Player  from "../resources/player.ts";

// create the two player objects
const players: Player[] = [new Player(), new Player()];

export default function TicTacToeHome() {

    const currentPlayer: Player = players[0];


    // redering the game tiles with data
    const tiles: React.ReactElement[] = ['A', 'B', 'C'].map( (colVal : string) => {

        // get the array of Tile for rendering a row
        let tileRow: React.ReactElement[] = ['1', '2', '3'].map( (rowVal : string) => {

                return <Tile 
                    key={colVal + rowVal} 
                    colVal={colVal} 
                    rowVal={rowVal} 
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