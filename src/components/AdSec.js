import React from 'react'
import tent from './../img/tent.jpg'
import bag from './../img/bag.jpg'
import './adsec.css'

function AdSec() {
    return (
        <div className = 'adcontainer'>
            <h2>Products of the Month</h2>
            <div className = 'adone'>
                <img src={tent} alt ='tent Ad' />
                <h3>Epic tent for adventurers</h3>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.                   
                </div>
            </div>
            <div className = 'adone secondAd'>
                <img src={bag} alt ='tent Ad' />
                <h3>Glorious backpack of light weight</h3>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.          
                </div>
            </div>
            <div className = 'adone secondAd'>
                <img src={tent} alt ='tent Ad' />
                <h3>Epic tent for adventurers</h3>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.                   
                </div>
            </div>
            <div className = 'adone secondAd'>
                <img src={bag} alt ='tent Ad' />
                <h3>Glorious backpack of light weight</h3>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.          
                </div>
            </div>
        </div>
    )
}

export default AdSec

/*
    <div className = 'adone'>
                <img src={tent} alt ='tent Ad' width = "100" height = "100"/>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </div>
            </div>

            <div className = 'adone'>
                <img src={tent} alt ='tent Ad' width = "100" height = "100"/>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.                   
                </div>
            </div>
            <div className = 'adone'>
                <img src={bag} alt ='tent Ad' width = "100" height = "100"/>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.          
                </div>
            </div>
            <div className = 'adone'>
                <img src={tent} alt ='tent Ad' width = "100" height = "100"/>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </div>
            </div>
            <div className = 'adone'>
                <img src={tent} alt ='tent Ad' width = "100" height = "100"/>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.                   
                </div>
            </div>
            <div className = 'adone'>
                <img src={bag} alt ='tent Ad' width = "100" height = "100"/>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.          
                </div>
            </div>
            <div className = 'adone'>
                <img src={tent} alt ='tent Ad' width = "100" height = "100"/>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </div>
            </div>
*/