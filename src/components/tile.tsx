import type Player from '../resources/player'
import './../styles/home.css'
import { useState } from 'react'

// object to store the row and col state of the current tile
export interface TilePosition {
    colVal: string,
    rowVal: string
}

interface TileProps extends TilePosition {
    updateNextPlayer : () => void,
    isGameOver : () => boolean,
    player : Player
}

export default function Tile( {colVal, rowVal, updateNextPlayer, isGameOver, player} : TileProps) {

    const [tileClassList, setTileClassList] = useState(['tile', 'bgLBiege', 'unselected'])
    const [innerTileClassList, setInnerTileClassList] = useState(['innerTile'])

    function tileCLickAction() {

        // remove the unselected css class and add selected class
        setTileClassList([ ...tileClassList.filter( item => item !== 'unselected'), 'selected' ]);

        // set player color to inner tile
        setInnerTileClassList([...innerTileClassList, player.playerColorClass]);

        // push the tile details to player object
        player.addNewPosition({colVal, rowVal});

        // check for victory or draw
        if( isGameOver() ) {
            return;
        }

        updateNextPlayer();
    }

    return (
        <div className={tileClassList.join(' ')} onClick={tileCLickAction}>
            <div className={innerTileClassList.join(' ')} />
        </div>
    )

}