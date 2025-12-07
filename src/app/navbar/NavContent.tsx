import React from 'react'
import NavRegister from './NavRegister'
// import Link from 'next/link'
export default function NavContent() {
  return (
    <div className='w-full hidden md:flex items-center   justify-center'>
        <ul className='list-none flex justify-center w-full upperxcase capitalize'>
            <div className='py-4 md::mr-10 lg:mr-0 '>

            <a href='#home'><li className='font-bold nav'>home</li></a>
            <a href='#exchange'><li  className='nav'>Exchange</li></a>
            <a href='#wallet'><li  className='nav'>Wallet</li></a>
            <a href='#faq'><li  className='nav'>FAQ</li></a>
            <a href='#contact'><li  className='nav'>Contact us</li></a>
            </div>
        </ul>
        <NavRegister />
      
    </div>
  )
}
