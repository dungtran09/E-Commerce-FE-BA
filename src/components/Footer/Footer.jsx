import React from "react";
import icons from "../../utils/icons";
import FooterProductTags from "./FooterProductTags";

const Footer = () => {
  const {
    MdEmail,
    BsTelephoneFill,
    GiPositionMarker,
    BsCurrencyDollar,
    BiLogoFacebook,
    AiOutlineTwitter,
    AiFillInstagram,
    AiOutlineGoogle,
    AiFillGithub,
    BsPaypal,
    FaCcMastercard,
    BiLogoVisa,
  } = icons;

  const iconsArr = [
    <BiLogoFacebook />,
    <AiOutlineTwitter />,
    <AiFillInstagram />,
    <AiOutlineGoogle />,
    <AiFillGithub />,
  ];

  const iconsElms = iconsArr.map((icon, index) => (
    <div className="px-2 py-2 bg-[#121212] rounded-lg">
      <span key={index} className="hover:text-gray-500 cursor-pointer text-lg">
        {icon}
      </span>
    </div>
  ));

  return (
    <footer className="flex flex-col items-center justify-center w-full">
      <div className="bg-[#191919] w-full flex items-baseline justify-center m-auto text-white">
        <div className="w-main flex mt-8 mb-8">
          <div className="flex-2">
            <h3 className="uppercase border-l-[3px] border-main font-medium mb-4 text-[15px] pl-2">
              ABOUT US
            </h3>
            <div className="flex flex-col gap-2">
              <span className="flex justify-start items-center gap-2">
                <GiPositionMarker />
                Address:
                <p className="text-xs">
                  474 Ontario St Toronto, ON M4X 1M7 Canada
                </p>
              </span>
              <span className="flex justify-start items-center gap-2">
                <BsTelephoneFill />
                Phone: <p className="text-xs"> (+1234)56789xxx </p>
              </span>
              <span className="flex justify-start items-center gap-2">
                <MdEmail />
                Mail: <p className="text-xs"> E-ecommerce@support@gmail.com </p>
              </span>
              <div className="flex justify-start items-center gap-3">
                {iconsElms}
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="uppercase border-l-[3px] border-main font-medium mb-4 text-[15px] pl-2">
              Infomation
            </h3>
            <div className="text-sm flex flex-col text-[#b7b7b7] gap-2">
              <p className="hover:text-white cursor-pointer font-light">
                Typography
              </p>
              <p className="hover:text-white cursor-pointer font-light">
                Gallery
              </p>
              <p className="hover:text-white cursor-pointer font-light">
                Store Location
              </p>
              <p className="hover:text-white cursor-pointer font-light">
                {" "}
                Today Deals
              </p>
              <p className="hover:text-white cursor-pointer font-light">
                Contact
              </p>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="uppercase border-l-[3px] border-main font-medium mb-4 text-[15px] pl-2">
              WHO WE ARE
            </h3>
            <div className="text-sm flex flex-col text-[#b7b7b7] gap-2">
              <p className="hover:text-white cursor-pointer font-light">
                {" "}
                Help
              </p>
              <p className="hover:text-white cursor-pointer font-light">
                Free Shipping
              </p>
              <p className="hover:text-white cursor-pointer font-light">FAQs</p>
              <p className="hover:text-white cursor-pointer font-light">
                Return & Exchange
              </p>
              <p className="hover:text-white cursor-pointer">Testimonials</p>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="uppercase border-l-[3px] border-main font-medium mb-4 text-[15px] pl-2">
              #DIGITALWORLDSTORE
            </h3>
          </div>
        </div>
      </div>
      <FooterProductTags />
      <div className="flex justify-between items-center bg-[#0f0f0f] w-full h-[75px]">
        <div className="flex w-main justify-between items-center m-auto text-white text-xs">
          <p>© 2023, Digital World 2 Powered by Shopify</p>
          <div className="flex text-[45px] gap-3">
            <BsPaypal />
            <FaCcMastercard />
            <BiLogoVisa />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
