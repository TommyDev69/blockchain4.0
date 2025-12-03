import React from 'react'
import reward from "../../../public/images/funds/profit_making.png"
import candle from "../../../public/images/funds/candle_profile.png"
import wallet from "../../../public/images/funds/wallet.png"
import rotateArrow from "../../../public/images/funds/rotateArrow.png"

import Brand from "../../../public/images/logo/logo.svg"
import FundDesign from './FundDesign'

interface FundProps {
  isOpen: boolean;
  Close: () => void;
  
}
export default function Fund({isOpen, Close}:FundProps) {
    
if (!isOpen) return null; //  <-- Hide modal when closed
    const funding = ([
        {id:1, image:rotateArrow, topic:'repeat transaction', set:'Not set'},
        {id:2, image:reward, topic:'take profit', set:'Not set'},
        {id:3, image:candle, topic:'repeat transaction', set:'Not set'},
        {id:4, image:wallet, topic:'gift card wallet', set:'Not set'}
    ])
    const Arrow = funding.filter(item => item.id === 1)
     
    const Wallet = funding.filter(data =>data.id === 4)

  return (
     <div className='fixed inset-0 bg-black/80 flex justify-center items-center z-50 transition-opacity duration-500'>
      <FundDesign Close ={Close} Brand ={Brand} Arrow = {Arrow} Wallet = {Wallet} Funding = {funding.slice(1,3)} />
     
    </div>
  )
}
