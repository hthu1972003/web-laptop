import { Link } from 'react-router-dom'

function Cart() {
  return (
    <div className='bg-neutral-100 py-8'>
      <div className='container'>
        <div className='overflow-auto'>
          <div className='min-w-[1000px]'>
            <div className='grid grid-cols-12 rounded-sm bg-white py-5 px-9 text-sm capitalize text-gray-500 shadow'>
              <div className='col-span-6'>
                <div className='flex items-center'>
                  <div className='flex flex-shrink-0 items-center justify-center pr-3'>
                    <input type='checkbox' className='h-3 w-3 accent-orange' />
                  </div>
                  <div className='flex-grow text-black'>Sản phẩm</div>
                </div>
              </div>
              <div className='col-span-6'>
                <div className='grid grid-cols-5 text-center'>
                  <div className='col-span-2'>Đơn giá</div>
                  <div className='col-span-1'>Số lượng</div>
                  <div className='col-span-1'>Số tiền</div>
                  <div className='col-span-1'>Thao tác</div>
                </div>
              </div>
            </div>
            <div className='my-3 rounded-sm bg-white p-5 shadow'>
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className='mb-5 grid grid-cols-12 rounded-sm border border-gray-200 bg-white py-5 px-4 text-center text-sm text-gray-500 first:mt-0'
                >
                  <div className='col-span-6'>
                    <div className='flex'>
                      <div className='flex flex-shrink-0 items-center justify-center pr-3'>
                        <input type='checkbox' className='h-3 w-3 accent-orange' />
                      </div>
                      <div className='flex-grow'>
                        <div className='flex'>
                          <Link className='h-20 w-20 flex-shrink-0' to={''}>
                            <img
                              alt={''}
                              src={
                                'https://cdn.nguyenkimmall.com/images/thumbnails/250/250/detailed/708/10048356-laptop-macbook-air-m1-13-3-inch-256gb-mgn63sa-a-xam-01.jpg'
                              }
                            />
                          </Link>
                          <div className='flex-grow px-2 pt-1 pb-2'>
                            <Link to={''} className='line-clamp-2'>
                              Laptop MacBook Air M1 13 inch 256GB MGN63SA/A Xám
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-span-6'>
                    <div className='grid grid-cols-5'>
                      <div className='col-span-2'>
                        <div className='flex items-center justify-center'>
                          <span className='text-gray-300 line-through'>29.990.000₫</span>
                          <span className='ml-3'>27.990.000₫</span>
                        </div>
                      </div>
                      <div className='col-span-1'>
                        <div className='flex items-center '>
                          <button className='flex h-8 w-8 items-center justify-center rounded-l-sm border border-gray-300 text-gray-600'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth={1.5}
                              stroke='currentColor'
                              className='h-4 w-4'
                            >
                              <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 12h-15' />
                            </svg>
                          </button>
                          <input
                            className='h-8 w-14 border-t border-b border-gray-300 p-1 text-center outline-none'
                            type='text'
                          />
                          <button className='flex h-8 w-8 items-center justify-center rounded-r-sm border border-gray-300 text-gray-600'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth={1.5}
                              stroke='currentColor'
                              className='h-4 w-4'
                            >
                              <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className='col-span-1'>
                        <span className='text-orange'>27.990.000₫</span>
                      </div>
                      <div className='col-span-1'>
                        <button className='bg-none text-black transition-colors hover:text-orange'>Xóa</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='sticky bottom-0 z-10 mt-8 flex flex-col rounded-sm border border-gray-100 bg-white p-5 shadow sm:flex-row sm:items-center'>
          <div className='flex items-center'>
            <div className='flex flex-shrink-0 items-center justify-center pr-3'>
              <input type='checkbox' className='h-3 w-3 accent-orange' />
            </div>
            <button className='mx-3 border-none bg-none'>Chọn tất cả</button>
            <button className='mx-3 border-none bg-none'>Xóa</button>
          </div>

          <div className='mt-5 flex flex-col sm:ml-auto sm:mt-0 sm:flex-row sm:items-center'>
            <div>
              <div className='flex items-center sm:justify-end'>
                <div>Tổng thanh toán (0 sản phẩm):</div>
                <div className='ml-2 text-2xl text-orange'>₫138000</div>
              </div>
              <div className='flex items-center text-sm sm:justify-end'>
                <div className='text-gray-500'>Tiết kiệm</div>
                <div className='ml-6 text-orange'>₫138000</div>
              </div>
            </div>
            <button className='mt-5 rounded-md flex h-10 w-52 items-center justify-center bg-[#fe0000] text-sm uppercase text-white hover:bg-red-600 sm:ml-4 sm:mt-0'>
              Mua hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
