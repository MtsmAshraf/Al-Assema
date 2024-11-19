"use client"
import React from 'react'
import styles from "./hero.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import "swiper/css/bundle";
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import image1 from "../../../public/imgs/yellow-one.jpeg"
import image2 from "../../../public/imgs/yellow-two.jpeg"
import image3 from "../../../public/imgs/red-slider.jpeg"
import image4 from "../../../public/imgs/black-slider.jpeg"
import image5 from "../../../public/imgs/blue-slider.jpeg"

import sliderProducts from './sliderProducts';
const Hero = () => {
  return (
    <section className={styles.hero}>
        <div className={styles.swiper}>
            <Swiper
                loop
                autoplay={{
                    delay: 5000
                }}
                slidesPerView= {1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                    el: `.heroPagination`
                }}
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                    nextEl: '.featured-swiper-button-next',
                    prevEl: '.featured-swiper-button-prev'
                }}
                className='mySwiperProdHero'
                autoHeight={true}
                >
                {
                    sliderProducts.map((product) => {
                        return(
                            <SwiperSlide key={product.id}>
                                <div className={styles.img}>
                                    <Image src={product.src} alt={`${product.name} image`}></Image>
                                </div>
                                <p>
                                    {product.name}
                                </p>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <div className={styles.heroPagination}>
                <div className={`heroPagination`}></div>
            </div>
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