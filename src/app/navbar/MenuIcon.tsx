import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface declare{
    Tog:boolean;
    Show: ()=> void
}

export default function MenuIcon({Tog, Show}:declare) {
  return (
     <div className="md:hidden mx-6 w-20 flex justify-center">
      <button onClick={Show}>
        <FontAwesomeIcon
          icon={Tog ? faBars : faBars}  // switch based on toggle
          className="text-blue-600 text-[24px]"
        />
      </button>
    </div>
  )
}


