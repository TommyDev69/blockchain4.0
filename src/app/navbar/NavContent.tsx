import React from 'react'
import Link from 'next/link'
export default function NavContent() {
  return (
    <div className='w-[60%] hidden md:flex items-center justivfy-center justify-center'>
        <ul className='list-none flex justify-center w-full upperxcase capitalize'>
            <div className='py-4'>

            <Link href='/'><li className='font-bold nav'>home</li></Link>
            <a href='#exchange'><li  className='nav'>Exchange</li></a>
            <a href='#wallet'><li  className='nav'>Wallet</li></a>
            <a href='#faq'><li  className='nav'>FAQ</li></a>
            <a href='#contact'><li  className='nav'>Contact us</li></a>
            </div>
            

        </ul>
      
    </div>
  )
}
