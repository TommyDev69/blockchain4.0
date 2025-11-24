import Image, { StaticImageData } from 'next/image'
import React from 'react'
 interface tableRender{
   id: number,
   name: string,
   image: StaticImageData,
   price:string,
   change:string,
   marketCap: string,
   action: string,
   numb:number
 }

 interface destructure{
    renderResult: tableRender[],
    // photo:StaticImageData
 }
export default function TableContent({ renderResult}:destructure) {
  return (
    <div className='flex flex-col bg-[#132259] md:w-11/12 lg:container md:mx-auto mt-24 md:px-5 px-4 py-10 '>

          <div className="w-full text-[15px] md:text-[18px] text-[#ffffff]">
            <p className="capitalize">market trend live stream</p>
          </div>
        <div className="relative overflow-x-auto pb-4">
          {/* <div className="absolute right-0 top-0 w-10 h-full pointer-events-none bg-gradient-to-l from-[#132259] to-transparent"></div> */}

                  <table className="w-56 md:min-w-full min-w-[600px]  border-[#040D26] border-2 px-6h overflow-x-auto">
                    <thead className="bg-[#040D26] text-[#ffffff]">
                      <tr className='md:text-[18px] text-[14px]' >
                        
                        <th className="py-2">#</th>
                        <th className=" py-2">NAME</th>
                        <th className=" px-4 py-2">PRICE</th>
                        <th className=" px-4 py-2">CHANGE24H</th>
                        <th className=" px-4 py-2">MARKET CAP</th>
                        <th className=" px-4 py-2">ACTION</th>



                      </tr>
                  </thead>

              <tbody>
                { renderResult.map(data =>(
                <tr key={data.id} className='text-[7px] md:text-[15px] text-[#ffffff]'>
                  <td className="text-[#ffffff] px-4 pt-8 flex justify-center items-center">{data.numb}</td>
                  
                  <td className="boreder px-4 py-2 ">
                    <div className="w-[90%] mx-auto md:pl-14 pl-0  flex items-center">
                      <Image src={data.image} alt={data.name} className='md:w-[15%] w-12 ' />
                      <p className="text-[#ffffff]  md:text-[16px] text-[13px] capitalize">{data.name}</p>
                    </div>
                  </td>
                  
                  <td className=" px-4 py-2 text-center md:text-[16px] text-[13px]  ">{data.price}</td>
                  <td className=" px-4 py-2 text-center md:text-[16px] text-[13px] ">{data.change}</td>
                  <td className=" px-4 py-2  text-center md:text-[16px] text-[13px] ">{data.marketCap}</td>
                  <td className=" px-4 py-2  text-center md:text-[16px] text-[13px] ">{data.action}</td>

                </tr>
            ))}
              </tbody>
                  </table>
        </div>
    </div>
  )
}
