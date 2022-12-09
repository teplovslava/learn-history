import React, { useRef, useState } from 'react'
import style from './VideoLessons.module.scss'
import {arr} from '../../video'
import { FiArrowLeft } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

function VideoLessons() {
  const navigate = useNavigate()
  const [active,setActive] = useState('')
  const [prevActive,setPrevActive] = useState('')
  const VideoRef = useRef([])

  const openVideo = (i) => {
    if(active===i){
      setActive('') 
    }else{
      setActive(i)
      setPrevActive(i)
    }
    VideoRef.current[i].pause()
    VideoRef.current[prevActive]?.pause()
  }


  return (
    <main className={style.main}>
    <div className={style.hero}>
        <div className={style.heroTop}>
          <FiArrowLeft onClick={()=>navigate(-1)} className={style.goBackBtn}/>
          <h2 className={style.videoLessonsTitle}>Видеоуроки</h2>
        </div>
        <ul>
          {
            arr.map((video,i)=>(
              <li  key={i}>
                <h4 
                  className={active===i
                              ?style.openThemeTitle
                              :style.themeTitle} 
                  onClick={()=>openVideo(i)}>
                    {video.theme.length>40?`${video.theme.slice(0,40)}...`:video.theme}  
                    <FiChevronDown 
                    className={active===i
                                ?style.openedThemeSvg
                                :style.closedThemeSvg}/>
                </h4>
                <video ref={(ref) => VideoRef.current.push(ref)} className={active===i?style.openedTheme:style.closedTheme}
                  controlsList="nodownload" 
                  controls="controls" 
                  src={video.url}>
                  
                </video>
              </li>
            ))
          }
        </ul>
    </div>
    </main>
  )
}

export default VideoLessons