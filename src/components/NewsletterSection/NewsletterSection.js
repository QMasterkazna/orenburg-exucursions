import React, { useState } from 'react';

const NewsletterSection = () => {

  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!consent) {
      alert('Пожалуйста, дайте согласие на обработку персональных данных.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      console.log("Подписка на рассылку:", email);
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
      setConsent(false); // Очистка согласия
    }, 1000);
  };

  if (isSubscribed) {
     return (
      <section className="py-16 bg-primary-500 text-white">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <svg className="w-16 h-16 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Спасибо за подписку!
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Теперь вы будете первыми узнавать о новых экскурсиях и специальных предложениях.
            </p>
            <button 
              onClick={() => setIsSubscribed(false)}
              className="btn-primary bg-white text-primary-500 hover:bg-gray-100"
            >
              Подписаться еще раз
            </button>
          </div>
        </div>
      </section>
    );
  }
   return (
    <section className="py-16 bg-primary-500 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Будьте в курсе новостей
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Подпишитесь на рассылку и получайте первыми информацию о новых экскурсиях, скидках и специальных предложениях.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ваш email"
                  className="w-full px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-white focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 font-semibold rounded-lg transition-colors disabled:opacity-50"
              >
                {isLoading ? 'Подписка...' : 'Подписаться'}
              </button>
            </div>

            <div className="flex items-center justify-center">
              <input
                type="checkbox"
                id="consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                required
                className="w-4 h-4 text-primary-500 rounded focus:ring-primary-500 focus:ring-2"
              />
              <label htmlFor="consent" className="ml-2 text-sm opacity-90 cursor-pointer">
                Соглашаюсь на обработку персональных данных
              </label>
            </div>
          </form>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Первыми узнавайте</h3>
                <p className="text-sm opacity-90">О новых экскурсиях и маршрутах</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v1m0 6v1m0-1v1m6-10a2 2 0 11-4 0 2 2 0 014 0zM6 18a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Специальные предложения</h3>
                <p className="text-sm opacity-90">Эксклюзивные скидки для подписчиков</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Без спама</h3>
                <p className="text-sm opacity-90">Только полезная информация, не чаще 1 раза в неделю</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;