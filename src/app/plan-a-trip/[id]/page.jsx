"use client";

import UserLayout from "@/layout/UserLayout";
import HotelSinglePageComponent from "@/components/hotelSinglePageComponent/hotelSinglePageComponent";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Page = () => {
  const selector = useSelector((state) => state?.orders);
  const [ordersData, setOrdersData] = useState([])
  useEffect(() => {
    if (selector.data && selector.data.length > 0) {
      setOrdersData(selector?.data)
    }
  }, [selector?.data]);
  return (
    <UserLayout ordersData={ordersData} setOrdersData={setOrdersData}>

      <HotelSinglePageComponent ordersData={ordersData} setOrdersData={setOrdersData} />

    </UserLayout>
  );
};

export default Page;
