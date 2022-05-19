import FormLyrics from "./FormLyrics";
import Lyrics from "./Lyrics";
import useLyrics from "../hooks/useLyrics";
import Alert from './Alert'

const AppLyrics = () => {
  const { alert, lyrics, loading } = useLyrics();

  return (
    <>
      <header>Find your favorite songs</header>

      <FormLyrics />
      

      <main>
           {alert ? <Alert>{alert}</Alert> :
              lyrics ? <Lyrics /> : 
              loading ? 'Please Wait...' :
              <p className="text-center">I'm waiting for your search</p>}
      </main>
    </>
  );
};

export default AppLyrics;
