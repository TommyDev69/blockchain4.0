import React, { useState } from 'react'
import SignUpProcess from './SignUpProcess';
import SignInProcess from './SignInProcess';

export default function NavRegister() {
  const [showModal, setShowModal] = useState(false);

   //signIn
  const [showModalSigIn, setShowModalSigIn] = useState(false);

  // signUP
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  //signIn
  const openModalSigIn = () => setShowModalSigIn(true);
  const closeModalSigIn = () => setShowModalSigIn(false);
  return (
    <div className='hidden md:flex gap-4 items-center justify-center w-[25%]'>
        <div className="">
                <button type="button" onClick={openModal} className=" rounded-lg borwder-2 border-[rgba(189, 36, 223, 10)] bg-[linear-gradient(90deg,rgba(189,36,223,0.9),rgba(45,106,222,0.9)_97.15%)] ;">
                    <p className="capitalize text-white  px-6  py-4 text-[8px] font-extrabold md:text-[10px]">sign up</p>
                </button>
            </div>

             <div className="">
                <button type="button"  onClick={openModalSigIn} className=" rounded-lg borwder-2 border-[rgba(189, 36, 223, 10)] bg-[linear-gradient(90deg,rgba(189,36,223,0.9),rgba(45,106,222,0.9)_97.15%)] ;">
                    <p className="capitalize text-white px-6   py-4 text-[8px] md:text-[10px] font-extrabold">sign in</p>
                </button>
            </div>

           {showModal && (<SignUpProcess Close={closeModal} isOpen={showModal} />)}
           {showModalSigIn && (<SignInProcess Close={closeModalSigIn} isOpen={showModalSigIn} />)}

    </div>
  )
}
