import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { Badge, Box, Card, Inset, Strong, Text } from '@radix-ui/themes'
import { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Navigation, Mousewheel, Keyboard, Autoplay } from 'swiper/modules'

const slides = [
  'https://cdn.nguyenkimmall.com/images/promo/918/644.jpg',
  'https://cdn.nguyenkimmall.com/images/companies/_1/MKT_ECM/0224/TAN_XUAN/Home/Homepage-Banner_694x376px_MDA2.jpg',
  'https://cdn.nguyenkimmall.com/images/companies/_1/MKT_ECM/0224/TAN_XUAN/Home/Homepage-Banner_694x376px_DIG2.jpg',
  'https://cdn.nguyenkimmall.com/images/companies/_1/MKT_ECM/0224/Dealsheet/AV/694x376.jpg'
]

const randomArr = [
  {
    id: 1,
    name: 'Laptop MacBook Air M1 13 inch 256GB MGN63SA/A Xám',
    price: 18490000,
    discount: 25990000,
    img: 'https://cdn.nguyenkimmall.com/images/thumbnails/210/210/product/845/macbook-air-m1-2020-13-inch-256gb-mgn63sa-a-xam-1.jpg'
  },
  {
    id: 2,
    name: 'Laptop MacBook Air M2 13 inch 256GB MGN63SA/B Đỏ',
    price: 20490000,
    discount: 28990000,
    img: 'https://cdn.nguyenkimmall.com/images/thumbnails/210/210/product/845/macbook-air-m1-2020-13-inch-256gb-mgn63sa-a-xam-1.jpg'
  },
  {
    id: 3,
    name: 'Laptop MacBook Air M1 13 inch 256GB MGN63SA/A Xanh',
    price: 28490000,
    discount: 30990000,
    img: 'https://cdn.nguyenkimmall.com/images/thumbnails/210/210/product/845/macbook-air-m1-2020-13-inch-256gb-mgn63sa-a-xam-1.jpg'
  },
  {
    id: 4,
    name: 'Laptop MacBook Air M2 13 inch 256GB MGN63SA/B Vàng',
    price: 30490000,
    discount: 40990000,
    img: 'https://cdn.nguyenkimmall.com/images/thumbnails/210/210/product/845/macbook-air-m1-2020-13-inch-256gb-mgn63sa-a-xam-1.jpg'
  },
  {
    id: 5,
    name: 'Laptop MacBook Air M2 13 inch 256GB MGN63SA/B Vàng',
    price: 30490000,
    discount: 40990000,
    img: 'https://cdn.nguyenkimmall.com/images/thumbnails/210/210/product/845/macbook-air-m1-2020-13-inch-256gb-mgn63sa-a-xam-1.jpg'
  }
]

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))

  const getRandomArr = () => {
    const selectedProducts = []
    while (selectedProducts.length < 2) {
      const randomProduct = randomArr[Math.floor(Math.random() * randomArr.length)]
      if (!selectedProducts.some((product) => product.id === randomProduct.id)) {
        selectedProducts.push(randomProduct)
      }
    }
    return selectedProducts
  }
  getRandomArr()

  return (
    <div className='bg-[#f5f6f8] py-2'>
      <div className='max-w-[1200px] h-full m-auto'>
        <div className='flex gap-3 mb-5'>
          <div>
            <img
              className='rounded-lg mb-2.5'
              src='https://cdn.nguyenkimmall.com/images/companies/_1/MKT_ECM/0124/TET_2024/HOME/309x183px_AV1.jpg'
              alt=''
            />
            <img
              className='rounded-lg'
              src='https://cdn.nguyenkimmall.com/images/companies/_1/MKT_ECM/0224/TAN_XUAN/web/Small_Homepage-Banner_309x183px.jpg'
              alt=''
            />
          </div>
          <div className='relative flex-1'>
            <div className='flex overflow-hidden h-[376px] rounded-lg'>
              {slides.map((slide, index) => (
                <img
                  style={{
                    transform: `translateX(-${currentSlide * 100}%)`
                  }}
                  key={index}
                  className='transition-transform ease-out duration-500'
                  src={slide}
                  alt=''
                />
              ))}
            </div>
            <button
              onClick={prevSlide}
              className='absolute left-6 top-1/2 bottom-1/2 transform translate-x-[-50%] translate-y-[-50%]'
            >
              <ChevronLeftIcon
                style={{ padding: '4px' }}
                width={20}
                height={20}
                className='text-black bg-white rounded-full'
              />
            </button>
            <button
              onClick={nextSlide}
              className='absolute right-6 top-1/2 bottom-1/2 transform translate-x-[-50%] translate-y-[-50%]'
            >
              <ChevronRightIcon
                style={{ padding: '4px' }}
                width={20}
                height={20}
                className='text-black bg-white rounded-full'
              />
            </button>
          </div>
          <div>
            <img
              className='rounded-lg mb-2.5'
              src='https://cdn.nguyenkimmall.com/images/companies/_1/MKT_ECM/0124/TET_2024/HOME/309x183px_AV1.jpg'
              alt=''
            />
            <img
              className='rounded-lg'
              src='https://cdn.nguyenkimmall.com/images/companies/_1/MKT_ECM/0224/TAN_XUAN/web/Small_Homepage-Banner_309x183px.jpg'
              alt=''
            />
          </div>
        </div>
        <div className='bg-white pb-3 rounded-lg overflow-hidden border border-gray-200'>
          <img
            src='https://cdn.nguyenkimmall.com/images/companies/_1/MKT_ECM/0224/TAN_XUAN/web/Title-web_1200x65.jpg'
            alt=''
          />
          <div className='relative my-1 mx-2'>
            <Swiper
              breakpoints={{
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 10
                }
              }}
              cssMode={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false
              }}
              navigation={{ nextEl: '.arrow-right', prevEl: '.arrow-left' }}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
            >
              {Array.from({ length: 20 }).map((_, index) => (
                <SwiperSlide key={index}>
                  <div className='grid grid-rows-2 grid-flow-col gap-3'>
                    {getRandomArr().map((product) => (
                      <Card key={product.id} className='min-w-[225px]' size='2' style={{ maxWidth: 240 }}>
                        <Inset className='min-h-[190px]' clip='padding-box' side='top' pb='current'>
                          <img
                            className='my-10'
                            src={product.img}
                            alt='Bold typography'
                            style={{
                              display: 'block',
                              objectFit: 'cover',
                              width: '100%',
                              height: 140,
                              backgroundColor: 'var(--gray-5)'
                            }}
                          />
                        </Inset>
                        <Box className='flex flex-col gap-4'>
                          <Text as='p' size='2'>
                            {product.name}
                          </Text>
                          <Strong className='text-red-500'>{product.price}đ</Strong>
                          <Box className='flex items-center gap-4'>
                            <Text as='p' size='2' className='text-[#8f8f8f] font-medium line-through'>
                              {product.discount}đ
                            </Text>
                            <Badge variant='solid' radius='large' color='red'>
                              -25%
                            </Badge>
                          </Box>
                        </Box>
                      </Card>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button className='arrow-left absolute left-3 z-10 top-[49%] bottom-1/2 transform translate-x-[-50%] translate-y-[-50%]'>
              <ChevronLeftIcon
                style={{ padding: '4px' }}
                width={20}
                height={20}
                className='text-black bg-red-500 rounded-full'
              />
            </button>
            <button className='arrow-right absolute right-0 z-10 top-[49%] bottom-1/2 transform translate-x-[-50%] translate-y-[-50%]'>
              <ChevronRightIcon
                style={{ padding: '4px' }}
                width={20}
                height={20}
                className='text-black bg-red-500 rounded-full'
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
