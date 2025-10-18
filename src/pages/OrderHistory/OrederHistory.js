import React from 'react';
import { Link } from 'react-router-dom';

const OrderHistory = () => {
  // Моковые данные заказов, сгруппированные по статусам
  const ordersByStatus = {
    booked: [
      {
        id: 1,
        title: "Исторический центр Оренбурга",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        date: "2024-02-20",
        requestDate: "2024-02-10",
        status: "Забронированные",
        price: "1500 ₽",
        participants: 2
      },
      {
        id: 2,
        title: "Оренбургские пуховые платки",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        date: "2024-02-25",
        requestDate: "2024-02-12",
        status: "Забронированные",
        price: "1200 ₽",
        participants: 1
      }
    ],
    visited: [
      {
        id: 3,
        title: "Вечерний Оренбург",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        date: "2024-02-05",
        requestDate: "2024-01-28",
        status: "Посещенные",
        price: "1800 ₽",
        participants: 3,
        rating: 5
      },
      {
        id: 4,
        title: "Музей истории Оренбурга",
        image: "https://images.unsplash.com/photo-1534008897995-27a23e859048?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
        date: "2024-01-20",
        requestDate: "2024-01-15",
        status: "Посещенные",
        price: "1000 ₽",
        participants: 2,
        rating: 4
      }
    ],
    cancelled: [
      {
        id: 5,
        title: "Архитектурные шедевры Оренбурга",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        date: "2024-02-18",
        requestDate: "2024-02-01",
        status: "Отмененные",
        price: "2000 ₽",
        participants: 4,
        cancelReason: "Неблагоприятные погодные условия"
      },
      {
        id: 6,
        title: "Гастрономический Оренбург",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        date: "2024-02-22",
        requestDate: "2024-02-05",
        status: "Отмененные",
        price: "2500 ₽",
        participants: 2,
        cancelReason: "Изменение планов"
      }
    ]
  };

  // Функция для форматирования даты
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('ru-RU', options);
  };

  // Стили для разных статусов
  const statusStyles = {
    booked: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-800',
      badge: 'bg-blue-100 text-blue-800'
    },
    visited: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-800',
      badge: 'bg-green-100 text-green-800'
    },
    cancelled: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-800',
      badge: 'bg-red-100 text-red-800'
    }
  };

  const getStatusStyle = (status) => {
    switch(status) {
      case 'Забронированные': return statusStyles.booked;
      case 'Посещенные': return statusStyles.visited;
      case 'Отмененные': return statusStyles.cancelled;
      default: return statusStyles.booked;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Хлебные крошки */}
      <nav className="bg-white border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-primary-500">Главная</Link>
            <span className="text-gray-400">/</span>
            <Link to="/account" className="text-gray-500 hover:text-primary-500">Личный кабинет</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-800">История заказов</span>
          </div>
        </div>
      </nav>

      <div className="container-custom py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">История заказов</h1>

          {/* Статистика */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">{ordersByStatus.booked.length}</div>
              <div className="text-gray-600">Активные бронирования</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">{ordersByStatus.visited.length}</div>
              <div className="text-gray-600">Посещенные экскурсии</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="text-2xl font-bold text-red-600 mb-2">{ordersByStatus.cancelled.length}</div>
              <div className="text-gray-600">Отмененные заказы</div>
            </div>
          </div>

          {/* Забронированные экскурсии */}
          <section className="mb-12">
            <div className={`rounded-2xl ${statusStyles.booked.bg} ${statusStyles.booked.border} border-2 p-6`}>
              <h2 className={`text-2xl font-bold ${statusStyles.booked.text} mb-6 flex items-center`}>
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Забронированные экскурсии
              </h2>
              <div className="space-y-4">
                {ordersByStatus.booked.map((order) => (
                  <div key={order.id} className="bg-white rounded-xl shadow-sm p-4">
                    <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
                      <img 
                        src={order.image} 
                        alt={order.title}
                        className="w-full md:w-24 h-32 md:h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-800 mb-2">{order.title}</h3>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                              <span>Дата экскурсии: {formatDate(order.date)}</span>
                              <span>Забронировано: {formatDate(order.requestDate)}</span>
                              <span>Участников: {order.participants}</span>
                            </div>
                          </div>
                          <div className="mt-2 md:mt-0 text-right">
                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${statusStyles.booked.badge}`}>
                              {order.status}
                            </span>
                            <div className="text-lg font-bold text-gray-800 mt-2">{order.price}</div>
                          </div>
                        </div>
                        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                          <Link 
                            to={`/excursion/${order.id}`}
                            className="text-primary-500 hover:text-primary-600 font-medium"
                          >
                            Подробнее об экскурсии →
                          </Link>
                          <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                            Отменить бронирование
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Посещенные экскурсии */}
          <section className="mb-12">
            <div className={`rounded-2xl ${statusStyles.visited.bg} ${statusStyles.visited.border} border-2 p-6`}>
              <h2 className={`text-2xl font-bold ${statusStyles.visited.text} mb-6 flex items-center`}>
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Посещенные экскурсии
              </h2>
              <div className="space-y-4">
                {ordersByStatus.visited.map((order) => (
                  <div key={order.id} className="bg-white rounded-xl shadow-sm p-4">
                    <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
                      <img 
                        src={order.image} 
                        alt={order.title}
                        className="w-full md:w-24 h-32 md:h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-800 mb-2">{order.title}</h3>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                              <span>Дата посещения: {formatDate(order.date)}</span>
                              <span>Забронировано: {formatDate(order.requestDate)}</span>
                              <span>Участников: {order.participants}</span>
                            </div>
                            {/* Рейтинг для посещенных экскурсий */}
                            <div className="flex items-center mt-2">
                              <span className="text-sm text-gray-600 mr-2">Ваша оценка:</span>
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <svg 
                                    key={i}
                                    className={`w-4 h-4 ${i < order.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                  </svg>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="mt-2 md:mt-0 text-right">
                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${statusStyles.visited.badge}`}>
                              {order.status}
                            </span>
                            <div className="text-lg font-bold text-gray-800 mt-2">{order.price}</div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Link 
                            to={`/excursion/${order.id}`}
                            className="text-primary-500 hover:text-primary-600 font-medium"
                          >
                            Посмотреть экскурсию →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Отмененные экскурсии */}
          <section className="mb-12">
            <div className={`rounded-2xl ${statusStyles.cancelled.bg} ${statusStyles.cancelled.border} border-2 p-6`}>
              <h2 className={`text-2xl font-bold ${statusStyles.cancelled.text} mb-6 flex items-center`}>
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Отмененные экскурсии
              </h2>
              <div className="space-y-4">
                {ordersByStatus.cancelled.map((order) => (
                  <div key={order.id} className="bg-white rounded-xl shadow-sm p-4">
                    <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
                      <img 
                        src={order.image} 
                        alt={order.title}
                        className="w-full md:w-24 h-32 md:h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-800 mb-2">{order.title}</h3>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                              <span>Планируемая дата: {formatDate(order.date)}</span>
                              <span>Забронировано: {formatDate(order.requestDate)}</span>
                              <span>Участников: {order.participants}</span>
                            </div>
                            {/* Причина отмены */}
                            <div className="mt-2 p-3 bg-red-50 rounded-lg">
                              <p className="text-sm text-red-800">
                                <span className="font-medium">Причина отмены:</span> {order.cancelReason}
                              </p>
                            </div>
                          </div>
                          <div className="mt-2 md:mt-0 text-right">
                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${statusStyles.cancelled.badge}`}>
                              {order.status}
                            </span>
                            <div className="text-lg font-bold text-gray-800 mt-2">{order.price}</div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Link 
                            to={`/excursion/${order.id}`}
                            className="text-primary-500 hover:text-primary-600 font-medium"
                          >
                            Посмотреть экскурсию →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Кнопка возврата */}
          <div className="text-center">
            <Link 
              to="/account"
              className="btn-secondary inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Назад в личный кабинет
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;