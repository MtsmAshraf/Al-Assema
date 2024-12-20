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
// import logo from "../../../public/imgs/logojpg.webp"
import sliderProducts from './sliderProducts';
import { useTranslations } from 'next-intl';
const Hero = ({
    lo
}: {
    lo: string,
}) => {
    const t = useTranslations("HomePage.Hero")
  return (
    <section className={lo === "en" ? styles.hero + " " + styles.en : styles.hero}>
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
                {/* <SwiperSlide className={styles.first}>
                    <div className={styles.img}>
                        <Image src={logo} alt={`Al-assema for compressed air systems logo`}></Image>
                    </div>
                    <p>
                        {t("0")}
                    </p>
                </SwiperSlide> */}
                {
                    sliderProducts.map((product) => {
                        return(
                            <SwiperSlide key={product.id}>
                                <div className={styles.img}>
                                    <Image src={product.src} alt={`${t(`${product.id}`)} image`}></Image>
                                </div>
                                <p>
                                    {t(`${product.id}`)}
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