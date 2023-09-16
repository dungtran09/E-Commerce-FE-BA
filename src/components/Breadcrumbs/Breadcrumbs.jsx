import React from "react";
import { Link } from "react-router-dom";
import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs";
import icons from "../../utils/icons";

const Breadcrumbs = ({ category, slug }) => {
  const { IoIosArrowForward } = icons;

  const breadcrumbs = useReactRouterBreadcrumbs();
  const paths = breadcrumbs.map((breadcrumb) => breadcrumb.key);

  const routers = [
    { path: paths[0], breadcrumb: "Home" },
    { path: paths[1], breadcrumb: category },
    { path: paths[paths.length - 1], breadcrumb: slug },
  ];

  const breadcrumbsEls = routers.map((router, index) => (
    <Link
      key={index}
      to={router.path}
      className="flex justify-start items-center"
    >
      <span className="hover:text-main">{router.breadcrumb}</span>
      {++index < routers.length ? (
        <IoIosArrowForward className="text-[14px] text-black pl-1" />
      ) : (
        ""
      )}
    </Link>
  ));

  return (
    <div className="w-main">
      <h3>{category?.toUpperCase()}</h3>
      <div className="text-sm flex justify-start items-center gap-1">
        {breadcrumbsEls}
      </div>
    </div>
  );
};

export default Breadcrumbs;
