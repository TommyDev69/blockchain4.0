import MainExchange from "./exchange/MainExchange";
import FaqPage from "./faq/FaqPage";
import "./index.css";
import MainHead from "./main header/MainHead";
import MenuNav from "./navbar/MenuNav";
import TableProcess from "./table/TableProcess";
import Trade from "./trade/Trade";
import Wallet from "./wallet/Wallet";


export default function Home() {
  return (
    <div>

   <div className="flex">

     <div className="w-full">
       <MainHead />
       <MainExchange />
       <TableProcess />
       <Wallet />
       <Trade />
       <FaqPage />
     </div>
     <div className="hidden  w-[40%] bg-red-600">
       <MenuNav />
     </div>
   
   </div>

    
    </div>
  

  );
}
