import { EnvelopeClosedIcon } from '@radix-ui/react-icons'
import { Button } from '@radix-ui/themes'

function Footer() {
  return (
    <footer>
      <div className='bg-[#f4f4f4]'>
        <div className='max-w-[1200px] m-auto py-6 grid grid-cols-3'>
          <div className='flex gap-5'>
            <img
              className='w-8 h-8'
              src='https://cdn.nguyenkimmall.com/images/companies/_1/img/icon-menu/icon_fb.png'
              alt=''
            />
            <img
              className='w-8 h-8'
              src='https://cdn.nguyenkimmall.com/images/companies/_1/img/icon-menu/icon_ytb.png'
              alt=''
            />
            <img
              className='w-8 h-8'
              src='https://cdn.nguyenkimmall.com/images/companies/_1/img/icon-menu/icon_zalo.png'
              alt=''
            />
          </div>
          <div className='flex items-center gap-3'>
            <EnvelopeClosedIcon height={24} width={24} color='gray' />
            <div>
              <div className='text-xs text-gray-500'>Bạn muốn là người sớm nhất nhận khuyến mãi đặc biệt?</div>
              <div className='text-xs font-medium'>Đăng ký ngay.</div>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <input
              type='email'
              id='helper-text'
              aria-describedby='helper-text-explanation'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5'
              placeholder='Thả email nhận ưu đãi'
            />
            <Button color='cyan' variant='soft'>
              <EnvelopeClosedIcon width='20' height='20' /> Đăng ký
            </Button>
          </div>
        </div>
      </div>
      <div className='max-w-[1200px] m-auto py-6 grid grid-cols-5'>
        <div>
          <h3 className='text-sm font-bold mb-3'>Thông tin công ty</h3>
          <ul className='text-xs flex flex-col gap-1'>
            <li>Giới thiệu công ty</li>
            <li>Quy chế hoạt động sàn TMĐT</li>
            <li>Hệ thống cửa hàng</li>
            <li>Mua hàng doanh nghiệp</li>
            <li>Tuyển dụng</li>
            <li>Liên hệ</li>
          </ul>
        </div>
        <div>
          <h3 className='text-sm font-bold mb-3'>Tìm kiếm hàng đầu</h3>
          <ul className='text-xs flex flex-col gap-1'>
            <li>Laptop</li>
            <li>Laptop</li>
            <li>Laptop</li>
            <li>Laptop</li>
            <li>Laptop</li>
            <li>Laptop</li>
          </ul>
        </div>
        <div>
          <h3 className='text-sm font-bold mb-3'>Chính sách</h3>
          <ul className='text-xs flex flex-col gap-1'>
            <li>Ưu đãi đối tác</li>
            <li>Điều kiện giao dịch</li>
            <li>Bảo vệ thông tin người dùng</li>
            <li>Bảo mật giao dịch của khách hàng</li>
            <li>Chính sách bảo hành</li>
            <li>Chính sách và quy định thanh toán</li>
            <li>Chính sách 30 ngày đổi mới</li>
          </ul>
        </div>
        <div>
          <h3 className='text-sm font-bold mb-3'>Hỗ trợ khách hàng</h3>
          <ul className='text-xs flex flex-col gap-1'>
            <li>Hướng dẫn mua hàng</li>
            <li>Hóa đơn điện tử</li>
            <li>Câu hỏi thường gặp</li>
            <li>Vận chuyển và giao nhận</li>
            <li>Phương thức thanh toán</li>
            <li>Tra cứu đơn hàng</li>
            <li>Bảng giá dịch vụ lắp đặt</li>
          </ul>
        </div>
        <div>
          <h3 className='text-sm font-bold mb-3'>Thông tin khác</h3>
          <ul className='text-xs flex flex-col gap-1'>
            <li>Tổng đài hỗ trợ miễn phí</li>
            <li>(Gọi mua - Góp ý - Bảo hành)</li>
            <li>
              <span className='text-red-600'>1800.6800</span> (8:00 - 21:00)
            </li>
            <li>
              Email: <span className='text-red-600'>NKare@nguyenkim.com</span>
            </li>

            <li>Kênh phản ánh vi phạm đạo đức kinh doanh</li>
            <li>- Đường dây nóng: 1800.1713 (08:00 - 21:00)</li>
            <li>- Email:</li>
            <li>crv.whistleblower@vn.centralretail.com</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
