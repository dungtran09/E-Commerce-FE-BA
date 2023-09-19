import React, { useState } from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
const ProductInfomation = () => {
  const [actived, setActived] = useState(0);
  const infos = [
    {
      id: 0,
      title: "DESCRIPTION",
      desc: (
        <p>
          Limited Warranties are non-transferable. The following Limited
          Warranties are given to the original retail purchaser of the following
          Ashley Furniture Industries, Inc.Products: Frames Used In Upholstered
          and Leather Products Limited Lifetime Warranty A Limited Lifetime
          Warranty applies to all frames used in sofas, couches, love seats,
          upholstered chairs, ottomans, sectionals, and sleepers. Ashley
          Furniture Industries,Inc. warrants these components to you, the
          original retail purchaser, to be free from material manufacturing
          defects.
        </p>
      ),
    },
    {
      id: 1,
      title: "WARRANTY",
      desc: (
        <p>
          LIMITED WARRANTIES Limited Warranties are non-transferable. The
          following Limited Warranties are given to the original retail
          purchaser of the following Ashley Furniture Industries, Inc.Products:
          Frames Used In Upholstered and Leather Products Limited Lifetime
          Warranty A Limited Lifetime Warranty applies to all frames used in
          sofas, couches, love seats, upholstered chairs, ottomans, sectionals,
          and sleepers. Ashley Furniture Industries,Inc. warrants these
          components to you, the original retail purchaser, to be free from
          material manufacturing defects.
        </p>
      ),
    },
    {
      id: 2,
      title: "DELIVERY",
      desc: (
        <p>
          Before you make your purchase, it’s helpful to know the measurements
          of the area you plan to place the furniture. You should also measure
          any doorways and hallways through which the furniture will pass to get
          to its final destination. Picking up at the store Shopify Shop
          requires that all products are properly inspected BEFORE you take it
          home to insure there are no surprises. Our team is happy to open all
          packages and will assist in the inspection process. We will then
          reseal packages for safe transport. We encourage all customers to
          bring furniture pads or blankets to protect the items during transport
          as well as rope or tie downs. Shopify Shop will not be responsible for
          damage that occurs after leaving the store or during transit. It is
          the purchaser’s responsibility to make sure the correct items are
          picked up and in good condition. Delivery
        </p>
      ),
    },
    {
      id: 3,
      title: "PAYMENT",
      desc: (
        <p>
          Customers are able to pick the next available delivery day that best
          fits their schedule. However, to route stops as efficiently as
          possible, Shopify Shop will provide the time frame. Customers will not
          be able to choose a time. You will be notified in advance of your
          scheduled time frame. Please make sure that a responsible adult (18
          years or older) will be home at that time. In preparation for your
          delivery, please remove existing furniture, pictures, mirrors,
          accessories, etc. to prevent damages. Also insure that the area where
          you would like your furniture placed is clear of any old furniture and
          any other items that may obstruct the passageway of the delivery team.
          Shopify Shop will deliver, assemble, and set-up your new furniture
          purchase and remove all packing materials from your home. Our delivery
          crews are not permitted to move your existing furniture or other
          household items. Delivery personnel will attempt to deliver the
          purchased items in a safe and controlled manner but will not attempt
          to place furniture if they feel it will result in damage to the
          product or your home. Delivery personnel are unable to remove doors,
          hoist furniture or carry furniture up more than 3 flights of stairs.
          An elevator must be available for deliveries to the 4th floor and
          above.
        </p>
      ),
    },
    {
      id: 4,
      title: "CUSTOMER REVIEWS",
      desc: <CustomerReview />,
    },
  ];

  const handlerActived = (id) => {
    setActived(id);
  };

  const infosEls = infos.map((info, index) => (
    <div key={index} className="flex items-center">
      <span
        className={`bg-gray-100 cursor-pointer border p-2 ${
          actived === info.id ? "bg-white border border-b-0" : ""
        }`}
        onClick={() => handlerActived(info.id)}
      >
        <h3 className="text-sm">{info.title}</h3>
      </span>
    </div>
  ));

  return (
    <>
      <div className="flex items-center gap-1 relative bottom-[-1px]">
        {infosEls}
      </div>
      <div className="border w-full p-4 text-sm text-gray-700">
        {infos[actived].desc}
      </div>
    </>
  );
};

export default ProductInfomation;
