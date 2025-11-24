import { useState } from "react";
import MenuNav from "./MenuNav";
import MenuIcon from "./MenuIcon";

const ToggleProcess = () => {
  const [toggle, setToggle] = useState(false);

  const show = () => {
    setToggle(!toggle); // toggle open/close
  };

  return (
    <div>
      {/* Hamburger Menu Icon */}
      <MenuIcon Tog={toggle} Show={show} />

      {/* Sidebar Menu */}
      {toggle && (
         <div className="fixed inset-0 z-50 flex">

          {/* Transparent dark background */}
          <div
            className="absolute inset-0 bg-black/70 "
            onClick={show} // clicking outside closes menu
          ></div>

          {/* Sidebar Menu (slides from right) */}
          <div className="relative ml-auto w-[50%] h-full bg-white shadow-xl z-50">
            <MenuNav />
          </div>

        </div>)}
    </div>
  );
};

export default ToggleProcess;
