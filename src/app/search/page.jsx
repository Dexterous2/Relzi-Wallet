"use client";

import CarBooking from "@/components/hotelComponent/CarBooking";
import FlightBooking from "@/components/hotelComponent/FlightBooking";
import HotelComponent from "@/components/hotelComponent/hotelComponent";
import SearchLayout from "@/layout/SearchLayout";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const params = useSearchParams()
  const getParamsValue = params.get("type")

  const selector = useSelector((state) => state?.orders);
  const [ordersData, setOrdersData] = useState([])

  useEffect(() => {
    if (selector.data && selector.data.length > 0) {
      setOrdersData(selector?.data)
    }
  }, [selector?.data]);

  return (
    <SearchLayout ordersData={ordersData} setOrdersData={setOrdersData}>
      {getParamsValue === "hotel" ?
        <HotelComponent />
        : getParamsValue === "flight" ?
          <FlightBooking /> : getParamsValue === "car" ?
            <CarBooking /> : null
      }
    </SearchLayout>
  );
};

export default Page;
