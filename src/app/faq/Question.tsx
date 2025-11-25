import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

interface question{
    id:number,
    topic:string,
    Content: string,
}

interface FAQ{
    Question:question[];
    disk: number | null
    Faq: (id: number) => void;
}

export default function Question({ Question, disk, Faq}:FAQ) {
  return (
    <div  className='flex  md:mx-auto flex-col gap-y-3 md:container '>
        {Question.map(Display =>{
            const isOpen = disk === Display.id;
        
        return(

        <div  className="mb-4 md:w-5/12  px-10 py-14 opacity-85 z-[-1]  bg-[#0c1b44] flex flex-col md:justify-center border-[#0c1b44] rounded-3xl" key={Display.id}>
            <div onClick={() =>Faq(Display.id)} className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center font-bold">
                    <p className="capitalize md:text-[18px] text-[#a8a3a3]  ">{Display.id}.</p>
                <p className="capitalize md:text-[18px] text-[#a8a3a3]">{Display.topic}</p>

                </div>
                <div className="text-[#ffffff]">
                    <FontAwesomeIcon icon={isOpen ? faArrowUp : faArrowDown} />
                </div>
            </div>
            {isOpen && (<div className='mt-10 transition-opacity duration-500 opacity-100'>
                  <p className="capitalize md:text-[14px] text-[#a8a3a3]">{Display.Content}</p>

               </div>
            )}
        </div>
        )
})}
    </div>
  )
}
