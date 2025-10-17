import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary-500 text-white">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-2">
              <a href="tel:+73531234567" className="block hover:text-gray-200 transition-colors">
                +7 (353) 123-45-67
              </a>
              <a href="mailto:info@wsr.ru" className="block hover:text-gray-200 transition-colors">
                info@wsr.ru
              </a>
            </div>
          </div>
          
          {/* Навигация */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="/" className="hover:text-gray-200 transition-colors">Главная</a>
              <a href="/register" className="hover:text-gray-200 transition-colors">Регистрация</a>
              <a href="/account" className="hover:text-gray-200 transition-colors">Личный кабинет</a>
              <a href="/about" className="hover:text-gray-200 transition-colors">О нас</a>
              <a href="/contacts" className="hover:text-gray-200 transition-colors">Контакты</a>
              <a href="/search" className="hover:text-gray-200 transition-colors">Поиск</a>
              <a href="/excursions" className="hover:text-gray-200 transition-colors">Наши экскурсии</a>
            </div>
          </div>
        </div>
        
        {/* Копирайт */}
        <div className="border-t border-primary-400 pt-4 text-center">
          <p>&copy; 2024 Оренбургские экскурсии. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;