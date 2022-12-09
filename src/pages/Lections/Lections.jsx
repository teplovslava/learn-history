import React,   {useState} from 'react'
import { FiArrowLeft } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import style from './Lections.module.scss'
import {arr} from '../../lections'
import { FiArrowDown } from "react-icons/fi";

function Lections() {
    const navigate = useNavigate()
    const [active,setActive] = useState('')
  
    const openVideo = (i) => {
      if(active===i){
        setActive('') 
      }else{
        setActive(i)
      }
    }

  return (
<main className={style.main}>
    <div className={style.hero}>
        <div className={style.heroTop}>
          <FiArrowLeft 
            onClick={()=>navigate(-1)} 
            className={style.goBackBtn}/>
          <h2>Лекции</h2>
        </div>
        <ul className={style.list}>
            {
                arr.map((files,i)=>(
                <li className={style.listItem}  key={i}>
                    <h4 
                    className={active===i?style.openThemeTitle:style.themeTitle} 
                    onClick={()=>openVideo(i)}>
                        {files.theme.length>40?`${files.theme.slice(0,40)}...`:files.theme} 
                        <FiChevronDown 
                        className={active===i?style.openedThemeSvg:style.closedThemeSvg}/>
                    </h4>
                    <a 
                        className={active===i?style.openedTheme:style.closedTheme} 
                        href={files.file} download>
                            {files.theme.length>20?`${files.theme.slice(0,20)}...`:files.theme} 
                            <FiArrowDown 
                            className={style.downloadSvg}/>
                    </a>
                </li>
                ))
            }
        </ul>
    </div>
    </main>
  )
}

export default Lections