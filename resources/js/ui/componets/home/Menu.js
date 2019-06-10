import React from 'react';
// import { ROUTES } from '../../../config/routes';

class Menu extends React.Component {
  render () {
    return (
      <React.Fragment>
        <ul className="list-inline list-menu">
          <li className="list-inline-item">
            <a href="#"> Пользователи </a>
            </li>
          <li className="list-inline-item">
            <a href="#"> Номенклатура </a>
          </li>
          <li className="list-inline-item">
            <a href="#">Клиенты</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Чистоматы</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Заказы</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Отчеты</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Акции</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Лояльность</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Настройки</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Справка</a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Menu;