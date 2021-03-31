import React, { useEffect } from 'react'
import '../styles/hayday.css'
import axios from 'axios'
import ReactPlayer from "react-player"
import SocialMedia from './SocialMedia'

function HayDay(props) {

    // CODE FOR FETCHING THE DATA FROM API
    // TRIED TO FETCH THE DATA BUT CORS WAS NOT ALLOWED
    // SO COULD NOT FETCH IT

    // const [para1, setpara1] = useState("")

    // useEffect(() => {     
    // axios.get('https://ps-data-store.s3-us-west-2.amazonaws.com/frontend-assignment/assignment-paragh-2.json',{
    //     method: 'GET',
    //     headers: {
    //         "Access-Control-Allow-Origin" : "*",
    //         mode: 'no-cors',
    //       }
    // })
    // .then(res => {
    //     console.log(res);
    // })
    // .catch(err => {
    //     console.log(err);
    // })
    // },[]);
    return (
        <div onClick={props.handleClickBanner}>
            <img src="bg_hero_hayday.jpg" alt="" className="banner"/>
            <img src="hayday_page_img_1.png" alt="" className="farm_with_friends"/>
            <hr className="hr"/>
            <img src="hayday_bar.png" alt="" className="hayday_bar"/>
            <img src="hayday_man.png" alt="" className="hayday_man" />
            <div className="container">
            <img src="banner2.jpg" alt="" className="hayday_banner2" />
            <img src="banner2_overlap.png" alt="" className="banner2_overlap" />
            <h1 className="title">STAY UP TO DATE</h1>
            <p className="desc">To stay on top of your game, keep an eye on the in-game News section. Follow us on social media for the latest chatter and sneak peeks on what the team is working on. Don’t be a stranger and join the conversation.</p>
            <p className="follow">FOLLOW HAYDAY ON</p>
            <SocialMedia reddit="reddit_icon" icons="connect_icons" youtube="youtube_icon" facebook="facebook_icon" 
                instagram="instagram_icon" twitter="twitter_icon"
            />
            </div>
            <div className="video_container">
                <ReactPlayer url="https://www.youtube.com/watch?v=5BQOgUWU59w"/>
                <ReactPlayer url="https://www.youtube.com/watch?v=OStAo1NTi2k" />
            </div>
        </div>
    )
}
export default HayDay
