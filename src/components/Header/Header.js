import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Логотип */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-primary-500">
              Оренбургские экскурсии
            </h1>
          </div>
          
          {/* Десктопная навигация */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">
              Главная
            </a>
            <a href="/excursions" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">
              Наши экскурсии
            </a>
            <a href="/about" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">
              О нас
            </a>
            <a href="/contacts" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">
              Контакты
            </a>
            <a href="/register" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">
              Регистрация
            </a>
            <a href="/account" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">
              Личный кабинет
            </a>
          </nav>
          
          {/* Кнопка мобильного меню */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Мобильное меню */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-gray-700 hover:text-primary-500 font-medium">
                Главная
              </a>
              <a href="/excursions" className="text-gray-700 hover:text-primary-500 font-medium">
                Наши экскурсии
              </a>
              <a href="/about" className="text-gray-700 hover:text-primary-500 font-medium">
                О нас
              </a>
              <a href="/contacts" className="text-gray-700 hover:text-primary-500 font-medium">
                Контакты
              </a>
              <a href="/register" className="text-gray-700 hover:text-primary-500 font-medium">
                Регистрация
              </a>
              <a href="/account" className="text-gray-700 hover:text-primary-500 font-medium">
                Личный кабинет
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;