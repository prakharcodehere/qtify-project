import React, { useEffect } from 'react'
import { useSwiper } from 'swiper/react'
import { useState } from 'react';
import { ReactComponent as RightArrow } from '../../assets/right_arrow.svg';
import styles from "./Carousel.module.css"

const CarouselRightNavigation = () => {
    const swiper =useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd)
  
    useEffect(()=> {
        swiper.on("slideChange", function(){
            setIsEnd(swiper.isEnd);
        })
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[swiper])
  
    return (
    <div className={styles.rightNavigation}>
       {!isEnd && <RightArrow onClick={()=> swiper.slideNext()}/>}
    </div>
  )
}

export default CarouselRightNavigation
