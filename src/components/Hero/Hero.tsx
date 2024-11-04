"use client"
import React from 'react'
import styles from "./hero.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, EffectCards, Navigation, Pagination } from 'swiper/modules';
import "swiper/css/bundle";
import Image from 'next/image';
import test from "../../../public/imgs/lucas-gallone-uPk5aOtimUE-unsplash.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
const Hero = () => {
  return (
    <section className={styles.hero}>
        <div className={styles.swiper}>
            <Swiper
                loop
                autoplay={{
                    delay: 3000
                }}
                slidesPerView= {1}
                spaceBetween={10}
                pagination={{
                    clickable: true
                }}
                modules={[Navigation, Pagination, Autoplay, EffectCards]}
                effect='CoverFlow'
                navigation={{
                    nextEl: '.featured-swiper-button-next',
                    prevEl: '.featured-swiper-button-prev'
                }}
                className='mySwiperProd'
                autoHeight={true}
                >
                <SwiperSlide>
                    <div className={styles.img}>
                        <Image src={test} alt='test'></Image>
                    </div>
                </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.img}>
                            <Image src={test} alt='test'></Image>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.img}>
                            <Image src={test} alt='test'></Image>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.img}>
                            <Image src={test} alt='test'></Image>
                        </div>
                    </SwiperSlide>
            </Swiper>
                    <button className='featured-swiper-button-prev'>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button className='featured-swiper-button-next'>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
        </div>
    </section>
  )
}

export default Hero