import React from 'react';

const Header = () => {
    return (
        <header className="header shadow py-3 mb-5">
            <div className="container">
                <nav className="nav d-flex align-items-center justify-content-between">
                    <a href="#!" className="nav__logo">Logo</a>
                    <ul className="nav__list d-flex gap-5">
                        <li className="nav__item"><a href="#!" className="nav__link">About</a></li>
                        <li className="nav__item"><a href="#!" className="nav__link">Support</a></li>
                        <li className="nav__item"><a href="#!" className="nav__link">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;