import React from 'react';
import options from '../components/images/options.png';
import '../App.css';

const Header = () => {
    return (
        <div className="App-header">
            {/* <span className="menu"> */}
            <img src={options} alt="" className="options-icon" />
            {/* </span> */}
            <h2 className="page-title">Apparel Store</h2>
        </div>
    );
}

export default Header;
