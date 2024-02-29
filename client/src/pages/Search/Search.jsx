import { IdCardIcon, MixerHorizontalIcon } from '@radix-ui/react-icons'
import { Badge, Box, Card, Inset, Strong, Text } from '@radix-ui/themes'

function Search() {
  return (
    <div className='bg-[#f5f6f8] py-2'>
      <div className='max-w-[1200px] h-full m-auto'>
        <div className='bg-white p-3 rounded-lg overflow-hidden border border-gray-200 mb-3'>
          <div className='flex pb-4 border-b border-b-gray-200 gap-5'>
            <div className='text-sm'>
              Tìm thấy <span className='text-lg text-red-600'>361</span> sản phẩm cho từ khóa laptop
            </div>
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
                  <Box className='flex items-center gap-4'>
                    <Text as='p' size='2' className='text-[#8f8f8f] font-medium line-through'>
                      25.990.000đ
                    </Text>
                    <Badge variant='solid' radius='large' color='red'>
                      -25%
                    </Badge>
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

export default Search
