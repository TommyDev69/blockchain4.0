"use client";

import User from '../../../public/images/work/icon-one.svg'
import fund from '../../../public/images/work/icon-two.svg'
import trade from '../../../public/images/work/icon-three.svg'
import ExchangeContent from './ExchangeContent'
import SignUpProcessExchange from '../navbar/SignUpProcess';
import { useState } from 'react';
import Fund from './Fund';


const MainExchange = () => {
     const [isModalOpen, setIsModalOpen] = useState(false);

     //ADD FUND TO IT ID 2
     const [ModalOpen, setModalOpen] = useState(false);


    const Work = [
        {id:1, Icon:User, Topic:'create account', content: 'sign up with your email, set up a secure password, and verify your identity to unlock full access to the platform. Getting started takes just a few minutes.'},
        {id:2, Icon:fund, Topic:'add fund', content: 'Deposit money using your preferred payment method — bank transfer, debit card, or crypto wallet — and get ready to explore the world of digital assets.'},
        {id:3, Icon:trade, Topic:'Buy, Sell & Exchange', content: 'Easily buy or sell cryptocurrencies like Bitcoin and Ethereum, or convert between coins — all with real-time rates and low transaction fees.'},
        
    ]

    // Function to handle card click
    const handleCardClick = (id: number) => {
    if (id === 1) setIsModalOpen(true);  // Open SignUp modal
    if (id === 2) setModalOpen(true);  // Open fund modal

  };

    
  
  return (  
      <div >

          <ExchangeContent Title="how it work"  Result ={Work}  onSelect={handleCardClick} />
          <SignUpProcessExchange isOpen={isModalOpen} Close={() => setIsModalOpen(false)} />
          <Fund isOpen={ModalOpen} Close={() => setModalOpen(false)}  />
           
        
      </div>
  );
}
 
export default MainExchange;