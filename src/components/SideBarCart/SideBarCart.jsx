import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import { calcTotal, removeItem } from "../../store/slices/cartSlice";
import { formatNumber } from "../../utils/helper";
import icons from "../../utils/icons";
import path from "../../utils/path";
import statusCode from "../../utils/statusCode";
import PortalToggle from "../PortalToggle/PortalToggle";

const SideBarCart = ({ showSidebar, setShowSidebar }) => {
  const { GrClose } = icons;

  const cartProducts = useSelector((state) => state.carts);
  const { shipping } = useStateContext();

  const user = useSelector((state) => state.user);
  const [isUserLogIn, setIsUserLogin] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calcTotal());
  }, [cartProducts, dispatch]);

  const onRemoveFromCart = (id) => {
    dispatch(removeItem(id));
  };

  const showStatus = () => {
    setIsUserLogin(true);
  };

  const hideStatus = () => {
    setIsUserLogin(false);
  };

  const onNavigateToPayment = () => {
    if (user?.isLoggedIn) {
      navigate(`/${path.PAYMENT}`, { replace: true });
    } else {
      setIsUserLogin(true);
    }
  };

  const cartProductEls = cartProducts?.listItems?.map((product, index) => (
    <li className="flex py-6" key={index}>
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border p-2 border-gray-200">
        <img
          src={product?.thumb}
          alt=""
          className="h-full w-full object-contain object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-sm font-medium text-gray-900">
            <h3 className="cursor-pointer hover:opacity-70">
              <Link
                to={`/${path.PRODUCTS}/${product?.categoryName}/${product?.slug}/${product?._id}`}
                onMouseDown={() => setShowSidebar(!showSidebar)}
              >
                {product?.title}
              </Link>
            </h3>
            <p className="ml-4">{formatNumber(product?.price)}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">Salmon</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty {product?.quantity}</p>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-main hover:opacity-70"
              onClick={() => onRemoveFromCart(product?._id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  ));
  return (
    <>
      <div
        className={`top-0 right-0 w-[30vw] bg-white p-5 text-white shadow-lg fixed h-full z-50 ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            <div className="flex items-start justify-between">
              <h2 className="text-sm font-medium uppercase text-gray-900">
                Shopping cart ({cartProducts?.listItems?.length})
              </h2>
              <div className="ml-3 flex h-7 items-center">
                <button
                  onClick={() => setShowSidebar(!showSidebar)}
                  className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                >
                  <GrClose />
                </button>
              </div>
            </div>

            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {cartProductEls}
                </ul>
              </div>
            </div>
          </div>

          {user?.isLoggedIn && (
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p className="text-[14px] uppercase">Total</p>
                <p className="text-main font-semibold text-sm">
                  {formatNumber(cartProducts?.totalAmount + shipping) || 0} VND
                </p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Total has included Shipping.
              </p>
              <div className="mt-6">
                <button
                  onClick={() => onNavigateToPayment()}
                  className="flex items-center justify-center rounded-md border border-transparent w-full bg-main px-6 py-3 text-base font-medium text-white shadow-sm hover:opacity-90"
                >
                  Checkout
                </button>
              </div>
              <div className="mt-6 flex justify-center text-center gap-1 text-sm text-gray-500">
                <p>or</p>
                <Link to={`/${path.HOME}`}>
                  <button className="font-medium text-main hover:opacity-70">
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </Link>
                {isUserLogIn && (
                  <PortalToggle
                    status={statusCode.ERROR}
                    message="Please login to payment process."
                    showStatus={showStatus}
                    hideStatus={hideStatus}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SideBarCart;
