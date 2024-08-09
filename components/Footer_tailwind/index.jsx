"use client";
import Image from "next/image";
import Img from "@/public/logo3.png";
import { useTranslation } from "react-i18next";
import { Link } from "phosphor-react";

const Footer_tailwind = () => {

    const { t } = useTranslation();
    const navigation = {
        solutions: [
            { name: 'Casino by Category', href: '#' },
            { name: 'Casino by Payment Methods', href: '#' },
            { name: 'Casino by Game Providers', href: '#' },
            { name: 'Best Bonuses', href: '#' },
        ],
        support: [
            { name: 'Responsible Gaming', href: '#' },
            { name: 'Privacy Policy', href: '#' },
            { name: 'Terms and Conditions', href: '#' },
        ],
        company: [
            { name: 'Our Contacts: support@myawardwallet.com', href: 'mailto:support@myawardwallet.com' },
        ],
    }
    return (
        // <footer className="footer">
        //   <div className="flex  text-white flex-col">
        //     <div className="footer-top ">
        //       <div className="main__container flex justify-between items-center pb-3 pt-5">
        //         <div className="logo">
        //           <Image src={Img} alt="logo" width={150} loading="lazy" />
        //         </div>
        //         <div className="solution-contacts flex">
        //           <div>
        //             <p className="mb-1">{t("Our Contacts:")}</p>
        //             <a
        //               className="underline flex items-center"
        //               href="mailto:support@myawardwallet.com"
        //             >
        //               support@myawardwallet.com
        //             </a>
        //           </div>
        //           <div className="flex flex-col">
        //             <a
        //               className="underline ml-5 flex items-end mb-1"
        //               href="/responsible-gaming"
        //             >
        //               {t("Responsible Gaming")}
        //             </a>
        //             <a
        //               className="underline ml-5 flex items-end mb-1"
        //               href="/privacy-policy"
        //             >
        //               {t("Privacy Policy")}
        //             </a>
        //             <a
        //               className="underline ml-5 flex items-end "
        //               href="/terms-and-conditions"
        //             >
        //               {t("Terms and Conditions")}
        //             </a>
        //           </div>
        //         </div>
        //       </div>
        //     </div>

        //     <div className="footer-end">
        //       <div className="main__container pt-3 pb-3 flex justify-center text-gray-300 text-md">
        //         <p>Copyright © 2024, topbon.us All rights reserved.</p>
        //       </div>
        //     </div>
        //   </div>
        // </footer>

        <footer aria-labelledby="footer-heading" className="bg-indigo-700">
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-10 sm:pt-24 lg:px-8 lg:pt-12">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm text-white font-semibold leading-6 uppercase">Casinos</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.solutions.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-white hover:text-gray-300">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white uppercase">Support</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.support.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-white hover:text-gray-300">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white uppercase">Company</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.company.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-white hover:text-gray-300">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div> */}
                        </div>
                    </div>
                    <div className="mt-10 xl:mt-0">
                        <h3 className="text-sm font-semibold leading-6 text-gray-900 uppercase text-white">Join the community of our subscribers</h3>
                        <p className="mt-4 text-xs leading-6 text-white">
                            Get fresh bargains and lucrative bonuses from trustworthy online casinos working in your region! Be the first one to find out where it's worth playing today!
                        </p>
                        <form className="mt-6 sm:flex sm:max-w-md">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email-address"
                                type="email"
                                required
                                placeholder="Enter your email"
                                autoComplete="email"
                                className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                            />


                            <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Subscribe
                                </button>
                            </div>

                        </form>
                        <fieldset>
                            <div className="mt-6">
                                <div className="relative flex gap-x-3">
                                    <div className="flex h-6 items-center">
                                        <input
                                            id="comments"
                                            name="comments"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                    </div>
                                    <div className="text-sm leading-6">
                                        <label htmlFor="comments" className="font-medium text-white">
                                        I agree with Terms and Conditions and Privacy Policy.
                                        </label>
                                    </div>
                                </div>
                                <div className="relative flex gap-x-3">
                                    <div className="flex h-6 items-center">
                                        <input
                                            id="candidates"
                                            name="candidates"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                    </div>
                                    <div className="text-sm leading-6">
                                        <label htmlFor="candidates" className="font-medium text-white">
                                        I agree to receive promotional emails from TOPBON.US and its partners.
                                        </label>
                                    </div>
                                </div>
                                <div className="relative flex gap-x-3">
                                    <div className="flex h-6 items-center">
                                        <input
                                            id="offers"
                                            name="offers"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                    </div>
                                    <div className="text-sm leading-6">
                                        <label htmlFor="offers" className="font-medium text-white">
                                        I agree to receive promotional sms from TOPBON.US.
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
                <div className="mt-5 border-t border-gray-900/10 pt-8 sm:mt-5 md:flex md:items-center md:justify-center lg:mt-5 pb-10 md:pb-0">
                    <p className="mt-8 text-md leading-5 text-gray-300 md:order-1 md:mt-0 text-center">
                        Copyright &copy; 2024, topbon.us All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export { Footer_tailwind };
