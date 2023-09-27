import icons from "./icons";
import path from "./path";

const { FaHome } = icons;
const navigation = [
  {
    id: 1,
    value: <FaHome className="text-xl" />,
    path: path.HOME,
  },
  {
    id: 2,
    value: "PRODUCTS",
    path: path.PRODUCTS,
  },
  {
    id: 3,
    value: "BLOGS",
    path: path.BLOGS,
  },
  {
    id: 4,
    value: "OUT SERVICES",
    path: path.SERVICES,
  },
  {
    id: 5,
    value: "FAQs",
    path: path.FAQS,
  },
];

export { navigation };
