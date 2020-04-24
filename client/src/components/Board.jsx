import React from 'react'

import Card from './Card'
import './Board.css'

export default function Board(props) {
    // click card tu turn, to swap
    return (
        <div className="board2">
            {props.cards.map((card, i) => 
                <div key={i}>
                    {card && <Card card={card} cardIndex={i} handleClick={props.handleClick} source="board" small={props.small} />}
                </div>
            )}
        </div>
    )
}
