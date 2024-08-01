import Image from 'next/image'
import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";
import Button from '../button/Button';
import { IoAirplane } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";

const UserCard = () => {
    return (
        <div className='border--2 border-[olive] w--fit flex flex-col gap-3 sm:w-[21rem] py-4'>
            <img src={"/image/Dummy/Card/user_1.png"} className='rounded-xl sm:w-full h-[15rem] object-cover' alt='no img found' />
            <div className='flex items-center justify-between gap-4 text-text-primary-color max-[400px]:flex-col'>
                <span className='flex flex-col gap-2'>
                    <h3>Alfie Solomons</h3>
                    <span className='flex items-center gap-1'>
                        <MdEmail />
                        <p>itsjust@example.com</p>
                    </span>
                </span>
                <select className='bg-primary-color rounded-full text-white p-1 px-2 outline-none'>
                    <option value="Active">Active</option>
                    <option value="InActive">In Active</option>
                </select>
            </div>
            <div className='flex items-center justify-between gap-2 max-[400px]:flex-col'>
                <Button name={"13"} icon={<FaCarAlt />} bgcolor={"bg-[#00a3b142]"} mainClass={"py-1 px-3 rounded-full active:scale-[0.98]"} />
                <Button name={"13"} icon={<IoAirplane />} bgcolor={"bg-[#00a3b142]"} mainClass={"py-1 px-3 rounded-full active:scale-[0.98]"} />
                <Button name={"13"} icon={<FaBuilding />} bgcolor={"bg-[#00a3b142]"} mainClass={"py-1 px-3 rounded-full active:scale-[0.98]"} />
                <Button name={"View Orders"} bgcolor={"bg-[#00a3b142]"} mainClass={"py-1 px-2 rounded-full active:scale-[0.98]"} />
            </div>
        </div>
    )
}

export default UserCard
