import React from 'react';

const AboutSection = () => {
    return (
            <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Текстовая часть */}
          <div>
            {/* Слоган */}
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-500 rounded-full text-sm font-semibold mb-4">
                О нас
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Оренбургские экскурсии - 
                <span className="text-primary-500"> ваш гид по истории города</span>
              </h2>
            </div>

            {/* Описание компании */}
            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
                Мы - команда профессиональных гидов и краеведов, которые искренне любят 
                Оренбург и хотят поделиться его богатой историей с вами. Наша миссия - 
                показать город таким, каким его видят местные жители.
              </p>
              
              <p className="leading-relaxed">
                С 2010 года мы проводим авторские экскурсии по самым интересным местам 
                Оренбурга. За это время более 50 000 туристов из разных городов России 
                и ближнего зарубежья открыли для себя красоту нашего города.
              </p>

              <p className="leading-relaxed">
                Мы тщательно разрабатываем каждый маршрут, сочетая исторические факты 
                с увлекательными историями и легендами. Наши экскурсии - это не просто 
                прогулка, а настоящее погружение в атмосферу города.
              </p>
            </div>

            {/* Статистика */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-500 mb-2">13+</div>
                <div className="text-sm text-gray-600">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-500 mb-2">50K+</div>
                <div className="text-sm text-gray-600">довольных туристов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-500 mb-2">25+</div>
                <div className="text-sm text-gray-600">авторских маршрутов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-500 mb-2">4.9</div>
                <div className="text-sm text-gray-600">средний рейтинг</div>
              </div>
            </div>

            {/* Кнопка */}
            <div className="mt-8">
              <button className="btn-secondary">
                Узнать больше о нас
              </button>
            </div>
          </div>

          {/* Изображения */}
          <div className="relative">
            {/* Основное изображение */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Оренбург - исторический центр"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
            
            {/* Дополнительное изображение */}
            <div className="absolute -bottom-6 -left-6 w-2/3 bg-white rounded-lg shadow-lg p-2 border">
              <img 
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Экскурсия по Оренбургу"
                className="w-full h-32 object-cover rounded-md"
              />
              <div className="p-3">
                <p className="text-sm font-medium text-gray-800">Профессиональные гиды</p>
                <p className="text-xs text-gray-600 mt-1">Сертифицированные экскурсоводы</p>
              </div>
            </div>

            {/* Декоративный элемент */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-500 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-primary-50 rounded-2xl">
            <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Наша миссия</h3>
            <p className="text-gray-600">
              Сделать Оренбург доступным и интересным для каждого гостя города
            </p>
          </div>

          <div className="text-center p-6 bg-primary-50 rounded-2xl">
            <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Наша философия</h3>
            <p className="text-gray-600">
              Каждая экскурсия - это уникальная история, а не просто перечисление фактов
            </p>
          </div>

          <div className="text-center p-6 bg-primary-50 rounded-2xl">
            <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Наша команда</h3>
            <p className="text-gray-600">
              Профессиональные гиды с педагогическим и историческим образованием
            </p>
          </div>
        </div>
      </div>
    </section>
  );

};

export default AboutSection;