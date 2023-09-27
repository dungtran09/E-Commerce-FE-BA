import React from "react";
import { Link, useParams } from "react-router-dom";
import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs";
import icons from "../../utils/icons";

const Breadcrumbs = ({ category, title, product }) => {
  const { IoIosArrowForward } = icons;
  const breadcrumbs = useReactRouterBreadcrumbs();
  const paths = breadcrumbs?.map((breadcrumb) => breadcrumb.key);

  const routers = [
    { path: paths[0], breadcrumb: "Home" },
    { path: paths[1], breadcrumb: "Products" },
    { path: paths[2], breadcrumb: category },
    { path: paths[paths.length - 1], breadcrumb: product?.title },
  ];

  const breadcrumbsEls = breadcrumbs?.map((breadcrumb, index) => (
    <Link
      key={index}
      to={routers[index]?.path}
      className="flex justify-start items-center"
    >
      <span className="hover:text-main">{routers[index]?.breadcrumb}</span>
      {++index < routers.length ? (
        <IoIosArrowForward className="text-[14px] text-black pl-1" />
      ) : (
        ""
      )}
    </Link>
  ));

  return (
    <div className="w-main">
      <h3>{product?.title}</h3>
      <div className="text-sm flex justify-start items-center gap-1">
        {breadcrumbsEls}
      </div>
    </div>
  );
};

export default Breadcrumbs;
