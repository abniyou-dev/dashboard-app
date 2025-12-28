import { BiCart, BiMoney } from 'react-icons/bi';
import { GrProductHunt } from 'react-icons/gr';
import { RiDashboardHorizontalFill, RiShoppingBagLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Setting from '../pages/Setting';
import { FcSettings } from 'react-icons/fc';

function SideBar() {
  return (
    <div
          className='sidebar w-50 h-screen bg-neutral-800 shrink-0 grow-0'>
            <span
              className='text-4xl bg-[#333] p-4 rounded-full'>
                <Link><BiCart /></Link></span>
            <ul
              className='space-y-5 w-full'>
              <Link to={'/'}>
                <li>
                  <span><RiDashboardHorizontalFill /></span>
                  <span>Dashboard</span>
                </li>
              </Link>
              <Link to="/orders">
                <li>
                <span><RiShoppingBagLine /></span>
                <span>Orders</span>
              </li>
              </Link>
              <Link to="/products">
                <li>
                <span><GrProductHunt /></span>
                <span>Products</span>
              </li>
              </Link>
              <Link to="/setting">
                <li>
                <span><FcSettings /></span>
                <span>Setting</span>
              </li>
              </Link>
            </ul>
        </div>
  )
}

export default SideBar