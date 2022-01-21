import React from "react";
import Tilty from 'react-tilty';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
        <div className="ma4 mto0">
            <div class="App">
                <Tilty className='Tilt br2 shadow-2' options={{ max: 55 }} style={{ height: 150, width: 150 }}>
                    <div className="Tilt-inner pa3">
                        <img style={{ paddingTop: '5px' }} alt='logo' src={brain} />
                    </div>
                </Tilty>
            </div>

        </div>
    );
}

export default Logo;