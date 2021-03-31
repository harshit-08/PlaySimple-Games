import React from 'react'
import RedditIcon from '@material-ui/icons/Reddit';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import '../styles/SocialMedia.css'

function SocialMedia(props) {
    return (
        <div className={props.icons}>
            <a href="https://www.reddit.com/r/HayDay/"><RedditIcon className={props.reddit} /></a> 
            <a href="https://www.youtube.com/channel/UCBrMq7wkdPWb3PxR-GUR61A"><YouTubeIcon className={props.youtube}/></a>
            <a href="https://www.facebook.com/HayDayOfficial"><FacebookIcon className={props.facebook} /></a>
            <a href="http://instagram.com/hayday"><InstagramIcon className={props.instagram} /></a>
            <a href="https://twitter.com/hayday"><TwitterIcon className={props.twitter} /></a>
        </div>
    )
}

export default SocialMedia
