import React from 'react';
import './Header.css';

class Header extends React.Component {
    constructor() {
        super()
            
    }

    render() {
        return (
            <div>
                <div className='header-container'>
                    <header className='header-text'>Start Bootstrap</header>
                        <nav className='nav-container'>
                            <span className='nav-links'>Services</span>
                            <span className='nav-links'>Portfolio</span>
                            <span className='nav-links'>About</span>
                            <span className='nav-links'>Team</span>
                            <span className='nav-links'>Contact</span>
                            <i id='hamburger' className="fas fa-bars" ></i>
                        </nav>
                </div>
                <div className='image'></div> 
            </div>
        )
    }
}

export default Header;