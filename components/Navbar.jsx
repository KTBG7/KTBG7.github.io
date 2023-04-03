import React from 'react'
import Image from 'next/image'
import logo from '../public/logo_transparent.png'
import Link from 'next/link'
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react'

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle((prev) => !prev);
  };
  return (
    <nav className='h-20 z-30 bg-white w-full flex justify-between items-center font-montserratsemi drop-shadow-lg px-8 lg:px-24'>
        <Link href="/">
            <Image src={logo} width={66} alt="Kevin's Logo" />
        </Link>
        <ul className='text-lg hidden lg:flex'>
            <li><Link href="/#welcome" className='py-8 px-4'>Home</Link></li>
            <li><Link href="/#About" className='py-8 px-4'>About</Link></li>
            <li><Link href="/#Projects" className='py-8 px-4'>Projects</Link></li>
            <li><a href="Ibanez_Kevin_Resume.pdf" download='Ibanez_Kevin_Resume.pdf' className='py-8 px-4'>Resume</a></li>
            <li><Link href="/#Contact" className='py-8 px-4'>Contact</Link></li>
        </ul>
        <div className='lg:hidden h-16 flex flex-1 justify-end items-center'>
        {toggle ? (
          <RxHamburgerMenu
            className='w-8 h-8 min-[550px]:w-12 min-[550px]:h-12 mr-8'
            onClick={handleClick}
          />
        ) : (
          <AiOutlineClose
            className='w-8 h-8 min-[550px]:w-12 min-[550px]:h-12 mr-8'
            onClick={handleClick}
          />
        )}
        <div
          className={`${
            toggle ? 'hidden' : 'flex'
          }  bg-white w-48 shadow-md text-lg justify-center absolute top-20 right-0 mx-4 my-2 min-[440px]:my-8 min-[440px]:mx-8 min-w-[140px] text-center rounded-xl sidebar`}
        >
          <ul className='flex flex-col text-black w-full p-6'>
          <li><Link href="/#welcome" className='p-2 w-full block'>Home</Link></li>
            <li><Link href="/#About" className='p-2 w-full block'>About</Link></li>
            <li><Link href="/#Projects" className='p-2 w-full block'>Projects</Link></li>
            <li><Link href="/Resume" className='p-2 w-full block'>Resume</Link></li>
            <li><Link href="/#Contact" className='p-2 w-full block'>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar