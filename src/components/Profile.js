import React from 'react'
import styled from 'styled-components'
/**
 * Component for showing details of the avatar
 * @component
 * @param {image} picture - Profile Picture of the User
 * @param {string} twitter_name - Twitter username of the User
 * @param {string} slack_name - Slack name of the User
 */
const Avatar = ({ picture, twitter_name, slack_name }) => {
    return (
        <div>
            <img src={picture} alt="profile" id="profile__img"></img>
            <Twitter id="twitter">{twitter_name}</Twitter>
            <Slack id="slack">{slack_name}</Slack>
        </div>
    )
}

export default Avatar

const Twitter = styled.p`
    padding: 24px 0 0 0
`
const Slack = styled.p`
    display:none
`