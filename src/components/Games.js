import React from 'react'
import '../styles/games.css'
import {Link} from 'react-router-dom'
function Games() {
    return (
        <div className="games">
            <Link to='/hayday'>
            <p className="games_item first_item">HayDay</p>
            </Link>
            <a href="https://supercell.com/en/games/clashofclans/"><p className="games_item">Clash of Clans</p></a>
            <a href="https://supercell.com/en/games/boombeach/"><p className="games_item">Boom Beach</p></a>
            <a href="https://supercell.com/en/games/clashroyale/"><p className="games_item">Clash Royale</p></a>
            <a href="https://supercell.com/en/games/brawlstars/"><p className="games_item">Brawl Stars</p></a>
        </div>
    )
}

export default Games
