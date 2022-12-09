import React from 'react'
import style from './Tests.module.scss'
import { FiArrowLeft } from "react-icons/fi";
import {arr} from '../../video'
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'


function Tests() {
    const navigate = useNavigate()
  return (
    <main className={style.main}>
    <div className={style.hero}>
        <div className={style.heroTop}>
          <FiArrowLeft onClick={()=>navigate(-1)} className={style.goBackBtn}/>
          <h2>Тесты</h2>
        </div>
        <ul>
          {
            arr.map((video,i)=>(
              <li  key={i}>
                <Link to={`/tests/${video.theme}`} className={style.testTheme}>
                    {video.theme.length>40?`${video.theme.slice(0,40)}...`:video.theme}  
                </Link>
              </li>
            ))
          }
        </ul>
    </div>
    </main>
  )
}

export default Tests