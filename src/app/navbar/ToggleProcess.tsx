import { useState } from "react";
import MenuNav from "./MenuNav";
import MenuIcon from "./MenuIcon";


const ToggleProcess = () => {
  const [toggle, setToggle] = useState(false);

  
  // to show the mobile nav content that was hidden
  const show = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      {/* Hamburger Menu Icon */}
      <MenuIcon Tog={toggle} Show={show} />

      {/* Overlay + Sidebar */}
      <div className={`fixed inset-0 z-50 ${toggle ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div
          className={`absolute inset-0 bg-black/70 transition-opacity duration-300 ${toggle ? "opacity-100" : "opacity-0"}`}
          onClick={show}
        ></div>
        <div className={`absolute right-0 top-0 h-full w-[50%] bg-white shadow-xl transition-transform duration-500 ease-in-out ${toggle ? "translate-x-0" : "translate-x-full"}`}>
          <MenuNav />
        </div>
      </div>

      {/* NavRegister */}
      {/* <NavRegister openModal={openModal} /> */}

      {/* Conditional rendering of SignUpProcess */}
      {/* {showModal && ( <SignUpProcess  />)} */}
    </div>
  );
};

export default ToggleProcess;
