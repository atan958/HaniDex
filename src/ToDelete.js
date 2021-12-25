const Search = () => {
    const [search, setSearch] = useState('');
  
    let imgList = getImgList().filter((pkm) => {
      return pkm.value !=null && pkm.name.includes(search)
    })
    .map((pkm) => {
      return pkm.value
    })
  
    return (
      <>
      <SearchBar search={search} setSearch={setSearch} />
      <div className="App">
        <div className="grid-container" >
          {imgList}
        </div>
      </div>
      </>
    );
  }
  
  const SearchBar = ({ search, setSearch }) => {
  
    return (    
      <div className="SearchDiv">
        <input className="searchBar" type={'text'} value={search} onChange={(e => setSearch(e.target.value))}/>
        <button className="searchBtn">?</button>
      </div>
      ); 
  }
  
  
  const getImgList = () => {
    const pkmList = [
      'bulbasaur',
      'ivysaur',
      'venusaur',
      'charmander', 
      'charmeleon',
      'charizard',
      'squirtle', 
      'wartortle',
      'blastoise',
      'pichu',
      'pikachu',
      'raichu',
      'zapdos',
      'moltres',
      'articuno',
      'mew', 
      'mewtwo',
    ];
    const imgList = pkmList.map((pkm, ind) => {
      let obj;
    
      try {
        let img = require(`./pokemon-assets/assets/img/pokemon/${pkm}.png`);
        let pkmName = pkm.charAt(0).toUpperCase() + pkm.slice(1,pkm.length);
  
        console.log(img);
        let value = (
            PkmImage(img, pkmName)
          );
        obj = {...{name: pkm}, value: value};
      }
      catch(e) {
        let img = require(`./pokemon-assets/assets/img/pokemon/missingno.png`);
        let value = <img key={ind} src={img} width="100" height="120"></img>;
        obj = {...{name: pkm}, value: value};
      }
      
      return obj;
    });
    
    return imgList;
  }
  
  const PkmImage = (img, pkmName) => {
    return(
      <div className="grid-item" onClick={()=> {console.log('Hello There')}}>
        <img src={img} width="200" height="240"></img>
        <h2>{pkmName}</h2>
      </div>
    );
  }