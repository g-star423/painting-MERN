
import { useState } from 'react'
import axios from 'axios'

const NewPainting = (props) => {

    const [newPainting, setNewPainting] = useState('')
    const [newArtist, setNewArtist] = useState('')
    const [newYear, setNewYear] = useState('')
    const [newStyle, setNewStyle] = useState('')
    const [newImage, setNewImage] = useState('')


    const handleNewSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3001/paintings',
            {
                name: newPainting,
                artist: newArtist,
                year: newYear,
                style: newStyle,
                image: newImage
            }).then(() => {
                props.updateAllPaintings()
                setNewArtist('')
                setNewImage('')
                setNewPainting('')
                setNewStyle('')
                setNewYear('')
            })
    }

    const handlePaintingChange = (event) => {
        setNewPainting(event.target.value)
    }
    const handleArtistChange = (event) => {
        setNewArtist(event.target.value)
    }
    const handleYearChange = (event) => {
        setNewYear(event.target.value)
    }
    const handleStyleChange = (event) => {
        setNewStyle(event.target.value)
    }
    const handleImageChange = (event) => {
        setNewImage(event.target.value)
    }
    return (

        <div className="card new-painting">
            <form className="new-form" onSubmit={handleNewSubmit}>
                <label>
                Painting Name:<input type="text" value={newPainting} onChange={handlePaintingChange} />
                </label>
                <label>
                Artist:<input type="text" value={newArtist} onChange={handleArtistChange} />
                </label>
                <label>
                Year:<input type="number" value={newYear} onChange={handleYearChange} />
                </label>
                <label>
                Style:<input type="text" value={newStyle} onChange={handleStyleChange} />
                </label>
                <label>
                Image URL:<input type="text" value={newImage} onChange={handleImageChange} />
                </label>
                <input className="submit" type="submit" />
            </form>
        </div>
    )
}

export default NewPainting;