"use client"
import BrandLog from "./BrandLog";
// import MenuNav from "./MenuNav";
import NavContent from "./NavContent";
import NavRegister from "./NavRegister";
import ToggleProcess from "./ToggleProcess";

const MainNav = () => {
    return ( 
        <>
        <div className="flex justify-between container items-center  py-8 mx-auto w-full">
            <BrandLog />
            <NavContent />
            <NavRegister />
             <ToggleProcess />
        </div>
        </>
     );
}
 
export default MainNav;