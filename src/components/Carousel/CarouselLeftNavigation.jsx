import React, { useEffect } from 'react'
import { useSwiper } from 'swiper/react'
import { useState } from 'react';
import { ReactComponent as LeftArrow } from '../../assets/let_arrow.svg';
import styles from "./Carousel.module.css"

const CarouselLeftNavigation = () => {
    const swiper =useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning)
  
    useEffect(()=> {
        swiper.on("slideChange", function(){
            setIsBeginning(swiper.isBeginning);
        })
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[swiper])
  
    return (
    <div className={styles.leftNavigation}>
       {!isBeginning && <LeftArrow onClick={()=> swiper.slidePrev()}/>}
    </div>
  )
}

export default CarouselLeftNavigation
