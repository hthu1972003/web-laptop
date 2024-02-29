import {
  CheckCircledIcon,
  CubeIcon,
  DotsHorizontalIcon,
  HamburgerMenuIcon,
  IdCardIcon,
  MagnifyingGlassIcon,
  MobileIcon,
  PersonIcon,
  ReaderIcon,
  RocketIcon,
  SketchLogoIcon
} from '@radix-ui/react-icons'
import { Box, DropdownMenu, IconButton, TextField } from '@radix-ui/themes' // import from @radix-ui/react-icons

function Header() {
  return (
    <header className='h-[132px]'>
      <div className='bg-[#fe0000] h-[88px] fixed top-0 left-0 right-0 z-20'>
        <div className='max-w-[1200px] h-full m-auto flex items-center gap-8'>
          <img
            className='cursor-pointer'
            src='https://www.nguyenkim.com/images/companies/_1/html/2017/T11/homepage/Logo_NK.svg'
            alt=''
          />
          <div className='flex-1'>
            <TextField.Root radius='full'>
              <TextField.Slot>
                <MagnifyingGlassIcon height='24' width='24' />
              </TextField.Slot>
              <TextField.Input placeholder='Bạn cần gì hôm nay?' size='3' />
              <TextField.Slot>
                <IconButton size='1' variant='ghost'>
                  <DotsHorizontalIcon height='14' width='14' />
                </IconButton>
              </TextField.Slot>
            </TextField.Root>
          </div>
          <div className='flex gap-4'>
            <div className='cursor-pointer flex gap-2 items-center justify-center text-white'>
              <CubeIcon height={24} width={24} />
              <div className='text-sm font-medium'>Giỏ hàng</div>
            </div>
            <div className='cursor-pointer flex gap-2 items-center justify-center text-white'>
              <CheckCircledIcon height={24} width={24} />
              <div className='text-sm font-medium'>Tra cứu đơn hàng</div>
            </div>
            <div className='cursor-pointer flex gap-2 items-center justify-center text-white'>
              <PersonIcon height={24} width={24} />
              <div className='text-sm font-medium'>Tài khoản</div>
            </div>
            <div className='cursor-pointer flex gap-2 items-center justify-center text-white'>
              <MobileIcon height={24} width={24} />
              <div className='text-sm font-medium'>Gọi mua: 1800.6800</div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white h-[44px] fixed top-[88px] left-0 right-0 z-20  border-b border-red-100'>
        <div className='max-w-[1200px] h-full m-auto flex items-center'>
          <div className='flex-1 cursor-pointer border-r border-gray-300'>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Box className='flex items-center justify-center hover:text-red-400 text-sm gap-3'>
                  <HamburgerMenuIcon color='red' height={20} width={20} />
                  Danh mục sản phẩm
                </Box>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content className='min-w-[230px]'>
                <DropdownMenu.Item>Edit</DropdownMenu.Item>
                <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>Archive</DropdownMenu.Item>
                <DropdownMenu.Sub>
                  <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
                  <DropdownMenu.SubContent>
                    <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
                    <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
                  </DropdownMenu.SubContent>
                </DropdownMenu.Sub>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>Share</DropdownMenu.Item>
                <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>Delete</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
          <div className='flex-1 cursor-pointer border-r border-gray-300'>
            <Box className='flex items-center justify-center hover:text-red-400 text-sm gap-3'>
              <RocketIcon color='red' height={20} width={20} />
              Giao lắp chuyên nghiệp
            </Box>
          </div>
          <div className='flex-1 cursor-pointer border-r border-gray-300'>
            <Box className='flex items-center justify-center hover:text-red-400 text-sm gap-3'>
              <IdCardIcon color='red' height={20} width={20} />
              Bảo hành nhanh gọn
            </Box>
          </div>
          <div className='flex-1 cursor-pointer border-r border-gray-300'>
            <Box className='flex items-center justify-center hover:text-red-400 text-sm gap-3'>
              <ReaderIcon color='red' height={20} width={20} />
              Tổng hợp khuyến mãi
            </Box>
          </div>
          <div className='flex-1 cursor-pointer'>
            <Box className='flex items-center justify-center hover:text-red-400 text-sm gap-3'>
              <SketchLogoIcon color='red' height={20} width={20} />
              Bán hàng doanh nghiệp
            </Box>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
