import CategoryCard from './Components/CategoryCard/CategoryCard'
import ImageBanner from './Components/ImageBanner/ImageBanner'
import ProductCard from './Components/ProductCard/ProductCard'

export default function Page() {
  const products = [
    {
      createdAt: new Date(),
      name: 'Product 1',
      price: 75,
      discountedPrice: 59,
      image: [
        {
          url: 'https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2023/11/product-04-a-300x366.jpg'
        }
      ]
    },
    {
      createdAt: new Date(),
      name: 'Product 2',
      price: 40,
      discountedPrice: 35,
      image: [
        {
          url: 'https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/product-14-a-300x366.jpg'
        }
      ]
    },
    {
      createdAt: new Date(),
      name: 'Product 3',
      price: 88,
      discountedPrice: 68,
      image: [
        {
          url: 'https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/product-09-a-300x366.jpg'
        }
      ]
    },
    {
      createdAt: new Date(),
      name: 'Product 4',
      price: 37,
      discountedPrice: 29,
      image: [
        {
          url: 'https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/product-10-a-300x366.jpg'
        }
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
