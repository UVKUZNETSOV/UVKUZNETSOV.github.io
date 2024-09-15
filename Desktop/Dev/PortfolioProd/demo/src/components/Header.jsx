import home from '../assets/home-icon.svg'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <nav className="  bg-black h-20 text-white flex justify-between text-3xl px-5 sm:px-10 md:px-36 py-5">
      <a href="/" className='flex items-center'>
        <img className=" w-7" src={home} alt="" />
      </a>
      <NavLink className='hover:text-gray-300 transition-all' to = "/about" >about me</NavLink>
      {/* <a className=' hover:text-gray-300 transition-all' href="/about">about me</a> */}
      <NavLink className=' hover:text-gray-300 transition-all' href="/projects">my projects</NavLink>
      <NavLink className=' hover:text-gray-300 transition-all' href="/skills">skills</NavLink>
    </nav>
  )
}