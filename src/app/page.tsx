import About from "@/components/About/About";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import Products from "@/components/Products/Products";
import Services from "@/components/Services/Services";
import Work from "@/components/Work/Work";
import Contact from "@/components/Contact/Contact";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Products></Products>
      <Work></Work>
      <Testimonials></Testimonials>
      <Contact></Contact>
    </div>
  );
}
