import React from 'react'
import Image from 'next/image'
import logo from '@/public/assets/Images/logo.png'
import { SideMenu } from './SideMenu'

export default function Navbar() {

  return (
    <nav className="fixed top-0 z-[999] flex items-center justify-between p-4 w-full bg-navbg bg-blur-md">
      <div className="z-[99999]">
        <SideMenu />
      </div>
      <div className="flex justify-center items-center text-center">
      <Image
          src={logo}
          alt="logo"
          placeholder="blur"
          quality={100}
          style={{
            objectFit: 'cover',
            position: 'relative',
            height: '50px',
            width: '80px'
            }}
        />
      </div>
      <div className='flex justify-center items-center text-cemter md:hidden'>
          <a className='block ml-[40px] p-[8px_16px] transition ease-in duration-300 decoration-none backdrop-blur-md bg-white/30 hover:bg-black/5 rounded-[18px] text-[12px]' href=''> CONFIGURATOR </a>
      </div>
    </nav>  
  )
}
