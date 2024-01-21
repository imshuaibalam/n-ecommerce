'use client'
import React, { useState, useEffect } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function Page({ params }: any) {
  const productId = params.id;

  const [product, setProduct] = useState<any>();

  const products = [
    {
      createdAt: new Date(),
      id: 'a',
      name: 'Product 1',
      price: 75,
      discountedPrice: 59,
      description: 'Ut quis sollicitudin orci. Aliquam at libero non purus sodales sagittis eu ac neque. Nunc ipsum felis, vehicula eu aliquam sed, ultricies ac lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam viverra commodo finibus. Morbi laoreet lacus quis lobortis tempor. Nam tincidunt, lectus a suscipit fringilla, mauris turpis dapibus dolor, eu venenatis diam nibh id massa.',
      image: [
        {
          url: 'https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2023/11/product-04-a.jpg'
        },
        {
          url: 'https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/product-04-b.jpg'
        },
        {
          url: 'https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/product-04-c.jpg'
        },
        {
          url: 'https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/product-bg-08.jpg'
        },
      ]
    },
    {
      createdAt: new Date(),
      id: 'b',
      name: 'Product 2',
      price: 40,
      discountedPrice: 35,
      description: 'Ut quis sollicitudin orci. Aliquam at libero non purus sodales sagittis eu ac neque. Nunc ipsum felis, vehicula eu aliquam sed, ultricies ac lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam viverra commodo finibus. Morbi laoreet lacus quis lobortis tempor. Nam tincidunt, lectus a suscipit fringilla, mauris turpis dapibus dolor, eu venenatis diam nibh id massa.',
      image: [
        {
          url: 'https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/product-14-a.jpg'
        },
        {
          url: 'https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/product-14-b.jpg'
        },
        {
          url: 'https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/product-14-c.jpg'
        },
        {
          url: 'https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/product-bg-02.jpg'
        },
      ]
    },
    {
      createdAt: new Date(),
      id: 'c',
      name: 'Product 3',
      price: 88,
      discountedPrice: 68,
      description: 'Ut quis sollicitudin orci. Aliquam at libero non purus sodales sagittis eu ac neque. Nunc ipsum felis, vehicula eu aliquam sed, ultricies ac lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam viverra commodo finibus. Morbi laoreet lacus quis lobortis tempor. Nam tincidunt, lectus a suscipit fringilla, mauris turpis dapibus dolor, eu venenatis diam nibh id massa.',
      image: [
        {
          url: 'https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/product-09-a-300x366.jpg'
        },
        {
          url: 'https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/product-09-b.jpg'
        },
        {
          url: 'https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/product-09-c.jpg'
        },
        {
          url: 'https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/product-bg-06.jpg'
        },

      ]
    },
    {
      createdAt: new Date(),
      id: 'd',
      name: 'Product 4',
      price: 37,
      discountedPrice: 29,
      description: 'Ut quis sollicitudin orci. Aliquam at libero non purus sodales sagittis eu ac neque. Nunc ipsum felis, vehicula eu aliquam sed, ultricies ac lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam viverra commodo finibus. Morbi laoreet lacus quis lobortis tempor. Nam tincidunt, lectus a suscipit fringilla, mauris turpis dapibus dolor, eu venenatis diam nibh id massa.',
      image: [
        {
          url: 'https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/product-10-a.jpg'
        },
        {
          url: 'https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/product-10-b.jpg'
        },
        {
          url: 'https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/product-10-c.jpg'
        },
        {
          url: 'https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/product-bg-07.jpg'
        },
      ]
    },
  ]

  const getProductWithId = () => {
    return products.find(product => product.id === productId);
  }

  const [imgId, setImgId] = useState(1);

  const slideImage = () => {
    const imgShowcase:any = document.querySelector('.img-showcase');
    if (imgShowcase) {
      const displayWidth = imgShowcase.querySelector('img:first-child')?.clientWidth;
      if (displayWidth !== undefined) {
        imgShowcase.style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
      }
    }
  };

  const nextImage = () => {
    setImgId((prevId) => (prevId < product.image.length ? prevId + 1 : 1));
  };

  const prevImage = () => {
    setImgId((prevId) => (prevId > 1 ? prevId - 1 : product.image.length));
  };
  
  const handleImageClick = (id: number) => {
    setImgId(id);
  };

  useEffect(() => {
    const data:any = getProductWithId();
    setProduct(data);
    slideImage();
  }, [imgId]);

  return (
    product ? 
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-6 sm:p-10">
        {/* Product Images Section  */}
        <div className="flex flex-col justify-center sm:flex-row-reverse sm:gap-2.5">
          <div className="overflow-hidden relative">
            <div className="img-showcase flex w-full sm:h-full transition-all duration-1000">
              {product?.image.map((img: { url: string }, index:any) => (
                <img key={index} className="min-w-full w-full" src={img.url} alt={`shoe image ${index + 1}`} />
              ))}
            </div>
            <div className='next-btn absolute right-2 top-[50%] translate-y-[-50%] bg-[#ffffff52] p-2.5 rounded-full cursor-pointer'>
              <IoIosArrowForward onClick={nextImage}/>
            </div>
            <div className='back-btn absolute left-2 top-[50%] translate-y-[-50%] bg-[#ffffff52] p-2.5 rounded-full cursor-pointer'>
              <IoIosArrowBack onClick={prevImage}/>
            </div>
          </div>
          <div className="flex gap-1.5 mt-1.5 sm:mt-0 sm:flex-col">
            {product?.image.map((img: { url: string }, index:any) => (
              <div key={index} className="img-item hover:opacity-[0.8]" onClick={() => handleImageClick(index + 1)}>
                <a href="#" data-id={index + 1}>
                  <img className="w-full" src={img.url} alt={`shoe image ${index + 1}`} />
                </a>
              </div>
            ))}
          </div>
        </div>
        {/* Product Images Section  */}

        {/* Product Content Section  */}
        <div className="product-content px-2 py-5 sm:p-0">
          <div className="text-gray-400 pb-2.5"><span>Home</span> / <span>Category</span> / <span>Product Name</span></div>        
          <div className="pb-3"><span>Skin Care</span>, <span>Hair Care</span></div>        
          <h2 className="text-2xl font-medium pb-2">{product?.name}</h2>
          <div className='text-xl font-bold'><span className='text-gray-400 line-through'>${product?.price}</span> &nbsp; <span className='text-black'>${product?.discountedPrice}</span></div>
          <p className='text-gray-400 pt-1'>{product?.description}</p>
        </div>
        {/* Product Content Section  */}
      </div>
    : <p>Loading...</p>  
  );
}

export default Page;
