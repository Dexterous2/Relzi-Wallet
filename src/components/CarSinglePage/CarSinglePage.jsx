import Image from 'next/image'
import React from 'react'
import { BsFillFuelPumpFill } from 'react-icons/bs'
import { FaCarAlt, FaRegClock, FaSnowflake, FaUser } from 'react-icons/fa'
import { LuCalendarDays } from 'react-icons/lu'
import { SlSpeedometer } from 'react-icons/sl'
import { TbSettingsCheck } from 'react-icons/tb'
import { BsDot } from "react-icons/bs";

const CarSinglePage = () => {
    return (
        <div className=" py-4 w-full md:p-5 p-0 rounded-md flex flex-col gap-8 ">
            <div className='flex flex-col gap-4 bg-white py-3 px-5 rounded-xl box_shadow_primary'>
                <div className="flex flex-col gap-2">
                    <h2>
                        Midsize SUV
                    </h2>
                    <p>
                        Nissan X-Trail or similar
                    </p>
                </div>

                <div className="flex md:flex-row flex-col-reverse justify-between md:items-center gap-3 lg:py-0 py-4 w-full">
                    <div className="flex sm:flex-row flex-col gap-4 w-[30rem] justify-between">
                        <ul className="flex flex-col gap-3">
                            <li className="flex gap-4 ">
                                <FaUser className="text-lg" />  5 Passengers
                            </li>
                            <li className="flex gap-4">
                                <FaSnowflake className="text-lg" />  Test 1
                            </li>
                            <li className="flex gap-4">
                                <SlSpeedometer className="text-lg" />  Test 1
                            </li>
                        </ul>

                        <ul className="flex flex-col gap-3">
                            <li className="flex gap-4">
                                <FaCarAlt className="text-lg" />  5 Doors
                            </li>
                            <li className="flex gap-4">
                                <TbSettingsCheck className="text-lg" />  Automatic
                            </li>
                            <li className="flex gap-4">
                                <BsFillFuelPumpFill className="text-lg" />  Fuel: full to full
                            </li>
                        </ul>
                    </div>

                    <Image src="/image/main/ship.png" width={250} height={250} className='rounded-xl' />
                </div>

                <div className="pt-[2rem] pb-[1rem]">
                    <hr />
                </div>

                <div>
                    <h3 className="pb-3">
                        Traveler ratings
                    </h3>
                    <div className="flex md:gap-0 gap-2 md:flex-row flex-col justify-between md:items-end">
                        <div>
                            <p>
                                66% positive ratings
                            </p>
                            <p>Vehicle condition and price as expected</p>
                        </div>
                        <div>
                            <p className="text-primary-color">111 ratings</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-4 bg-white py-3 px-5 rounded-xl box_shadow_primary w-full'>
                <div className="py-5">
                    <h3 className="pb-3">
                        Car rental location
                    </h3>
                    <h4 className="pb-3 font-bold">
                        Pick-up & Drop-off
                    </h4>
                    <div className="flex md:gap-0 gap-2 md:flex-row flex-col justify-between md:items-end">

                        <div className="flex md:flex-row flex-col gap-4 justify-between sm:items-center items-start w-full">

                            <div className='flex flex-col gap-4'>
                                <span className='flex items-start gap-2 text-xl'>
                                    <LuCalendarDays className='mt-1' />
                                    <p>Thu, Dec 7, 10:30am - Fri, Dec 8, 10:30am</p>
                                </span>
                                <span className='flex items-start gap-2 text-xl'>
                                    <span className='flex items-start h-full gap-1'>
                                        <LuCalendarDays />
                                    </span>
                                    <span className='flex flex-col items-start justify-start leading-5'>
                                        <p>DXB Airport</p>
                                        <p>Dubai International Airport Arrivals Terminal 1, Dubai, ARE XX</p>
                                    </span>
                                </span>
                            </div>
                            <div className='flex gap-4 justify-between flex-col '>
                                <div className='flex items-start gap-2'>
                                    <FaRegClock className='mt-1' />
                                    <span className='flex flex-col leading-5'>
                                        <p>Hours of operation</p>
                                        <p>Thu 12:01am - 11:59pm</p>
                                        <p>Fri 12:01am - 11:59pm</p>
                                    </span>
                                </div>
                                <div className='flex items-start gap-2 2xl:w-[20rem] w-full'>
                                    <span className='mt-1'>
                                        <FaCarAlt />
                                    </span>
                                    <p>Counter and car in terminal Rental car counter and car in the airport.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-4 bg-white py-3 px-5 rounded-xl box_shadow_primary'>
                <div className="py-5 flex flex-col gap-4">
                    <div>
                        <h3>
                            Rental policies
                        </h3>
                        <span className='flex flex-col leading-1'>
                            <p className='flex gap-1 items-center'>
                                <BsDot size={32} />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sequi tenetur rem.
                            </p>
                            <p className='flex gap-1 items-center'>
                                <BsDot size={32} />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sequi tenetur rem.
                            </p>
                        </span>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <h3>What's included</h3>
                        <p>These are included in the total price of the car rental.</p>
                    </div>

                    <div className='flex flex-col'>
                        <p>Minimal contact with option to check-in online</p>
                        <span className='flex flex-col '>
                            <p className='flex gap-1 items-center'>
                                <BsDot size={32} />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sequi tenetur rem.
                            </p>
                            <p className='flex gap-1 items-center'>
                                <BsDot size={32} />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sequi tenetur rem.
                            </p>
                        </span>
                    </div>
                </div>
            </div>


            {/* <div className="pb-3">
                <h3 className="py-3">
                    $ 75 per day
                </h3>
                <h4 className="text-primary-color font-bold ">
                    Free cancellation
                </h4>
                <p>Pay at pick-up</p>
                <p>Reserve without a credit card</p>
            </div>

            <div className="pt-3">
                <h3 className="">
                    Price details
                </h3>
                <h4 className="text-primary-color font-bold ">
                    Pay at pick-up
                </h4>

                <div className="py-3 flex justify-between">
                    <span>
                        Car rental fee x 1 day <br />
                        $74.60 per day
                    </span>

                    <h4>
                        $ 75.60
                    </h4>
                </div>
                <div className="py-3 flex justify-between">
                    <span>
                        Taxes and fees
                    </span>

                    <h4>
                        Included
                    </h4>
                </div>
            </div>

            <div className="pt-[2rem] pb-[1rem]">
                <hr />
            </div>

            <div className="flex justify-between">
                <h3>
                    Total
                </h3>

                <h3>
                    $74.60
                </h3>
            </div> */}

        </div>
    )
}

export default CarSinglePage
