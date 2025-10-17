import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Контактная информация */}
          <div className="footer-contact">
            <a href="tel:+73531234567">+7 (353) 123-45-67</a>
            <a href="mailto:info@wsr.ru">info@wsr.ru</a>
          </div>
          
          {/* Навигация в подвале */}
          <nav className="footer-nav">
            <a href="/">Главная</a>
            <a href="/register">Регистрация</a>
            <a href="/account">Личный кабинет</a>
            <a href="/about">О нас</a>
            <a href="/contacts">Контакты</a>
            <a href="/search">Поиск</a>
            <a href="/excursions">Наши экскурсии</a>
          </nav>
        </div>
        
        {/* Копирайт */}
        <div className="footer-bottom">
          <p>&copy; 2024 Оренбургские экскурсии. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;