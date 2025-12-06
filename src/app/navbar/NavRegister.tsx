'use client'

// import { useRouter } from "next/router"

import { useRouter } from "next/navigation"

// import { useRouter } from "next/navigation";

export default function NavRegister() {
  const router = useRouter()
 

  return (
    <div className='hidden md:flex gap-4 items-center justify-center w-[25%]'>
        <div className="">
                <button type="button" onClick={() => router.push("/navbar/SignUpProcess")}  className=" rounded-lg borwder-2 border-[rgba(189, 36, 223, 10)] bg-[linear-gradient(90deg,rgba(189,36,223,0.9),rgba(45,106,222,0.9)_97.15%)] ;">
                    <p className="capitalize text-white  px-6  py-4 text-[8px] font-extrabold lg:text-[10px] ">sign up</p>
                </button>
            </div>

             <div className="">
                <button type="button" onClick={() => router.push("/navbar/SignInProcess")} className=" rounded-lg borwder-2 border-[rgba(189, 36, 223, 10)] bg-[linear-gradient(90deg,rgba(189,36,223,0.9),rgba(45,106,222,0.9)_97.15%)] ;">
                    <p className="capitalize text-white px-6   py-4 text-[8px] lg:text-[10px] font-extrabold">sign in</p>
                </button>
            </div>

    </div>
  )
}
