import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import {
  Banner,
  TextWrapper,
  GenericPara,
  GenericH3,
  SectionTwo,
  GenereicParaAbout,
} from "../styles/IndexStyles"

const About = () => {
  return (
    <Layout>
      <section style={{ position: "relative" }}>
        <Banner different></Banner>
        <TextWrapper>
          <div>
            <GenericH3>Who we are</GenericH3>
            <GenericPara lessSize grey>
              Code nerd is and experienced and passionate group of coders,
              developers and designers. Every client we work with becomes part
              of the team. Together we face challenged and get victories.
            </GenericPara>
            <Link to="/works">Our Work</Link>
          </div>
        </TextWrapper>
      </section>
      <SectionTwo>
        <GenericH3 dark none>
          About us
        </GenericH3>
        <GenereicParaAbout lessSize grey>
          Founded in 2016, <b>GeekyHacker</b> is a small web design &
          development company based in Bangalore, India.Over the last few years
          we've made a reputation for building websites, mobile apps, and web
          apps that look great and are easy-to-use.
        </GenereicParaAbout>
        <GenereicParaAbout lessSize grey>
          We originated from futuristic technology and progressing toward
          success with a great desire. We work with self-derived strategies, as
          we have experienced everything on our own. We are equipped with the
          state-of-the-art work station in the website development and testing.
          So, results delivered on time, every time! Your success is our bread
          and butter!
        </GenereicParaAbout>
        <GenereicParaAbout lessSize grey>
          We always happy to say loudly, we smell & feel the success every day
          because of the ShikhaCorps experts inexecution planning with website
          design and digital marketing. They are always adopting with our
          valuable clients to satisfy on their requirement in each perspective,
          so our valuable clients make us more valuable in our success. While
          you work with us you feel, we are in right place & right time.
        </GenereicParaAbout>
        <GenereicParaAbout lessSize grey>
          Our Vision is to make our self as India’s most valuable corporation
          through ultimate performance and uniqueness in every single project
          that we do!. Our Mission is to enhance the wealth generating
          capability of the enterprise in a globalizing environment by
          exhibiting our efficiency and adopting the innovative
          “more-than-enough” methodology in our work.
        </GenereicParaAbout>
      </SectionTwo>
    </Layout>
  )
}

export default About
