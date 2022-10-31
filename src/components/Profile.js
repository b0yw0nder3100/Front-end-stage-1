import React from 'react'
import styled from 'styled-components'
/**
 * Component for showing details of the avatar
 * @component
 * @param {image} picture - Profile Picture of the User
 * @param {string} twitter_name - Twitter username of the User
 * @param {string} slack_name - Slack name of the User
 */
const Avatar = ({ picture, twitter_name, slack_name, slack_ID }) => {
    return (
        <Div>
            <Img src={picture} alt="profile" id="profile__img"></Img>
            <Twitter id="twitter">@{twitter_name}</Twitter>
            <Slack id="slack">
                Member ID:{slack_ID}
                Display Name:{slack_name}</Slack>
        </Div>
    )
}

export default Avatar

const Img = styled.img`
width: 88px;
height: 88px;
display:flex;
align-self:center;
`

const Twitter = styled.p`
padding: 24px 0 0 0;
font-weight: 700;
font-size: 20px;
line-height: 30px;
`
const Slack = styled.p`
    display:none;
`
const Div = styled.div`
display:flex;
justify-content: center;
flex-direction:column;`