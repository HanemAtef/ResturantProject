import React from 'react';
import './Footer.css';

const footer = () => {
    return(
        <footer classname={style.mainFooter}>
            <div classname={style.FooterBrand}>Warm Gourmet</div>
            <div classname={style.Footerlink}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact Us</a>
            </div>
            </footer>
    );
}

export default footer;


        
 