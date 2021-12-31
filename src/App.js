import { useState, useEffect, useRef } from 'react'
import axios from 'axios'

import NavBar from './js/Components/navBar/NavBar'
import PkmGrid from './js/Components/pokemonGrid/PkmGrid'
import Footer from './js/Components/footer/Footer'

import { providePokemonData } from './js/Utilities/PokemonProvider';



function App() {
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
  / *** ...TO BE DETERMINED... ***
  */
  const retrievedPokemon = useRef(providePokemonData());  // Replace with maybe once calling PokeApi => Call before the setTimeOut

  /*
  / Retrieves the Pokemon data => Called AFTER the App component first mounts
  */
 /*
  useEffect(() => {
    setTimeout(() => {
      setPokemon((prevPkm) => {
        let pokemon = providePokemonData();
        return prevPkm.concat(pokemon)
      })
    }, 5000);
  },[]);
*/
useEffect(() => {
    getPkmData();
},[]);

const getPkmData = async () => {
  let pkmData = await providePokemonData();
  setPokemon(pkmData);
}
  

  /*
  / Removes the loading state from Pokemon retrieval => Set to false ONLY AFTER Pokemon are retrieved (i.e. 0 < Pokemon)
  */
  useEffect(() => {
      if(pokemon.length > 0) {
        rmvPkbLoad();
      } 
  }, [pokemon]);
  /*
  / Removes the loading state of the Pokeball after 2.5 seconds
  */
  const rmvPkbLoad = async () => {
    setTimeout(() => {
      setLoadingPkm(false)
    }, 2500);
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
