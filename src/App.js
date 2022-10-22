import React from 'react'
import styled from 'styled-components'

import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Button'
import links from './data/links'
import github from "./assets/media/github.svg"
import slack from "./assets/media/slack.svg"

const App = () => {

  return (
    <div>
      <Header></Header>
      <Main>
        {links.map((link) => {
          return (
            <Button>{link.name}</Button>
          )
        })}
        <Div>
          <img src={slack} alt="share"></img>
          <img src={github} alt="share"></img>
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
