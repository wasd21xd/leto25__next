import React from 'react';
// Импортируем CSS модуль вместо SCSS
import './header.css';

const Header = () => {
    return (
        // Используем классы из CSS модуля
        <header className='header'>
            <div className='container'>
                <div className='leftColumn'>
                    <a href="#" className='ctaButton'>
                        Забронировать
                    </a>
                    <p className='discountText'>
                        прямо сейчас и получить скидку
                    </p>
                </div>
                <div className='rightColumn'>
                    <h1 className='mainHeading'>
                        Каникулы <br /> в городе <br /> с{' '}
                        <span className='highlight'>Uchi.ru</span>
                    </h1>
                    <h2 className='subHeading'>Полный день:</h2>
                    <ul className='featuresList'>
                        <li className='featureItem'>Программирование</li>
                        <li className='featureItem'>Творческие мастер-классы</li>
                        <li className='featureItem'>Прогулки на свежем воздухе</li>
                        <li className='featureItem'>и другое!</li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
