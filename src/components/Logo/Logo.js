import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from '../../images/brain-logo3.png'
import './logo.css'

const Logo = () => {
    return (
        <div className='brainLogo-container'>
            <p className='f1'>SMART</p>
            <Tilt className='Tilt' options={{ max:100, scale: 2, transitionSpeed: 2000 }} style={{ height:260, width:250 }}>
                    <img className='brainLogo' alt='logo' src={brain} />
            </Tilt>
            <p className='f1'>BRAIN</p>
        </div>
    )
}

export default Logo
