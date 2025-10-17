import React, { useState } from 'react';

const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Моковые данные для подсказок
  const searchSuggestions = [
    "Исторический центр",
    "Пуховые платки", 
    "Вечерние экскурсии",
    "Музеи Оренбурга",
    "Архитектурные туры",
    "Гастрономические экскурсии",
    "Литературный Оренбург",
    "Пешеходные экскурсии",
    "Обзорные экскурсии",
    "Экскурсии для детей"
  ];

  // Фильтруем подсказки по введенному тексту
  const filteredSuggestions = searchSuggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Поиск:', searchTerm);
    // Здесь будет логика поиска
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              Найдите свою идеальную экскурсию
            </h2>
            <p className="text-xl text-gray-600">
              Воспользуйтесь поиском или выберите из популярных категорий
            </p>
          </div>

          {/* Форма поиска */}
          <div className="relative">
            <form onSubmit={handleSearch} className="relative">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setShowSuggestions(true);
                    }}
                    onFocus={() => setShowSuggestions(true)}
                    placeholder="Например: исторический центр, музеи, гастрономия..."
                    className="w-full px-6 py-4 text-lg border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  />
                  
                  {/* Иконка поиска */}
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>

                  {/* Подсказки */}
                  {showSuggestions && searchTerm && filteredSuggestions.length > 0 && (
                    <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-2xl shadow-lg mt-2 z-10 max-h-60 overflow-y-auto">
                      {filteredSuggestions.map((suggestion, index) => (
                        <div
                          key={index}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="px-6 py-3 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0"
                        >
                          <div className="flex items-center">
                            <svg className="w-4 h-4 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <span className="text-gray-700">{suggestion}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <button
                  type="submit"
                  className="btn-secondary px-8 py-4 text-lg font-semibold whitespace-nowrap"
                >
                  Найти экскурсии
                </button>
              </div>
            </form>
          </div>

          {/* Популярные категории */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-gray-800 text-center mb-6">
              Популярные категории
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "Исторические", icon: "🏛️", count: "12 экскурсий" },
                { name: "Музеи", icon: "🖼️", count: "8 экскурсий" },
                { name: "Архитектура", icon: "🏗️", count: "6 экскурсий" },
                { name: "Гастрономия", icon: "🍽️", count: "4 экскурсии" },
                { name: "Вечерние", icon: "🌃", count: "5 экскурсий" },
                { name: "Для детей", icon: "👨‍👩‍👧‍👦", count: "3 экскурсии" }
              ].map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSearchTerm(category.name)}
                  className="flex items-center space-x-2 px-4 py-3 bg-gray-50 hover:bg-primary-50 border border-gray-200 rounded-xl transition-all duration-200 hover:border-primary-300 group"
                >
                  <span className="text-xl">{category.icon}</span>
                  <div className="text-left">
                    <div className="font-medium text-gray-800 group-hover:text-primary-600">
                      {category.name}
                    </div>
                    <div className="text-xs text-gray-500">{category.count}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Быстрый фильтр по цене */}
          <div className="mt-8 p-6 bg-primary-50 rounded-2xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
              Подбор по бюджету
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { range: "до 1000 ₽", description: "Бюджетные варианты" },
                { range: "1000-2000 ₽", description: "Средняя цена" },
                { range: "2000-3000 ₽", description: "Премиум экскурсии" },
                { range: "от 3000 ₽", description: "VIP программы" }
              ].map((option, index) => (
                <button
                  key={index}
                  className="px-6 py-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow text-center min-w-[140px]"
                >
                  <div className="font-semibold text-primary-600">{option.range}</div>
                  <div className="text-sm text-gray-600 mt-1">{option.description}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;