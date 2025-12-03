'use client'
import React, { useState } from 'react'
import Image from "next/image";
import Brand from "../../../public/images/logo/logo.svg"
import SignUpProcess from './SignUpProcess';
import SignInProcess from './SignInProcess';

export default function MenuNav() {
    //signUp
    const [showModal, setShowModal] = useState(false);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

  //signIn
    const [showModalSigIn, setShowModalSigIn] = useState(false)
    const openModalSigIn = () => setShowModalSigIn(true);
    const closeModalSigIn = () => setShowModalSigIn(false);
     return (

        <div className='px-2 bg-[#040D26] h-screen' >
            <div className='pt-7 justify-centewr psx-6 md:pls-16  flex items-center'>
                <Image src={Brand} alt="brandlogo" className='w-[70s%]' />
            </div>
            <div className='py-4 text-[12px] text-[#ffffff] capitalize px-3'>
                <ul className='list-none py-4'>

                    <a href='#home'> <li className=' li font-bold py-4 bg-fuchwsia-400'>home</li></a>
                    <a href='#exchange'><li  className=' li py-4 bg-wamber-700'>Exchange</li></a>
                    <a href='#features'><li  className=' li py-4 bg-gwreen-700'>features</li></a>
                    <a href='#faq'> <li  className=' li py-4 bg-ywellow-500'>FAQ</li></a>
                    <a href='#contact'><li  className=' li py-4 bg-gwray-700'>Contact us</li></a>
                </ul>
            </div>

                <div className=' flex-rows bg-ambewr-600 gap-4 items-center justify-center space-y-4 '>
                    <div className="max-w-full">
                            <button type="button" onClick={openModal} className=" w-full rounded-lg borwder-2 border-[rgba(189, 36, 223, 10)] bg-[linear-gradient(90deg,rgba(189,36,223,0.9),rgba(45,106,222,0.9)_97.15%)] ;">
                                <p className="capitalize text-white  px-6  py-4 text-[8px] font-extrabold md:text-[10px]">sign up</p>
                            </button>
                    </div>

                        <div className="max-w-full">
                            <button type="button" onClick={openModalSigIn} className=" w-full rounded-lg borwder-2 border-[rgba(189, 36, 223, 10)] bg-[linear-gradient(90deg,rgba(189,36,223,0.9),rgba(45,106,222,0.9)_97.15%)] ;">
                                <p className="capitalize text-white px-6   py-4 text-[8px] md:text-[10px] font-extrabold">sign in</p>
                            </button>
                        </div>

                </div>

            {showModal && (
                <div className=" inset-0 bg-black/80 flex justify-center items-center z-50">
                {/* <div className="absolute left-3"> */}
                    <SignUpProcess Close={closeModal} isOpen={showModal} />
                {/* </div> */}
                </div>
            )}

            {showModalSigIn && (
                <div className=" inset-0 bg-black/80 flex justify-center items-center z-50">
                {/* <div className="absolute left-3"> */}
                    <SignInProcess Close={closeModalSigIn} isOpen={showModalSigIn} />
                    
                {/* </div> */}
                </div>
            )}

        
        </div>
    )
}
