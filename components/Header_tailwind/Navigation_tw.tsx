"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Loader from "../Loader";
import Image from "next/image";
import Img from "@/public/menuBonuses2.png";
import { useTranslation } from "react-i18next";
import { CaretDown } from "@phosphor-icons/react";


import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  DocumentChartBarIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'

type NavLink = {
  class: string;
  label: string;
  href: string;
  icon: React.ReactNode;
  subMenu?: NavLink[];
};

type Props = {
  navLinks: NavLink[];
  onLinkClick: () => void;
};

const Navigation = ({ navLinks, onLinkClick }: Props) => {
  // Получите функцию перевода
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  const handleLinkClick = () => {
    setIsLoading(true);
    setOpenSubMenu(null);
    // Simulate some delay to show the loader (remove this in actual usage)
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const toggleSubMenu = (label: string) => {
    if (openSubMenu === label) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(label);
    }
  };
  useEffect(() => {
    // Теперь можно безопасно использовать window
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        const hasSubMenu = link.subMenu && link.subMenu.length > 0;

        return (
          // <div key={link.label} className="navigation-item">
          //   <Link
          //     href={link.href}
          //     className={isActive ? "active" : ""}
          //     onClick={() => {
          //       handleLinkClick();
          //       setOpenSubMenu(null);
          //     }}
          //   >
          //     <div className="flex items-center justify-center">
          //       {isLoading ? (
          //         <Loader />
          //       ) : (
          //         <>
          //           {link.icon}
          //           <span>{link.label}</span>
          //         </>
          //       )}
          //     </div>
          //   </Link>
          //   {hasSubMenu && (
          //     <div className="op-menu">
          //       <button onClick={() => toggleSubMenu(link.label)}>
          //         <CaretDown color="#fff" size={16} />
          //       </button>
          //     </div>
          //   )}

          //   {windowWidth !== null && windowWidth > 1259
          //     ? hasSubMenu && (
          //         <div
          //           className={`sub-menu flex justify-between ${link.class}`}
          //         >
          //           <div className="sub-menu-items">
          //             {link.subMenu!.map((subLink) => (
          //               <Link key={subLink.label} href={subLink.href}>
          //                 <div
          //                   className="sub-menu-item"
          //                   onClick={() => {
          //                     handleLinkClick();
          //                   }}
          //                 >
          //                   <div className="">
          //                     {isLoading ? (
          //                       <Loader />
          //                     ) : (
          //                       <span>{subLink.label}</span>
          //                     )}
          //                   </div>
          //                 </div>
          //               </Link>
          //             ))}
          //           </div>
          //           <div className="sub-menu-image">
          //             <Image
          //               src={Img}
          //               alt="bonuses"
          //               width={280}
          //               loading="lazy"
          //             />
          //           </div>
          //         </div>
          //       )
          //     : hasSubMenu &&
          //       openSubMenu === link.label && (
          //         <div
          //           className={`sub-menu flex justify-between ${link.class}`}
          //         >
          //           <div className="sub-menu-items">
          //             {link.subMenu!.map((subLink) => (
          //               <Link key={subLink.label} href={subLink.href}>
          //                 <div
          //                   className="sub-menu-item"
          //                   onClick={() => {
          //                     handleLinkClick();
          //                     onLinkClick();
          //                     setOpenSubMenu(null);
          //                   }}
          //                 >
          //                   <div className="">
          //                     {isLoading ? (
          //                       <Loader />
          //                     ) : (
          //                       <span>{subLink.label}</span>
          //                     )}
          //                   </div>
          //                 </div>
          //               </Link>
          //             ))}
          //           </div>
          //           <div className="sub-menu-image">
          //             <Image
          //               src={Img}
          //               alt="bonuses"
          //               width={280}
          //               loading="lazy"
          //             />
          //           </div>
          //         </div>  
          //       )}
          // </div>
          <Popover className="relative">
          <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 text-white w-full">
            {/* <span>Solutions</span> */}
            {link.icon}
            <span>{link.label}</span>
            <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
          </PopoverButton>
    
          <PopoverPanel
            transition
            className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm shadow-lg ring-1 ring-gray-900/5 lg:max-w-3xl">
              <div className="grid grid-cols-1 gap-x-1 pt-4 lg:grid-cols-2">
              {link.subMenu!.map((subLink) => (
                  <div key={subLink.label} className="group relative flex gap-x-2 rounded-lg px-4 hover:bg-gray-50">
                    <div className="mt-1 flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <SquaresPlusIcon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />

                    </div>
                    <div>
                      <a href={subLink.href} className="font-semibold text-gray-900">
                      {subLink.label}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, labore!</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 px-8 py-2">
                <div className="flex items-center gap-x-2">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">Try Your Luck!</h3>
                  <p className="rounded-full bg-indigo-600/10 px-2.5 text-xs font-semibold text-indigo-600">New</p>
                </div>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                    Feeling lucky? Discover random casino brands and test your fortune!
                </p>
              </div>
            </div>
          </PopoverPanel>
        </Popover>
        );
      })}
    </>
  );
};

export { Navigation };
