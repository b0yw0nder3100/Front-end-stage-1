import React from 'react'
import styled from 'styled-components'

import zuri from "../assets/media/zuri.svg"
import i4g from "../assets/media/i4g.svg"

const Footer = () => {
    return (
        <FooterWrapper>
            <Div>
                <Img src={zuri} alt="zuri"></Img>
                <FooterText>HNG Internship 9 Frontend Task</FooterText>
                <Img src={i4g} alt="I4G"></Img>
            </Div>
        </FooterWrapper>

    )
}

export default Footer


const FooterWrapper = styled.footer`
border-top: 1px solid var(--Gray-200);
padding: 36px 0 0 0;
display:flex;
@media (max-width:600px){
    flex-direction:column;
    justify-content:center;
    text-align:center;
    }
`
const FooterText = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: var(--Gray-500);
@media (max-width:600px){
    padding:20px;
    }
`
const Img = styled.img`
width:185px;
height:24.74px;`

const Div = styled.div`
display:flex;
justify-content:space-between;
width:100%;
gap:26px;
@media (max-width:600px){
    display:block;
    text-align:center;
    }
`