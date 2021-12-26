import '../../../css/Footer.css'
import hanidex from '../../../angelo-assets/hanidex-logo.png'

const Footer = () => {
    return (

            <footer className="social-footer">
                <div className="social-footer-left">
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img className="logo" src={hanidex}/></a>
                </div>
                <div className="social-footer-icons">
                    <ul className="menu simple">
                    <li><a href="https://github.com/atan958"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/angelo-tangonan-3788b41bb/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </footer>

    )
}

export default Footer
