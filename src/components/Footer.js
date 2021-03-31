import React from 'react'
import '../styles/footer.css'   
import SocialMedia from './SocialMedia';
function Footer() {
    return (
        <div className="footer_wrapper">
            <div className="footer">
            <p>Follow us on</p>
            <SocialMedia icons="connect_i"reddit="reddit_i" youtube="youtube_i" facebook="facebook_i" instagram="instagram_i" twitter="twitter_i"/>
            <hr className="footer_hr"/>
            <div className="terms">
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Parent's Guide</p>
                <p>Safe and Fair Play Policy</p>
            </div>
            <div className="address_wrapper">
                <p className="address">Supercell Oy Jätkäsaarenlaituri 1 00180 Helsinki Finland</p>
                <a href="/"><img className="logo" src="supercel_logo.png" alt=""/></a>
            </div>
            </div>
            
        </div>
    )
}

export default Footer
