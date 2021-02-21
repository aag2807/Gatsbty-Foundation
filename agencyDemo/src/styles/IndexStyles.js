import styled from "styled-components"

const Banner = styled.div`
  &:after {
    content: "";
    display: block;
    height: ${props => (props.parallax ? "80vh" : "100vh")};
    width: 100%;
    background-image: url("https://wallpaperaccess.com/full/2906287.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: ${props => (props.parallax ? "fixed" : "scroll")};
    filter: grayscale(100%) blur(2px);
  }
`

const TextWrapper = styled.div`
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

const ExtraText = styled.div`
  position: absolute;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.225em;
  font-weight: 600;
  font-size: 1.2rem;
  z-index: 1;
  left: 50%;
  bottom: 10%;
  transform: translate(-50%, -50%);

  &:after {
    content: "";
    display: block;
    height: 2rem;
    width: 2rem;
    left: 50%;
    position: absolute;
    margin: 1em 0 0 -0.75em;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMSAyMS44ODNsLTYuMjM1LTcuNTI3LS43NjUuNjQ0IDcuNTIxIDkgNy40NzktOS0uNzY0LS42NDUtNi4yMzYgNy41Mjl2LTIxLjg4NGgtMXYyMS44ODN6Ii8+PC9zdmc+");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`

const SectionTwo = styled.section`
  background-color: #21b2a6;
  text-align: center;
  padding: 10rem 0;
  padding: 10rem 0;
  div {
    width: 66%;
    margin: 0 auto;
  }

  h2 {
    font-size: 3rem;
    padding: 1.35em 0;
    color: #fff;
    border-bottom: 2px solid #1d9c91;
    text-transform: uppercase;
    letter-spacing: 0.6rem;
    margin: 0;
  }

  p {
    text-transform: uppercase;
    color: #c8ece9;
    text-align: center;
    letter-spacing: 0.225em;
    font-size: 1.5rem;
  }

  h5 {
    font-size: 1.4rem;
    line-height: 2rem;
    color: #fff;
    border-bottom: 2px solid #1d9c91;
    font-weight: 800;
    letter-spacing: 0.225em;
    text-transform: uppercase;
    padding-bottom: 0.5rem;
    margin-bottom: 5rem;
  }
`

const SectionThree = styled.section`
  background-color: #2b343d;
  color: #fff;
`

const FlexBoxIndex = styled.div`
  display: flex;
  .image {
    width: ${props => (props.inverse ? "60%" : "40%")};
  }
  img {
    width: 100%;
  }
  .text__section3 {
    width: ${props => (props.inverse ? "40%" : "60%")};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  h2 {
    font-size: 3rem;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.225rem;
    margin: 0;
  }
  p {
    text-transform: uppercase;
    color: #c8ece9;
    text-align: center;
    letter-spacing: 0.075em;
    font-size: 1.5rem;
  }
`

const GenericPara = styled.p`
  text-transform: uppercase;
  text-align: center;
  letter-spacing: ${props => (props.lessSpacing ? "0.075em" : "0.225em")};
  font-size: ${props => (props.lessSize ? "1.5rem" : "2.5rem")};
  line-height: ${props => (props.lessSize ? "2rem" : "3rem")};
  color: ${props => (props.grey ? "#c8ece9" : "#ffffff")};
`

const GenericH2 = styled.h2`
  font-size: 3rem;
  padding: ${props => (props.none ? "0" : "1.35rem 0")};
  color: #fff;
  border-bottom: ${props => (props.none ? "0" : "2px solid #1d9c91")};
  text-transform: uppercase;
  letter-spacing: 0.6rem;
  margin:0;
`

const SectionFour = styled.section`
  background-color: #505393;
  color:#fff;
  text-align: center;
  
  .header__section4 {
    width: 66%;
    margin: 0 auto;
  }
  
  .title__section4 {
    font-size: 3rem;
    padding: 1.35em 0;
    color: #fff;
    border-bottom: 2px solid #464981;
    text-transform: uppercase;
    letter-spacing: 0.225em;
    margin: 0;
  }

  .grid__section4 {
    display:grid;
    grid-template-rows:1fr 1fr;
    width: 66%;
    margin: 0 auto;
    padding: 3rem 0;
  }

  .grid__section > * {
    padding: 3rem;
  }

  .flex__section4 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
  .flex__section4 > h2 {
    margin-left: 1rem;
  }

`

const FormFive = styled.div`
  position: absolute;
  z-index: 1;
  width:80%;
  top: 50%;
  left:50%;
  transform: translate(-50%, -50%);
  color : white;
  
  form > .fields {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    appearance: none;
    font-size: 2rem;
    background-color: rgba(144,144,144, 0.75);
    border: none;
  }

  input[type="text"],
  input[type="email"] {
    height: 2.75em;
    padding: 0.75em 1em;
  }
  textarea {
    padding: 0.75em 1em;
    resize:none;
  }

  .button__primary {
    background-color: #ed4933;
    box-shadow: none;
    color: #fff;
    border-radius: 8px;
    border: 0;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.225em;
    padding: 1.8rem 0.8rem;
    text-align: center;
    text-decoration:none;
    text-transform: uppercase;
  }
`

export {
  Banner,
  TextWrapper,
  ExtraText,
  SectionTwo,
  SectionThree,
  FlexBoxIndex,
  GenericPara,
  GenericH2,
  SectionFour,
  FormFive,

}