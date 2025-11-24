import bitcoin from '../../../public/images/table/bitcoin.svg'
import cryptoOne from '../../../public/images/table/cryptoone.svg'
import cryptoTwo from '../../../public/images/table/cryptotwo.svg'
import cryptoThree from '../../../public/images/table/cryptothree.svg'
import ellpse from '../../../public/images/table/Untitled.svg'
import Image from 'next/image'


// features
import FeatureOne from '../../../public/images/features/featureOne.svg'
import FeatureTwo from '../../../public/images/features/featureTwo.svg'
import FeatureThree from '../../../public/images/features/featureThree.svg'
import TableContent from './TableContent'
import Features from './Features'


// import ellpse from '../../../public/images/table/ellpse.png'
const TableProcess = () => {
    const tableData = ([
        {id:1, numb:1, image:bitcoin, name:'bitcoin(BTC)', price:'126,456.23', change:'change 24h', marketCap:'126,456.23', action:'buy'},
        {id:2, numb:2, image:cryptoOne, name:'Ethereum(ETH)', price:'2,400.57', change:'change 24h', marketCap:'2,400.23', action:'buy'},
        {id:3, numb:3, image:cryptoTwo, name:'Tether(USDT)', price:'8000.70', change:'change 24h', marketCap:'2,400.23', action:'buy'},
        {id:4, numb:4, image:cryptoThree, name:'Binance Coin(BNB)', price:'324,400.03', change:'change 24h', marketCap:'324,400.03', action:'buy'},
         
    ])
    const feature = ([
        {id:1,  image:FeatureOne, topic: 'secure storage', content:'Your crypto is protected with advanced encryption and offline cold wallets, ensuring top-tier security and privacy.'},
        {id:2,  image:FeatureTwo, topic: 'free to use', content:'Enjoy powerful portfolio tracking, live analytics, and account management tools — all without any hidden fees.'},
        {id:3,  image:FeatureThree, topic: 'real-time price data', content:'Get live crypto prices, market updates, and real-time data from top global exchanges — all in one place, 24/7.'}, 
    ])
    const features = feature.filter((details) => details.id >= 1 && details.id <=3);
const result = tableData.slice(0, 4);

    return ( 
     <div className=' py-12 border-[0.5] md:border-0 border-t-[#ccc] bxg-[#0c1b44] bg-[linear-gradient(45deg,rgba(189,36,223,0.2),rgba(45,106,222,0.2)_120.126%)] bg-blend-multiply'>
            <TableContent renderResult ={result}  />
            <Image src={ellpse} alt='ellpse' />  
            <Features featureResult = {features} />
        </div>
     );
}
 
export default TableProcess;