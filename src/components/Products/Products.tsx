import React from 'react'
import styles from "./products.module.css"
import MainHeading from '../MainHeading/MainHeading'
import ProductsGrid from './ProductsGrid/ProductsGrid'
const Products = () => {
  return (
    <section className={styles.products}>
        <div className="container">
            <MainHeading>
                <h2>Products of Al-Assema Compressor</h2>
                <p>Dalgakıran is a manufacturer of industrial compressors and compressed air systems.Our products guarantee customers achieve sustainable productivity in a wide range of markets, including general engineering, manufacturing and process industries, construction, automotive, pharmaceutical, food and much more.</p>
            </MainHeading>
        <ProductsGrid></ProductsGrid>
        </div>
    </section>
  )
}

export default Products