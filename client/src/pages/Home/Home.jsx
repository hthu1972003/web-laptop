import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { useState } from 'react'

const slides = [
  'https://cdn.nguyenkimmall.com/images/promo/918/644.jpg',
  'https://cdn.nguyenkimmall.com/images/companies/_1/MKT_ECM/0224/TAN_XUAN/Home/Homepage-Banner_694x376px_MDA2.jpg',
  'https://cdn.nguyenkimmall.com/images/companies/_1/MKT_ECM/0224/TAN_XUAN/Home/Homepage-Banner_694x376px_DIG2.jpg',
  'https://cdn.nguyenkimmall.com/images/companies/_1/MKT_ECM/0224/Dealsheet/AV/694x376.jpg'
]

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))

  return (
    <div className='bg-[#f5f6f8] py-2'>
      <div className='max-w-[1200px] h-full m-auto'>
        <div className='flex gap-3'>
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
      </div>
    </div>
  )
}

export default Home
