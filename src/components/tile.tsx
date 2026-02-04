import './../styles/home.css'
import { useState } from 'react'

// object to store the row and col state of the current tile
export interface TilePosition {
    colVal: string,
    rowVal: string
}

export default function Tile( {colVal, rowVal} : TilePosition ) {

    const [tileClassList, setTileClassList] = useState(['tile', 'bgLBiege', 'unselected'])
    const [innerTileClassList, setInnerTileClassList] = useState(['innerTile'])


    return (
        <div className={tileClassList.join(' ')} data-col={colVal} data-row={rowVal}>
            <div className={innerTileClassList.join(' ')} />
        </div>
    )

}