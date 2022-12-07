import React from 'react'
import { Autoplay} from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import style from './Swipper.module.scss'


function Swipper() {
  return (
    <Swiper modules={[Autoplay]} 
    loop={true}
    speed={1000}
    autoplay={{
        delay: 5000,
        
        disableOnInteraction: false
    }}
    className={style.swiper}
    spaceBetween={50}
    slidesPerView={1}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide>
        <div className={style.slide1}>
            <p className={style.slideInfo}>Куликовская битва</p>
            <button className={style.slideBtnMore}>Узнать больше</button>
        </div>
    </SwiperSlide>
    <SwiperSlide>        
        <div className={style.slide2}>
            <p className={style.slideInfo}>Северная война</p>
            <button className={style.slideBtnMore}>Узнать больше</button>
        </div></SwiperSlide>
    <SwiperSlide>
        <div className={style.slide3}>
            <p className={style.slideInfo}>Отмена крепостного права</p>
            <button className={style.slideBtnMore}>Узнать больше</button>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className={style.slide4}>
            <p className={style.slideInfo}>Вступление России в первую мировую войну</p>
            <button className={style.slideBtnMore}>Узнать больше</button>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className={style.slide5}>
            <p className={style.slideInfo}>Великая отечественная война</p>
            <button className={style.slideBtnMore}>Узнать больше</button>
        </div>
    </SwiperSlide>
  </Swiper>
  )
}

export default Swipper