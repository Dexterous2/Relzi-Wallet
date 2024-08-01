"use client";
import Button from "@/components/button/Button";
import { useEffect, useState } from "react";
import { FaHotel } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import { IoCarSharp } from "react-icons/io5";
import { MdOutlineCallToAction } from "react-icons/md";
import Field from "@/components/inputFIeld/Field";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoCarSportOutline } from "react-icons/io5";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa6";
import { MdAirplaneTicket } from "react-icons/md";
// import { FaHotel } from "react-icons/fa6";
import { BiTrip } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaStar } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { breakpoints } from "@/lib/SwiperBreakPoints";
import { useRouter } from "next/navigation";
import { CartSheet } from "@/components/cartSheet/cartSheet";
import { useSelector } from "react-redux";
import PageLoader from "@/components/page_loader/loader";
import Link from "next/link";

export default function Home() {

  const router = useRouter();

  const [padding, setPadding] = useState({
    padding_xl: "xl:px-[16rem]",
    padding_lg: "lg:px-[12rem]",
    padding_md: "md:px-[4rem]",
    padding_sm: "sm:px-[4rem]",
    padding_xs: "max-sm:px-[0.5rem]",
  });

  const slider_data = [
    {
      id: 1,
      icon: (
        <IoCarSportOutline className="text-5xl text-white animate-bounce" />
      ),
      name: "Car Booking",
      pathName: "/search?type=car"
    },
    {
      id: 2,
      icon: (
        <MdOutlineCurrencyExchange className="text-5xl text-white animate-bounce" />
      ),
      name: "Currency Exchange",
    },
    {
      id: 3,
      icon: (
        <FaMoneyBillTransfer className="text-5xl text-white animate-bounce" />
      ),
      name: "Money Transfer",
    },
    {
      id: 4,
      icon: <FaRegCreditCard className="text-5xl text-white animate-bounce" />,
      name: "Virtual Card",
    },
    {
      id: 5,
      icon: <MdAirplaneTicket className="text-5xl text-white animate-bounce" />,
      name: "Flights Booking",
      pathName: "/search?type=flight"
    },
    {
      id: 6,
      icon: <FaHotel className="text-5xl text-white animate-bounce" />,
      name: "Hotels Booking",
      pathName: "/search?type=hotel"
    },
    {
      id: 7,
      icon: <BiTrip className="text-5xl text-white animate-bounce" />,
      name: "Plan a Trip",
      pathName: "/plan-a-trip?type=plan-a-trip"
    },
  ];

  const testimonial_data = [
    {
      id: 1,
      title: "Awesome Design!",
      para: `Etiam sapien sem at sagittis congue augue massa varius
      egestas magna suscipit magna tempus aliquet porta rutrum
      sodales auctor integer risus auctor rutrum`,
      img: "/image/main/avatar.png",
      name: "Evelyn Martinez",
      busnies: "Housewife",
      star: <FaStar className="text-yellow-500 text-lg" />,
    },
    {
      id: 2,
      title: "Awesome Design!",
      para: `Etiam sapien sem at sagittis congue augue massa varius
      egestas magna suscipit magna tempus aliquet porta rutrum
      sodales auctor integer risus auctor rutrum`,
      img: "/image/main/avatar.png",
      name: "Evelyn Martinez",
      busnies: "Housewife",
      star: <FaStar className="text-yellow-500 text-lg" />,
    },
    {
      id: 3,
      title: "Awesome Design!",
      para: `Etiam sapien sem at sagittis congue augue massa varius
      egestas magna suscipit magna tempus aliquet porta rutrum
      sodales auctor integer risus auctor rutrum`,
      img: "/image/main/avatar.png",
      name: "Evelyn Martinez",
      busnies: "Housewife",
      star: <FaStar className="text-yellow-500 text-lg" />,
    },
    {
      id: 4,
      title: "Awesome Design!",
      para: `Etiam sapien sem at sagittis congue augue massa varius
      egestas magna suscipit magna tempus aliquet porta rutrum
      sodales auctor integer risus auctor rutrum`,
      img: "/image/main/avatar.png",
      name: "Evelyn Martinez",
      busnies: "Housewife",
      star: <FaStar className="text-yellow-500 text-lg" />,
    },
    {
      id: 5,
      title: "Awesome Design!",
      para: `Etiam sapien sem at sagittis congue augue massa varius
      egestas magna suscipit magna tempus aliquet porta rutrum
      sodales auctor integer risus auctor rutrum`,
      img: "/image/main/avatar.png",
      name: "Evelyn Martinez",
      busnies: "Housewife",
      star: <FaStar className="text-yellow-500 text-lg" />,
    },
    {
      id: 6,
      title: "Awesome Design!",
      para: `Etiam sapien sem at sagittis congue augue massa varius
      egestas magna suscipit magna tempus aliquet porta rutrum
      sodales auctor integer risus auctor rutrum`,
      img: "/image/main/avatar.png",
      name: "Evelyn Martinez",
      busnies: "Housewife",
      star: <FaStar className="text-yellow-500 text-lg" />,
    },
    {
      id: 7,
      title: "Awesome Design!",
      para: `Etiam sapien sem at sagittis congue augue massa varius
      egestas magna suscipit magna tempus aliquet porta rutrum
      sodales auctor integer risus auctor rutrum`,
      img: "/image/main/avatar.png",
      name: "Evelyn Martinez",
      busnies: "Housewife",
      star: <FaStar className="text-yellow-500 text-lg" />,
    },
  ];

  const selector = useSelector((state) => state?.orders);
  const [ordersData, setOrdersData] = useState([])

  useEffect(() => {
    if (selector.data && selector.data.length > 0) {
      setOrdersData(selector?.data)
    }
  }, [selector?.data]);

  return (
    <main
      className={`border--2 border-[red] w-full h-screen overflow-hidden overflow-y-auto`}
    >

      {/* <PageLoader />       */}

      {/* sec_1 */}
      <div
        className={`w-full h-[85%] max-lg:h-fit pb-5  ${padding.padding_xs} ${padding.padding_sm} ${padding.padding_md} ${padding.padding_lg} ${padding.padding_xl}`}
        style={{
          background:
            "linear-gradient(to top, #00a3b1, #68b2cc, #a2c2dc, #cdd4e4, #eaeaea)",
        }}
      >
        <nav
          className={`h-[5rem] max-sm:h-fit max-sm:gap-5 max-sm:py-2 flex max-sm:flex-col items-center justify-between`}
        >
          <img
            src="/image/main/logo.png"
            alt="logo.png"
            className="w-[13rem] min-h-[2.5rem] max-sm:min-h-[1rem]"
          />

          <div className="flex items-center justify-center gap-5">
            <CartSheet ordersData={ordersData} setOrdersData={setOrdersData} />

            <Button
              name={"Sign In"}
              bgcolor={"bg-primary-color"}
              pClass={
                "text-white"
              }
              mainClass={"text-white px-4 py-2 bg-primary-color min-w-[6rem] max-sm:min-w-[2.8rem] rounded-full"}
              onClick={() => router.push('/login')}
              // className={'rounded-full'}
            />
            <Button
              name={"Sign Up"}
              bgcolor={"bg-primary-color"}    
              pClass={
                "text-white"
              }
              mainClass={"text-white px-4 py-2 bg-primary-color min-w-[6rem] max-sm:min-w-[2.8rem] rounded-full"}
              onClick={() => router.push('/signup')}
            />

          </div>
        </nav>

        <h4 className="text-3xl xl:text-5xl font-bold text-center mt-10">
          {" "}
          Where to?{" "}
        </h4>

        <ul className="flex justify-center items-center flex-wrap gap-5 font-bold text-sm my-10">
          <li className="flex justify-center items-center gap-2">
            {" "}
            <div>
              {" "}
              <FaHotel className="text-lg" />{" "}
            </div>{" "}
            Hotel{" "}
          </li>
          <li className="flex justify-center items-center gap-2">
            {" "}
            <div>
              {" "}
              <MdFlight className="text-xl" />{" "}
            </div>{" "}
            Flights{" "}
          </li>
          <li className="flex justify-center items-center gap-2">
            {" "}
            <div>
              {" "}
              <IoCarSharp className="text-xl" />{" "}
            </div>{" "}
            Cars{" "}
          </li>
          <li className="flex justify-center items-center gap-2 min-w-fit">
            {" "}
            <div>
              {" "}
              <MdOutlineCallToAction className="text-lg" />{" "}
            </div>{" "}
            Things to do{" "}
          </li>
        </ul>

        <div className={`box_shadow_primary bg-white p-2 rounded-xl flex max-lg:flex-col items-center gap-5`}>
          <Field
            type="text"
            placeHolder={"Going to?"}
            className={"h-[2.8rem]"}
            bgColor={"bg-white"}
            styles={{ border: "2px solid #D1D5DB" }}
          />
          <Field
            type="date"
            placeHolder={"Going to?"}
            className={"h-[2.8rem]"}
            bgColor={"bg-white"}
            styles={{ border: "2px solid #D1D5DB" }}
          />
          <p className="text-lg font-bold"> To </p>
          <Field
            type="date"
            placeHolder={"Going to?"}
            className={"h-[2.8rem]"}
            bgColor={"bg-white"}
            styles={{ border: "2px solid #D1D5DB" }}
          />
          <select
            name=""
            id=""
            className="w-full h-[2.8rem] border-2 border-[#D1D5DB] rounded-lg outline-none pl-2"
          >
            <option value="travellors"> Travellors </option>
            <option value="adults"> Adults </option>
            <option value="children"> Childrens </option>
          </select>
          <Button
            name={"Search Now"}
            className={`max-sm:px-2 px-0 max-w-[11rem]`}
            bgcolor={"bg-primary-color"}
            pClass={
              "text-white max-xl:text-sm font-semibold min-w-[4rem] h-[1.3rem] max-sm:min-w-[2.8rem] px-0"
            }
          />
        </div>

        <div className="w-full flex justify-center my-10">
          <div className="w-[80%] h-[12rem] flex justify-center items-center">
            <Swiper
              breakpoints={breakpoints}
              // slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Pagination]}
              className="mySwiper h-full"
              style={{
                "--swiper-pagination-color": "#fff",
                "--swiper-pagination-bottom": "-0.4rem",
                paddingBottom: "2rem",
              }}
            >
              {slider_data?.map((item) => (
                <SwiperSlide
                  className="border-[1px] border-[#fff] box_shadow_primary bg-primary-color rounded-xl overflow-hidden cursor-pointer"
                  key={item.id}
                  onClick={() => router.push(item.pathName)}
                >
                  <div className="h-full flex flex-col justify-center items-center">
                    {item.icon}
                    <h4 className="text-base lg:text-base font-semibold text-center mt-3 text-white">
                      {item.name}
                    </h4>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* sec_2 */}
      <div
        className={`w-full h-fit mt-10 lg:mt-[-8rem] ${padding.padding_xs} ${padding.padding_sm} ${padding.padding_md} ${padding.padding_lg} ${padding.padding_xl}`}
      >
        <div className="w-full h-[28rem] flex justify-center items-center relative box_shadow_primary">
          <img
            src="/image/main/image-bg-phone.png"
            alt="image-bg-phone.png"
            className="w-full h-full object-cover"
          />
          <div className="sm:w-[40%] w-[80%] absolute top-[50%] translate-y-[-50%] sm:left-10 left-4 flex flex-col justify-center gap-5">
            <h4 className="text-3xl lg:text-4xl font-bold text--center mt-10 text-white">
              Build a trip in minutes
            </h4>
            <p className="text-base lg:text-lg font-semibold text--center mt-3 text-white">
              Get a personalized itinerary just for you, guided by traveler tips
              and reviews.
            </p>
            <Button
              name={"Start a trip with AI"}
              className={`max-sm:px-2 w-fit`}
              bgcolor={"bg-white"}
              pClass={
                "text-primary-color max-sm:text-sm font-semibold min-w-fit w--[4.5rem] h-[1.3rem] max-sm:min-w-[2.8rem]"
              }
            />
          </div>
        </div>

        <div className="w-full h-fit sm:h-[60vh] bg-[#F2B204] flex justify-between items-center relative mt-10 box_shadow_primary">
          <div className="w-[50%] h-full p-4 hidden sm:block">
            <img
              src="/image/main/women.png"
              alt="women.png"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full sm:w-[50%] flex flex-col justify-center gap-5 p-10">
            <h4 className="text-3xl lg:text-4xl font-bold text--center mt-10 text-[#000]">
              {" "}
              Help Maui & others around the world{" "}
            </h4>
            <p className="text-base lg:text-lg font-semibold text--center mt-3 text-[#000]">
              {" "}
              The Tripadvisor Foundation is matching donations to World Central
              Kitchen’s Climate Disaster Fund. Your support helps disaster
              responses not only in Maui, but worldwide.{" "}
            </p>
            <Button
              name={"Donate now"}
              className={`max-sm:px-2 w-fit`}
              bgcolor={"bg-[#000]"}
              pClass={
                "text-white max-sm:text-sm font-semibold min-w-fit w--[4.5rem] h-[1.3rem] max-sm:min-w-[2.8rem]"
              }
            />
          </div>
        </div>
      </div>

      {/* sec_3 */}
      <div
        className={`w-full h-fit mt-10 ${padding.padding_xs} ${padding.padding_sm} ${padding.padding_md} ${padding.padding_lg} ${padding.padding_xl}`}
      >
        <div className="w-full">
          <h4 className="text-xl lg:text-2xl font-bold mt--10 text-[#000] sm:text-start text-center">
            Top Things to Do by category
          </h4>
          <p className="text-base font-semibold mt-3 text-[#000] sm:text-start text-center">
            Travelers' Choice Best of the Best winners
          </p>

          <div className="w-full flex justify-center">
            <div className="sm:w-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 mt-3 gap-5 w-full">
              <div className="relative box_shadow_primary">
                <img src="/image/main/car.png" alt="car.png" className="w-full" />
                <h6 className="text-2xl font-bold mt-10 text-[#fff] absolute bottom-5 left-5">
                  Top Overall
                </h6>
              </div>
              <div className="relative box_shadow_primary">
                <img src="/image/main/car.png" alt="car.png" className="w-full" />
                <h6 className="text-2xl font-bold mt-10 text-[#fff] absolute bottom-5 left-5">
                  Top Overall
                </h6>
              </div>
              <div className="relative box_shadow_primary">
                <img src="/image/main/car.png" alt="car.png" className="w-full" />
                <h6 className="text-2xl font-bold mt-10 text-[#fff] absolute bottom-5 left-5">
                  Top Overall
                </h6>
              </div>
              <div className="relative box_shadow_primary">
                <img src="/image/main/car.png" alt="car.png" className="w-full" />
                <h6 className="text-2xl font-bold mt-10 text-[#fff] absolute bottom-5 left-5">
                  {" "}
                  Top Overall
                </h6>
              </div>
              <div className="relative box_shadow_primary">
                <img src="/image/main/car.png" alt="car.png" className="w-full" />
                <h6 className="text-2xl font-bold mt-10 text-[#fff] absolute bottom-5 left-5">
                  {" "}
                  Top Overall
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* sec_4 */}
      <div
        className={`w-full h-fit mt-10 ${padding.padding_xs} ${padding.padding_sm} ${padding.padding_md} ${padding.padding_lg} ${padding.padding_xl}`}
      >
        <div className="w-full h-[28rem] flex justify-center items-center relative box_shadow_primary">
          <img
            src="/image/main/goto.png"
            alt="image-bg-phone.png"
            className="w-full h-full object-cover"
          />
          <div className="sm:w-[40%] w-[80%] absolute bottom-5 translate--y-[-50%] sm:left-10 left-4 flex flex-col justify-center gap-5">
            <h4 className="text-3xl lg:text-4xl font-bold text--center mt-10 text-white">
              {" "}
              Your go to-guide for fall{" "}
            </h4>
            <p className="text-base lg:text-lg font-semibold text--center mt-3 text-white">
              How to take on the season at home and a far
            </p>
            <Button
              name={"Donate now"}
              className={`max-sm:px-2 w-fit`}
              bgcolor={"bg-white"}
              pClass={
                "text-[#000] max-sm:text-sm font-semibold min-w-fit w--[4.5rem] h-[1.3rem] max-sm:min-w-[2.8rem]"
              }
            />
          </div>
        </div>
      </div>

      {/* sec_5 */}
      <div
        className={`bg-[#FAF1ED] w-full h-fit mt-10 p-5 ${padding.padding_xs} ${padding.padding_sm} ${padding.padding_md} ${padding.padding_lg} ${padding.padding_xl}`}
      >
        <h4 className="text-xl lg:text-2xl font-bold mt--10 text-[#000]">
          More to explore
        </h4>
        <div className="w-full flex justify-center">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-3 gap-5">
            <div className="w-full h-fit relative box_shadow_primary">
              <div className="bg-[#fff] rounded-full w-[2.5rem] h-[2.5rem] absolute top-4 right-4 flex justify-center items-center cursor-pointer">
                <FaRegHeart className="text-xl text-[#000]" />
              </div>
              <img
                src="/image/main/ship.png"
                alt="car.png"
                className="w-full h-full object-cover"
              />
              <div className="p-5">
                <p className="text-base font-semibold text-center mt-3 text-[#000]">
                  Do Paris like a pro: A local shares the neighborhoods you
                  can't miss
                </p>
              </div>
            </div>
            <div className="w-full h-fit relative box_shadow_primary">
              <div className="bg-[#fff] rounded-full w-[2.5rem] h-[2.5rem] absolute top-4 right-4 flex justify-center items-center cursor-pointer">
                <FaRegHeart className="text-xl text-[#000]" />
              </div>
              <img
                src="/image/main/ship.png"
                alt="car.png"
                className="w-full h-full object-cover"
              />
              <div className="p-5">
                <p className="text-base font-semibold text-center mt-3 text-[#000]">
                  Do Paris like a pro: A local shares the neighborhoods you
                  can't miss
                </p>
              </div>
            </div>
            <div className="w-full h-fit relative box_shadow_primary">
              <div className="bg-[#fff] rounded-full w-[2.5rem] h-[2.5rem] absolute top-4 right-4 flex justify-center items-center cursor-pointer">
                <FaRegHeart className="text-xl text-[#000]" />
              </div>
              <img
                src="/image/main/ship.png"
                alt="car.png"
                className="w-full h-full object-cover"
              />
              <div className="p-5">
                <p className="text-base font-semibold text-center mt-3 text-[#000]">
                  Do Paris like a pro: A local shares the neighborhoods you
                  can't miss
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* sec_6 */}
      <div
        className={`w-full h-fit mt-10 lg:mb-[20vw] ${padding.padding_xs} ${padding.padding_sm} ${padding.padding_md} ${padding.padding_lg} ${padding.padding_xl}`}
      >
        <div className="w-full">
          <h4 className="text-xl lg:text-2xl font-bold mt--10 text-[#000] sm:text-start text-center">
            {" "}
            Top destinations for your next vacation{" "}
          </h4>
          <div className="w-full flex justify-center">
            <div className="sm:w-fit w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mt-3 gap-5">
              <div className="relative box_shadow_primary sm:w-fit w-full">
                <img src="/image/main/ground.png" alt="ground.png" className="sm:w-fit w-full" />
                <h6 className="text-xl font-bold mt-10 text-[#fff] absolute bottom-5 left-5">
                  {" "}
                  Yellowstone National Park, WY
                </h6>
              </div>
              <div className="relative box_shadow_primary sm:w-fit w-full">
                <img src="/image/main/ground.png" alt="ground.png" className="sm:w-fit w-full" />
                <h6 className="text-xl font-bold mt-10 text-[#fff] absolute bottom-5 left-5">
                  {" "}
                  Yellowstone National Park, WY
                </h6>
              </div>
              <div className="relative box_shadow_primary sm:w-fit w-full">
                <img src="/image/main/ground.png" alt="ground.png" className="sm:w-fit w-full" />
                <h6 className="text-xl font-bold mt-10 text-[#fff] absolute bottom-5 left-5">
                  {" "}
                  Yellowstone National Park, WY
                </h6>
              </div>
              <div className="relative box_shadow_primary sm:w-auto w-full h-auto">
                <img src="/image/main/ground.png" alt="ground.png" className="w-full h-auto" />
                <h6 className="text-xl font-bold mt-10 text-[#fff] absolute bottom-5 left-5">
                  {" "}
                  Yellowstone National Park, WY
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* sec_7 */}
      <div
        className={`bg-secondary-color w-full h-fit mt-10 p-5 ${padding.padding_xs} ${padding.padding_sm} ${padding.padding_md} ${padding.padding_lg} ${padding.padding_xl}`}
      >
        <div className="w-full lg:h-[20vw] flex max-lg:flex-col justify-between">
          <div className="w-[50%] max-lg:w-full flex items-center">
            <h4 className="text-3xl max-sm:text-2xl lg:text-4xl text-primary-color tracking-wide font-bold">
              Your Ultimate Mobile Wallet for Seamless Travel and More!
            </h4>
          </div>

          <div className="w-[50%] max-lg:h-[30%] max-lg:w-[100%] max-lg:flex max-lg:justify-center relative">
            <img
              src="/image/main/mobile.png"
              alt="mobile.png"
              className="w-[100%]  max-md:w-[20rem] max-lg:w-[50vw] lg:absolute top-[-10rem] right-0 animate-pulse lg:animate-bounce"
            />
          </div>
        </div>
      </div>

      {/* sec_8 */}
      <div
        className={`bg-primary-color w-full h-fit mt--10 pt-[3rem] ${padding.padding_xs} ${padding.padding_sm} ${padding.padding_md} ${padding.padding_lg} ${padding.padding_xl}`}
      >
        <div className="w-full h-fit flex max-md:flex-col-reverse justify-between">
          <div className="w-[50%] max-md:w-full max-md:justify-center">
            <img
              src="/image/main/girl.png"
              alt="girl.png"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[50%] max-md:w-full max-md:mb-10 flex justify-center items-center">
            <div>
              <ul className="w-full flex flex-col justify-center items--center gap-5 text-[#fff] font-semibold">
                <li className="w-fit text-base lg:text-xl xl:text-2xl flex justify-between items-center">
                  {" "}
                  <IoMdCheckmarkCircleOutline className="me-2" /> Effortless
                  Money Transfer{" "}
                </li>
                <li className="w-fit text-base lg:text-xl xl:text-2xl flex justify-between items-center">
                  {" "}
                  <IoMdCheckmarkCircleOutline className="me-2" /> Plan Your
                  Dream Trip{" "}
                </li>
                <li className="w-fit text-base lg:text-xl xl:text-2xl flex justify-between items-center">
                  {" "}
                  <IoMdCheckmarkCircleOutline className="me-2" /> Hassle-Free
                  Hotel Booking{" "}
                </li>
                <li className="w-fit text-base lg:text-xl xl:text-2xl flex justify-between items-center">
                  {" "}
                  <IoMdCheckmarkCircleOutline className="me-2" /> Car Rental
                  Made Easy{" "}
                </li>
                <li className="w-fit text-base lg:text-xl xl:text-2xl flex justify-between items-center">
                  {" "}
                  <IoMdCheckmarkCircleOutline className="me-2" /> Currency
                  Converter{" "}
                </li>
                <li className="w-fit text-base lg:text-xl xl:text-2xl flex justify-between items-center">
                  {" "}
                  <IoMdCheckmarkCircleOutline className="me-2" /> Virtual Card
                  Management{" "}
                </li>
                <li className="w-fit text-base lg:text-xl xl:text-2xl flex justify-between items-center">
                  {" "}
                  <IoMdCheckmarkCircleOutline className="me-2" /> Things To Do{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-secondary-color w-full h--[20rem] rounded-3xl flex flex-col justify-center items-center max-sm:p-5 p-10 box_shadow_primary">
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
            Sign Up Now or Download Relzi
          </h4>
          <div className="flex max-sm:flex-col justify-center items-center gap-5 mt-5">
            <img
              src="/image/main/appstore.png"
              alt="appstore.png"
              className="w-full"
            />
            <img
              src="/image/main/google-play.png"
              alt="google.png"
              className="w-full"
            />
          </div>
        </div>

        <div className="w-full h-fit flex justify-center py-28">
          <div className="w-full flex justify-center items-center">
            <Swiper
              breakpoints={breakpoints}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Pagination]}
              className="mySwiper min-h-[19rem]"
              style={{
                "--swiper-pagination-color": "#fff",
                "--swiper-pagination-bottom": "-0.4rem",
                paddingBottom: "3rem",
              }}
            >
              {testimonial_data?.map((item) => (
                <SwiperSlide
                  className="border-[1px] border-[#fff] max-sm:min-w-[10rem] min-w-[20rem] box_shadow_primary bg-primary-color rounded-lg overflow--hidden"
                  key={item.id}
                >
                  <div className="bg-white max-sm:h-fit h-[14rem] flex flex-col justify--between items-center p-4 relative">
                    <h4 className="text-center text-2xl font-bold text-primary-color">
                      {item.title}
                    </h4>
                    <p className="text-center text-base pt-4">{item.para}</p>
                    <img
                      src={item.img}
                      alt="avatar.png"
                      className="w-[5rem] h-[5rem] rounded-full absolute max-sm:bottom-[-4rem] bottom-[-3rem] box_shadow_primary"
                    />
                  </div>
                  <div className="w-full h-fit mt-5 pb-2">
                    <h4 className="text-center text-2xl font-medium text-white max-sm:mt-16 mt-14">
                      {item.name}
                    </h4>
                    <p className="text-center text-base text-white">
                      {item.busnies}
                    </p>
                    <div className="flex justify-center gap-1 pt-4">
                      {item.star}
                      {item.star}
                      {item.star}
                      {item.star}
                      {item.star}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* sec_9 */}
      <footer
        className={`bg-secondary-color w-full h-fit p-5 ${padding.padding_xs} ${padding.padding_sm} ${padding.padding_md} ${padding.padding_lg} ${padding.padding_xl}`}
      >
        <div className="w-full flex max-lg:flex-col justify-between items-center max-sm:flex-col max-sm:items-center pt-4">
          <div className="w-[50%] max-lg:w-full flex flex-col max-lg:justify-center max-lg:items-center ">
            <img
              src="/image/main/logo.png"
              alt="logo.png"
              className="w-[13rem] min-h-[3rem] object-cover"
            />
            <p className="text-[#000] text-base pt-5">
              Relzi, the all-in-one mobile wallet app that redefines the way you
              manage your money, plan your trips, and make payments. With Relzi,
              your smartphone becomes your passport to a world of convenience
              and possibilities.
            </p>
            <div className="flex max-lg:justify-center justify-between items-center flex-wrap pt-5 gap-5">
              <h5 className="min-w-fit text-primary-color font-bold text-base pt-3 max-lg:text-center">
                {" "}
                Email: support@relziapp.com{" "}
              </h5>
              <h5 className="min-w-fit text-primary-color font-bold text-base pt-3 max-lg:text-center">
                {" "}
                Phone: +1 800 555-Relzi{" "}
              </h5>
            </div>
          </div>

          <div className="h-full w-[50%] max-lg:w-full flex max-lg:flex-col max-lg:justify-between justify-around">
            <div className="flex flex-col justify-center items-center gap-5 mt-5">
              <img
                src="/image/main/appstore.png"
                alt="appstore.png"
                className="w-[10rem]"
              />
              <img
                src="/image/main/google-play.png"
                alt="google.png"
                className="w-[10rem]"
              />
            </div>

            <ul className="text-primary-color font-bold flex max-lg:items-center max-lg:mt-5 items-end justify-center flex-col gap-5">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className="w-full h-fit flex max-sm:flex-col justify-between items-center pt-14 gap-4">
          <h5 className="text-primary-color font-semibold text-base max-sm:text-center">
            {" "}
            <Link href={'/privacy-policy'}> Privacy Policy  </Link> | <Link href={'/terms-and-condition'}> Terms and Condition </Link> | Security{" "}
          </h5>
          <h5 className="text-primary-color font-semibold text-base max-sm:text-center">
            {" "}
            © 2023 Relzi. All rights reserved.{" "}
          </h5>
        </div>
      </footer>

    </main>
  );
}
