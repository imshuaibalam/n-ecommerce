'use client'
import React from 'react';
import Image from 'next/image';
import style from '@/app/Components/ProductCard/style.module.scss'
import { GiShoppingBag } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";
import Link from 'next/link';


function ProductCard(props:any) {
    const { product } = props;

    const addToCart = () => {
        console.log('product', product)
    }

    return (
        <div className={style.card}>
            <div className={style.img_box}>
                <Link href={`/product/${product.id}`}>
                    <Image
                    src={product.image[0].url} 
                    alt='Bloom Basket product image'
                    height={100}
                    width={100}
                    sizes='100vw'
                    className='w-full'
                    priority
                    />
                </Link>
                <p className={style.sale_badge}>Sale!</p>
                <div className={style.cart_wishlist_box}>
                    <div onClick={addToCart} className={style.cart_icon}><GiShoppingBag /></div>
                    <div className={style.wishlist_icon}><FaRegHeart /></div>
                </div>
            </div>
            <div className={style.details_box}>
                <p className={style.prod_name}>{product.name}</p>
                <div className={style.price_box}>
                    <span className={style.price}>${product.price}</span>
                    <span className={style.discounted_price}>${product.discountedPrice}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard