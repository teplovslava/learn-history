import React, { useState } from 'react'
import {arr} from '../../questions'
import style from './Question.module.scss'

import { FiChevronDown } from "react-icons/fi";

function Questions() {
    const [active,setActive] = useState()

    const openQoestion = (i) =>{
        if(active===i){
            setActive('')
        }else{
            setActive(i)
        }
    }
  return (
    <div className={style.main}>
        <h2 className={style.questionTitle}>Часто задаваемые вопросы</h2>
        <ul className={style.questionsList}>
            {arr.map((item,i)=>(
                <li className={active===i?style.activeQuestion:style.unactiveQuertion} onClick={()=>openQoestion(i)}>
                    <div className={style.questionContent}>
                        <p className={style.questionQ} >{item.question}</p>
                        <FiChevronDown className={style.imgButton}/>
                    </div>
                    <p className={style.questionAnswer}>{item.answer}</p>

                </li>
            ))}
        </ul>
    </div>
  )
}

export default Questions