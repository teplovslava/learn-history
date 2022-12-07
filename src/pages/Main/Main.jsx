import React from 'react'
import Swipper from '../../components/Swipper'
import style from './Main.module.scss'

function Main() {
  return (
    <div className={style.heroMain}>
        <div className={style.heroTop}>
            <h1 className={style.heroTitle}>Because the<span>learning</span> is you.</h1>
            <Swipper/>
        </div>
        <div className={style.heroBottom}>
            <button className={style.startLearning}>Начать обучение</button> 
            <p>История — это наука преодоления анархии, наука обретения целостности сознания.</p>
        </div>
    </div>
  )
}

export default Main