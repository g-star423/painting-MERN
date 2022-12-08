import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import NewPainting from './components/NewPainting.js'
import PaintingCard from './components/PaintingCard.js'


function App() {
  //////////////////////////////////////
  //useState variables / functions
  //////////////////////////////////////
  const [allPaintings, setAllPaintings] = useState([])

  const [updatePainting, setUpdatePaintingName] = useState('')
  const [updateArtist, setUpdateArtist] = useState('')
  const [updateYear, setUpdateYear] = useState('')
  const [updateStyle, setUpdateStyle] = useState('')
  const [updateImage, setUpdateImage] = useState('')
  const [updateID, setUpdateID] = useState('')


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

  const handleUpdateInput = (painting) => {
    setUpdateArtist(painting.artist)
    setUpdateID(painting._id)
    setUpdateImage(painting.image)
    setUpdatePaintingName(painting.name)
    setUpdateStyle(painting.style)
    setUpdateYear(painting.year)
  }

  //////////////////////////////////////
  //Axios requests
  //////////////////////////////////////

  useEffect(() => {
    updateAllPaintings()
  }, [])

  const updateAllPaintings = () => {
    axios.get('http://localhost:3001/paintings').then((response) => {
      setAllPaintings(response.data)
    })
  }

  const handlePaintingDelete = (paintingID) => {
    axios.delete('http://localhost:3001/paintings/' + paintingID).then((response) => {
      updateAllPaintings()
    })
  }

  const handlePaintingUpdateSubmit = (event, paintingID) => {
    event.preventDefault()
    axios.put('http://localhost:3001/paintings/' + paintingID,
      {
        name: updatePainting,
        artist: updateArtist,
        year: updateYear,
        style: updateStyle,
        image: updateImage
      }).then((response) => {
        updateAllPaintings()
      })
  }



  //////////////////////////////////////
  //Page main
  //////////////////////////////////////

  return (
    <div>
      <h1>My Painting Collection</h1>
      <h3>Add a New Painting</h3>
      <NewPainting updateAllPaintings={updateAllPaintings}></NewPainting>

      <div className='card-container'>
        {allPaintings.map((painting) => {
          return (
            <PaintingCard key={painting._id} painting={painting} handlePaintingDelete={handlePaintingDelete} handleUpdateInput={handleUpdateInput}></PaintingCard>
          )
        })}
      </div>
      <div className='update-container'>
        <form onSubmit={(event) => handlePaintingUpdateSubmit(event, updateID)}>
          Painting Name:<input type="text" value={updatePainting} onChange={handleUpdatePaintingChange} /><br />
          Artist:<input type="text" value={updateArtist} onChange={handleUpdateArtistChange} /><br />
          Year:<input type="number" value={updateYear} onChange={handleUpdateYearChange} /><br />
          Style:<input type="text" value={updateStyle} onChange={handleUpdateStyleChange} /><br />
          Image URL:<input type="text" value={updateImage} onChange={handleUpdateImageChange} /><br />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
