"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import useNavigateBrands from "./Navigate";
import AllPayments from "./AllPayments";
import { useLanguage } from "@/components/switcher/LanguageContext";
import classNames from "classnames";
import "../../app/filteredComponents.css"

const FilteredPayments = () => {
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
    <div className="main pt-10 pb-10 custom-bonuses ">
      <div className="main__container">
        {/* <div className="content flex flex-wrap">
          <div className="left flex flex-col justify-center basis-[60%]">
            <h2 className="">
              {t("Catalog of all offered Online Casinos by Payment Methods in 2024")}
            </h2>
            <p className="mt-3 pb-4">
              {t("Looking for online casinos with specific payment methods? Explore our current database of numerous casino offers for you to choose from.")}
            </p>
          </div>
        </div>
        <div className="flex navigate-filter flex-wrap">
          {navigateBrands.map((item) => (
            <button
              key={item.currentTab}
              className={`flex justify-center flex-col basis-[10%] items-center p-2 border text-lg button-tab ${
                currentTab === item.currentTab ? "active" : ""
              }`}
              onClick={() => handleTabChange(item.currentTab)}
            >
              <div className="flex items-center">
                {item.icon}
              </div>
            </button>
          ))}
        </div> */}

        {/*  Tailwind tab bar */}
        <h2 className="text-white">
          {t("Catalog of all offered Online Casinos by Payment Methods in 2024")}
        </h2>
        <p className="mt-3 pb-4 text-white">
          {t("Looking for online casinos with specific payment methods? Explore our current database of numerous casino offers for you to choose from.")}
        </p>
        <div className="">
          <nav aria-label="Tabs" className="isolate isolate-tabs flex divide-x overflow-x-auto">
            {navigateBrands.map((item) => (
              <button
                key={item.currentTab}
                className={classNames(
                  currentTab === item.currentTab
                    ? 'decoration-2 underline-offset-8 '
                    : 'text-gray-500',
                  'group relative flex-1 overflow-hidden px-4 py-4 text-center text-sm font-medium flex justify-center flex-row items-center p-2 min-w-40 transition-colors duration-300 ease-in-out',
                )}
                onClick={() => handleTabChange(item.currentTab)}
              >
                {item.icon}
                {item.currentText2}
              </button>
            ))}
          </nav>
        </div>

        <div className="overlay-filter filter-brands">
          {navigateBrands.map((item) => {
            return (
              currentTab === item.currentTab && (
                <AllPayments
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

export default FilteredPayments;
