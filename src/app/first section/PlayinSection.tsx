import Image,{ StaticImageData } from "next/image";

interface PlayArr{
    Photos: StaticImageData[]
}



const PlayinSection = ({Photos}:PlayArr) => {
    return ( 
        <section className=" flex gap-x-5 items-center md:justify-normal justify-center flex-nowrap flex-row container mx-auto w-6/12">
        {/* <div className="bgd-white  "> */}
            <div className="">
                <button type="button" className=" rounded-lg borwder-2 border-[rgba(189, 36, 223, 0.5)] bg-[linear-gradient(90deg,rgba(189,36,223,0.5),rgba(45,106,222,0.5)_97.15%)] ;">
                    <p className="capitalize text-white md:px-8 px-2  py-4 text-[12px] md:text-[18px]">get started</p>
                </button>
            </div>

            <div className="">
                <Image src={Photos[1]} alt="video icon" />
            </div>

        </section>
     );
}
 
export default PlayinSection;
