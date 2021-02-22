import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons"
import { Footer } from "../styles/IndexStyles"

const Layout = ( { children } ) => (
  <div>
    {children}
    <Footer>
      <div className="icons">
        <FontAwesomeIcon icon={faTwitter} size="2x" fixedWidth />
        <FontAwesomeIcon icon={faFacebook} size="2x" fixedWidth />
        <FontAwesomeIcon icon={faInstagram} size="2x" fixedWidth />
        <FontAwesomeIcon icon={faLinkedin} size="2x" fixedWidth />
        <FontAwesomeIcon icon={faYoutube} size="2x" fixedWidth />
        <FontAwesomeIcon icon={faPinterest} size="2x" fixedWidth />
      </div>
      <div className="copyright">
        <span>&copy; 2021, Code Nerd | </span>
        <span>Made with ❤ and ☕ in Dominican Republic.</span>
      </div>
    </Footer>
  </div>
); 

export default Layout
