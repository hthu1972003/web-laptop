import { ChevronRightIcon } from '@radix-ui/react-icons'
import { Flex, TextField } from '@radix-ui/themes'

function Register() {
  return (
    <div className='bg-white py-16'>
      <div className='max-w-[600px] form-shadow px-12 py-8 m-auto'>
        <h2 className='uppercase text-lg font-medium text-center mb-7 cursor-pointer'>
          <span className='text-[#ed3324] border-b-2 py-2 px-4 border-b-[#ed3324]'>Đăng ký</span>
        </h2>
        <form action=''>
          <Flex direction='column' gap='4'>
            <TextField.Input radius='small' size='3' placeholder='Họ và Tên' />
            <TextField.Input radius='small' size='3' placeholder='Số điện thoại' />
            <TextField.Input radius='small' size='3' placeholder='Email' />
            <TextField.Input radius='small' size='3' placeholder='Mật khẩu' />
            <TextField.Input radius='small' size='3' placeholder='Nhập lại mật khẩu' />
          </Flex>
          <button className='bg-[#ec2127] flex items-center justify-center w-full p-4 rounded-md hover:opacity-80 mt-8'>
            <span className='text-white font-normal text-xl uppercase'>Đăng ký</span>
            <ChevronRightIcon width={25} height={25} color='white' />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
