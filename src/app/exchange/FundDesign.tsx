import Image,{ StaticImageData } from 'next/image'
import React from 'react'
interface FundData{
    id:number,
    image:StaticImageData,
    topic:string,
    set:string
}

interface Output{
    Funding:FundData[],
    Brand:StaticImageData,
    Arrow:FundData[],
    Wallet: FundData[],
    Close: () =>void
}
export default function FundDesign({Brand,Arrow,Wallet,Funding, Close}:Output) {
  return (
    <div className='mxs-auto bg-fuchsia-950  rounded-lg md:w-4/12 flex flex-col justifyd-center items-center py-4 px-12'>
        <div className="flex items-center w-full justify-end ">
            <div className='  rounded-lg border-2 border-[#ffff]'>
              {/* CLOSE BUTTON */}
            <button onClick={Close}  className="cursor-pointer text-white text-md px-2" > ✕ </button>
        </div>
        </div>
        <div className='flex justify-center py-4 w-52  items-center'>
           <Image src={Brand} alt="brand" />
        </div>
        <div className="flex items-center space-x-6 w-full ">
            <div className="w-full py-4 ">
                <button type="button"
                 className=' font-bold text-[#ffff] py-2 w-full capitalize flex justify-center rounded-xl border-2 border-[linear-gradient(45deg,rgba(189,36,223,0.2),rgba(45,106,222,0.2)_120.126%)]  bg-[linear-gradient(45deg,rgba(189,36,223,0.2),rgba(45,106,222,0.2)_120.126%)] bg-blend-multiply'>
                    transact
                 </button>
            </div>

            <div className="w-full py-4 ">
                <button type="button"
                 className=' font-bold p-2 text-[#ffff] w-full capitalize flex justify-center rounded-xl border-2 border-[linear-gradient(45deg,rgba(189,36,223,0.2),rgba(45,106,222,0.2)_120.126%)]  bg-[linear-gradient(45deg,rgba(189,36,223,0.2),rgba(45,106,222,0.2)_120.126%)] bg-blend-multiply'>
                    limit
                 </button>
            </div>
        </div>

        <div className="flex gap-6 items-center w-full my-4">
            <div className="w-[50%] rounded-2xl shadow-md shadow-[#cccc] bg-[#040D26] py-4 px-2 capitalize leading-5">
               <p className="text-[#ccc] text-[10px] font-bold">select</p>
               <p className='font-extralight text-[8px] text-[#ccc]'>source</p>
            </div>

             <div className="w-[50%] shadow-md shadow-[#cccc] rounded-2xl  bg-[#040D26] py-4 px-2 capitalize leading-5 ">
               <p className="text-[#ccc] text-[10px] font-bold">select</p>
               <p className='font-extralight text-[8px] text-[#ccc]'>destination</p>
            </div>
        </div>
        <div className="flex flex-col text-[#ffffff] justify-center items-center mx-4">  
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-[12px] font-extrabold">$</p>
                </div>
                <div>
                    <p className="text-[16px] font-extrabold">0</p>
                </div>
            </div>
        </div>

        <div className=" flex my-4 shadow-md capitalize shadow-[#cccc] rounded-2xl items-center bg-[#040D26] w-full">
            {Arrow.map(item => (
                <div className="flex items-center py-4" key={item.id}>
                    <div className="w-10">
                        <Image src={item.image} alt="arrow" />
                    </div>
                    <div className="flex flex-col item-center">
                    <div className='capital font-bold'>
                        <p className=' text-[#cccc] text-[14px]'>{item.topic}</p>
                    </div>

                    <div className='capital'>
                        <p className='font-light text-[#cccc] text-[10px]'>{item.set}</p>
                    </div>
                    </div>
                </div>
            ))}

        </div>

        <div className=" flex gap-6  w-full">
            {Funding.map(data =>(
                 <div className=" w-full py-4 shadow-md shadow-[#cccc] rounded-2xl  flex bg-[#040D26]" key={data.id}>
                    <div className=" gap-2 w-full flex   items-center">
                        <div className="w-10">
                            <Image src={data.image} alt="arror" />

                        </div>
                        <div className="w-full flex  flex-col text-[#ccc]">
                            <div className='capitalize font-bold'>
                                <p className='text-[14px]'>{data.topic}</p>
                            </div>
                             <div className='capitalize'>
                                <p className='text-[10px]'>{data.set}</p>
                            </div>
                        </div>
                    </div>
                 </div>
            ))}
        </div>

         <div className=" flex capitalize my-4 shadow-md shadow-[#cccc] rounded-2xl items-center bg-[#040D26] w-full">
            {Wallet.map(item => (
                <div className="flex items-center py-4" key={item.id}>
                    <div className="w-10">
                        <Image src={item.image} alt="arrow" />
                    </div>
                    <div className="flex flex-col item-center">
                    <div className='capital font-bold'>
                        <p className=' text-[#cccc] text-[14px]'>{item.topic}</p>
                    </div>

                    <div className='capital'>
                        <p className='font-light text-[#cccc] text-[10px]'>{item.set}</p>
                    </div>
                    </div>
                </div>
            ))}

        </div>
    </div>
  )
}
