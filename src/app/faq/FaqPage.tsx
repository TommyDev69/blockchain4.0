"use client"
// import { Content } from 'next/font/google';
import React, { useState } from 'react'
import Question from './Question';


export default function FaqPage() {
    const[toggle, setToggle] = useState<number | null>(null);;

    const quest=([
        {id:1, topic:'what is cryptocurrency?',  Content:'Cryptocurrency is a digital or virtual currency secured by cryptography, making it nearly impossible to counterfeit or double-spend. It operates on decentralized networks called blockchains, allowing peer-to-peer transactions without intermediaries.' },
        {id:2, topic:'can cryptocurrency be converted to money?', Content:"Yes, cryptocurrencies can be converted to cash through exchanges, peer-to-peer platforms, or crypto ATMs. Many platforms allow you to sell your crypto and withdraw funds directly to your bank account." },
        {id:3, topic:'how long should you hold cryptocurrency?',  Content:"The holding period depends on your investment goals. Some traders prefer short-term trading to capitalize on price volatility, while others hold long-term, believing in the asset's future value growth. Always assess your risk tolerance before deciding." },

    ])
    
    // const quest1 = quest
    const viewAnswer  = (id:number) =>{
        setToggle(prev => (prev === id ? null : id))
    }
    return (
    <div className='faq py-10'>
      <div className="font-bold text-[12px] pb-5">
        <p className="capitalize ">frequently asked question</p>
      </div>
      <div className="text-[14px] flex justify-center pb-6 text-[#ccc]">
        <p className=" md:w-4/12 px-4 md:px-0">Have questions about trading, security, or how our platform works? Find clear answers to the most common inquiries to get started with confidence.</p>
      </div>

      <Question Question={quest.slice(0,3)} disk ={toggle} Faq={viewAnswer} />
    </div>
  )
}
