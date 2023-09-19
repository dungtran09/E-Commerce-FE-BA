import React from "react";
import hp from "../../assets/Brands/logo-hp.png";
import msi from "../../assets/Brands/logo-msi.png";
import acer from "../../assets/Brands/logo-acer.png";
import asus from "../../assets/Brands/logo-asus.png";
import dell from "../../assets/Brands/logo-dell.png";
import intel from "../../assets/Brands/logo-itel.png";
import lenovo from "../../assets/Brands/logo-lenovo.png";
import mackbook from "../../assets/Brands/logo-macbook.png";
import surface from "../../assets/Brands/logo-surface.png";
import singpc from "../../assets/Brands/logo-singpc.jpg";

const logos = [
  hp,
  msi,
  acer,
  asus,
  dell,
  intel,
  lenovo,
  mackbook,
  surface,
  singpc,
];

const logoEls = logos.map((logo, index) => (
  <div
    key={index}
    className="p-2 flex flex-wrap justify-center items-center gap-2 cursor-pointer"
  >
    <div className="bg-white p-2 border hover:border-main">
      <img
        src={logo}
        alt="image"
        className="w-[93px] h-[25px] object-contain"
      />
    </div>
  </div>
));

const Brands = () => {
  return (
    <>
      <div className="w-main flex bg-gray-100 mb-4">{logoEls}</div>
    </>
  );
};

export default Brands;
