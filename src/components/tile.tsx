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
    player : Player,
    victorIdentifier : string
}

export default function Tile( {colVal, rowVal, updateNextPlayer, isGameOver, player, victorIdentifier} : TileProps) {

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
            document.getElementById('container')?.classList.add('selected');
            return;
        }

        updateNextPlayer();
    }

    if( victorIdentifier ) {
        
        if( !tileClassList.find( item => item === player.playerColorClass ) && (victorIdentifier === colVal || victorIdentifier === rowVal) ) {
            setTileClassList( [...tileClassList.filter( item => item !== 'bgLBiege'), player.playerColorClass] );
        }

        if( victorIdentifier.toLowerCase() === 'tltobr' && ['A1', 'B2', 'C3'].find( item => item === colVal+rowVal ) && !tileClassList.find( item => item === player.playerColorClass ) ) {
            setTileClassList( [...tileClassList.filter( item => item !== 'bgLBiege'), player.playerColorClass] );
        }

        if( victorIdentifier.toLowerCase() === 'bltotr' && ['A3', 'B2', 'C1'].find( item => item === colVal+rowVal ) && !tileClassList.find( item => item === player.playerColorClass ) ) {
            setTileClassList( [...tileClassList.filter( item => item !== 'bgLBiege'), player.playerColorClass] );
        }

    }

    return (
        <div className={tileClassList.join(' ')} onClick={tileCLickAction}>
            <div className={innerTileClassList.join(' ')} />
        </div>
    )

}