import React from 'react'

const Tile = props => {
    return (
        <div>
            <img onClick={props.updateScore} alt={props.title} className="img-fluid p-1" src={props.src} style={{ width: "25%", height:'250px', float: "left" }} />
        </div>
    )
}

export default Tile