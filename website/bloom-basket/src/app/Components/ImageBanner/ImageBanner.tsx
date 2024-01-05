import React from 'react'

const ImageBanner = ({link}:any) => {
  return (
    <div className={`flex flex-col justify-center items-start p-12 bg-fixed bg-bottom md:bg-center h-[100vh] w-[100%]`} style={{backgroundImage: `url(${link})`}}>
      <div className='flex flex-col items-start w-full md:w-2/5 text-white gap-2'>
        <h6 className='text-sm'>SHOP NOW</h6>
        <h1 className='text-2xl font-bold w-full'>The New Beauty Collection</h1>
        <h4 className='text-xl font-sm w-full'>This new collection brings with it the most exciting lorem ipsum dolor sit amet.</h4>
        <a className='bg-white text-black rounded-sm py-2 px-5 mt-2 uppercase cursor-pointer transition duration-500 hover:text-red-300'>Shop Now</a>
      </div>
    </div>
  )
}

export default ImageBanner