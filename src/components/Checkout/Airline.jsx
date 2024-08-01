import React, { useState } from 'react'
import UserLayout from "@/layout/SearchLayout";
import { FaSnowflake, FaUser } from "react-icons/fa";
import { SlSpeedometer } from "react-icons/sl";
import { FaCarAlt } from "react-icons/fa";
import { TbSettingsCheck } from "react-icons/tb";
import { BsFillFuelPumpFill } from "react-icons/bs";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import Button from "@/components/button/Button";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaPlaneDeparture } from "react-icons/fa";


function Airline() {

    const [detailToggler, setDetailToggler] = useState(false)

    return (
        <div className="bg-white-color py-4 w-full p-5 rounded-md">

            <div className="flex flex-col gap-2">
                <h2>
                    Dubai to New York
                </h2>
                <p>
                    10:30pm - 9:00am (19h 30m, 1 stop)
                </p>
                <p>
                    Turkish Airlines • Mon, Dec 11
                </p>


                <Button name={"Above average CO2"} pClass={'text-white'} bgcolor={'bg-primary-color'} mainClass={"py-2 px-4 rounded-xl w-fit"} />

                {/*  */}
                <p className='flex items-center gap-3 py-2 font-bold text-primary-color' onClick={() => setDetailToggler(!detailToggler)}>
                    Show Details   <FaAngleUp className={detailToggler ? `rotate-0 transition-all duration-300` : "rotate-180 transition-all duration-300"} />                 </p>


                <div className={`overflow-hidden ${detailToggler ? "h-[31rem] transition-all duration-500  ease-in" : "h-[2rem] transition-all duration-500 ease-in"}`}>
                    <div className="pt-[1rem] pb-[1rem]">
                        <hr />
                    </div>
                    <div className='flex gap-4'>
                        <h3>
                            <FaPlaneDeparture />
                        </h3>

                        <span>
                            <p>
                                5:35am - Dubai
                            </p>
                            <p>
                                Dubai Intl. (DXB)
                            </p>
                            <p>
                                1h 40m flight
                            </p>

                            <p>
                                Kuwait Airways 678
                            </p>
                            <p>
                                Economy/Coach (V)
                            </p>
                        </span>


                    </div>
                    <div className='flex gap-4'>
                        <h3>
                            <FaPlaneDeparture />
                        </h3>

                        <span>
                            <p>
                                6:15am - Kuwait City
                            </p>
                            <p>
                                Kuwait Intl. (KWI)
                            </p>
                        </span>
                    </div>
                    <div className="pt-[1rem] pb-[1rem]">
                        <hr />
                    </div>
                    <p>
                        Layover: 3h 15m in Kuwait City
                    </p>
                    <div className="pt-[1rem] pb-[1rem]">
                        <hr />
                    </div>
                    <div className='flex gap-4'>
                        <h3>
                            <FaPlaneDeparture />
                        </h3>

                        <span>
                            <p>
                                9:30am - Kuwait City
                            </p>
                            <p>
                                Kuwait Intl. (KWI)
                            </p>
                            <p>
                                13h 30m flight
                            </p>

                            <p>
                                Kuwait Airways 117
                            </p>
                            <p>
                                BOEING 777-300ER
                            </p>
                            <p>
                                Economy/Coach (V)
                            </p>
                        </span>


                    </div>
                    <div className='flex gap-4'>
                        <h3>
                            <FaPlaneDeparture />
                        </h3>

                        <span>
                            <p>
                                3:00pm - New York
                            </p>
                            <p>
                                John F. Kennedy Intl. (JFK)
                            </p>
                        </span>
                    </div>

                </div>


                <div className={detailToggler ? "pt-[1rem] pb-[1rem]" : 'hidden'}>
                    <hr />
                </div>
                <div>
                    <h3 className='py-4'>
                        Estimated bag fees
                    </h3>

                    <div className='flex justify-between'>
                        <p>
                            Carry-on:
                        </p>
                        <p>
                            Included up to 15 lb
                        </p>
                    </div>
                    <div className='flex justify-between'>
                        <p>
                            1st checked bag:
                        </p>
                        <p>
                            Included up to 50 lb
                        </p>
                    </div>
                    <div className='flex justify-between'>
                        <p>
                            2nd checked bag:
                        </p>
                        <p>
                            Included up to 50 lb
                        </p>
                    </div>

                    <p className='mt-4'>
                        Baggage fees reflect the airline's standard fees based on the selected fare class. Fees may vary based on size and weight restrictions as well as loyalty programs and other promotions. For more information, check with Kuwait Airways
                        <br />
                        You can purchase checked bags from Kuwait Airways or through the link in your confirmation or check-in emails.
                    </p>
                </div>

                <div>
                    <h4 className='py-4 font-bold'>
                        Estimated bag fees
                    </h4>
                    <div className='flex justify-between'>
                        <p>
                            Cancellations:
                        </p>
                        <p>
                            $55
                        </p>
                    </div>
                </div>

            </div>

            <div className="pt-[2rem] pb-[1rem]">
                <hr />
            </div>

            <div>
                <h3 className="pb-3">
                    Price summary
                </h3>
                <div className="flex flex-col gap-2">
                    <div className='flex md:gap-0 gap-2 flex-row justify-between md:items-end'>
                        <p className=''>
                            Traveler 1: Adult
                        </p>
                        <h4 className=''>$1,016.60</h4>
                    </div>
                    <div className='flex md:gap-0 gap-2 flex-row justify-between md:items-end'>
                        <p className=''>
                            Flight
                        </p>
                        <h4 className=''>$771.00</h4>
                    </div>
                    <div className='flex md:gap-0 gap-2 flex-row justify-between md:items-end'>
                        <p className=''>
                            Taxes and fees
                        </p>
                        <h4 className=''>$245.60</h4>
                    </div>
                </div>
            </div>

            <div className="pt-[2rem] pb-[1rem]">
                <hr />
            </div>

            <div className="flex justify-between">
                <h4 className='text-xl font-bold'>
                    Trip Total
                </h4>

                <h4 className='text-xl font-bold'>
                    $1,016.60
                </h4>
            </div>

        </div >
    )
}

export default Airline
