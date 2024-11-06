import React from 'react'
import styles from "./products-cards.module.css"
import ProductCard from './ProductCard/ProductCard'
import allProducts, { Product } from "../allProducts"
import Image from 'next/image'
import { Link } from '@/i18n/routing'
const ProductCards = () => {
  return (
    <div className={styles.productCards}>
        {
            allProducts.map((product: Product) => {
                return(
                    <ProductCard key={product.id}>
                        <Link href={"/products"} className={styles.productCard}>
                            <div className={styles.cardImg}>
                                <Image src={product.src} alt='Product Image'></Image>
                            </div>
                            <p>
                                {product.name}
                            </p>
                        </Link>
                    </ProductCard>
                )
            })
        }
    </div>
  )
}

export default ProductCards