import React from 'react';

const ExcursionList = () => {
  // Моковые данные для 7 экскурсий
  const excursions = [
    {
      id: 1,
      title: "Исторический центр Оренбурга",
      description: "Пешеходная экскурсия по самым значимым местам исторического центра города",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      duration: "2 часа",
      price: "1500 ₽",
      rating: 4.9,
      bookings: 127,
      category: "Пешеходная"
    },
    {
      id: 2,
      title: "Оренбургские пуховые платки",
      description: "Знакомство с уникальным народным промыслом и музеем пухового платка",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      duration: "1.5 часа",
      price: "1200 ₽",
      rating: 4.8,
      bookings: 89,
      category: "Музейная"
    },
    {
      id: 3,
      title: "Вечерний Оренбург",
      description: "Романтическая прогулка по вечернему городу с подсветкой достопримечательностей",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      duration: "2.5 часа",
      price: "1800 ₽",
      rating: 4.7,
      bookings: 94,
      category: "Вечерняя"
    },
    {
      id: 4,
      title: "Музей истории Оренбурга",
      description: "Экскурсия по главному музею города с богатой коллекцией экспонатов",
      image: "https://images.unsplash.com/photo-1534008897995-27a23e859048?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
      duration: "2 часа",
      price: "1000 ₽",
      rating: 4.6,
      bookings: 156,
      category: "Музейная"
    },
    {
      id: 5,
      title: "Архитектурные шедевры Оренбурга",
      description: "Знакомство с уникальной архитектурой города разных эпох",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      duration: "3 часа",
      price: "2000 ₽",
      rating: 4.8,
      bookings: 78,
      category: "Архитектурная"
    },
    {
      id: 6,
      title: "Гастрономический Оренбург",
      description: "Знакомство с местной кухней и гастрономическими традициями региона",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      duration: "2.5 часа",
      price: "2500 ₽",
      rating: 4.9,
      bookings: 63,
      category: "Гастрономическая"
    },
    {
      id: 7,
      title: "Литературный Оренбург",
      description: "По местам, связанным с известными писателями и поэтами",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      duration: "2 часа",
      price: "1300 ₽",
      rating: 4.7,
      bookings: 45,
      category: "Литературная"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        {/* Заголовок секции */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">
            Наши экскурсии
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите подходящую экскурсию и погрузитесь в увлекательную историю Оренбурга
          </p>
        </div>

        {/* Сетка карточек экскурсий */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {excursions.map((excursion) => (
            <div 
              key={excursion.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Изображение */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={excursion.image} 
                  alt={excursion.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                {/* Категория */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-500 text-white text-sm font-medium rounded-full">
                    {excursion.category}
                  </span>
                </div>
                {/* Рейтинг */}
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                  <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span className="text-sm font-medium text-gray-800">{excursion.rating}</span>
                </div>
              </div>

              {/* Контент карточки */}
              <div className="p-6">
                {/* Заголовок и описание */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                  {excursion.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {excursion.description}
                </p>

                {/* Детали экскурсии */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {excursion.duration}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {excursion.bookings} бронирований
                  </div>
                </div>

                {/* Цена и кнопка */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary-500">{excursion.price}</span>
                    <span className="text-gray-500 text-sm ml-1">с человека</span>
                  </div>
                  <button className="btn-primary">
                    Забронировать
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Кнопка "Показать все экскурсии" */}
        <div className="text-center mt-12">
          <button className="btn-secondary px-8 py-3">
            Показать все экскурсии
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExcursionList;