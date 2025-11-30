import React from 'react'
interface Content{
    title:string,
    Nav: string[]
}
export default function FooterContent({title, Nav}:Content) {
  return (
    <div className='w-[30%] py-8'>
        <div className="text-[16px] font-bold pb-6">
           <p className="capitalize text-[#ffffff]">{title}</p>
        </div>

        {Nav.map(( data,index) =>(
            <div className="flex flex-row cursor-pointer  hover:text-f " key={index}>
                <p className="capitalize text-[12px] text-[#ccc] py-2  hover:hover:text-[#7dfc0766] font-bold ">{data}</p>
            </div>
        ))}
      
    </div>
  )
}
