import React from 'react'
import Image, { StaticImageData} from "next/image";
import PlayinSection from './PlayinSection';

// interface DataObj{
//     id:number;
//     photo: StaticImageData
// }

interface remainData{
    Photo: StaticImageData[];
    title:string;
    // Details: DataObj[];
    Content:string

}
export default function BodyContent({Photo,title, Content}:remainData) {
  return (
    

    <div className=' grid grid-cols-1 justify-center w-11/12 md:grid-cols-2 containeer mx-auto items-center'>
        
        <div className='lg:grid-cols-7 md:grid-cols-2 '>
         
          <div className="  flex flex-col justifye-end items-end pb-w16">
              
                <div className=" text-white  pvb-4 md:w-9/12 sm:leading-snug leading-tight md:ml-[130px] ">
                  <p className='font-extrabold font-momo text-[34px] md:text-[20px]  lg:text-[45px]   text-center md:text-left '>{title}</p>
              </div>
              <div className="w-fnull text-[#ffffff] flex juffstify-centfer items-end w-9/12 py-6">
              <p className="leadsing-7 md:w-full md:text-[10px] text-[13px]  w-9/12 font-lighter md:text-left   text-center">{Content}</p>
              </div>
          </div>

            <PlayinSection Photos = {Photo} />
        </div>
           <div className="lg:grids-cols-4 ">

        <div className="grid justisfy-center md:justify-ensd items-end ">
            <Image src={Photo[0]} alt="Banner_image"  />
        </div>
           </div>




      
    </div>
   
  )
}
