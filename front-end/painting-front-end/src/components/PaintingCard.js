import { useState } from 'react'
import axios from 'axios'

const PaintingCard = (props) => {


    return (
        <div className="card">
            <h3>Painting Name: {props.painting.name}</h3>
            <img src={props.painting.image} />
            <p>Painter: {props.painting.painter}</p>
        </div>
    )
}

export default PaintingCard