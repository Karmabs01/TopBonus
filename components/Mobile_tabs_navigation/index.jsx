import React from 'react';
import { TicketIcon } from '@heroicons/react/24/outline'
import logo from "@/public/logo_robot.png"
import Image from "next/image";

const Mobile_tabs_navigation = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-indigo-600 border-t border-gray-200 md:hidden z-50 rounded-t-xl">
            <div className="relative flex justify-between text-center px-4 py-1">
                <a href="/casinos" className="flex flex-col items-center justify-center py-2">
                    <TicketIcon aria-hidden="true" className="h-6 w-6 text-green-600 transition-colors duration-300 ease-in-out" />
                    <span className="text-sm text-white text-semibold">Casino</span>
                </a>
                <a href="/shop" className="flex flex-col items-center justify-center py-2">
                    <TicketIcon aria-hidden="true" className="h-6 w-6 text-green-600 transition-colors duration-300 ease-in-out" />
                    <span className="text-sm text-white text-semibold">Shop</span>
                </a>

                <div className="w-16"></div>

                <a href="/fortune" className="flex flex-col items-center justify-center py-2">
                    <TicketIcon aria-hidden="true" className="h-6 w-6 text-green-600 transition-colors duration-300 ease-in-out" />
                    <span className="text-sm text-white text-semibold">Wheel</span>
                </a>
                <a href="/personal" className="flex flex-col items-center justify-center py-2">
                    <TicketIcon aria-hidden="true" className="h-6 w-6 text-green-600 transition-colors duration-300 ease-in-out" />
                    <span className="text-sm text-white text-semibold">Profile</span>
                </a>
            </div>

            <div className="ml-2 absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-teal-500 rounded-full border-4 border-solid border-white flex items-center justify-center">
                <Image src={logo} alt="logo" width={150} loading="lazy" className='w-8' />

            </div>
        </div>
    );
};

export default Mobile_tabs_navigation;