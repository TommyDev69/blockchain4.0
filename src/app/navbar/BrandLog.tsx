import React from 'react';
import Image, { StaticImageData } from "next/image";
import Brand from "../../../public/images/logo/logo.svg"
export default function BrandLog() {
  return (
    <div className='md:w-[25%] justify-center md:pls-16  flex items-center'>
       <Image src={Brand} alt="brandlogo" className='w-[70%]' />
    </div>
  )
}
