import React from 'react'
import styles from "./products-card.module.css"
import Image from 'next/image'
import test from "../../../../../../public/imgs/lucas-gallone-uPk5aOtimUE-unsplash.jpg"
import Link from 'next/link'


const ProductCard = () => {
  return (
    <Link href={"/products"} className={styles.productCard}>
      <div className={styles.cardImg}>
        <Image src={test} alt='Product Image'></Image>
      </div>
      <p>
        Oil Injected Rotary Screw Compressors
      </p>
    </Link>
  )
}

export default ProductCard