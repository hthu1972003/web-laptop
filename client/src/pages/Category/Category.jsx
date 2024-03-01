import {
  ChevronLeftIcon,
  ChevronRightIcon,
  IdCardIcon,
  MixerHorizontalIcon,
  TextAlignCenterIcon
} from '@radix-ui/react-icons'
import { Box, Card, DropdownMenu, Inset, Strong, Text } from '@radix-ui/themes'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Mousewheel, Keyboard, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { categorySlides as slides, categorySearch } from '~/constants/slide'
import { categoryFilter } from '~/constants/filter'

function Category() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))

  return (
    <div className='bg-[#f5f6f8] py-2'>
      <div className='max-w-[1200px] h-full m-auto'>
        <div className='flex gap-3 mb-5'>
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
        <div className='bg-white pb-3 rounded-lg overflow-hidden border border-gray-200 mb-3'>
          <div
            style={{
              background: 'linear-gradient(0deg, #bb0015, #e7001a 100%, #d70018 0, #d70018 0, #fff 0)'
            }}
            className='h-16'
          >
            <Text as='h2' size='7' className='text-white signika uppercase font-semibold text-shadow p-2'>
              TOP 10 LAPTOP ĐƯỢC YÊU THÍCH NHẤT
            </Text>
          </div>
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
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              navigation={{ nextEl: '.arrow-right-1', prevEl: '.arrow-left-1' }}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
            >
              {Array.from({ length: 10 }).map((_, index) => (
                <SwiperSlide key={index}>
                  <Card
                    className='cursor-pointer hover:shadow-lg min-w-[225px] pt-4 pb-8 px-2'
                    size='2'
                    style={{ maxWidth: 240 }}
                  >
                    <Inset className='min-h-[190px]' clip='padding-box' side='top' pb='current'>
                      <img
                        className='my-10 hover:-translate-y-1 transition-transform duration-300'
                        src='https://cdn.nguyenkimmall.com/images/thumbnails/210/210/product/845/macbook-air-m1-2020-13-inch-256gb-mgn63sa-a-xam-1.jpg'
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
                        Laptop MacBook Air M1 13 inch 256GB MGN63SA/A Xám
                      </Text>
                      <Strong className='text-red-500'>18.490.000đ</Strong>
                      <Box className='flex flex-col gap-4'>
                        <Text as='p' size='1' className=''>
                          CPU: Apple M1
                        </Text>
                        <Text as='p' size='1' className=''>
                          Dung lượng RAM: 8 GB
                        </Text>
                        <Text as='p' size='1' className=''>
                          Dung lượng ổ cứng: 512GB
                        </Text>
                        <Text as='p' size='1' className=''>
                          Kích thước màn hình: 14 inch
                        </Text>
                        <Text as='p' size='1' className=''>
                          Nhà sản xuất: MSI
                        </Text>
                        <Text as='p' size='1' className=''>
                          Xuất xứ: Trung Quốc
                        </Text>
                        <Text as='p' size='1' className=''>
                          Thời gian bảo hành: 24 Tháng
                        </Text>
                      </Box>
                    </Box>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
            <button className='arrow-left-1 absolute left-3 z-10 top-[49%] bottom-1/2 transform translate-x-[-50%] translate-y-[-50%]'>
              <ChevronLeftIcon
                style={{ padding: '4px' }}
                width={20}
                height={20}
                className='text-white bg-[#9a9a9a] rounded-full'
              />
            </button>
            <button className='arrow-right-1 absolute right-0 z-10 top-[49%] bottom-1/2 transform translate-x-[-50%] translate-y-[-50%]'>
              <ChevronRightIcon
                style={{ padding: '4px' }}
                width={20}
                height={20}
                className='text-white bg-[#9a9a9a] rounded-full'
              />
            </button>
          </div>
        </div>
        <div className='bg-white p-3 rounded-lg overflow-hidden border border-gray-200 mb-3'>
          <div className='flex gap-3 mb-5'>
            <div className='flex items-center gap-2 border border-gray-200 px-3 py-1 rounded-3xl cursor-pointer'>
              <TextAlignCenterIcon />
              <span className='text-xs'>Bộ lọc</span>
            </div>
            {categoryFilter.map((filter, index) => (
              <DropdownMenu.Root key={index}>
                <DropdownMenu.Trigger>
                  <div className='border border-gray-200 px-3 py-1 rounded-3xl cursor-pointer'>
                    <span className='text-xs'>{filter.title}</span>
                  </div>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  {filter.options.map((option, index) => (
                    <DropdownMenu.Item key={index} className='px-3 py-1 cursor-pointer'>
                      {option.title}
                    </DropdownMenu.Item>
                  ))}
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            ))}
          </div>
          <div className='flex items-center gap-3'>
            <span className='text-sm'>Tìm kiếm nhiều:</span>
            {categorySearch.map((search, index) => (
              <div key={index} className='py-1 px-2 border border-[#e0e0e0] rounded-lg'>
                <img src={search} alt='' />
              </div>
            ))}
          </div>
        </div>
        <div className='bg-white p-3 rounded-lg overflow-hidden border border-gray-200 mb-3'>
          <div className='flex pb-4 border-b border-b-gray-200 gap-5'>
            <div className='text-lg font-semibold'>20 Laptop</div>
            <div className='flex gap-2 border border-gray-200 p-2 rounded-lg cursor-pointer'>
              <IdCardIcon />
              <span className='text-xs'>Trả góp</span>
            </div>
            <div className='flex gap-2 border border-gray-200 p-2 rounded-lg cursor-pointer'>
              <MixerHorizontalIcon />
              <span className='text-xs'>Bán chạy nhất</span>
            </div>
            <div className='flex gap-2 border border-gray-200 p-2 rounded-lg cursor-pointer'>
              <MixerHorizontalIcon />
              <span className='text-xs'>Giá thấp - cao</span>
            </div>
            <div className='flex gap-2 border border-gray-200 p-2 rounded-lg cursor-pointer'>
              <MixerHorizontalIcon />
              <span className='text-xs'>Giá cao - thấp</span>
            </div>
          </div>
          <div className='grid grid-cols-5 gap-3'>
            {[...Array(20)].map((_, index) => (
              <Card
                key={index}
                className='cursor-pointer hover:shadow-lg min-w-[225px] pt-4 pb-8 px-2'
                size='2'
                style={{ maxWidth: 240 }}
              >
                <Inset className='min-h-[190px]' clip='padding-box' side='top' pb='current'>
                  <img
                    className='my-10 hover:-translate-y-1 transition-transform duration-300'
                    src='https://cdn.nguyenkimmall.com/images/thumbnails/210/210/product/845/macbook-air-m1-2020-13-inch-256gb-mgn63sa-a-xam-1.jpg'
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
                    Laptop MacBook Air M1 13 inch 256GB MGN63SA/A Xám
                  </Text>
                  <Strong className='text-red-500'>18.490.000đ</Strong>
                  <Box className='flex flex-col gap-4'>
                    <Text as='p' size='1' className=''>
                      CPU: Apple M1
                    </Text>
                    <Text as='p' size='1' className=''>
                      Dung lượng RAM: 8 GB
                    </Text>
                    <Text as='p' size='1' className=''>
                      Dung lượng ổ cứng: 512GB
                    </Text>
                    <Text as='p' size='1' className=''>
                      Kích thước màn hình: 14 inch
                    </Text>
                    <Text as='p' size='1' className=''>
                      Nhà sản xuất: MSI
                    </Text>
                    <Text as='p' size='1' className=''>
                      Xuất xứ: Trung Quốc
                    </Text>
                    <Text as='p' size='1' className=''>
                      Thời gian bảo hành: 24 Tháng
                    </Text>
                  </Box>
                </Box>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category
