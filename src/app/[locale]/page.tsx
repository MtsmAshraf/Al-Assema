import About from "@/components/About/About";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import Products from "@/components/Products/Products";
import Services from "@/components/Services/Services";
import Work from "@/components/Work/Work";
import Contact from "@/components/Contact/Contact";
import Testimonials from "@/components/Testimonials/Testimonials";
import Loader from "@/components/Loader/Loader";

export default function Home({
  params: {locale}
}: {
  params: {locale: string}

}) {
  return (
    <div className={styles.page}>
      <Loader></Loader>
      <Hero></Hero>
      <About lo={locale}></About>
      <Services lo={locale}></Services>
      <Products lo={locale}></Products>
      <Work lo={locale}></Work>
      <Testimonials parentEl={"home"} lo={locale}></Testimonials>
      <Contact lo={locale}></Contact>
    </div>
  );
}
