import React from 'react'
import { FaPlaneDeparture } from 'react-icons/fa'
import Button from '../button/Button'
import { FaRegClock } from "react-icons/fa";
function Hotel() {
    return (
        <div className="bg-white-color py-4 w-full p-5 rounded-md">

            <div className="flex flex-col gap-2">
                <h2>
                    Rixos Premium Dubai JBR
                </h2>
                <p>
                    9/10 Wonderful (599 reviews)
                </p>
                <p>
                    <span className='font-bold'>1 Room: </span>
                    Deluxe Room, 1 King Bed
                </p>
                <p>
                    Non-refundable
                </p>
                <p>
                    Check-in: Sat, Dec 9
                </p>
                <p>
                    Check-out: Wed, Dec 13
                </p>
                <p>
                    4-night stay
                </p>


                <div className={`pt-5 `}>

                    <h3>
                        Price details
                    </h3>
                    <div className="pt-[1rem] pb-[1rem]">
                        <hr />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex justify-between items-endd'>
                            <div>
                                <p>
                                    1 room x 4 nights
                                </p>
                                <p>
                                    $337.91 average per night
                                </p>
                            </div>
                            <p>
                                $1,351.64
                            </p>
                        </div>
                        <div className='flex justify-between items-endd'>
                            <p>
                                Taxes and fees
                            </p>
                            <p>
                                $1,351.64
                            </p>
                        </div>
                        <div className='flex justify-between items-endd'>
                            <div>
                                <p>
                                    Local tax
                                </p>
                                <p>
                                    Payable at property
                                </p>
                            </div>
                            <p>
                                $21.78
                            </p>
                        </div>
                    </div>
                    <div className="pt-[1rem] pb-[1rem]">
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
                </div>
            </div>
        </div >
    )
}

export default Hotel
