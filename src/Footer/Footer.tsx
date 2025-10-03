import Binus from "../asset/binusLogo.png";
import V1 from "../asset/Vector.png";
import V2 from "../asset/Vector-1.png";
import V3 from "../asset/Vector-2.png";
import copyright from "../asset/copyright.png";
import './Footer.css';
import { Link } from "react-router-dom";

const Footer = ()=> {
    return(
        <footer className='footer'> 
        <div className='topFooter'>
          <img src={Binus} className="binus" alt=""/>
          <div className='quickNcontact'>
            <Link to="/" className='quick'>
              Home
            </Link>
            <Link to="/about" className='quick'>
              About
            </Link>
            <div>
              <img src={V1} className="contact" alt=""/>
            </div>
            <div>
              <img src={V2} className="contact" alt=""/>
            </div>
            <div>
              <img src={V3} className="contact" alt=""/>
            </div>
          </div>
        </div>
        <div className='downFooter'>
            <div>
              <img src={copyright} className="copy" alt=""/>
              2024 PneuScan. All rights reserved
            </div>
            <div>
              Privacy policy | Term of Service
            </div>
        </div>
      </footer>
    )
}

export default Footer;