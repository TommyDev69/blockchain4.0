import Image,{ StaticImageData } from 'next/image'
import React from 'react'
interface detail{
    id:number,
    image:StaticImageData,
    topic:string,
    content: string

}

interface dealing{
    featureResult:detail[]

}

export default function Features({featureResult}:dealing) {
  return (
    <div className='min-w-full flex flex-col mt-40'>
        <div className="w-full text-[16px]">
            <p className="text-[#bd24df] uppercase text-center">features</p>
        </div>
        <div className="w-full text-[12px] py-8 text-[#ffffff]">
            <p className="text-[#bd2d4df] uppercase text-center">The Most Trusted Platform for Digital Currency</p>
        </div>

         <div className="container w-4/12 mx-auto text-[10px] py- text-[#ffffff]">
            <p className="text-[#bd2d4df] uppercase text-center">Discover powerful tools designed to help you securely buy, sell, and manage your crypto assets — trusted by traders, investors, and businesses worldwide.Currency</p>
        </div>

        <div className=" flex flex-col md:flex-row gap-4 items-center container mx-auto  py-24 ">
        {featureResult.map(list =>(
            <div className="md:w-5/12 w-10/12 bg-[#0c1b44] px-6 py-6 rounded-lg" key={list.id}>
                <div className='w-18 py-4 rounded-full flex flex-col items-center bg-[linear-gradient(rgba(189,36,223,0.9),rgba(45,106,222,0.9)_97.675%)]'>
                    <Image src={list.image} alt='features' className='w-8' />
                </div>
                <div className="w-full font-bold text-[#cccccc] py-4">
                    <p className="capitalize">{list.topic}</p>
                </div>
                 <div className="w-11/12 text-[13px]  font- text-[#cccccc] py-4">
                    <p className="capitalize">{list.content}</p>
                </div>

            </div>
        ))}
        </div>
      
    </div>
  )
}
