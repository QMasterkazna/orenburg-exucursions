import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const ExcursionsSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const popularExcursions = [
    {
      id: 1,
      title: "Исторический центр Оренбурга",
      description: "Пешеходная экскурсия по самым значимым местам исторического центра города",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      rating: 4.9,
      duration: "2 часа",
      price: "1500 ₽"
    },
    {
      id: 2,
      title: "Оренбургские пуховые платки",
      description: "Знакомство с уникальным народным промыслом и музеем пухового платка",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      rating: 4.8,
      duration: "1.5 часа",
      price: "1200 ₽"
    },
    {
      id: 3,
      title: "Вечерний Оренбург",
      description: "Романтическая прогулка по вечернему городу с подсветкой достопримечательностей",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      rating: 4.7,
      duration: "2.5 часа",
      price: "1800 ₽"
    },
    {
      id: 4,
      title: "Музей истории Оренбурга",
      description: "Экскурсия по главному музею города с богатой коллекцией экспонатов",
      image: "https://images.unsplash.com/photo-1534008897995-27a23e859048?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
      rating: 4.6,
      duration: "2 часа",
      price: "1000 ₽"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === popularExcursions.length - 1 ? 0 : prev + 1));

  }
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? popularExcursions.length - 1 : prev - 1));
  }
  const goToSlide = (index) => {
    setCurrentSlide(index);
  }
    return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-500 mb-12">
          Популярные экскурсии
        </h2>
        
        {/* Слайдер */}
        <div className="relative">
          {/* Основной слайд */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Изображение */}
              <div className="h-64 lg:h-96">
                <img 
                  src={popularExcursions[currentSlide].image} 
                  alt={popularExcursions[currentSlide].title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Контент */}
              <div className="p-6 lg:p-8 flex flex-col justify-between">
                <div>
                  {/* Рейтинг */}
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-5 h-5 ${i < Math.floor(popularExcursions[currentSlide].rating) ? 'fill-current' : 'text-gray-300'}`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">{popularExcursions[currentSlide].rating}</span>
                  </div>
                  
                  {/* Заголовок и описание */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {popularExcursions[currentSlide].title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {popularExcursions[currentSlide].description}
                  </p>
                  
                  {/* Детали */}
                  <div className="flex space-x-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {popularExcursions[currentSlide].duration}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v1m0 6v1m0-1v1m6-10a2 2 0 11-4 0 2 2 0 014 0zM6 18a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {popularExcursions[currentSlide].price}
                    </div>
                  </div>
                </div>
                
                {/* Кнопка */}
                <Link to={`/excursion/${popularExcursions[currentSlide].id}`} className='btn-secondary w-full lg:w-auto'>
                  Подробнее об экскурсии
                </Link>
              </div>
            </div>
          </div>
          
          {/* Навигационные кнопки */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Индикаторы */}
          <div className="flex justify-center mt-6 space-x-2">
            {popularExcursions.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-primary-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ExcursionsSlider;