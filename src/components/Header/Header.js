import React , { useState } from 'react';
import './header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header"> 
            <div class="container">
                <div className='logo'>
                    <h1>Orenburg Excursions</h1>
                </div>
            </div>
            <nav className='desktop-nav'>
                <a href='/'>Главная</a>
                <a href='/excursions'>Наши экскурсии</a>
                <a href='/about'>О нас</a>
                <a href='/contact'>Contact</a>
                <a href='/register'>register</a>
                <a href='/account'>Личный кабинет</a>
            </nav>
            <button className="mobile-menu-button" onClick={toggleMenu}>
                ☰
            </button>
            {isMenuOpen && (
                <nav className='mobile-nav'> 
                    <a href="/" onClick={toggleMenu}>Главная</a>
                    <a href="/excursions" onClick={toggleMenu}>Наши экскурсии</a>
                    <a href="/about" onClick={toggleMenu}>О нас</a>
                    <a href="/contacts" onClick={toggleMenu}>Контакты</a>
                    <a href="/register" onClick={toggleMenu}>Регистрация</a>
                    <a href="/account" onClick={toggleMenu}>Личный кабинет</a>
                </nav>
            )};
            
        
        </header>
    );
};

export default Header;