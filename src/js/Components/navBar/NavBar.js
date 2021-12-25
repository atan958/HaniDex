import '../../../css/NavBar.css'

const missingNo = require(`../../../pokemon-assets/assets/img/pokemon/missingno.png`)

const NavBar = () => {
    return (
        <ul>
            <li><a href="google.com" onClick={()=>console.log("missing No")}>HaniDex<img style={{height: '17px', marginLeft: '10px'}} src={missingNo}></img></a></li>
            <li><a href="news.asp">News</a></li>
            <li><a href="contact.asp">Contact</a></li>
            <li><a href="about.asp">About</a></li>
        </ul>
    );
}

export default NavBar;