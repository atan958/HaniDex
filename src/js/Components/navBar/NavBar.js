import '../../../css/NavBar.css'

const NavBar = () => {
    return (
        <ul>
            <li><a href="google.com" onClick={()=>console.log("missing No")}>HaniDex</a></li>
            <li><a href="news.asp">News</a></li>
            <li><a href="contact.asp">Contact</a></li>
            <li><a href="about.asp">About</a></li>
        </ul>
    );
}

export default NavBar;