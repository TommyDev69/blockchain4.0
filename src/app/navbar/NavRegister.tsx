'use client'

import Link from "next/link"
// import { useRouter } from "next/router"

import { useRouter } from "next/navigation"

// import { useRouter } from "next/navigation";

export default function NavRegister() {
  const router = useRouter()
 

  return (
    <div className='hidden md:flex gap-2 items-center justify-center w-[40%] pl-16 pr-2'>
        <div className="">
                <Link href="/navbar/SignUpProcess"><button type="button" className=" rounded-lg w-28 borwder-2 border-[rgba(189, 36, 223, 10)] bg-[linear-gradient(90deg,rgba(189,36,223,0.9),rgba(45,106,222,0.9)_97.15%)] ;">
                    <p className="capitalize text-white  px-6  py-4 text-[8px] font-extrabold lg:text-[10px] ">sign up</p>
                </button></Link>
            </div>

             <div className="">
                <Link href="/navbar/SignInProcess"> <button type="button" className=" rounded-lg w-28 borwder-2 border-[rgba(189, 36, 223, 10)] bg-[linear-gradient(90deg,rgba(189,36,223,0.9),rgba(45,106,222,0.9)_97.15%)] ;">
                    <p className="capitalize text-white px-6   py-4 text-[8px] lg:text-[10px] font-extrabold">sign in</p>
                </button></Link>
            </div>

    </div>
  )
}
