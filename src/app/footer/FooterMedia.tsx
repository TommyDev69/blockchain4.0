import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface social{
    Media:StaticImageData[];
    Logo:StaticImageData;
}
export default function FooterMedia({Media, Logo}:social) {
  return (
        <div className='flex flex-col w-[70%] py-8'>
        <div className="pb-6">
            <Image src={Logo} alt='logo' width={100} height={100}/>
        </div>

        <div className="w-[60%]  ">
            <p className="text-[#ccc] text-[12px]">Cryptocurrency is a type of virtual currency that uses cryptography to secure transactions
                that are digitally recorded on a distributed ledger, such as a blockchain.
            </p>
        </div>
         <div className="flex space-x-4 py-8 ">

        {Media.map((social, index) =>(
            <div className=" flex items-center" key={index}>
                
                    <Image src={social} alt='social' width={30} height={30}  />
               
            </div>
        ))}
         </div>
        </div>
    )
}
