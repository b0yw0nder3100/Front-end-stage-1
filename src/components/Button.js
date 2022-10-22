import React from 'react'
import styled from 'styled-components'

const Button = ({ children }) => {
  return (
    <ButtonWrapper>{children}</ButtonWrapper>
  )
}

export default Button


const ButtonWrapper = styled.button`
background: var(--Gray-200);
border: 1px solid var(--Gray-200);
border-radius: 8px;
padding: 24px 32px;
cursor:pointer;
width:100%;
font-weight: 500;
font-size: 18px;
line-height: 28px;
@media (max-width:500px){
  font-size: 14px;
line-height: 20px;
}
`