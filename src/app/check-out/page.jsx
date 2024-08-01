"use client";
import { FaSnowflake, FaUser } from "react-icons/fa";
import { SlSpeedometer } from "react-icons/sl";
import { FaCarAlt } from "react-icons/fa";
import { TbSettingsCheck } from "react-icons/tb";
import { BsFillFuelPumpFill } from "react-icons/bs";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import Button from "@/components/button/Button";
import RentACar from "@/components/Checkout/RentACar";
import Airline from "@/components/Checkout/Airline";
import Hotel from "@/components/Checkout/Hotel";
import Activity from "@/components/Checkout/Activity";
import UserLayout from "@/layout/UserLayout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "@/redux/feature/order";
import { useRouter } from "next/navigation";

const Page = () => {

  const router = useRouter();

  const [carPrice, setCarPrice] = useState();
  const [flightPrice, setFlightPrice] = useState();
  const [hotelPrice, setHotelPrice] = useState();

  const selector = useSelector((state) => state?.orders);
  const [ordersData, setOrdersData] = useState([])

  useEffect(() => {
    if (selector.data && selector.data.length > 0) {
      setOrdersData(selector?.data)
    }
  }, [selector?.data]);

  const [totalPrice, setTotalPrice] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addData(ordersData));
  }, [ordersData]);

  useEffect(() => {
    if (selector.data && selector.data.length > 0) {
      setOrdersData(selector?.data);
    }
  }, []);

  useEffect(() => {
    const totalPrice = ordersData?.reduce((acc, curr) => acc + curr.price, 0);
    setTotalPrice(totalPrice);

    const filterDataCar = ordersData?.filter((type) => type.type === "(car)");
    filterDataCar?.map((item) => setCarPrice(item?.price));

    const filterDataFlight = ordersData?.filter(
      (type) => type.type === "(flight)"
    );
    filterDataFlight?.map((item) => setFlightPrice(item?.price));

    const filterDataHotel = ordersData.filter(
      (type) => type.type === "(hotel)"
    );
    filterDataHotel?.map((item) => setHotelPrice(item?.price));
  }, [ordersData]);

  return (
    <UserLayout>
      <div className="flex lg:flex-row flex-col justify-between lg:gap-8 gap-4 lg:py-[2rem] py-[1rem] ">
        <div className="flex flex-col gap-8">
          <RentACar />
          <Airline />
          <Hotel />
          <Activity />
        </div>

        <div className="bg-white-color py-4 p-5 h-fit rounded-md lg:w-1/2 w-full">
          <div className="flex justify-between">
            <h3>Items</h3>
            <h3>Total</h3>
          </div>

          {carPrice !== undefined && (
            <>
              <div className="py-[1rem]">
                <hr />
              </div>
              <div className="flex justify-between">
                <h4>Car Booking</h4>
                <h4>${carPrice}</h4>
              </div>
            </>
          )}

          {flightPrice !== undefined && (
            <>
              <div className="py-[1rem]">
                <hr />
              </div>

              <div className="flex justify-between">
                <h4>Flight Booking</h4>
                <h4>${flightPrice}</h4>
              </div>
            </>
          )}

          {hotelPrice !== undefined && (
            <>
              <div className="py-[1rem]">
                <hr />
              </div>

              <div className="flex justify-between">
                <h4>Hotel Booking</h4>
                <h4>${hotelPrice}</h4>
              </div>
            </>
          )}

          <div className="py-[1rem]">
            <hr />
          </div>

          <div className="flex justify-between">
            <h4>Activity Booking</h4>
            <h4>$49.00</h4>
          </div>

          <div className="py-[1rem]">
            <hr />
          </div>

          <h3 className="text-end pt-2 pb-4">${totalPrice}</h3>

          <Button
            name={"Pay Now"}
            pClass={"text-white"}
            bgcolor={"bg-primary-color"}
            className={'rounded-[10rem]'}
            onClick={() => router.push('/check-out-form')}
          />
        </div>
      </div>
    </UserLayout>
  );
};

export default Page;
