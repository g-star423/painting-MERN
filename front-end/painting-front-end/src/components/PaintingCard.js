import React, { useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


const PaintingCard = (props) => {
    console.log(props)

    const [updatePaintingName, setUpdatePaintingName] = useState(props.painting.name)
    const [updateArtist, setUpdateArtist] = useState(props.painting.artist)
    const [updateYear, setUpdateYear] = useState(props.painting.year)
    const [updateStyle, setUpdateStyle] = useState(props.painting.style)
    const [updateImage, setUpdateImage] = useState(props.painting.image)
    const [showEditForm, setShowEditForm] = useState(false)

    const handleUpdatePainting = (event) => {
        event.preventDefault()
        axios.put('http://localhost:3001/paintings/' + props.painting._id,
          {
            name: updatePaintingName,
            artist: updateArtist,
            year: updateYear,
            style: updateStyle,
            image: updateImage
          }).then((response) => {
            props.updateAllPaintings()
            setShowEditForm(false)
          })
    }

//////////////////////////////////////
  //event handlers
  //////////////////////////////////////
  const handleUpdatePaintingChange = (event) => {
    setUpdatePaintingName(event.target.value)
  }
  const handleUpdateArtistChange = (event) => {
    setUpdateArtist(event.target.value)
  }
  const handleUpdateYearChange = (event) => {
    setUpdateYear(event.target.value)
  }
  const handleUpdateStyleChange = (event) => {
    setUpdateStyle(event.target.value)
  }
  const handleUpdateImageChange = (event) => {
    setUpdateImage(event.target.value)
  }

    return (
        <div className="card p-2">
            <h3 className="mt-2">{props.painting.name}</h3>
            <img className="mb-2" src={props.painting.image} />
            <p>Painter: {props.painting.artist}</p>
            <p>Year Painted: {props.painting.year}</p>
            <p>Style: {props.painting.style}</p>
            <div>
            <button className="mb-2 button"  onClick={() => props.handlePaintingDelete(props.painting._id)}>Delete Painting</button>
            <button className="mb-2 button" onClick={() => setShowEditForm(prevShowEditForm => !prevShowEditForm)}>Edit Painting</button>
            </div>

        {showEditForm ? (
            <form className="edit-form" onSubmit={handleUpdatePainting}>
                <label>
                Painting Name:<input type="text" value={updatePaintingName} onChange={handleUpdatePaintingChange} />
                </label>
                <label>
                Artist:<input type="text" value={updateArtist} onChange={handleUpdateArtistChange} />
                </label>
                <label>
                Year:<input type="number" value={updateYear} onChange={handleUpdateYearChange} />
                </label>
                <label>
                Style:<input type="text" value={updateStyle} onChange={handleUpdateStyleChange} />
                </label>
                <label>
                Image URL:<input type="text" value={updateImage} onChange={handleUpdateImageChange} />
                </label>
                <input className="mb-1 submit" type="submit" />
            </form>
        ) : null}
            
        </div>
    )
}

export default PaintingCard