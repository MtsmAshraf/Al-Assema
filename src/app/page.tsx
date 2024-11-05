import About from "@/components/About/About";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import Products from "@/components/Products/Products";
import Services from "@/components/Services/Services";
import Work from "@/components/Work/Work";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero></Hero>
      <About></About>
      <Products></Products>
      <Services></Services>
      <Work></Work>
    </div>
  );
}
