"use client";
import { useState, useEffect } from "react";
import useSWR, { mutate } from "swr";
import { useTranslation } from "react-i18next";
import Loader from "@/components/Loader";

import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

import "../../app/flags.css"

const   LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const { data: selectedLanguage, error } = useSWR(
    "selectedLanguage",
    () => i18n.language
  );
  const [isLoading, setIsLoading] = useState(false);

  // Define language options for different partners and the default list
  const availableLanguages = [
    { code: "au", label: "Australia", flag: "🇦🇺" },
    { code: "ca", label: "Canada", flag: "🇨🇦" },
    { code: "de", label: "Germany", flag: "🇩🇪" },
    { code: "ie", label: "Ireland", flag: "🇮🇪" },
    { code: "nz", label: "New Zealand", flag: "🇳🇿" },
    { code: "no", label: "Norway", flag: "🇳🇴" },
    { code: "fi", label: "Finland", flag: "🇫🇮" },
    { code: "at", label: "Austria", flag: "🇦🇹" },
    { code: "ch", label: "Switzerland", flag: "🇨🇭" },
    { code: "dk", label: "Denmark", flag: "🇩🇰" },
    { code: "fr", label: "France", flag: "🇫🇷" },
    { code: "it", label: "Italy", flag: "🇮🇹" },
    { code: "pl", label: "Poland", flag: "🇵🇱" },
    { code: "se", label: "Sweden", flag: "🇸🇪" },
    { code: "cz", label: "Czech", flag: "🇨🇿" },
    { code: "sk", label: "Slovakia", flag: "🇸🇰" },
    { code: "be", label: "Belgium", flag: "🇧🇪" },
    { code: "gr", label: "Greece", flag: "🇬🇷" },
    { code: "nl", label: "Netherlands", flag: "🇳🇱" },
    { code: "hu", label: "Hungary", flag: "🇭🇺" },
    { code: "bg", label: "Bulgaria", flag: "🇧🇬" },
    { code: "all", label: "World", flag: "🌍" }
  ];

  // Define partner-specific language options
  const availableLanguages1039 = availableLanguages;
  const availableLanguages1043 = [
    { code: "all", label: "English", flag: "🌍" },
  ];
  const availableLanguages1044 = [
    { code: "cz", label: "Czech Republic", flag: "🇨🇿" },
    { code: "dk", label: "Denmark", flag: "🇩🇰" },
    { code: "fi", label: "Finland", flag: "🇫🇮" },
    { code: "fr", label: "France", flag: "🇫🇷" },
    { code: "de", label: "Germany", flag: "🇩🇪" },
    { code: "gr", label: "Greece", flag: "🇬🇷" },
    { code: "it", label: "Italy", flag: "🇮🇹" },
    { code: "nl", label: "Netherlands", flag: "🇳🇱" },
    { code: "no", label: "Norway", flag: "🇳🇴" },
    { code: "pl", label: "Poland", flag: "🇵🇱" },
    { code: "se", label: "Sweden", flag: "🇸🇪" },
    { code: "all", label: "English", flag: "🌍" },
  ];
  const availableLanguagesCLD_VIP = [
    { code: "au", label: "Australia", flag: "🇦🇺" },
    { code: "at", label: "Austria", flag: "🇦🇹" },
    { code: "be", label: "Belgium", flag: "🇧🇪" },
    { code: "ca", label: "Canada", flag: "🇨🇦" },
    { code: "ch", label: "Switzerland", flag: "🇨🇭" },
    { code: "cz", label: "The Czech Republic", flag: "🇨🇿" },
    { code: "de", label: "Germany", flag: "🇩🇪" },
    { code: "dk", label: "Denmark", flag: "🇩🇰" },
    { code: "fi", label: "Finland", flag: "🇫🇮" },
    { code: "fr", label: "France", flag: "🇫🇷" },
    { code: "gr", label: "Greece", flag: "🇬🇷" },
    { code: "hu", label: "Hungary", flag: "🇭🇺" },
    { code: "ie", label: "Ireland", flag: "🇮🇪" },
    { code: "it", label: "Italy", flag: "🇮🇹" },
    { code: "no", label: "Norway", flag: "🇳🇴" },
    { code: "nz", label: "New Zealand", flag: "🇳🇿" },
    { code: "pl", label: "Poland", flag: "🇵🇱" },
    { code: "se", label: "Sweden", flag: "🇸🇪" },
    { code: "sk", label: "Slovakia", flag: "🇸🇰" },
    { code: "all", label: "World", flag: "🌍" },
  ];

  // Select the correct language options based on the source
  let source;
  if (typeof window !== "undefined") {
    source = localStorage.getItem("source");
  }
  let newLng;
  switch (source) {
    case "partner1039":
      newLng = availableLanguages1039;
      break;
    case "partner1043":
      newLng = availableLanguages1043;
      break;
    case "partner1044":
      newLng = availableLanguages1044;
      break;
    case "CLD_VIP":
      newLng = availableLanguagesCLD_VIP;
      break;
    default:
      newLng = availableLanguages;
      break;
  }

  if (error) return <div>Failed to load</div>;

  const changeLanguage = async (lng) => {
    setIsLoading(true);
    localStorage.setItem("country", lng);
    try {
      mutate("selectedLanguage", lng, false);
      await i18n.changeLanguage(lng);
    } catch (error) {
      console.error("Ошибка при смене языка:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // <div>
    //   <div>
    //     <p className="ml-4 mr-4">{t("Website language")}</p>
    //     <div className={`language-switcher ml-3 flex flex-col`}>
    //       <select
    //         className={`desktop-lang ${selectedLanguage}`}
    //         value={selectedLanguage}
    //         onChange={(e) => {
    //           const selected = newLng.find(
    //             (lang) => lang.code === e.target.value
    //           );
    //           if (selected) {
    //             changeLanguage(selected.code);
    //           } else {
    //             changeLanguage("en"); // Default to "World" if no match
    //           }
    //         }}
    //       >
    //         {newLng.map((language) => (
    //           <option
    //             key={language.code}
    //             value={language.code}
    //             style={{ fontSize: "20px" }}
    //           >
    //             {language.flag} {language.label}
    //           </option>
    //         ))}
    //       </select>
    //       {isLoading && <Loader />}
    //     </div>
    //   </div>
    // </div>

    <div>
      <div>
        <div className="flex flex-col m-2">
          <Listbox
            value={selectedLanguage}
            onChange={(code) => {
              const selected = newLng.find((lang) => lang.code === code);
              if (selected) {
                changeLanguage(selected.code);
              } else {
                changeLanguage("en");
              }
            }}
          >
            {({ open }) => (
              <>
                <div className="relative">
                  <ListboxButton className="relative w-full cursor-default rounded-md bg-indigo-600 py-1.5 pl-3 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none sm:text-sm hover:bg-indigo-500 sm:leading-6">
                    <span className="block truncate flex items-center text-white">
                      {/* {newLng.find((lang) => lang.code === selectedLanguage)?.flag}{' '} */}
                      <span className={`mr-2 flag-icon flag-icon-${newLng.find((lang) => lang.code === selectedLanguage)?.code}`} />
                      {/* {newLng.find((lang) => lang.code === selectedLanguage)?.label} */}
                      Language
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                    </span>
                  </ListboxButton>

                  <ListboxOptions
                    className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-indigo-600 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                  >
                    {newLng.map((language) => (
                      <ListboxOption
                        key={language.code}
                        value={language.code}
                        className={() =>
                          `relative cursor-pointer select-none py-2 pl-3 pr-9 bg-indigo-600 text-gray-200  hover:bg-indigo-500`
                        }
                      >
                        {({ selected }) => (
                          <>
                            <span className={`block truncate flex items-center ${selected ? 'font-bold text-white' : 'font-normal'}`}>
                              {/* {language.flag} {language.label} */}
                              <span className={`mr-2 flag-icon flag-icon-${language.code}`} /> {language.label} 

                            </span>
                            {selected && (
                              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-white">
                                <CheckIcon aria-hidden="true" className="h-5 w-5" />
                              </span>
                            )}
                          </>
                        )}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </div>
              </>
            )}
          </Listbox>
          {isLoading && <Loader />}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
