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


  // will use when we update
  // const [updatePainting, setUpdatePainting] = useState('')
  // const [updateArtist, setUpdateArtist] = useState('')
  // const [updateYear, setUpdateYear] = useState('')
  // const [updateStyle, setUpdateStyle] = useState('')
  // const [updateImage, setUpdateImage] = useState('')


  //////////////////////////////////////
  //event handlers
  //////////////////////////////////////


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



  //////////////////////////////////////
  //Page main
  //////////////////////////////////////

  return (
    <div>
      <h1>My Painting Collection</h1>
      <h3>Add a New Painting</h3>
      <NewPainting updateAllPaintings={updateAllPaintings}></NewPainting>

      <div className='cardContainer'>
        {allPaintings.map((painting) => {
          return (
            <PaintingCard painting={painting}></PaintingCard>
          )
        })}
      </div>



    </div>
  );
}

export default App;
