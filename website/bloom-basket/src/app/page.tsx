import CategoryCard from './Components/CategoryCard/CategoryCard'
import ImageBanner from './Components/ImageBanner/ImageBanner'
import ProductCard from './Components/ProductCard/ProductCard'

export default function Page() {
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

  const categories = [
    {
      createdAt: new Date(),
      name: 'Skin Care',
      title: 'Skin Care Products',
      image: {
        url: 'https://websitedemos.net/beauty-products-store-04/wp-content/uploads/sites/830/2021/04/category-01-free-img.jpg'
      }
    },
    {
      createdAt: new Date(),
      name: 'Hair Care',
      title: 'Hair Care Products',
      image: {
        url: 'https://websitedemos.net/beauty-products-store-04/wp-content/uploads/sites/830/2021/04/category-02-free-img.jpg'
      }
    },
    {
      createdAt: new Date(),
      name: 'Bath & Body',
      title: 'Bath & Body Care Products',
      image: {
        url: 'https://websitedemos.net/beauty-products-store-04/wp-content/uploads/sites/830/2021/04/category-03-free-img.jpg'
      }
    }
  ]
  
  return (
    <>
    <ImageBanner link='https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/hero.jpg'/>
    <div className="grid grid-cols-2 gap-3 p-3 sm:grid-cols-2 md:grid-cols-4 md:px-5 md:gap-5">
      {
        products.map(prod => (
          <ProductCard product={prod}/>
        ))
      }
    </div>

    <div className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-1 md:grid-cols-3 md:px-5 md:gap-5">
      {
        categories.map(cat => (
          <CategoryCard category={cat}/>
        ))
      }
    </div>
    <ImageBanner link='https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/bg-03.jpg'/>
    </>
  )
}
