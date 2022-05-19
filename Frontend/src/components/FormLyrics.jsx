import { useState } from 'react'
import useLyrics from '../hooks/useLyrics'

const FormLyrics = () => {

  const {setAlert, searchSong} = useLyrics()

  const [search, setSearch] = useState({
    artist: '',
    song: ''
  })

  const handleSubmit = e => {
    e.preventDefault();

    if(Object.values(search).includes('')){
      setAlert(`Hey! You didn't fill in the fields`)
      return
    }
    //setAlert('')
    searchSong(search)
  }  

  return (
    <form 
      onSubmit={handleSubmit}
    >
      <legend>Let's do it!</legend>

      <div className="form-grid">
        <div>
          <label>Search your artist</label>
          <input 
            type="text"
            name="artist"
            placeholder="Name of your favorite artist"
            value={search.artist}
            onChange={e => setSearch({
              ...search,
              [e.target.name] : e.target.value
            })}
          />
        </div>

        <div>
          <label>Search your song</label>
          <input 
            type="text"
            name="song"
            placeholder="Name of your favorite song"
            value={search.song}
            onChange={e => setSearch({
              ...search,
              [e.target.name] : e.target.value
            })}
          />
        </div>

        <input type="submit" value="Search"></input>
      </div>

    </form>
  )
}

export default FormLyrics
