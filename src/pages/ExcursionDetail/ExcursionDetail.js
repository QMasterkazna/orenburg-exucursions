import React from 'react';
import { Link } from 'react-router-dom';

const ExcursionDetail = () => {
//   const { id } = useParams(); // Будет использоваться позже для загрузки данных

  // Моковые данные экскурсии
  const excursion = {
    id: 1,
    title: "Исторический центр Оренбурга",
    description: "Пешеходная экскурсия по самым значимым местам исторического центра города",
    longDescription: `
      <p>Эта экскурсия идеально подходит для первого знакомства с городом. Мы начнем нашу прогулку с самого сердца Оренбурга - с его исторического центра.</p>
      <p>Вы увидите:</p>
      <ul>
        <li>Памятники архитектуры XVIII-XIX веков</li>
        <li>Места, связанные с известными историческими личностями</li>
        <li>Уникальные здания, сохранившие дух прошлого</li>
        <li>Современные арт-объекты, гармонично вписавшиеся в историческую застройку</li>
      </ul>
      <p>Наш профессиональный гид расскажет вам не только общеизвестные факты, но и поделится уникальными историями, которые вы не найдете в путеводителях.</p>
    `,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    duration: "2 часа",
    price: "1500 ₽",
    rating: 4.9,
    bookings: 127,
    category: "Пешеходная",
    dates: [
      "2024-02-15",
      "2024-02-17", 
      "2024-02-20",
      "2024-02-22",
      "2024-02-25",
      "2024-02-28"
    ],
    meetingPoint: "Площадь Ленина, у памятника",
    included: [
      "Услуги профессионального гида",
      "Пешеходная экскурсия по центру", 
      "Информационные материалы"
    ],
    notIncluded: [
      "Личные расходы",
      "Питание",
      "Сувениры"
    ]
  };

  // Функция для форматирования даты
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('ru-RU', options);
  };

  return (
    <div className="min-h-screen bg-gray-50 print:bg-white">
      {/* Хлебные крошки */}
      <nav className="bg-white border-b border-gray-200 print:hidden">
        <div className="container-custom py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-primary-500">Главная</Link>
            <span className="text-gray-400">/</span>
            <Link to="/excursions" className="text-gray-500 hover:text-primary-500">Экскурсии</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-800">{excursion.title}</span>
          </div>
        </div>
      </nav>

      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Левая колонка - изображение и даты */}
          <div>
            {/* Изображение */}
            <div className="rounded-2xl overflow-hidden shadow-lg mb-6 print:grayscale print:shadow-none">
              <img 
                src={excursion.image} 
                alt={excursion.title}
                className="w-full h-96 object-cover print:h-64"
              />
            </div>

            {/* Даты проведения */}
            <div className="bg-white rounded-2xl shadow-lg p-6 print:shadow-none">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 print:text-black">Ближайшие даты</h3>
              <div className="space-y-3">
                {excursion.dates.map((date, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg print:bg-gray-100">
                    <span className="text-gray-700 print:text-black">{formatDate(date)}</span>
                    <span className="text-primary-500 font-semibold print:text-black">{excursion.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Правая колонка - информация */}
          <div>
            {/* Заголовок и рейтинг */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4 print:hidden">
                <span className="px-3 py-1 bg-primary-100 text-primary-500 rounded-full text-sm font-medium">
                  {excursion.category}
                </span>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span className="text-gray-700">{excursion.rating} ({excursion.bookings} бронирований)</span>
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 print:text-2xl print:text-black">
                {excursion.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6 print:text-black">{excursion.description}</p>
            </div>

            {/* Детали экскурсии */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 print:shadow-none">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 print:text-black">Детали экскурсии</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary-500 mr-3 print:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div className="text-sm text-gray-500 print:text-black">Продолжительность</div>
                    <div className="font-semibold print:text-black">{excursion.duration}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary-500 mr-3 print:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <div className="text-sm text-gray-500 print:text-black">Место встречи</div>
                    <div className="font-semibold print:text-black">{excursion.meetingPoint}</div>
                  </div>
                </div>
              </div>

              {/* Что включено */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 print:text-black">Что включено</h4>
                  <ul className="space-y-2">
                    {excursion.included.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2 print:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 print:text-black">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 print:text-black">Что не включено</h4>
                  <ul className="space-y-2">
                    {excursion.notIncluded.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-4 h-4 text-gray-400 mr-2 print:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="text-gray-600 print:text-black">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Подробное описание */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 print:shadow-none">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 print:text-black">Подробное описание</h3>
              <div 
                className="prose prose-lg max-w-none text-gray-600 print:text-black"
                dangerouslySetInnerHTML={{ __html: excursion.longDescription }}
              />
            </div>

            {/* Кнопка бронирования */}
            <div className="sticky bottom-6 print:hidden">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-2xl font-bold text-primary-500">{excursion.price}</div>
                    <div className="text-sm text-gray-500">с человека</div>
                  </div>
                  <Link 
                    to={`/confirm/${excursion.id}`}
                    className="btn-secondary px-8 py-3 text-lg font-semibold"
                  >
                    Забронировать
                  </Link>
                </div>
                <p className="text-sm text-gray-500 text-center">
                  Бесплатная отмена за 24 часа до начала
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcursionDetail;