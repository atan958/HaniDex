import { useState, useEffect, useRef } from 'react'

import NavBar from './js/Components/navBar/NavBar'
import PkmGrid from './js/Components/pokemonGrid/PkmGrid'
import Footer from './js/Components/footer/Footer'

import { providePkmData } from './js/Utilities/PkmDataProvider';

function App() {
  //console.log('Start: ' + new Date().getTime());
  const numRnd = useRef(0); numRnd.current++; console.log('------------------- Render #' + numRnd.current + ' -------------------');
  /*
  / Used to store the Pokemon data inside the application
  */
  const [pokemon, setPokemon] = useState([]);

  /*
  / Used to determine whether Pokemon data is being loaded into the application
  */
  const [loadingPkm, setLoadingPkm] = useState(true);

  /*
  / Retrieves the Pokemon data => Called AFTER the App component first mounts
  */
  useEffect(() => {
    /*
    / Used to transfer data from the PokeApiController to inside the app itself
    */
    const getPkmData = async () => {
      let pkmData = await providePkmData();
      setPokemon(pkmData);
    }
    getPkmData();
  },[]);

  /*
  / Removes the loading state from Pokemon retrieval => Set to false ONLY AFTER Pokemon are retrieved (i.e. 0 < Pokemon)
  */
  useEffect(() => {
      if(pokemon.length > 0) {
        rmvPkbLoad();
      } 
  }, [pokemon]);
  /*
  / Removes the loading state of the Pokeball after a given amount of time (e.g. 0 secs)
  */
  const rmvPkbLoad = async () => {
    setTimeout(() => {
      setLoadingPkm(false)
    }, 500);
  }

  return (
    <>
      <NavBar />
      <PkmGrid pkmDataList={pokemon} loadingPkm={loadingPkm}/>
      <Footer />
    </>
  );
}

export default App;
