import type { TilePosition } from "../components/tile";

export default class Player {
    private capturedPositions : TilePosition[] = []
    playerColorClass : string

    constructor(playerColorClass: string) {
        this.playerColorClass = playerColorClass;
    }

    addNewPosition( position: TilePosition ) {
        this.capturedPositions.push( position )
    }

    getCapturedPositions() {
        return this.capturedPositions
    }

}