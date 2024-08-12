// TopBrands.jsx (Клієнтський компонент)
"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import useNavigateBrands from "./Navigate";
import AllCasinos from "./AllCasinos";
import { useLanguage } from "@/components/switcher/LanguageContext";
import classNames from "classnames";
const FilteredCasinos = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [isLoader, setIsLoader] = useState(false);

  const [currentTab, setCurrentTab] = useState(1);

  const navigateBrands = useNavigateBrands();


  const handleTabChange = (tabNumber) => {
    setCurrentTab(tabNumber);
    setIsLoader(true);
    setTimeout(() => {
      setIsLoader(false);
    }, 500);
  };

  return (
    <div className="main pt-10 pb-10 custom-bonuses">
      {/*  Tailwind tab bar */}
      <div className="main__container">
        <h2 className="">
          {t("Comprehensive Compilation of 2024 Online Casino Selection")}
        </h2>
        <p className="mt-3 pb-4">
          {t("In Search of an Online Casino? Navigate through our up-to-date repository housing a myriad of casinos awaiting your consideration.")}
        </p>
        <div className="bg-white rounded-lg">
          <nav aria-label="Tabs" className="isolate flex divide-x divide-gray-700 rounded-lg shadow overflow-x-auto">
            {navigateBrands.map((item) => (
              <button
                key={item.currentTab}
                className={classNames(
                  currentTab === item.currentTab
                    ? 'text-blue-600 underline decoration-2 underline-offset-8 bg-blue-500/10'
                    : 'text-gray-500 hover:text-gray-700',
                  'group relative flex-1 overflow-hidden px-4 py-4 text-center text-sm font-medium hover:bg-blue-500/10 focus:z-10 flex justify-center flex-row items-center p-2 min-w-40 transition-colors duration-300 ease-in-out',
                )}
                onClick={() => handleTabChange(item.currentTab)}
              >
                {item.icon}
                {item.currentText2}
              </button>
            ))}
          </nav>
        </div>
        {/* <div className="content flex flex-wrap filter-brands">
          <div className="left flex flex-col justify-center basis-[60%]">
            <h2 className="">
              {t("Comprehensive Compilation of 2024 Online Casino Selection")}
            </h2>
            <p className="mt-3 pb-4">
              {t("In Search of an Online Casino? Navigate through our up-to-date repository housing a myriad of casinos awaiting your consideration.")}
            </p>
          </div>
        </div>
        <div className="flex navigate-filter">
          {navigateBrands.map((item) => (
            <button
              key={item.currentTab}
              className={`flex justify-center flex-col basis-[20%] items-center p-2 border text-lg button-tab ${
                currentTab === item.currentTab ? "active" : ""
              }`}
              onClick={() => handleTabChange(item.currentTab)}
            >
              {item.icon}
              {item.currentText2}
            </button>
          ))}
        </div> */}

        <div className="overlay-filter filter-brands">
          {navigateBrands.map((item) => {
            return (
              currentTab === item.currentTab && (
                <AllCasinos
                  key={`${item.currentTab}-${language}`}
                  creative={item.currentText}
                  isLoader={isLoader}
                  segment={item.segment}
                  value={item.value}
                  target={item.target}
                  currentText={item.currentText}
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilteredCasinos;
