import React, { useState} from 'react';

const AuthForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            console.log("Авторизация", { email, password });
            setIsLoading(false);
        }, 1000);
    }
      return (
    <section className="py-16 bg-gradient-to-r from-primary-50 to-primary-100">
      <div className="container-custom">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Заголовок */}
          <div className="bg-primary-500 text-white py-6 px-8">
            <h2 className="text-2xl font-bold text-center">Вход в личный кабинет</h2>
            <p className="text-primary-100 text-center mt-2">
              Войдите, чтобы управлять бронированиями
            </p>
          </div>
          
          {/* Форма */}
          <form onSubmit={handleSubmit} className="p-8">
            <div className="space-y-6">
              {/* Поле email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Электронная почта
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  required
                />
              </div>
              
              {/* Поле пароля */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Пароль
                  </label>
                  <a 
                    href="/forgot-password" 
                    className="text-sm text-primary-500 hover:text-primary-600 transition-colors"
                  >
                    Забыли пароль?
                  </a>
                </div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Введите ваш пароль"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  required
                />
              </div>
              
              {/* Кнопка входа */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-secondary py-3 flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Вход...
                  </>
                ) : (
                  'Войти в систему'
                )}
              </button>
            </div>
            
            {/* Разделитель */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-center text-gray-600">
                Ещё нет аккаунта?{' '}
                <a 
                  href="/register" 
                  className="text-primary-500 hover:text-primary-600 font-medium transition-colors"
                >
                  Зарегистрируйтесь
                </a>
              </p>
            </div>
          </form>
        </div>

        {/* Дополнительная информация */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Преимущества личного кабинета
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="font-medium text-gray-800">Безопасное бронирование</h4>
                <p className="text-sm text-gray-600 mt-1">Все ваши данные защищены</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="font-medium text-gray-800">История заказов</h4>
                <p className="text-sm text-gray-600 mt-1">Все ваши экскурсии в одном месте</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="font-medium text-gray-800">Быстрый доступ</h4>
                <p className="text-sm text-gray-600 mt-1">Мгновенное бронирование в 2 клика</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

};

export default AuthForm;