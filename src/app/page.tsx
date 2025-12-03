import Fund from "./exchange/Fund";
import MainExchange from "./exchange/MainExchange";
import FaqPage from "./faq/FaqPage";
import Footer from "./footer/Footer";
import "./index.css";
import MainHead from "./main header/MainHead";
import Chat from "./mesage/Chat";
import MenuNav from "./navbar/MenuNav";
import SignUpProcess from "./navbar/SignUpProcess";
import TableProcess from "./table/TableProcess";
import Trade from "./trade/Trade";
import Wallet from "./wallet/Wallet";

// import { BrowserRouter } from "react-router-dom";



export default function Home() {
  return (
    

    <div className="flex">

      <div className="w-full flex flex-col" id="home">
        <MainHead />
          
        <MainExchange />
        <div id="exchange">
          <TableProcess />
        </div>
        
        <div id="wallet">
          <Wallet />
        </div>
        <Trade />

        <div id="faq">
          <FaqPage />
        </div>

        <div id="contact">
          <Chat />
        </div>

        <Footer />
        {/* <SignUpProcess /> */}

      </div>
      <div className="hidden relative  w-[40%] bg-[#040D26]">
       <MenuNav />
      </div>
      
    
    </div>
  

  );
}
