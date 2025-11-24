import React from 'react'
import tradeTv from '../../../public/images/trade/macbook.png'
import android from '../../../public/images/trade/android.svg'
import appStore from '../../../public/images/trade/appstore.svg'
import mac from '../../../public/images/trade/mac.svg'
import window from '../../../public/images/trade/windows.svg'

import Image from 'next/image'



export default function Trade() {
  return (
    <div className=' bg-[linear-gradient(45deg,rgba(189,36,223,0.2),rgba(45,106,222,0.2)_120.126%)]'>
      <div className="container flex flex-col md:flex-row mx-auto py-14">
       <div className=" flex justify-center w-full">
        <Image src={tradeTv} alt='trading' className='w-10/12 md:w-11/12' />
       </div>

       <div className="w-full">
        <div className="w-full text-[12px] text-center md:text-left py-10">
          <p className="capitalize">trade anytime, anywhere</p>
        </div>

         <div className="md:w-8/12 text-[14px] text-center md:text-left">
          <p className="text-[#cccc]">Access your crypto portfolio on the go with our secure, mobile-friendly platform. Whether you&#39;re at home or on the move, you can buy, sell, and manage assets 24/7 — no limits, no downtime.</p>
        </div>

        <div className="flex py-6 space-x-6 mx-auto w-8/12 md:w-full">
          <div >
            <Image  src={mac} className=' pey-4' alt='mac' />
          </div>
          <div >
            <Image  src={appStore}  alt='app store' />
          </div>
          <div >
            <Image  src={window} className='w-w24' alt='window' />
          </div>
          <div >
            <Image  src={android} className='w-w24' alt='android' />
          </div>
        </div>
       </div>
      </div>
    </div>
  )
}
