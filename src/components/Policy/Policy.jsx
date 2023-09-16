import React from "react";
import icons from "../../utils/icons";

const Policy = () => {
  const {
    SiSpringsecurity,
    MdLocalShipping,
    AiFillGift,
    FaPhoneSquareAlt,
    SiConvertio,
  } = icons;
  const policies = [
    {
      name: "Guarantee",
      desc: "Quality Checked",
      icon: <SiSpringsecurity />,
    },
    {
      name: "Free Shipping",
      desc: "Free On All Products",
      icon: <MdLocalShipping />,
    },
    {
      name: "Consultancy",
      desc: "Lifetime 24/7/356",
      icon: <FaPhoneSquareAlt />,
    },
    {
      name: "Special Gift Cards",
      desc: "Special Gift Cards",
      icon: <AiFillGift />,
    },
    {
      name: "Free Return",
      desc: "Within 7 Days",
      icon: <SiConvertio />,
    },
  ];

  const policiesEls = policies.map((policy, index) => (
    <div
      key={index}
      className="flex justify-start items-center gap-2 border p-2"
    >
      <div className="text-[30px] text-[#505050]">{policy.icon}</div>
      <div className="flex flex-col">
        <span className="text-base text-[#505050]">{policy.name}</span>
        <span className="text-[12px] text-[#999]">{policy.desc}</span>
      </div>
    </div>
  ));

  return <>{policiesEls}</>;
};

export default Policy;
