import React from 'react'
import styled from 'styled-components'

import Header from './components/Header'
import Footer from './components/Footer'
import links from './data/links'
import github from "./assets/media/github.svg"
import slack from "./assets/media/slack.svg"

const App = () => {

  return (
    <div>
      <Header></Header>
      <Main>
        {links.map((link, index) => {
          return (
            <Links href={link.link} key={index} id={link.id} target="_blank" rel="noreferrer">{link.name}</Links>
          )
        })}
        <Div>
          <a href='https://app.slack.com/client/T042F7V19Q8/D0491GSPBGQ/rimeto_profile/U048QF37JQH?selected_team_id=T042F7V19Q8' target="_blank" rel="noreferrer">
            <img src={slack} alt="slack"></img>
          </a>
          <a href='https://github.com/b0yw0nder3100/Front-end-stage-1' target="_blank" rel="noreferrer">
            <img src={github} alt="github"></img>
          </a>
        </Div>
      </Main>
      <Footer></Footer>

    </div>
  )
}

export default App


const Main = styled.main`
display:flex;
justify-content: center;
flex-direction:column;
gap:20px;
padding:80px 0 64px;
`
const Div = styled.div`
display:flex;
justify-content: center;
gap:26px;`
const Links = styled.a`
font-weight: 500;
font-size: 18px;
line-height: 28px;
background: var(--Gray-200);
border: 1px solid var(--Gray-200);
border-radius: 8px;
padding: 24px 32px;
cursor:pointer;
width:100%;
text-align:center;
:hover {
background: var(--Gray-500);
}
@media (max-width:500px){
  font-size: 14px;
line-height: 20px;
}
`