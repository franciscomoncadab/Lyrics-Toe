import { useState, createContext } from 'react'
import axios from 'axios'


const LyricsContext = createContext()

const LyricsProvider = ({children}) => {

     const [alert, setAlert] = useState('')
     const [lyrics, setLyrics] = useState('')
     const [loading, setLoading] = useState(false)

     const searchSong = async (search) => {
          setLoading(true)
          try {
               const { artist, song } = search
               const url = `https://api.lyrics.ovh/v1/${artist}/${song}`
               const {data} = await axios(url)
               setLyrics(data.lyrics)
               setAlert('')

          } catch (err) {
               setAlert('Oh, Something went wrong, your song is not available or does not exist')
          }
          setLoading(false)

     }

     return (
          <LyricsContext.Provider
               value={{
                    alert,
                    setAlert,
                    searchSong,
                    lyrics,
                    loading
               }}
          >
               {children}
          </LyricsContext.Provider>
     )
}

export {
     LyricsProvider
}

export default LyricsContext