"use client";

import User from '../../../public/images/work/icon-one.svg'
import fund from '../../../public/images/work/icon-two.svg'
import trade from '../../../public/images/work/icon-three.svg'
import ExchangeContent from './ExchangeContent'


const MainExchange = () => {
    const Work = [
        {id:1, Icon:User, Topic:'create account', content: 'sign up with your email, set up a secure password, and verify your identity to unlock full access to the platform. Getting started takes just a few minutes.'},
        {id:2, Icon:fund, Topic:'add fund', content: 'Deposit money using your preferred payment method — bank transfer, debit card, or crypto wallet — and get ready to explore the world of digital assets.'},
        {id:3, Icon:trade, Topic:'Buy, Sell & Exchange', content: 'Easily buy or sell cryptocurrencies like Bitcoin and Ethereum, or convert between coins — all with real-time rates and low transaction fees.'},
        
    ]
    return (  
        <div className="w-full py-10 bg-[linear-gradient(45deg,rgba(189,36,223,0.2),rgba(45,106,222,0.1)_97.15%)] bg-blend-multiply">

            <ExchangeContent Title="how it work"  Result ={Work}/>
        </div>
    );
}
 
export default MainExchange;