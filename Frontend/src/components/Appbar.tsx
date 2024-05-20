import search from '../../public/icons/search.png'
import logo from '../../public/icons/logo.png.png'
import Edit from '../../public/icons/Edit.png'
import { Link } from 'react-router-dom'
import { Avatar } from './BlogCard'
import { useRecoilValue } from 'recoil'
import { currentUserNameQuery } from '../atoms/appbarAtoms'


const Appbar = () => {
    const user=useRecoilValue(currentUserNameQuery);
  return (
    <div className='flex px-10 justify-between h-16 border-b items-center'>
        <div className='flex gap-3'>
           <img className="w-8" src={logo} alt='logo'></img>
           <div className='font-bold text-xl flex flex-col justify-center'>
            Medium
           </div>
 
           <div className='relative  max-w-48'>
                <input  className='bg-slate-100 rounded-3xl pl-12 py-2 text-slate-600 
                focus:outline-none' type='text' placeholder='Search'/>
                <div className='absolute inset-y-0 left-0 top-2 pl-3'>
                    <img className='w-6' src={search} alt="" />
                </div>
           </div>
        </div>

        <div className='flex gap-6 items-center '>
            <Link to={'/publish'}>
            <div className='cursor-pointer font-normal text-slate-500 hover:text-black font-normal flex gap-2'>
                <div>
                    <img className='w-6' src={Edit} alt="Edit" />
                </div>
                <div>
                    Write
                </div>
            </div>
            </Link>
            <div>
                <Avatar name={user.name} size='big'/>
            </div>
            
        </div>
    </div>
  )
}

export default Appbar