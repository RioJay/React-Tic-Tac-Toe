import type { TilePosition } from "../components/tile";

export default class Player {
    capturedPositions : TilePosition[] = []

    addNewPosition( position: TilePosition ) {
        this.capturedPositions.push( position )
    }
}