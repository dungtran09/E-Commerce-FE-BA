import React from "react";
import { Link } from "react-router-dom";
import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs";
import icons from "../../utils/icons";

const Breadcrumbs = ({ category, title }) => {
  const { IoIosArrowForward } = icons;

  const breadcrumbs = useReactRouterBreadcrumbs();
  const paths = breadcrumbs.map((breadcrumb) => breadcrumb.key);

  const routers = [
    { path: paths[0], breadcrumb: "Home" },
    { path: paths[1], breadcrumb: "Products" },
    { path: paths[2], breadcrumb: category },
    { path: paths[4], breadcrumb: title },
  ];

  const breadcrumbsEls = routers.map((router, index) => (
    <Link
      key={index}
      to={router.path}
      className="flex justify-start items-center"
    >
      <span
        className={
          ++index < routers.length ? "hover:text-main" : "text-gray-500"
        }
      >
        {router.breadcrumb}
      </span>
      {index < routers.length ? (
        <IoIosArrowForward className="text-[14px] text-black pl-1" />
      ) : (
        ""
      )}
    </Link>
  ));

  return (
    <div className="text-sm flex justify-start items-center gap-1">
      {breadcrumbsEls}
    </div>
  );
};

export default Breadcrumbs;
