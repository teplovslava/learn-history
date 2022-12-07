import React from 'react'
import { IoSettingsOutline } from 'react-icons/io5'
import Main from '../Main/Main'
import Questions from '../Questions/Questions'
import './MainPage.css'
import {Link} from 'react-router-dom'

function MainPage() {
  return (
    <>
        <main className="main">
         <div className="hero">
          <header className="header">
            <div className="logo">
              <img width={50} src="./image/brain-svgrepo-com.svg"/>
              <p>M</p>
            </div>
            <nav>
              <ul className="nav-list">
                <li><Link to='/videolessons'>Видеоуроки</Link></li>
                <li><Link to='/lections'>Лекции</Link></li>
                <li><Link to='/tests'>Тесты</Link></li>
                <li><Link to='/contacts'>Контакты</Link></li>
                <li className="login"><Link to='/login'>Войти</Link></li>
                <li className="settings"><Link to='/settings'><IoSettingsOutline></IoSettingsOutline ></Link></li>
              </ul>
            </nav>
        </header>
        <Main/>
        </div>
        <Questions/>
      </main>
    </>
  )
}

export default MainPage