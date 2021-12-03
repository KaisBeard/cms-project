import React from 'react'
// import {tent} from '../img/tent.jpg'
import './adsec.css'

function AdSec() {
    return (
        <div className = 'adcontainer'>
            <div className = 'adone'>
                <img src="./img/bag.jpg" alt ='tent Ad' width = "100" height = "100"/>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.                   
                </div>
            </div>
            <div className = 'adone'>
                <img src="./img/bag.jpg" alt ='tent Ad' width = "100" height = "100"/>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.          
                </div>
            </div>
            <div className = 'adone'>
                <img src="./img/bag.jpg" alt ='tent Ad' width = "100" height = "100"/>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </div>
            </div>
        </div>
    )
}

export default AdSec
