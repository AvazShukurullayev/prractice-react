import React from 'react';

const Footer = () => {
    return (
        <footer className="footer shadow border py-3 mt-5">
            <div className="container">
                <h6>&copy; CopyRight reserved {new Date().getFullYear()}</h6>
            </div>
        </footer>
    );
};

export default Footer;