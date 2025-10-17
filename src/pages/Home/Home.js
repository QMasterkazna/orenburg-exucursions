import React from "react";
import './home.css';

const Home = () => {
    return (
        <div className="home">
            <section className="hero"> 
                <div className="container">
                    <h1>Добро пожаловать в Оренбургские экскурсии</h1>
                    <p>Исследуйте красоту и историю Оренбурга с нами!</p>
                    <button className="cta-button">Наши экскурсии</button>
                </div>
            </section>
             <section className="about-preview">
                <div className="container">
                <h2>Почему выбирают нас?</h2>
                <div className="features">
                    <div className="feature">
                    <h3>Профессиональные гиды</h3>
                    <p>Опытные экскурсоводы с глубокими знаниями истории города</p>
                    </div>
                    <div className="feature">
                    <h3>Удобное бронирование</h3>
                    <p>Процесс бронирования займет не более 2 минут</p>
                    </div>
                    <div className="feature">
                    <h3>Доступные цены</h3>
                    <p>Экскурсии для любого бюджета</p>
                    </div>
                </div>
                </div>
            </section>
        </div>

    )};

export default Home;