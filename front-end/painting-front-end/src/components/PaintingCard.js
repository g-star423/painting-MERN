import { useState } from 'react'
import axios from 'axios'

const PaintingCard = (props) => {


    return (
        <div className="card">
            <h3>{props.painting.name}</h3>
            <img src={props.painting.image} />
            <p>Painter: {props.painting.artist}</p>
            <p>Year Painted: {props.painting.year}</p>
            <p>Style: {props.painting.style}</p>
            <button onClick={() => props.handlePaintingDelete(props.painting._id)}>Delete Painting</button>
            <button onClick={() => props.handleUpdateInput(props.painting)}>Edit Painting</button>
        </div>
    )
}

export default PaintingCard