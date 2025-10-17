import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Герой секция */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-600 text-white pt-20 pb-32">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Откройте Оренбург по-новому
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Уникальные экскурсии по достопримечательностям города
          </p>
          <button className="btn-primary text-lg px-8 py-3">
            Найти экскурсию
          </button>
        </div>
      </section>
      
      {/* Секция "Почему выбирают нас" */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-500 mb-12">
            Почему выбирают нас?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Карточка 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-500 mb-3">
                Профессиональные гиды
              </h3>
              <p className="text-gray-600">
                Опытные экскурсоводы с глубокими знаниями истории города
              </p>
            </div>
            
            {/* Карточка 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-500 mb-3">
                Удобное бронирование
              </h3>
              <p className="text-gray-600">
                Процесс бронирования займет не более 2 минут
              </p>
            </div>
            
            {/* Карточка 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v1m0 6v1m0-1v1m6-10a2 2 0 11-4 0 2 2 0 014 0zM6 18a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-500 mb-3">
                Доступные цены
              </h3>
              <p className="text-gray-600">
                Экскурсии для любого бюджета
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;