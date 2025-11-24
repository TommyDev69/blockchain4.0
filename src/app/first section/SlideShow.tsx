// import Image, { StaticImageData } from "next/image";
// import { useState, useEffect, useRef } from "react";

// interface DetailsArr {
//   id: number;
//   photo: StaticImageData;
// }

// interface Result {
//   Details: DetailsArr[];
// }

// const SlideShow = ({ Details }: Result) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [offset, setOffset] = useState(0);

//   // Width of one logo + margin (adjust as needed)
//   const logoWidth = 128 + 32; // 128px width + 32px gap/margin
//   const speed = 2; // pixels per interval
//   const intervalTime = 20; // ms per interval

//   useEffect(() => {
//     const totalWidth = logoWidth * Details.length;

//     const interval = setInterval(() => {
//       setOffset((prev) => {
//         const newOffset = prev + speed;
//         // reset when fully scrolled
//         return newOffset >= totalWidth ? 0 : newOffset;
//       });
//     }, intervalTime);

//     return () => clearInterval(interval);
//   }, [Details, logoWidth]); 

//   return (
//     <div className="overflow-hidden container mx-auto bg-fucghsia-500 w-[68%] py-4">
//       <div
//         ref={containerRef} 
//         className="flex gapw-8"
//         style={{ transform: `translateX(-${offset}px)`, transition: 'transform 0.03s linear' }}
//       >
//         {/* Original logos */}
//         <div>
//             {Details.map((slide) => (
//             <Image src={slide.photo} alt="sponsor" className="object-contain" fill />
//           ))}
//           </div>
        
//       </div>
//     </div>
//   );
// };

// export default SlideShow;
