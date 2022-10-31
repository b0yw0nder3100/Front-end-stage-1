import React from 'react'
import styled from 'styled-components'
import avatarShareDesktop from "../assets/interface/share_desktop.svg"
import avatarShareMobile from "../assets/interface/share_mobile.svg"
import Profile from './Profile'
import UserProfile from '../data/profile'

const Header = () => {
    return (
        <HeaderWrapper className='flex justify-center'>
            <Profile picture={UserProfile.img} twitter_name={UserProfile.twitter_name} slack_name={UserProfile.slack_name} slack_ID={UserProfile.slack_ID}></Profile>
            <ShareDesktop>
                <img src={avatarShareDesktop} alt="share"></img>
            </ShareDesktop>
            <ShareMobile>
                <img src={avatarShareMobile} alt="share"></img>
            </ShareMobile>
        </HeaderWrapper>
    )
}

export default Header


const HeaderWrapper = styled.div`
    display:flex;
    justify-content:space-evenly;
    @media (max-width:1024px){
        justify-content:space-around;
    }
`
const ShareDesktop = styled.div`
    position:absolute;
    right:352px;
    top: 44px;
    cursor:pointer;
    @media (max-width:1024px){
        right:300px;
    }
    
    @media (max-width:800px){
        display:none;
    }
`
const ShareMobile = styled.div`
    position:absolute;
        cursor:pointer;
    display:none;
    @media (max-width:800px){
            top: 44px;
        right:100px;
        display:block
    }
    
    @media (max-width:600px){
    right: 16px;
    }
`