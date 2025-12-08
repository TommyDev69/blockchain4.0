import Image,{ StaticImageData } from 'next/image'
import React from 'react'

interface Content{
    id:number,
    image:StaticImageData
    navigate?: string,
    content:string
}

interface File{
    title:string,
    Contact: Content[]
}
export default function FooterContact({Contact,title}:File) {
  return (
    <div className='w-[50%] py-8'>
            <div className="-full pb-6">
               <p className="capitalize text-[16px] text-[#ffffff] font-bold ">{title}</p>
            </div>
    
            {Contact.map(data =>(
                <div className="flex flex-row items-center py-4 text-[#ccc]" key={data.id}>
                    <div className="flex space-x-2 md:text-[12px] text-[8px]">
                        <Image src={data.image} alt='image' />
                       
                        {data.navigate ?(
                            <a href={data.navigate} className='hover:text-[#7dfc0766] font-bold' target={data.navigate.startsWith("http") ? "_blank" : "_self"} > {data.content} </a>
                        ):(
                            <p className="capitalize">{data.content}</p>
                        )}
                    </div>
                </div>
            ))}
          
        </div>
  )
}
