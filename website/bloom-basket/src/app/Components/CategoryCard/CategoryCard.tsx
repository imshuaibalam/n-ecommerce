'use client'
import React from 'react';
import Image from 'next/image';
import style from '@/app/Components/CategoryCard/style.module.scss'

function CategoryCard(props:any) {
    const { category } = props;

    return (
        <div className={style.card}>
            <div className={style.img_box}>
                <Image
                src={category.image.url} 
                alt='Bloom Basket category image'
                height={100}
                width={100}
                sizes='100vw'
                className='w-full'
                priority
                />
                <div className={style.overlay}>
                    <div className={style.details_box}>
                        <p>{category.title}</p>
                        <h1>{category.name}</h1>
                        <button>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard