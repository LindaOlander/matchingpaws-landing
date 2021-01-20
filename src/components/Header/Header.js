import React from 'react';
import './Header.css';
import SplitText from '../SplitText/SplitText';

const Header = () => {
    return (
        <div className="header">
            <SplitText copy="Stay tuned!" role="heading" />
            <h2>Här lanseras snart Sveriges mest träffsäkra hundmatchingsportal</h2>
        </div>
    )
};

export default Header;