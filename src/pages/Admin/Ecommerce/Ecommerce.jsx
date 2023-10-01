import React from "react";

import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

import {
  Button,
  Earnings,
  LineChart,
  SparkLine,
} from "../../../components/Admin";

import { Stacked, Pie } from "../";
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
} from "../../../assets/Home-banner/dummy";
import product9 from "../../../assets/Home-banner/product9.jpg";
import { useStateContext } from "../../../contexts/ContextProvider";
import EarningsData from "../../../components/Admin/Ecommerce/EarningsData";

const Ecommerce = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex flex-col justify-between items-center">
            <Earnings />
          </div>
          <div className="flex m-3 flex-wrap justify-center items-center gap-1">
            <EarningsData />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
