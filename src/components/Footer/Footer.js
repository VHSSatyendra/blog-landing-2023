import React from 'react'
import './Footer.css'
import FB from '../../images/facebook.svg';
import Pinterest from '../../images/pinterest.svg';
import Dribble from '../../images/dribble.svg';
import Insta from '../../images/insta.svg';
function Footer() {
  return (
    <div className='footer-main'>
        <div className="top-footer">
            <h2 className="footer-title">Subscribe</h2>
            <h6 className="sub-footer">Sign-up to our newsletter</h6>

            <input type="text" className='footer-input' placeholder='Your email'/>
            <button className="footer-btn">submit</button>
        </div>
        <div className="bottom-footer">
            <ul>
                <li><a href="#">about</a></li>
                <li><a href="#">articles</a></li>
                <li><a href="#">subscribe</a></li>
            </ul>

            <div className="sm-container">
                <div className="sm-bg"><img src={Insta} alt="Instagram" /></div>
                <div className="sm-bg"><img src={Dribble} alt="Dribble" /></div>
                <div className="sm-bg"><img src={FB} alt="Facebook" /></div>
                <div className="sm-bg"><img src={Pinterest} alt="Pinterest" /></div>
            </div>
        </div>
    </div>
  )
}
export default Footer