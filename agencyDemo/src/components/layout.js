import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons"

import { Footer, Header, GenericH2, GenericPara } from "../styles/IndexStyles"

const Layout = ({ children }) => (
  <div>
    <Header>
      <GenericH2 none>
        <Link to="/" style={{ color: "#fff" }}>
          Code Nerd
        </Link>
      </GenericH2>
      <div className="menu__items">
        <Link to="/works" style={{ color: "#fff" }}>
          <GenericPara lessSize lessSpacing grey>
            Works
          </GenericPara>
        </Link>
        <Link to="/about" style={{ color: "#fff" }}>
          <GenericPara lessSize lessSpacing grey>
            About
          </GenericPara>
        </Link>
      </div>
    </Header>
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
)

export default Layout
