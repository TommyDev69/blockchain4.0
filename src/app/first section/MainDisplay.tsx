"use client";

import { useState, useEffect } from "react";
import Banner_Image from "../../../public/images/banner/banner.png";
import playbutton from "../../../public/images/banner/playbutton.svg";
import birdseye from "../../../public/images/companies/birdseye.svg";
import breakImages from "../../../public/images/companies/break.svg";
import kaddar from "../../../public/images/companies/keddar.svg";
import sheild from "../../../public/images/companies/shield.svg";
import tandov from "../../../public/images/companies/tandov.svg";
import tree from "../../../public/images/companies/tree.svg";

import BodyContent from "./BodyContent";
// import SlideShow from "./SlideShow";

const MainDisplay = () => {
  const AdvertPhoto = [Banner_Image, playbutton];

  const content =
    "A fast, secure, and user-friendly platform to trade Bitcoin, Ethereum, and other digital assets. Join millions embracing the future of finance.";

  const logoImages = [birdseye, breakImages, kaddar, sheild, tandov, tree];
  const logoData = logoImages.map((photo, index) => ({ id: index, photo }));

  // Offset state
  const [offset, setOffset] = useState(0);

  const logoWidth = 500 ; // width + gap
  const speed = 100; // pixels per interval
  const intervalTime =0.05; // ms

  useEffect(() => {
    const totalWidth = logoWidth * logoData.length;

    const interval = setInterval(() => {
      setOffset((prev) => (prev + speed >= totalWidth ? 0 : prev + speed));
    }, intervalTime);

    return () => clearInterval(interval);
  }, [logoData]);

  return (
    <>
      <BodyContent
        Photo={AdvertPhoto}
        Content={content}
        title="Buy, Sell & Accept Cryptocurrency with Ease"
      />

      {/* <SlideShow Details={logoData} offset={offset} /> */}
    </>
  );
};

export default MainDisplay;
