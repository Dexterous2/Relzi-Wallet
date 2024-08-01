"use client";
import React, { useEffect, useState } from "react";
import { FaAngleUp, FaPlaneDeparture, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { breakpoints } from "@/lib/SwiperBreakPoints";
import { IoIosCheckmark } from "react-icons/io";
import { AiFillDollarCircle } from "react-icons/ai";
import Button from "@/components/button/Button";
import { MdCancel } from "react-icons/md";
import { AlertDialogPri } from "@/components/dialogbox/dialogBox";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "@/redux/feature/order";
import { usePathname, useRouter } from "next/navigation";

const SelectFlight = ({ isOpen }) => {
  const [detailToggler, setDetailToggler] = useState(false);

  const pathName = usePathname();
  const pathNameStart = pathName.startsWith("/plan-a-trip");
  const router = useRouter();

  // /////////////////////presist
  // ////////////////////////////
  const selector = useSelector((state) => state?.orders);
  const [ordersData, setOrdersData] = useState([]);
  const dispatch = useDispatch();

  const testObject = {
    id: 2,
    title: "Economy",
    type: "(flight)",
    qty: 1,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: 34000,
  };

  useEffect(() => {
    dispatch(addData(ordersData));
  }, [ordersData]);

  useEffect(() => {
    if (selector.data && selector.data.length > 0) {
      setOrdersData(selector?.data);
    }
  }, []);

  const handleSaveData = () => {
    setOrdersData((prev) => [...prev, testObject]);
    if (pathNameStart) {
      router.push("/plan-a-trip?type=car");
    }
  };
  // /////////////////////presist
  // ////////////////////////////

  const handleEscape = (event) => {
    if (event.keyCode === 27) {
      isOpen(false);
    }
  };

  window.addEventListener("keydown", handleEscape);

  const testimonial_data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="fixed top-0 left-0 z-[1] h-screen w-full bg-[#00000054] flex justify-center items-center">
      <div
        className={`relative xl:w-[65rem] w-full bg-white text-white rounded-xl p-4 flex flex-col gap-4  ${detailToggler
          ? "xl:h-[40rem] h-[35rem]  overflow-auto"
          : "xl:h-auto h-[35rem] overflow-auto"
          } z-[400]`}
      >
        <div className="absolute top-4 right-4 w-fit cursor-pointer">
          <MdCancel color="black" size={25} onClick={() => isOpen(false)} />
        </div>
        <span className="flex flex-col gap-1 text-text-primary-color">
          <h3>Select fare to New York</h3>
          <h3>11:00pm - 9:00am (19h, 1 stop)</h3>
        </span>
        <div className="flex flex-col gap-1">
          <p
            className="flex items-center gap-3 py-2 font-bold text-primary-color"
            onClick={() => setDetailToggler(!detailToggler)}
          >
            Show Details{" "}
            <FaAngleUp
              className={
                detailToggler
                  ? `rotate-0 transition-all duration-300`
                  : "rotate-180 transition-all duration-300"
              }
            />
          </p>
          <div
            className={`overflow-hidden ${detailToggler
              ? "h-[28rem] transition-all duration-500  ease-in text-black"
              : "h-[2rem] transition-all duration-500 ease-in"
              }`}
          >
            <div className="pt-[1rem] pb-[1rem]">
              <hr />
            </div>
            <div className="flex gap-4">
              <h3>
                <FaPlaneDeparture />
              </h3>

              <span>
                <p>5:35am - Dubai</p>
                <p>Dubai Intl. (DXB)</p>
                <p>1h 40m flight</p>

                <p>Kuwait Airways 678</p>
                <p>Economy/Coach (V)</p>
              </span>
            </div>
            <div className="flex gap-4">
              <h3>
                <FaPlaneDeparture />
              </h3>

              <span>
                <p>6:15am - Kuwait City</p>
                <p>Kuwait Intl. (KWI)</p>
              </span>
            </div>
            <div className="pt-[1rem] pb-[1rem]">
              <hr />
            </div>
            <p>Layover: 3h 15m in Kuwait City</p>
            <div className="pt-[1rem] pb-[1rem]">
              <hr />
            </div>
            <div className="flex gap-4">
              <h3>
                <FaPlaneDeparture />
              </h3>

              <span>
                <p>9:30am - Kuwait City</p>
                <p>Kuwait Intl. (KWI)</p>
                <p>13h 30m flight</p>

                <p>Kuwait Airways 117</p>
                <p>BOEING 777-300ER</p>
                <p>Economy/Coach (V)</p>
              </span>
            </div>
            <div className="flex gap-4">
              <h3>
                <FaPlaneDeparture />
              </h3>

              <span>
                <p>3:00pm - New York</p>
                <p>John F. Kennedy Intl. (JFK)</p>
              </span>
            </div>
          </div>
        </div>

        <div className="border--2 border-[blue] w-full h-fit flex justify-center py-4">
          <div className="border--2 border-[red] w-full flex justify-center items-center">
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
                "--swiper-pagination-color": "#000",
                "--swiper-pagination-bottom": "-0.4rem",
                paddingBottom: "3rem",
              }}
            >
              {testimonial_data?.map((item) => (
                <SwiperSlide
                  className="border-[1px] border-gray-400 max-sm:min-w-[10rem] min-w-[20rem] box_shadow_primary bg-primary-color rounded-lg overflow-hidden"
                  key={item.id}
                >
                  <div className="border--2 border-[yellow] bg-white max-sm:h-fit flex flex-col justify--between items-start p-4 relative text-black">
                    <h4 className="text-start text-2xl font-bold text-text-primary-color">
                      $571
                    </h4>
                    <p className="text-center text-black">
                      $570.30 one way for 1 traveler
                    </p>
                    <p className="text-center text-base pt-2">Cabin: Economy</p>
                  </div>
                  <div className="border--2 border-[yellow] bg-white max-sm:h-fit flex flex-col justify--between items-start p-4 relative text-black">
                    <h4 className="text-start text-2xl font-bold text-text-primary-color">
                      Bags
                    </h4>
                    <span className="flex flex-col leading-1">
                      <p className="flex gap-1 items-center">
                        <IoIosCheckmark size={25} />
                        Carry-on bags included*
                      </p>
                      <p className="flex gap-1 items-center">
                        <IoIosCheckmark size={25} />
                        Carry-on bags included this is*
                      </p>
                    </span>
                    <p className="flex gap-1 items-center">
                      **Checked bags can weigh up to 50 lbs each
                    </p>
                  </div>
                  <div className="border--2 border-[yellow] bg-white max-sm:h-fit flex flex-col justify--between items-start p-4 relative text-black">
                    <h4 className="text-start text-2xl font-bold text-text-primary-color">
                      Flexibility
                    </h4>
                    <span className="flex flex-col leading-1">
                      <p className="flex gap-1 items-center">
                        <AiFillDollarCircle size={15} />
                        Cancellation fee applies
                      </p>
                      <p className="flex gap-1 items-center">
                        <AiFillDollarCircle size={15} />
                        Change fee applies
                      </p>
                    </span>
                  </div>
                  <div className="px-2 pb-3 bg-white">
                    {/* <Button name={"Select"} bgcolor={"bg-text-primary-color"} pClass={"text-white"} /> */}

                    {pathNameStart === true ? (
                      <Button
                        name={"Add to cart"}
                        className={`max-sm:px-2 px-0 max-w-full`}
                        bgcolor={"bg-primary-color"}
                        pClass={
                          "text-[#fff] text-sm font-bold max-xl:text-sm font-semibold min-w-[5rem] h-[1.3rem] max-sm:min-w-[2.8rem] px-0"
                        }
                        onClick={() => router.push("/plan-a-trip?type=car")}
                      />
                    ) : (
                      <AlertDialogPri
                        btn_name={"Add to cart"}
                        title={"Are you sure?"}
                        desc={"You will be redirected to the cart page"}
                        className={
                          "text-[#fff] w-full"
                        }
                        addToCart={handleSaveData}
                      />
                    )}

                    {/* <AlertDialogPri
                      btn_name={"Add to cart"}
                      title={"Are you sure?"}
                      desc={"You will be redirected to the cart page"}
                      className={
                        "border-[1px] border-[#00000060] w-full text-[#000]"
                      }
                      addToCart={handleSaveData}
                    /> */}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectFlight;
