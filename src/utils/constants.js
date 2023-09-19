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

const prices = [
  {
    id: 0,
    value: "$0 - $25",
  },
  {
    id: 1,
    value: "$25 - $50",
  },
  {
    id: 2,
    value: "50 - $75",
  },
  {
    id: 3,
    value: "$75+",
  },
];

const colors = [
  {
    id: 0,
    value: "SPACE GRAY",
  },
  {
    id: 1,
    value: "SILVER",
  },
  {
    id: 2,
    value: "GOLD",
  },
  {
    id: 3,
    value: "BLACK",
  },
  {
    id: 4,
    value: "BLUE",
  },
  {
    id: 5,
    value: "RED",
  },
  {
    id: 6,
    value: "WHITE",
  },
];

const categories = [
  {
    id: 0,
    value: "All New Arrivals",
  },
  {
    id: 1,
    value: "Printer",
  },
  {
    id: 2,
    value: "Television",
  },
  {
    id: 3,
    value: "Accessories",
  },
  {
    id: 4,
    value: "Tablet",
  },
  {
    id: 5,
    value: "Laptop",
  },
  {
    id: 6,
    value: "Camera",
  },
  {
    id: 7,
    value: "Smartphone",
  },
  {
    id: 8,
    value: "Speaker",
  },
];

export { navigation, prices, colors, categories };
