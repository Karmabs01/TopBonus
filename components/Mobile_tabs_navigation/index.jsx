import React from "react";

// import { PokerChip, GameController } from "phosphor-react";
import { ShoppingBagIcon, UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import "./styled.component.css";

const Mobile_tabs_navigation = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full md:hidden z-30 rounded-t-xl pt-1">
      <div className="relative flex justify-between text-center px-4 py-1 bg-mob-header rounded-t-xl">
        <a
          href="/casinos"
          className="flex flex-col items-center justify-center py-2"
        >
          <ShoppingBagIcon
            aria-hidden="true"
            className="h-8 w-8  transition-colors duration-300 ease-in-out"
          />
          <span className="text-sm text-white text-semibold">Casino</span>
        </a>
        <a
          href="/shop"
          className="flex flex-col items-center justify-center py-2"
        >
          <ShoppingBagIcon
            aria-hidden="true"
            className="h-8 w-8 transition-colors duration-300 ease-in-out"
          />
          <span className="text-sm text-white text-semibold">Shop</span>
        </a>

        <div className="w-16"></div>

        <a
          href="/fortune"
          className="flex flex-col items-center justify-center py-2"
        >
          <ShoppingBagIcon
            aria-hidden="true"
            className="h-8 w-8 transition-colors duration-300 ease-in-out"
          />
          <span className="text-sm text-white text-semibold">Wheel</span>
        </a>
        <a
          href="/personal"
          className="flex flex-col items-center justify-center py-2"
        >
          <UserIcon
            aria-hidden="true"
            className="h-8 w-8 transition-colors duration-300 ease-in-out"
          />
          <span className="text-sm text-white text-semibold">Profile</span>
        </a>
      </div>

      <div className="round-logo absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full flex items-center justify-center">
        {/* <Image src={logo} alt="logo" width={150} loading="lazy" className='w-8' /> */}
      </div>
    </div>
  );
};

export default Mobile_tabs_navigation;
