import '../../../css/NavBar.css'
import SearchBar from './SearchBar'

const missingNo = require(`../../../pokemon-assets/assets/img/pokemon/missingno.png`)

const NavBar = ({ search, setSearch }) => {
    return (
        <ul>
            <li><a href="google.com" onClick={()=>console.log("missing No")}>HaniDex<img style={{height: '17px', marginLeft: '10px'}} src={missingNo}></img></a></li>
            <li><a href="news.asp">News</a></li>
            <li><a href="contact.asp">Contact</a></li>
            <li><a href="about.asp">About</a></li>
            <li className="liInput"><SearchBar search={search} setSearch={setSearch}/></li>
        </ul>
    );
}

export default NavBar;