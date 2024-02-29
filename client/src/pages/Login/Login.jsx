import { ChevronRightIcon } from '@radix-ui/react-icons'
import { Flex, TextField } from '@radix-ui/themes'

function Login() {
  return (
    <div className='bg-white py-16'>
      <div className='max-w-[600px] form-shadow px-12 py-8 m-auto'>
        <h2 className='uppercase text-lg font-normal text-center mb-7 cursor-pointer'>
          <span className='text-[#ed3324] border-b-2 py-2 px-4 border-b-[#ed3324]'>Đăng nhập</span>
        </h2>
        <form action=''>
          <Flex direction='column' gap='4'>
            <TextField.Input radius='small' size='3' placeholder='Email/Số điện thoại' />
            <TextField.Input radius='small' size='3' placeholder='Nhập mật khẩu' />
          </Flex>
          <div className='flex text-sm justify-between items-center mt-3'>
            <label className='flex items-center cursor-pointer'>
              <input type='checkbox' className='mr-2' />
              <span className='text-gray-500'>Ghi nhớ tài khoản</span>
            </label>
            <div href='#' className='text-[#ec2127] hover:underline cursor-pointer'>
              Quên mật khẩu?
            </div>
          </div>
          <button className='bg-[#ec2127] flex items-center justify-center w-full p-4 rounded-md hover:opacity-80 mt-8'>
            <span className='text-white font-medium text-xl uppercase'>Đăng nhập</span>
            <ChevronRightIcon width={25} height={25} color='white' />
          </button>
        </form>
        <div className='relative py-6 flex justify-center'>
          <div className=' flex justify-center w-40 bg-white relative z-10'>Hoặc</div>
          <div className='absolute w-full h-[4px] border-y border-y-[#ced4da] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
        </div>
        <button className='flex items-center justify-start w-full p-4 rounded-md hover:opacity-80 bg-[#3b5998] mb-5'>
          <img
            className='w-8 h-8 mr-4 rounded-lg'
            src='https://www.nguyenkim.com/images/login_form/icon-fb.svg'
            alt=''
          />
          <span className='text-white font-normal text-xl uppercase'>Đăng nhập bằng Facebook</span>
        </button>
        <button className='flex items-center justify-start w-full p-4 rounded-md hover:opacity-80 bg-[#3f81f9]'>
          <img
            className='w-8 h-8 mr-4 rounded-lg'
            src='https://www.nguyenkim.com/images/login_form/icon-gg.png'
            alt=''
          />
          <span className='text-white font-normal text-xl uppercase'>Đăng nhập bằng Google</span>
        </button>
      </div>
    </div>
  )
}

export default Login
