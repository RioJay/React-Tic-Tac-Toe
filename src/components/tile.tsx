import './../styles/home.css'

export default function Tile( {colVal, rowVal} : {colVal: string, rowVal: string}) {

    

    return (
        <div className='tile bgLBiege unselected' data-col={colVal} data-row={rowVal}></div>
    )

}