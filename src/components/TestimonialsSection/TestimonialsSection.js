import React, { useState } from 'react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Анна Петрова",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
      excursion: "Исторический центр Оренбурга",
      text: "Очень понравилась экскурсия! Гид Мария - настоящий профессионал. Узнали много интересного о истории города. Обязательно вернемся еще!",
      date: "15 января 2024",
      rating: 5
    },
    {
      id: 2,
      name: "Иван Сидоров",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
      excursion: "Оренбургские пуховые платки",
      text: "Никогда не думал, что музей пухового платка может быть настолько увлекательным. Отличная организация, интересный рассказ. Рекомендую!",
      date: "10 января 2024",
      rating: 5
    },
    {
      id: 3,
      name: "Елена Козлова",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      excursion: "Вечерний Оренбург",
      text: "Прекрасная вечерняя экскурсия! Город выглядит волшебно с подсветкой. Гид Алексей сумел создать уютную атмосферу. Спасибо!",
      date: "5 января 2024",
      rating: 4
    },
    {
      id: 4,
      name: "Дмитрий Иванов",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
      excursion: "Музей истории Оренбурга",
      text: "Были с детьми, всем очень понравилось. Экскурсовод смогла заинтересовать и взрослых, и детей. Отличный музей!",
      date: "28 декабря 2023",
      rating: 5
    },
    {
      id: 5,
      name: "Ольга Семенова",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80",
      excursion: "Гастрономический Оренбург",
      text: "Вкусно, интересно, познавательно! Узнали много о местной кухне и попробовали уникальные блюда. Обязательно повторим!",
      date: "20 декабря 2023",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-xl text-gray-600">
            Что говорят туристы о наших экскурсиях
          </p>
        </div>

        {/* Основной контейнер для отзывов */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative border border-gray-100">
            {/* Цитата */}
            <div className="absolute top-6 left-6 text-primary-100 text-6xl">"</div>
            
            {/* Отзыв */}
            <div className="relative z-10">
              {/* Рейтинг */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i}
                    className={`w-6 h-6 ${i < testimonials[currentTestimonial].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>

              {/* Текст отзыва */}
              <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Информация об авторе */}
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <img 
                    src={testimonials[currentTestimonial].avatar} 
                    alt={testimonials[currentTestimonial].name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-800">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonials[currentTestimonial].date}
                    </div>
                  </div>
                </div>
                
                {/* Ссылка на экскурсию */}
                <a 
                  href={`/excursion/${testimonials[currentTestimonial].id}`}
                  className="text-primary-500 hover:text-primary-600 font-medium transition-colors"
                >
                  {testimonials[currentTestimonial].excursion} →
                </a>
              </div>
            </div>

            {/* Навигационные кнопки */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Индикаторы */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-primary-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Дополнительные мини-отзывы */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.date}</div>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-sm line-clamp-3">
                "{testimonial.text}"
              </p>
              <a 
                href={`/excursion/${testimonial.id}`}
                className="text-primary-500 hover:text-primary-600 text-sm font-medium mt-3 inline-block"
              >
                {testimonial.excursion}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;