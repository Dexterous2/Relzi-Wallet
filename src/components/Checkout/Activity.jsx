import React from 'react'
import { FaRegClock } from 'react-icons/fa'

function Activity() {
    return (
        <div className="bg-white-color py-4 w-full p-5 rounded-md">

            <div className="flex flex-col gap-2">
                <h2>
                    Burj Khalifa 124th & 125th Floor Observation Deck Tickets
                </h2>
                <h4 className='font-bold'>
                    Dubai
                </h4>
                <p>
                    Mon, Dec 11
                </p>
                <p>
                    1 Adult
                </p>
                <p>
                    Burj Khalifa (09:00 AM - 2:30 PM)
                </p>
                <p className='flex items-center gap-2'>
                    <FaRegClock />   Duration 1 hour 30 minutes
                </p>
                <p>
                    Activity location
                </p>
                <p>
                    Burj Khalifa
                </p>

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
        </div >
    )
}

export default Activity
