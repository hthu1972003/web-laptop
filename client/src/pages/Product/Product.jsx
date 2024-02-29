import { PlusCircledIcon, StarIcon } from '@radix-ui/react-icons'
import { Badge, Flex, Text } from '@radix-ui/themes'
import { useState } from 'react'

const productImages = [
  'https://cdn.nguyenkimmall.com/images/thumbnails/600/336/detailed/886/10055748-laptop-hp-240-g9-%E1%BB%89-1215u-8gb-256gb-win11-6l1x7pa-1.jpg',
  'https://cdn.nguyenkimmall.com/images/thumbnails/600/336/detailed/886/10055748-laptop-hp-240-g9-%E1%BB%89-1215u-8gb-256gb-win11-6l1x7pa-2.jpg',
  'https://cdn.nguyenkimmall.com/images/thumbnails/600/336/detailed/886/10055748-laptop-hp-240-g9-%E1%BB%89-1215u-8gb-256gb-win11-6l1x7pa-3.jpg'
]

function Product() {
  const [currentImage, setCurrentImage] = useState(productImages[0])

  const handleImageChange = (image) => {
    setCurrentImage(image)
  }

  return (
    <div className='bg-[#f5f6f8] py-2'>
      <div className='bg-white max-w-[1200px] m-auto py-4 px-3'>
        <div className='grid grid-cols-12'>
          <div className='col-span-7'>
            <div className='flex justify-center'>
              <img className='max-w-[600px] max-h-[336px]' src={currentImage} alt='' />
            </div>
            <div className='flex justify-center gap-2 mt-10'>
              {productImages.map((image, index) => (
                <div
                  key={index}
                  className={currentImage !== image ? 'p-1 border border-gray-200' : 'p-1 border border-red-500'}
                  onClick={() => handleImageChange(image)}
                >
                  <img className='max-w-[67px] max-h-[40px]' src={image} alt='' />
                </div>
              ))}
            </div>
            <div className='mt-10'>
              <h3 className='font-bold text-sm my-3'>Đặc điểm nổi bật</h3>
              <ul className='text-sm'>
                <li className='my-2'>- Laptop HP màu Bạc sang trọng, thiết kế mỏng nhẹ dễ dàng mang theo</li>
                <li className='my-2'>- CPU Intel Core i3-1215U xử lý mượt tác vụ học tập, văn phòng và giải trí</li>
                <li className='my-2'>- RAM 8GB chuẩn DDR4 đa nhiệm, không giật lag khi mở nhiều tab</li>
                <li className='my-2'>- Ổ cứng 256GB khởi động máy nhanh, không gian lưu trữ dữ liệu lớn</li>
                <li className='my-2'>- Trang bị đa dạng cổng kết nối, dễ dàng chia sẻ và truyền tải dữ liệu</li>
                <li className='my-2'>- Màn hình Full HD 14 inch hiển thị hình ảnh sắc nét, màu sắc sống động</li>
              </ul>
            </div>
          </div>
          <div className='col-span-5'>
            <div className='border-b border-gray-200 py-5'>
              <h2 className='text-2xl font-bold mb-3'>Laptop HP 240 G9 i3-1215U/8GB/256GB/Win11 (6L1X7PA)</h2>
              <div className='flex'>
                <Flex gap={'1'} mr={'8'}>
                  <StarIcon width={18} height={18} color='#DD4425' />
                  <StarIcon width={18} height={18} color='#DD4425' />
                  <StarIcon width={18} height={18} color='#DD4425' />
                  <StarIcon width={18} height={18} color='#DD4425' />
                  <StarIcon width={18} height={18} color='#DD4425' />
                </Flex>
                <Flex align={'center'} gap={'1'}>
                  <PlusCircledIcon color='#3A5BC7' />
                  <span className='text-sm text-[#3a5bc7]'>So sánh sản phẩm</span>
                </Flex>
              </div>
            </div>
            <div className='mt-5'>
              <Text as='div' size='6' mb={'3'} className='font-bold'>
                9.590.000đ
              </Text>
              <Flex gap={'4'} mb={'3'}>
                <Badge variant='solid' radius='large' color='red'>
                  -31%
                </Badge>
                <Text as='span' size='2' className='text-[#8f8f8f] font-medium line-through'>
                  13.990.000đ
                </Text>
              </Flex>
              <Badge mb={'7'} variant='outline' color='red'>
                Trả góp 0%
              </Badge>
              <div className='grid grid-cols-3 gap-3 mb-5'>
                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index}
                    className='border border-gray-200 transition-colors ease-in duration-200 text-center bg-white rounded-lg py-2 hover:border-[#fe0000] cursor-pointer'
                  >
                    <div className='text-sm font-medium'>Xám</div>
                    <div className='text-sm font-medium'>18.598.333đ</div>
                  </div>
                ))}
              </div>
              <div className='relative px-3 pb-3 pt-20 border border-red-700 mb-5'>
                <div className='absolute top-5 -left-3 right-1/3 text-white bg-[#fe0000] uppercase font-bold text-sm py-3 pl-7'>
                  Ưu đãi chỉ có tại nguyễn kim
                </div>
                <div className='block absolute top-[20px] right-[146px] border-x-transparent border-x-[16px] border-y-[#fe0000] border-y-[22px]'></div>
                <div className='block absolute -left-3 top-16 border-t-[12px] border-l-[12px] border-solid border-t-[#aa2d2d] border-l-transparent'></div>
                <div className='flex items-center gap-3 mb-3 text-sm font-medium'>
                  <span className='text-xs text-white w-5 h-5 flex items-center justify-center bg-[#fe0000] rounded-full'>
                    1
                  </span>
                  <p className=' max-w-[400px]'>Tặng túi hoặc ba lô đựng Laptop</p>
                </div>
                <div className='flex items-center gap-3 mb-3 text-sm font-medium'>
                  <span className='text-xs text-white w-5 h-5 flex items-center justify-center bg-[#fe0000] rounded-full'>
                    2
                  </span>
                  <p className=' max-w-[400px]'>
                    Nhập mã NKTET giảm 1% tối đa 300,000đ khi thanh toán qua VNPay (áp dụng tại cửa hàng Nguyễn Kim)
                  </p>
                </div>
                <div className='flex items-center gap-3 mb-3 text-sm font-medium'>
                  <span className='text-xs text-white w-5 h-5 flex items-center justify-center bg-[#fe0000] rounded-full'>
                    3
                  </span>
                  <p className=' max-w-[400px]'>Giảm 500.000đ khi thanh toán bằng thẻ tín dụng Sacombank</p>
                </div>
                <div className='flex items-center gap-3 mb-3 text-sm font-medium'>
                  <span className='text-xs text-white w-5 h-5 flex items-center justify-center bg-[#fe0000] rounded-full'>
                    4
                  </span>
                  <p className=' max-w-[400px]'>
                    Nhập mã NK2024 giảm 2% tối đa 200.000đ khi thanh toán qua MoMo (áp dụng tại cửa hàng Nguyễn Kim)
                  </p>
                </div>
                <div className='flex items-center gap-3 mb-3 text-sm font-medium'>
                  <span className='text-xs text-white w-5 h-5 flex items-center justify-center bg-[#fe0000] rounded-full'>
                    5
                  </span>
                  <p className=' max-w-[400px]'>Giảm 500.000đ khi thanh toán bằng thẻ tín dụng UOB</p>
                </div>
              </div>
              <div className='text-center bg-[#fe0000] rounded-lg py-2 text-white hover:opacity-70 cursor-pointer'>
                <div className='text-xl uppercase font-bold'>Mua ngay</div>
                <div className='text-xs font-medium'>Giao hàng tận nơi</div>
              </div>
              <div className='flex gap-5 mt-5'>
                <div className='flex-1 border border-[#fe0000] transition-colors ease-in duration-200 flex items-center justify-center bg-white rounded-lg py-2 text-[#fe0000] hover:bg-[#fe0000] hover:text-white cursor-pointer'>
                  <div className='text-xl uppercase font-bold'>thêm vào giỏ hàng</div>
                </div>
                <div className='flex-1 border border-[#fe0000] transition-colors ease-in duration-200 text-center bg-white rounded-lg py-2 text-[#fe0000] hover:bg-[#fe0000] hover:text-white cursor-pointer'>
                  <div className='text-xl uppercase font-bold'>Mua trả góp</div>
                  <div className='text-xs font-medium'>Chỉ có 1.598.333đ/tháng (6 tháng)</div>
                </div>
              </div>
              <div className='text-center mt-5'>
                Gọi đặt mua <span className='text-blue-700'>1800.6800</span> (08h - 21h)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
