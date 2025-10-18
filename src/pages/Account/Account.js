import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Account = () => {
  const [userData, setUserData] = useState({
    firstName: 'Иван',
    lastName: 'Иванов',
    phone: '+7 (900) 123-45-67',
    email: 'ivan@example.com',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    registrationDate: '2024-01-15'
  });

  const [isEditing, setIsEditing] = useState({});
  const [tempData, setTempData] = useState({});

  const handleEdit = (field) => {
    setIsEditing(prev => ({ ...prev, [field]: true }));
    setTempData(prev => ({ ...prev, [field]: userData[field] }));
  };

  const handleSave = (field) => {
    setUserData(prev => ({ ...prev, [field]: tempData[field] }));
    setIsEditing(prev => ({ ...prev, [field]: false }));
  };

  const handleCancel = (field) => {
    setIsEditing(prev => ({ ...prev, [field]: false }));
  };

  const handleChange = (field, value) => {
    setTempData(prev => ({ ...prev, [field]: value }));
  };

  // Расчет количества дней с момента регистрации
  const calculateDaysSinceRegistration = () => {
    const regDate = new Date(userData.registrationDate);
    const today = new Date();
    const diffTime = Math.abs(today - regDate);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const daysSinceRegistration = calculateDaysSinceRegistration();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Хлебные крошки */}
      <nav className="bg-white border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-primary-500">Главная</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-800">Личный кабинет</span>
          </div>
        </div>
      </nav>

      <div className="container-custom py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Личный кабинет</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Левая колонка - информация о пользователе */}
            <div className="lg:col-span-2 space-y-6">
              {/* Блок с аватаром */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <img 
                      src={userData.avatar} 
                      alt="Аватар" 
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <button 
                      onClick={() => handleEdit('avatar')}
                      className="absolute bottom-0 right-0 bg-primary-500 text-white p-1 rounded-full hover:bg-primary-600 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </button>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      {userData.firstName} {userData.lastName}
                    </h2>
                    <p className="text-gray-600">Участник программы</p>
                  </div>
                </div>
              </div>

              {/* Блок с основной информацией */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Основная информация</h3>
                <div className="space-y-4">
                  {/* Имя */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Имя</p>
                      {isEditing.firstName ? (
                        <input
                          type="text"
                          value={tempData.firstName || userData.firstName}
                          onChange={(e) => handleChange('firstName', e.target.value)}
                          className="mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      ) : (
                        <p className="font-medium">{userData.firstName}</p>
                      )}
                    </div>
                    {isEditing.firstName ? (
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => handleSave('firstName')}
                          className="text-green-600 hover:text-green-700"
                        >
                          Сохранить
                        </button>
                        <button 
                          onClick={() => handleCancel('firstName')}
                          className="text-gray-600 hover:text-gray-700"
                        >
                          Отмена
                        </button>
                      </div>
                    ) : (
                      <button 
                        onClick={() => handleEdit('firstName')}
                        className="text-primary-500 hover:text-primary-600"
                      >
                        Изменить
                      </button>
                    )}
                  </div>

                  {/* Фамилия */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Фамилия</p>
                      {isEditing.lastName ? (
                        <input
                          type="text"
                          value={tempData.lastName || userData.lastName}
                          onChange={(e) => handleChange('lastName', e.target.value)}
                          className="mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      ) : (
                        <p className="font-medium">{userData.lastName}</p>
                      )}
                    </div>
                    {isEditing.lastName ? (
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => handleSave('lastName')}
                          className="text-green-600 hover:text-green-700"
                        >
                          Сохранить
                        </button>
                        <button 
                          onClick={() => handleCancel('lastName')}
                          className="text-gray-600 hover:text-gray-700"
                        >
                          Отмена
                        </button>
                      </div>
                    ) : (
                      <button 
                        onClick={() => handleEdit('lastName')}
                        className="text-primary-500 hover:text-primary-600"
                      >
                        Изменить
                      </button>
                    )}
                  </div>

                  {/* Телефон */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Телефон</p>
                      {isEditing.phone ? (
                        <input
                          type="tel"
                          value={tempData.phone || userData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          className="mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      ) : (
                        <p className="font-medium">{userData.phone}</p>
                      )}
                    </div>
                    {isEditing.phone ? (
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => handleSave('phone')}
                          className="text-green-600 hover:text-green-700"
                        >
                          Сохранить
                        </button>
                        <button 
                          onClick={() => handleCancel('phone')}
                          className="text-gray-600 hover:text-gray-700"
                        >
                          Отмена
                        </button>
                      </div>
                    ) : (
                      <button 
                        onClick={() => handleEdit('phone')}
                        className="text-primary-500 hover:text-primary-600"
                      >
                        Изменить
                      </button>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      {isEditing.email ? (
                        <input
                          type="email"
                          value={tempData.email || userData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          className="mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      ) : (
                        <p className="font-medium">{userData.email}</p>
                      )}
                    </div>
                    {isEditing.email ? (
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => handleSave('email')}
                          className="text-green-600 hover:text-green-700"
                        >
                          Сохранить
                        </button>
                        <button 
                          onClick={() => handleCancel('email')}
                          className="text-gray-600 hover:text-gray-700"
                        >
                          Отмена
                        </button>
                      </div>
                    ) : (
                      <button 
                        onClick={() => handleEdit('email')}
                        className="text-primary-500 hover:text-primary-600"
                      >
                        Изменить
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Правая колонка - статистика и действия */}
            <div className="space-y-6">
              {/* Статистика */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Статистика</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Дата регистрации</p>
                    <p className="font-medium">{new Date(userData.registrationDate).toLocaleDateString('ru-RU')}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">На сайте</p>
                    <p className="font-medium">{daysSinceRegistration} дней</p>
                  </div>
                </div>
              </div>

              {/* Быстрые действия */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Быстрые действия</h3>
                <div className="space-y-3">
                 <Link 
                        to="/history" 
                        className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-primary-50 rounded-lg transition-colors group"
                        >
                        <span className="text-gray-700 group-hover:text-primary-600">История заказов</span>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                </Link>
                  
                  <button className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-red-50 rounded-lg transition-colors group">
                    <span className="text-gray-700 group-hover:text-red-600">Выйти из профиля</span>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Ближайшие экскурсии */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Ближайшие экскурсии</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-primary-50 rounded-lg">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Исторический центр</p>
                      <p className="text-sm text-gray-600">Завтра, 10:00</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <Link to="/history" className="text-primary-500 hover:text-primary-600 font-medium">
                      Все экскурсии →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;