import React from 'react'
import Image from 'next/image'

// interface CoinType {
//   id: string;
//   name: string;
//   image: string;
//   market_cap_rank: number;
//   current_price: number;
//   price_change_percentage_24h: number;
//   market_cap: number;
//     numb: number; // required!

// }

 interface tableRender{
  market_cap_rank: number,
   name: string,
   image: string,
   price:string,
 price_change_percentage_24h: number | string | null;
   market_cap: string,
   action: string,
  
 }
{/* compute safely (inside render or extract to a small helper) */}


 interface destructure{
    renderResult: tableRender[],
    setViewMore: () => void;
    viewMore: number
    
 }
export default function TableContent({ renderResult,viewMore,setViewMore}:destructure) {
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
              
              <th className="py-2 text-[16px]">#</th>
              <th className=" py-2 text-[15px]">NAME</th>
              <th className=" px-4 text-[15px] py-2">PRICE</th>
              <th className=" px-4 text-[15px] py-2">CHANGE24H</th>
              <th className=" px-4 text-[15px] py-2">MARKET CAP</th>
              <th className=" px-4 text-[15px] py-2">ACTION</th>



            </tr>
          </thead>

          <tbody>
            { renderResult.slice(0, viewMore).map(data =>(
              <tr key={data.market_cap_rank} className='text-[7px] md:text-[15px] text-[#ffffff]'>
                <td className="text-[#ffffff] px-4 pt-8 flex justvify-center items-center">{data.market_cap_rank}</td>
                
                <td className="boreder px-4 py-2 ">
                  <div className="w-full md:justify-center  flex items-center bg-aember-600">
                    {/* <div className='md:w-[20%] w-14 bge-fuchsia-500 flex justify-center  ' > */}
                      <Image src={data.image} alt={data.name} width={10}  height={10} className='md:w-[10%] w-8 pr-2' />
                    {/* </div> */}
                    <div>
                      <p className="text-[#ffffff]  md:text-[16px] text-[14px] capitalize">{data.name}</p>
                    </div>
                  </div>
                </td>
                
                <td className=" px-4 py-2 text-center md:text-[16px] text-[13px]  ">${data.price}</td>
                {(() => {
                  // handle number, numeric string, or strings with % sign like "2.34%"
                  const raw = data.price_change_percentage_24h;
                  const parsed = parseFloat(
                    (raw === null || raw === undefined) ? "0" : String(raw).replace("%", "").replace(/,/g, "")
                  );
                  const pct = Number.isFinite(parsed) ? parsed : 0;

                  const colorClass =
                    pct > 0 ? " border-green-600 flex flex-col rounded-2xl bg-green-600 text-[#ffffff]" :
                    pct < 0 ? "bg-red-400 flex flex-col rounded-2xl border- border-red-600 " :
                    "flex flex-col rounded-2xl text-gray-300";

                  return (
                    <td className={`px-4  text-center items-center border-2 mb-4 py-2 md:text-[16px] text-[13px] ${colorClass}`}>
                    {pct.toFixed(2)} 
                    </td>
                  );
                })()}

                <td className=" px-4 py-2  text-center md:text-[16px] text-[13px] ">{data.market_cap}</td>
                {(() => {
                  const raw = data.price_change_percentage_24h;

                  // safely convert to number
                  const parsed = parseFloat(
                    raw === null || raw === undefined
                      ? "0"
                      : String(raw).replace("%", "").replace(/,/g, "")
                  );

                  const pct = Number.isFinite(parsed) ? parsed : 0;

                  const action =
                    pct > 0 ? "Sell" :
                    pct < 0 ? "Buy" :
                    "Hold";

                  const color =
                    pct > 0 ? "text-red-400" :      // Sell = red
                    pct < 0 ? "text-green-400" :    // Buy = green
                    "text-gray-300";

                  return (
                    <td className={`px-4 py-2 text-center md:text-[16px] text-[13px] ${color}`}>
                      {action}
                    </td>
                  );
                })()}

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='flex justify-center'>
        {viewMore < renderResult.length &&(

                <button type="button" onClick={setViewMore} className="  rounded-lg borwder-2 borcder-[rgba(189, 36, 223, 10)] bcg-[linear-gradient(90deg,rgba(189,36,223,0.9),rgba(45,106,222,0.9)_97.15%)] ;">
                    <p className="capitalize text-white px-6 cursor-pointer  py-4 text-[8px] md:text-[14px] font-extrabold">Veiw more</p>
                </button>
        )}
            </div>
    </div>
  )
}
