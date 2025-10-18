import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
        phone: "",
        consent: false,
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    }
    
    const validateForm = () => {
        const newErrors = {};
        // Email validation
        if (!formData.email) {
            newErrors.email = 'Email обязателен для заполнения';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Некорректный формат email';
        }

        // First name validation
        if (!formData.firstName) {
            newErrors.firstName = 'Имя обязательно для заполнения';
        } else if (formData.firstName.length < 2) {
            newErrors.firstName = 'Имя должно содержать минимум 2 символа';
        }

        // Last name validation
        if (!formData.lastName) {
            newErrors.lastName = 'Фамилия обязательна для заполнения';
        } else if (formData.lastName.length < 2) {
            newErrors.lastName = 'Фамилия должна содержать минимум 2 символа';
        }

        // Phone validation
        if (!formData.phone) {
            newErrors.phone = 'Телефон обязателен для заполнения';
        } else if (!/^\+?[78][-]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/.test(formData.phone)) {
            newErrors.phone = 'Некорректный формат телефона';
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = 'Пароль обязателен для заполнения';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Пароль должен содержать минимум 6 символов';
        }

        // Confirm password validation
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Подтверждение пароля обязательно';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Пароли не совпадают';
        }

        // Consent validation
        if (!formData.consent) {
            newErrors.consent = 'Необходимо согласие на обработку персональных данных';
        }
        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);

        // Имитация запроса на регистрацию
        setTimeout(() => {
            console.log("Регистрация пользователя:", formData);
            setIsSubmitting(false);
            setIsRegistered(true);
        }, 1500);
    }

    // Показываем страницу успешной регистрации
    if (isRegistered) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
                    <svg className="w-16 h-16 text-green-500 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Регистрация успешна!</h2>
                    <p className="text-gray-600 mb-6">
                        На вашу почту <span className="font-semibold">{formData.email}</span> отправлено письмо с подтверждением.
                    </p>
                    <div className="space-y-4">
                        <Link to="/" className="btn-secondary w-full block">
                            На главную
                        </Link>
                        <Link to="/account" className="btn-primary w-full block">
                            В личный кабинет
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // Основная форма регистрации
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Хлебные крошки */}
            <nav className="bg-white border-b border-gray-200">
                <div className="container-custom py-4">
                    <div className="flex items-center space-x-2 text-sm">
                        <Link to="/" className="text-gray-500 hover:text-primary-500">Главная</Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-800">Регистрация</span>
                    </div>
                </div>
            </nav>

            <div className="container-custom py-8">
                <div className="max-w-md mx-auto">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        {/* Заголовок */}
                        <div className="bg-primary-500 text-white py-6 px-8">
                            <h1 className="text-2xl font-bold text-center">Регистрация</h1>
                            <p className="text-primary-100 text-center mt-2">
                                Создайте аккаунт для бронирования экскурсий
                            </p>
                        </div>

                        {/* Форма */}
                        <form onSubmit={handleSubmit} className="p-8">
                            <div className="space-y-6">
                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Электронная почта *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                                            errors.email ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="your@email.com"
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                                    )}
                                </div>

                                {/* Имя и Фамилия */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Имя *
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                                                errors.firstName ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                            placeholder="Иван"
                                        />
                                        {errors.firstName && (
                                            <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Фамилия *
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                                                errors.lastName ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                            placeholder="Иванов"
                                        />
                                        {errors.lastName && (
                                            <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Телефон */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Телефон *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                                            errors.phone ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="+7 (900) 123-45-67"
                                    />
                                    {errors.phone && (
                                        <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                                    )}
                                </div>

                                {/* Пароль */}
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                        Пароль *
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                                            errors.password ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="Минимум 6 символов"
                                    />
                                    {errors.password && (
                                        <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                                    )}
                                </div>

                                {/* Подтверждение пароля */}
                                <div>
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                                        Подтверждение пароля *
                                    </label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                                            errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="Повторите пароль"
                                    />
                                    {errors.confirmPassword && (
                                        <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
                                    )}
                                </div>

                                {/* Согласие */}
                                <div>
                                    <div className="flex items-start space-x-3">
                                        <input
                                            type="checkbox"
                                            id="consent"
                                            name="consent"
                                            checked={formData.consent}
                                            onChange={handleChange}
                                            className={`mt-1 w-4 h-4 text-primary-500 rounded focus:ring-primary-500 focus:ring-2 ${
                                                errors.consent ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        />
                                        <label htmlFor="consent" className="text-sm text-gray-700">
                                            Я соглашаюсь на обработку моих персональных данных в соответствии с {' '}
                                            <a href="/privacy" className="text-primary-500 hover:text-primary-600 underline">
                                                политикой конфиденциальности
                                            </a>
                                            *
                                        </label>
                                    </div>
                                    {errors.consent && (
                                        <p className="mt-1 text-sm text-red-600">{errors.consent}</p>
                                    )}
                                </div>

                                {/* Кнопка регистрации */}
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
                                            Регистрация...
                                        </>
                                    ) : (
                                        'Зарегистрироваться'
                                    )}
                                </button>
                            </div>

                            {/* Ссылка на вход */}
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <p className="text-center text-gray-600">
                                    Уже есть аккаунт?{' '}
                                    <Link to="/auth" className="text-primary-500 hover:text-primary-600 font-medium">
                                        Войти
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>

                    {/* Дополнительная информация */}
                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-600">
                            После регистрации вы сможете:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            <div className="text-center">
                                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <p className="text-xs text-gray-600">Бронировать экскурсии</p>
                            </div>
                            <div className="text-center">
                                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                </div>
                                <p className="text-xs text-gray-600">Управлять заказами</p>
                            </div>
                            <div className="text-center">
                                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <p className="text-xs text-gray-600">Получать скидки</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;