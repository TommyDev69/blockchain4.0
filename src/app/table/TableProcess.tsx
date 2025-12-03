"use client";

// import bitcoin from '../../../public/images/table/bitcoin.svg'
// import cryptoOne from '../../../public/images/table/cryptoone.svg'
// import cryptoTwo from '../../../public/images/table/cryptotwo.svg'
// import cryptoThree from '../../../public/images/table/cryptothree.svg'
import ellpse from '../../../public/images/table/Untitled.svg'
import Image from 'next/image'


// features
import FeatureOne from '../../../public/images/features/featureOne.svg'
import FeatureTwo from '../../../public/images/features/featureTwo.svg'
import FeatureThree from '../../../public/images/features/featureThree.svg'
import TableContent from './TableContent'
import Features from './Features'

interface CoinType {
  id: string;
  name: string;
  image: string;
  market_cap_rank: number;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
}

interface TableRender {
  market_cap_rank: number;
  name: string;
  image: string;
  price: string;
  price_change_percentage_24h: number | null;
  market_cap: string;
  action: string;
  numb: number;
}

interface FeatureType {
  id: number;
  image: string;
  topic: string;
  content: string;
}


// import axios from 'axios'
import { useEffect, useState } from 'react'

// import ellpse from '../../../public/images/table/ellpse.png'
const linkApi = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc";
const TableProcess = () => {
    const [crypto, setCrypto] = useState<CoinType[]>([]);
    // view more on table
    const [visible, setVisible] = useState(10)

    const [loading, setLoading] = useState(true);

      useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(linkApi, {
                    cache: "no-store",   // IMPORTANT to avoid caching
                });
                setLoading(true);

                if (!res.ok) {
                    console.error("API fetch failed");
                    return;
                }

                const data = await res.json();
                setCrypto(data);
            } catch (error) {

                console.error("Fetch error:", error);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

        const formatted = crypto.map((coin) => ({
        market_cap_rank: coin.market_cap_rank,
        name: coin.name,
        image: coin.image,
        price: coin.current_price.toLocaleString(),
        price_change_percentage_24h: coin.price_change_percentage_24h, // number only
        market_cap: coin.market_cap.toLocaleString(),
        action: "Buy"
        //  numb: index + 1,
        }));



    // const tableData = ([
    //     {id:1, numb:1, image:bitcoin, name:'bitcoin(BTC)', price:'126,456.23', change:'change 24h', marketCap:'126,456.23', action:'buy'},
    //     {id:2, numb:2, image:cryptoOne, name:'Ethereum(ETH)', price:'2,400.57', change:'change 24h', marketCap:'2,400.23', action:'buy'},
    //     {id:3, numb:3, image:cryptoTwo, name:'Tether(USDT)', price:'8000.70', change:'change 24h', marketCap:'2,400.23', action:'buy'},
    //     {id:4, numb:4, image:cryptoThree, name:'Binance Coin(BNB)', price:'324,400.03', change:'change 24h', marketCap:'324,400.03', action:'buy'},
         
    // ])
    const feature = ([
        {id:1,  image:FeatureOne, topic: 'secure storage', content:'Your crypto is protected with advanced encryption and offline cold wallets, ensuring top-tier security and privacy.'},
        {id:2,  image:FeatureTwo, topic: 'free to use', content:'Enjoy powerful portfolio tracking, live analytics, and account management tools — all without any hidden fees.'},
        {id:3,  image:FeatureThree, topic: 'real-time price data', content:'Get live crypto prices, market updates, and real-time data from top global exchanges — all in one place, 24/7.'}, 
    ])
    const features = feature.filter((details) => details.id >= 1 && details.id <=3);
// const result = tableData.slice(0, 4);

    return ( 
     <div className=' py-12 border-[0.5] md:border-0 border-t-[#ccc]  bg-[linear-gradient(45deg,rgba(189,36,223,0.2),rgba(45,106,222,0.2)_120.126%)] bg-blend-multiply'>
            {loading ? <p className="text-white">Loading...</p> :<TableContent renderResult ={formatted}  viewMore = {visible} setViewMore = {() =>  setVisible(visible + 10)} />}
            <Image src={ellpse} alt='ellpse'  /> 
            

               <Features featureResult = {features}  />
          
        </div>
     );
}
 
export default TableProcess;