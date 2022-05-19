import useLyrics from "../hooks/useLyrics"

const Lyrics = () => {
     const {lyrics, loading} = useLyrics()
  return (
       loading ? 'Please wait...' :
       <div className="letra">{lyrics}</div>
  )
}

export default Lyrics