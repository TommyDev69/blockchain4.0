'use client'
import Image from 'next/image';
import close from '../../../../public/images/closed.svg';
import Brand from "../../../../public/images/logo/logo.svg";
import google from "../../../../public/google (2).png";
import React from 'react';
import { useRouter } from 'next/navigation';

interface SignInDetails {
  username: string;
  email: string;
  password: string;
}

interface ErrorMsg {
  username?: string;
  email?: string;
  password?: string;
}

interface SignInProps {
  HandleSignIn: (e: React.ChangeEvent<HTMLInputElement>) => void;
  HandleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  InputForm: SignInDetails;
  Error: ErrorMsg;
  Valid: {
    length: boolean;
    upper: boolean;
    lower: boolean;
    number: boolean;
    special: boolean;
  };
}

export default function SignIn({HandleSignIn,HandleSubmit,InputForm,Error,Valid,}: SignInProps) {
      const router = useRouter()
  return (
    // <div className='relative'>
      <form onSubmit={HandleSubmit}>
        <div className="bg-purple-950 mwx-auto flex py-4 md:w-full  rounded-xl px-4 flex-col items-center">
          
          <div className="flex w-full justify-end pr-2">
            <div  className="flex border p-2 border-white rounded-lg cursor-pointer">
              <Image src={close} onClick={() => router.push('/')} alt="Close modal" width={12} height={12} />
            </div>
          
          </div>

          <div className="flex w-full justify-center items-center">
            <Image src={Brand} alt="Logo" width={100} height={100} />
          </div>

          {/* SOCIAL BUTTONS */}
          <div className="flex space-x-1.5 w-full justify-center items-center">
            <div className='w-[50%] py-8'>
              <button type="button" className='flex w-full space-x-0.5 justify-center items-center px-2  md: py-4 border-[rgba(189, 36, 223, 10)] bg-[linear-gradient(15deg,rgba(189,36,223,0.7),rgba(45,106,222,0.7)_107.15%)] rounded-lg'>
                <span className='text-[12px] text-white capitalize'>sign in</span>
                <Image src={google} alt="Google login" width={40} height={40} />
              </button>
            </div>

            <div className='w-[50%] py-8'>
              <button type="button" className='flex w-full space-x-0.5 justify-center items-center px-2  md: py-4 border-[rgba(189, 36, 223, 10)] bg-[linear-gradient(15deg,rgba(189,36,223,0.7),rgba(45,106,222,0.7)_107.15%)] rounded-lg'>
                <span className='text-[12px] text-white capitalize'>sign in</span>
                <Image src={google} alt="Google login" width={40} height={40} />
              </button>
            </div>
          </div>

          {/* Divider */}
          <p className=" uppercase text-white my-2 ">
            _____________________________or_____________________________

          </p>

          {/* EMAIL FIELD */}
          <div className='w-full py-2'>
            <input
              type="email"
              name="email"
              placeholder='Email'
              value={InputForm.email}
              onChange={HandleSignIn}
              className="placeholder:text-gray-400 text-black bg-purple-950 pl-2 border-2 w-full rounded-lg py-2 text-[10px] border-white"
            />
            {Error.email && <p className="text-red-500">{Error.email}</p>}
          </div>

          {/* PASSWORD FIELD */}
          <div className='w-full py-2'>
            <input
              type="password"
              name="password"
              placeholder='Password'
              value={InputForm.password}
              onChange={HandleSignIn}
              className="placeholder:text-gray-400 text-black bg-purple-950 pl-2 border-2 w-full rounded-lg py-2 text-[10px] border-white"
            />

            <div className="text-white text-[10px] space-y-1 mt-2">
              <p className={Valid.length ? "text-green-400" : "text-red-400"}>
                {Valid.length ? "✓" : "✗"} At least 8 characters
              </p>
              <p className={Valid.upper ? "text-green-400" : "text-red-400"}>
                {Valid.upper ? "✓" : "✗"} Uppercase letter
              </p>
              <p className={Valid.lower ? "text-green-400" : "text-red-400"}>
                {Valid.lower ? "✓" : "✗"} Lowercase letter
              </p>
              <p className={Valid.number ? "text-green-400" : "text-red-400"}>
                {Valid.number ? "✓" : "✗"} Number
              </p>
              <p className={Valid.special ? "text-green-400" : "text-red-400"}>
                {Valid.special ? "✓" : "✗"} Special character
              </p>
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <div className='w-full py-2'>
            <button type='submit' className='capitalize border-2 w-full rounded-lg py-2 text-[10px] text-white bg-fuchsia-500 border-white'>
              sign in
            </button>
          </div>
        </div>
      </form>
    // </div>
  );
}
