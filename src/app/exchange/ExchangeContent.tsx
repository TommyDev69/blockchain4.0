import React from 'react'
import arrow from '../../../public/images/icons/bg-arrow.svg'
import Image,{ StaticImageData } from 'next/image';

interface trading{
    id: number;
    Icon:StaticImageData;
    Topic:string;
    content:string
}

interface tradingProps{
    Title:string;
    Result:trading[]
      onSelect?: (id: number) => void; // New prop
}
export default function ExchangeContent({Title, Result,onSelect}:tradingProps) {
  return (
    <div>
      <article className='w-full pb-6 '>
        <p className="text-[#ffffff] text-[28px] capitalize font-bold flex flex-col justify-center items-center">{Title}</p>
        <section className='flex justify-center w-5/12 text-[14px] text-center  mx-auto items-center'>Getting started with crypto is simple. create account, verify your identity, and start buying, selling, or accepting digital currencies in just a few click-- all on a secure and intuitive platform.</section>
      </article>
      <div className="flex  flex-col md:flex-row container   w-9/12 mx-auto relative  md:gap-4">

      {Result.map(dataItem =>(

      <div 
      className="container w-10/12 flex  mx-auto md:mx-0  flex-col  my-16  bg-[#040D26] relative rounded-lg  hover:border-fuchsia-900 hover:border-2 hover:transition-transform hover:scale-105 hover:ease-in-out hovefr:mb-5 hover:duration-300 hover:gap-4" 
      key={dataItem.id} onClick={() => onSelect && onSelect(dataItem.id)}>
        <div className="flex flex-col items-center gap-2">
           <div className=" md:bottom-[150px] bottom-[180px] w-[20%] absolute  flex items-center justify-center p-4 rounded-full  bg-[linear-gradient(45deg,rgb(189,36,223),rgb(45,106,222)_97.15%)]">
             <Image src={dataItem.Icon} alt="trade_icon" className="" />
           </div>
           <div className="w-full mt-6  pl-12 ">
            <Image src={arrow} alt="arrow" className="w-28" />
           </div>
            <div className="flex flex-col justify-center w-[9d0%] py-4 px-4 items-center">
                <p className="text-white font-semibold text-[16px] py-3 capitalize">{dataItem.Topic}</p>
                <p className="text-white/80 text-center text-[12px]">{dataItem.content}</p>
            </div>
        </div>
        </div>

      ))}
</div>
    </div>
  )
}
