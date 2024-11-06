"use client"
import React from 'react'
import styles from "./products.module.css"
import Contact from '@/components/Contact/Contact'
import About from '@/components/About/About'
import Testimonials from '@/components/Testimonials/Testimonials'

const AboutPage = ({
  params: {locale}
}: {
  params: {locale: string}
}) => {
  return (
    <section className={styles.products}>
        <About lo={locale}></About>
        <Testimonials parentEl={"about"} lo={locale}></Testimonials>
        <Contact lo={locale}></Contact>
    </section>
  )
}

export default AboutPage