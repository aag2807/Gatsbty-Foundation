// Library imports
import React, { Component } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faHeart, faCode, faGem, fas } from "@fortawesome/free-solid-svg-icons"
import {
  fab,
  faHtml5,
  faJs,
  faReact,
  faCss3,
  faGalacticSenate,
} from "@fortawesome/free-brands-svg-icons"

//Styled component imports
import {
  Banner,
  TextWrapper,
  ExtraText,
  SectionTwo,
  SectionThree,
  FlexBoxIndex,
  GenericPara,
  GenericH2,
  SectionFour,
  FormFive
} from "../styles/IndexStyles"
import Layout from '../components/layout';

library.add(faHeart, faCode, faGem, fas, faReact, fab)

export default () => {
  return (
    <Layout>
      <section style={{ position: "relative" }}>
        <Banner></Banner>
        <TextWrapper>
          <div>
            <h2 style={{ textAlign: "center" }}>
              Code Nerd{" "}
              <span role="img" aria-label="nerd emoji">
                🤓
              </span>
            </h2>
            <GenericPara>
              One Stop for
              <br />
              All your development
              <br />
              And design needs
            </GenericPara>
            <Link to="/works">Our Works</Link>
          </div>
        </TextWrapper>
        <ExtraText>Learn More</ExtraText>
      </section>
      <SectionTwo>
        <div>
          <GenericH2>Our Passion</GenericH2>
          <GenericPara lessSize>
            Most good programmers do programming not because they expect to get
            paid, but because it's fun to program.
          </GenericPara>
          <h5>- Linus Torvalds</h5>
        </div>
        <span>
          <FontAwesomeIcon
            icon="gem"
            color="#04F5C6"
            size="6x"
            style={{ marginRight: "3rem" }}
            fixedWidth
            border
          />
          <FontAwesomeIcon
            icon="heart"
            color="#00F0FF"
            size="6x"
            style={{ marginRight: "3rem" }}
            fixedWidth
            border
          />
          <FontAwesomeIcon
            icon="code"
            color="#73DBFD"
            size="6x"
            fixedWidth
            border
          />
        </span>
      </SectionTwo>
      <SectionThree>
        <FlexBoxIndex>
          <div className="image">
            <img
              src="https://edsurge.imgix.net/uploads/post/image/11914/teaching-1552092162.jpg?auto=compress%2Cformat&w=640&h=259&fit=crop"
              alt=""
            />
          </div>
          <div className="text__section3">
            <GenericH2 none>Website Development</GenericH2>
            <GenericPara lessSize lessSpacing>
              We hand code beautiful websites using HTML, CSS & plain JS to make
              them efficient, no WordPress/Wix websites here
            </GenericPara>
          </div>
        </FlexBoxIndex>
        <FlexBoxIndex inverse>
          <div className="text__section3">
            <GenericH2 none>Website Design</GenericH2>
            <GenericPara lessSize lessSpacing>
              Talented and experienced designers who, specialize in styling
              beautiful and usable websites.
            </GenericPara>
          </div>
          <div className="image">
            <img
              src="https://edsurge.imgix.net/uploads/post/image/11914/teaching-1552092162.jpg?auto=compress%2Cformat&w=640&h=259&fit=crop"
              alt=""
            />
          </div>
        </FlexBoxIndex>
        <FlexBoxIndex>
          <div className="image">
            <img
              src="https://edsurge.imgix.net/uploads/post/image/11914/teaching-1552092162.jpg?auto=compress%2Cformat&w=640&h=259&fit=crop"
              alt=""
            />
          </div>
          <div className="text__section3">
            <GenericH2 none>Mobile App Development</GenericH2>
            <GenericPara lessSize lessSpacing>
              We develop mobile apps in React Native, Ionic and flutter which
              can be used in IOS & Android
            </GenericPara>
          </div>
        </FlexBoxIndex>
      </SectionThree>
      <SectionFour>
        <div className="header__section4">
          <div className="title__section4">Our Tech</div>
          <GenericPara lessSize grey>
            We use modern Technology which helps our clients <br />
            as they are highly scalable and maintainable.
          </GenericPara>
        </div>
        <div className="grid__section4">
          <div className="item1" style={{ backgroundColor: "#4D508E" }}>
            <div className="flex__section4">
              <FontAwesomeIcon
                icon={faReact}
                color="#00FFCC"
                size="3x"
                fixedWidth
              />
              <GenericH2 none> React</GenericH2>
            </div>
            <GenericPara lessSize lessSpacing grey>
              Modern JS framework which will make web apps fast and reliable for
              every User.
            </GenericPara>
          </div>
          <div className="item2" style={{ backgroundColor: "#4A4D89" }}>
            <div className="flex__section4">
              <FontAwesomeIcon
                icon="code"
                color="#00FFCC"
                size="3x"
                fixedWidth
              />
              <GenericH2 none>React Native</GenericH2>
            </div>
            <GenericPara lessSize lessSpacing grey>
              Cross-Platform for mobile app development based on JS, WHose
              result is compiled IOS and Android code.
            </GenericPara>
          </div>
          <div className="item3" style={{ backgroundColor: "#484A83" }}>
            <div className="flex__section4">
              <FontAwesomeIcon
                icon={faJs}
                color="#00FFCC"
                size="3x"
                fixedWidth
              />
              <GenericH2 none>Javascript</GenericH2>
            </div>
            <GenericPara lessSize lessSpacing grey>
              The one language to rule them All, The modern language of the web.
              It is used for web development, Mobile, IOT, Games etc.
            </GenericPara>
          </div>
          <div className="item4" style={{ backgroundColor: "#484A83" }}>
            <div className="flex__section4">
              <FontAwesomeIcon
                icon={faHtml5}
                color="#00FFCC"
                size="3x"
                fixedWidth
              />
              <GenericH2 none>HTML</GenericH2>
            </div>
            <GenericPara lessSize lessSpacing grey>
              HTML, a standardized system for tagging text files to achieve
              font, colour, graphic, and hyperlink effects on World Wide Web
              pages.
            </GenericPara>
          </div>
          <div className="item5" style={{ backgroundColor: "#484A83" }}>
            <div className="flex__section4">
              <FontAwesomeIcon
                icon={faCss3}
                color="#00FFCC"
                size="3x"
                fixedWidth
              />
              <GenericH2 none>CSS</GenericH2>
            </div>
            <GenericPara lessSize lessSpacing grey>
              CSS is a style sheet language used for describing the presentation
              of a document written in a markup language like HTML.
            </GenericPara>
          </div>
          <div className="item6" style={{ backgroundColor: "#484A83" }}>
            <div className="flex__section4">
              <FontAwesomeIcon
                icon={faGalacticSenate}
                color="#00FFCC"
                size="3x"
                fixedWidth
              />
              <GenericH2 none>Gatsby</GenericH2>
            </div>
            <GenericPara lessSize lessSpacing grey>
              Gatsby is a free and open source framework based on React that
              helps developers build blazing fast websites and apps
            </GenericPara>
          </div>
        </div>
      </SectionFour>
      <section style={{ position: "relative" }}>
        <Banner parallax></Banner>
        <FormFive>
          <form name="contact" method="post" data-netlfly="true">
            <div className="fields">
              <GenericH2 none>Contact Us</GenericH2>
              <input type="text" name="name" id="name" placeholder="Name" />
              <input type="email" name="email" id="email" placeholder="Email" />
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows="7"
              ></textarea>
            </div>
            <br/>
            <div className="actions">
              <input
                type="submit"
                value="Send Message"
                className="button__primary"
              />
            </div>
          </form>
        </FormFive>
      </section>
    </Layout>
  )
}
