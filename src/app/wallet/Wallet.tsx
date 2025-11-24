import React from 'react'

export default function Wallet() {
  return (
    <div className='wallet flex flex-col bg-[#132259] items-center justify-center md:my-20 my-10'>
        <div className="md:container md:mx-auto flex flex-col  items-center text-center">
           <p className="text-[#ffffff]">A Simple, Secure Way to Buy and Sell Cryptocurrency</p>
        </div>
        <div className="container w-11/12 md:w-[34%] pt-6 pb-2   mx-auto text-center">
          <p className="text-[#ffffff] text-[14px]">Buy, sell, and manage digital assets with confidence on a platform built for speed, security, and simplicity — whether &#39; a beginner or a seasoned trader.</p>
        </div>

        <div className=" w-full flex justify-center py-4 ">
            <button type="button" className="  rounded-lg  border-[rgba(189, 36, 223, 0.6)] bg-[linear-gradient(90deg,rgba(189,36,223,0.8),rgba(45,106,222,0.8)_97.15%)] ;">
                <p className="capitalize text-white md:px-8 px-2  py-4 text-[12px] md:text-[18px]">connect-wallet</p>
            </button>
        </div>
    </div>
  )
}
