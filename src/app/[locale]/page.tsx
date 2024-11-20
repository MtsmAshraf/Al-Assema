"use client"
import About from "@/components/About/About";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import Products from "@/components/Products/Products";
import Services from "@/components/Services/Services";
import Contact from "@/components/Contact/Contact";
// import Work from "@/components/Work/Work";
// import Testimonials from "@/components/Testimonials/Testimonials";
import Loader from "@/components/Loader/Loader";
import { useEffect } from "react";

export default function Home({
  params: {locale}
}: {
  params: {locale: string}

}) {
  
  useEffect(() => {
    const sections = document.querySelectorAll("section")
    sections.forEach((section) => {
      window.addEventListener("scroll", () => {
        if(window.scrollY >= section.offsetTop - 400){
          section.style.cssText = `
            opacity: 1;
            transform: translateY(0)
          `
        }
      })
    })
  },[])
  return (
    <div className={styles.page}>
      <Loader></Loader>
      <Hero lo={locale}></Hero>
      <About lo={locale}></About>
      <Services lo={locale}></Services>
      <Products lo={locale}></Products>
      {/* <Work lo={locale}></Work>
      <Testimonials parentEl={"home"} lo={locale}></Testimonials> */}
      <Contact lo={locale}></Contact>
    </div>
  );
}
