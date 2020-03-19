import React from 'react';
import Tilt from 'react-tilt';
import Brain from './Brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt4 mt0'>
            <p className='f5 white'>
                {'Created by Pritam Majumder'}
            </p>


            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner pa3"> 
                    <img alt='logo' src={Brain}/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;