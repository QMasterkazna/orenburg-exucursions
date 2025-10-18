import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ConfirmBooking = () => {
  const { id } = useParams();
  
  const [bookingData, setBookingData] = useState({
    excursionDate: '',
    participants: 1,
    comments: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Моковые данные экскурсии и пользователя
  const excursion = {
    id: 1,
    title: "Исторический центр Оренбурга",
    price: "1500 ₽",
    duration: "2 часа",
    availableDates: [
      "2024-02-20",
      "2024-02-22",
      "2024-02-25",
      "2024-02-28",
      "2024-03-01"
    ]
  };

  const user = {
    firstName: "Иван",
    lastName: "Иванов",
    email: "ivan@example.com",
    phone: "+7 (900) 123-45-67"
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!bookingData.excursionDate) {
      alert('Пожалуйста, выберите дату экскурсии');
      return;
    }

    setIsSubmitting(true);

    // Имитация отправки заявки
    setTimeout(() => {
      console.log('Данные бронирования:', {
        excursion,
        user,
        bookingData
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  // Функция для форматирования даты
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('ru-RU', options);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Хлебные крошки */}
        <nav className="bg-white border-b border-gray-200">
          <div className="container-custom py-4">
            <div className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-gray-500 hover:text-primary-500">Главная</Link>
              <span className="text-gray-400">/</span>
              <Link to="/excursions" className="text-gray-500 hover:text-primary-500">Экскурсии</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-800">Бронирование завершено</span>
            </div>
          </div>
        </nav>

        <div className="container-custom py-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <svg className="w-16 h-16 text-green-500 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Бронирование подтверждено!</h1>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <h2 className="text-xl font-semibold text-green-800 mb-2">{excursion.title}</h2>
                <p className="text-green-700">
                  Дата: <strong>{formatDate(bookingData.excursionDate)}</strong>
                </p>
                <p className="text-green-700">
                  Участников: <strong>{bookingData.participants}</strong>
                </p>
                <p className="text-green-700">
                  Стоимость: <strong>{excursion.price} × {bookingData.participants} = {parseInt(excursion.price) * bookingData.participants} ₽</strong>
                </p>
              </div>

              <p className="text-gray-600 mb-6">
                Подтверждение бронирования отправлено на вашу электронную почту <strong>{user.email}</strong>. 
                Наш менеджер свяжется с вами в течение 2 часов для уточнения деталей.
              </p>

              <div className="space-y-4">
                <Link to="/history" className="btn-secondary w-full block">
                  Посмотреть в истории заказов
                </Link>
                <Link to="/" className="btn-primary w-full block">
                  На главную
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Хлебные крошки */}
      <nav className="bg-white border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-primary-500">Главная</Link>
            <span className="text-gray-400">/</span>
            <Link to="/excursions" className="text-gray-500 hover:text-primary-500">Экскурсии</Link>
            <span className="text-gray-400">/</span>
            <Link to={`/excursion/${id}`} className="text-gray-500 hover:text-primary-500">Экскурсия</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-800">Бронирование</span>
          </div>
        </div>
      </nav>

      <div className="container-custom py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Подтверждение бронирования</h1>
          <p className="text-gray-600 mb-8">Заполните данные для завершения бронирования</p>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Информация об экскурсии */}
            <div className="bg-primary-500 text-white p-6">
              <h2 className="text-2xl font-bold mb-2">{excursion.title}</h2>
              <div className="flex items-center space-x-4 text-primary-100">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {excursion.duration}
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v1m0 6v1m0-1v1m6-10a2 2 0 11-4 0 2 2 0 014 0zM6 18a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {excursion.price} с человека
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-6">
                {/* Информация о клиенте */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Имя</label>
                    <div className="font-medium text-gray-800">{user.firstName}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Фамилия</label>
                    <div className="font-medium text-gray-800">{user.lastName}</div>
                  </div>
                </div>

                {/* Дата бронирования */}
                <div>
                  <label htmlFor="excursionDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Дата экскурсии *
                  </label>
                  <select
                    id="excursionDate"
                    name="excursionDate"
                    value={bookingData.excursionDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  >
                    <option value="">Выберите дату</option>
                    {excursion.availableDates.map((date) => (
                      <option key={date} value={date}>
                        {formatDate(date)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Количество участников */}
                <div>
                  <label htmlFor="participants" className="block text-sm font-medium text-gray-700 mb-2">
                    Количество участников *
                  </label>
                  <select
                    id="participants"
                    name="participants"
                    value={bookingData.participants}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'человек' : num < 5 ? 'человека' : 'человек'}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Комментарии */}
                <div>
                  <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-2">
                    Пожелания и комментарии
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    value={bookingData.comments}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Например: особые пожелания, диетические ограничения, мобильный телефон для связи..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  />
                </div>

                {/* Итоговая стоимость */}
                <div className="bg-primary-50 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Стоимость:</span>
                    <span className="text-xl font-bold text-primary-500">
                      {excursion.price} × {bookingData.participants} = {parseInt(excursion.price) * bookingData.participants} ₽
                    </span>
                  </div>
                </div>

                {/* Кнопка отправки */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-secondary py-3 flex items-center justify-center disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Отправка заявки...
                    </>
                  ) : (
                    'Подтвердить бронирование'
                  )}
                </button>
              </div>
            </form>

            {/* Дополнительная информация */}
            <div className="border-t border-gray-200 p-6 bg-gray-50">
              <h3 className="font-semibold text-gray-800 mb-3">Важная информация</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Бесплатная отмена за 24 часа до начала экскурсии
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Подтверждение бронирования придет на email и SMS
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Наш менеджер свяжется для уточнения деталей
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBooking;