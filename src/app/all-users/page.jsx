'use client'

import UserCardSkeleton from '@/components/skeleton/UserCardSkeleton/UserCardSkeleton';
import UserCard from '@/components/users-card/UserCard';
import DashboardLayout from '@/layout/DashboardLayout'
import Head from 'next/head.js';
import React from 'react'
import { FaUsers } from "react-icons/fa";

const page = () => {

    return (
        <>
            <DashboardLayout icon={<FaUsers color='white' size={32} />} pageName="Users">
                <div className='border--2 border-[red] flex flex-col gap-8 '>
                    <div className='flex flex-col gap-2 text-text-primary-color'>
                        <h1>Users</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur, Lorem ipsum dolor sit amet, consectetur.</p>
                    </div>
                    <div className='user_card_grid w-full flex justify-center overflow-hidden'>
                        {Array.from({ length: 10 })?.map((_item, i) => (
                            <UserCard />
                        ))}
                        {/* <UserCardSkeleton /> */}
                    </div>
                </div>
            </DashboardLayout>
        </>
    )
}

export default page
