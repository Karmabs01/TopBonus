"use client";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import { useLanguage } from "./LanguageContext";
import { useTranslation } from "react-i18next";

import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const BrandsSwitcher = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { language, setLanguage } = useLanguage(); // Используй состояние и функцию из контекста
  const { t, i18n } = useTranslation();

  const ipData = async () => {
    try {
      const response = await fetch(
        "https://ipapi.co/json/?key=YD0x5VtXrPJkOcFQMjEyQgqjfM6jUcwS4J54b3DI8ztyrFpHzW"
      );
      const data = await response.json();
      if (data.country) {
        setLanguage(data.country.toLowerCase()); // Используй setLanguage из контекста
        if (typeof window !== "undefined") {
          localStorage.setItem("country_brands", data.country.toLowerCase());
        }
      }
    } catch (error) {
      console.error("Ошибка при запросе к API:", error);
      setLanguage("all");
    }
  };
  useEffect(() => {
    const savedLanguage = localStorage.getItem("country_brands");
    if (!savedLanguage) {
      ipData();
    }
  }, []);

  const changeLanguage = (lng) => {
    setIsLoading(true);
    setLanguage(lng);
    localStorage.setItem("country_brands", lng);
    setIsLoading(false);
    window.location.reload();
  };

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
  const availableLanguages1039 = [
    { code: "au", label: "Australia", flag: "🇦🇺" },
    { code: "at", label: "Austria", flag: "🇦🇹" },
    { code: "be", label: "Belgium", flag: "🇧🇪" },
    { code: "bg", label: "Bulgaria", flag: "🇧🇬" },
    { code: "ca", label: "Canada", flag: "🇨🇦" },
    { code: "cz", label: "Czech", flag: "🇨🇿" },
    { code: "dk", label: "Denmark", flag: "🇩🇰" },
    { code: "fi", label: "Finland", flag: "🇫🇮" },
    { code: "fr", label: "France", flag: "🇫🇷" },
    { code: "de", label: "Germany", flag: "🇩🇪" },
    { code: "gr", label: "Greece", flag: "🇬🇷" },
    { code: "hu", label: "Hungary", flag: "🇭🇺" },
    { code: "ie", label: "Ireland", flag: "🇮🇪" },
    { code: "it", label: "Italy", flag: "🇮🇹" },
    { code: "nl", label: "Netherlands", flag: "🇳🇱" },
    { code: "nz", label: "New Zealand", flag: "🇳🇿" },
    { code: "no", label: "Norway", flag: "🇳🇴" },
    { code: "pl", label: "Poland", flag: "🇵🇱" },
    { code: "pt", label: "Portugal", flag: "🇵🇹" },
    { code: "sk", label: "Slovakia", flag: "🇸🇰" },
    { code: "es", label: "Spain", flag: "🇪🇸" },
    { code: "se", label: "Sweden", flag: "🇸🇪" },
    { code: "ch", label: "Switzerland", flag: "🇨🇭" },
    { code: "tr", label: "Turkey", flag: "🇹🇷" },
    { code: "gb", label: "United Kingdom", flag: "🇬🇧" },
    { code: "all", label: "World", flag: "🌍" },
  ];
  const availableLanguages1043 = [
    { code: "ca", label: "Canada", flag: "🇨🇦" },
    { code: "us", label: "United States", flag: "🇺🇸" },
    { code: "all", label: "World", flag: "🌍" },
  ];
  const availableLanguages1044 = [
    { code: "au", label: "Australia", flag: "🇦🇺" },
    { code: "at", label: "Austria", flag: "🇦🇹" },
    { code: "be", label: "Belgium", flag: "🇧🇪" },
    { code: "ca", label: "Canada", flag: "🇨🇦" },
    { code: "cz", label: "The Czech Republic", flag: "🇨🇿" },
    { code: "dk", label: "Denmark", flag: "🇩🇰" },
    { code: "fi", label: "Finland", flag: "🇫🇮" },
    { code: "fr", label: "France", flag: "🇫🇷" },
    { code: "de", label: "Germany", flag: "🇩🇪" },
    { code: "gb", label: "Great Britain", flag: "🇬🇧" },
    { code: "gr", label: "Greece", flag: "🇬🇷" },
    { code: "ie", label: "Ireland", flag: "🇮🇪" },
    { code: "it", label: "Italy", flag: "🇮🇹" },
    { code: "nl", label: "Netherlands", flag: "🇳🇱" },
    { code: "no", label: "Norway", flag: "🇳🇴" },
    { code: "nz", label: "New Zealand", flag: "🇳🇿" },
    { code: "pl", label: "Poland", flag: "🇵🇱" },
    { code: "se", label: "Sweden", flag: "🇸🇪" },
    { code: "za", label: "South Africa", flag: "🇿🇦" },
    { code: "ch", label: "Switzerland", flag: "🇨🇭" },
    { code: "us", label: "USA", flag: "🇺🇸" },
    { code: "all", label: "World", flag: "🌍" },
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

  
  let item;
  if (typeof window !== "undefined") {
    item = localStorage.getItem("source");
  }
  let newLng;
  if (item === "partner1039") {
    newLng = availableLanguages1039;
  } else if (item === "partner1043") {
    newLng = availableLanguages1043;
  } else if (item === "partner1044") {
    newLng = availableLanguages1044;
  } else if (item === "CLD_VIP") {
    newLng = availableLanguagesCLD_VIP;
  } else {
    newLng = availableLanguages;
  }



  const [lng, setLng] = useState("all");

  const fetchBrands = (language, newLng) => {
    const matchedLanguage = newLng.find((lng) => lng.code === language);
    setLng(matchedLanguage ? matchedLanguage.code : "all");
  };
  useEffect(() => {
    fetchBrands(language, newLng);
  }, [language, newLng]);

  return (
    <div className={`language-switcher ml-3 flex flex-col`}>
      <select
        className={`desktop-lang ${language}`}
        value={lng}
        onChange={(e) => {
          const selected = newLng.find((lang) => lang.code === e.target.value);
          if (selected) {
            changeLanguage(selected.code);
          }
        }}
      >
        {newLng.map((language) => (
          <option
            key={language.code}
            value={language.code}
            style={{ fontSize: "20px" }}
          >
            {language.flag} {language.label}
          </option>
        ))}
      </select>

      {isLoading && <Loader />}
    </div>
  //   <div>
  //   <Listbox value={lng}  
  //           onChange={(e) => {
  //             const selected = newLng.find((lang) => lang.code === e.target.value);
  //             if (selected) {
  //               changeLanguage(selected.code);
  //             } 
  //           }}>
  //   <Label className="block text-sm font-medium leading-6 text-gray-900">{t("Your country of residence")}</Label>
  //   <div className="relative mt-2">
  //     <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
  //       <span className="block truncate">{language.code}</span>
  //       <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
  //         <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
  //       </span>
  //     </ListboxButton>

  //     <ListboxOptions
  //       transition
  //       className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
  //     >
  //       {newLng.map((language) => (
  //         <ListboxOption
  //         key={language.code}
  //         value={language.code}
  //         className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
  //       >
  //         <span className="block truncate font-normal group-data-[selected]:font-semibold">{language.flag} {language.label}</span>

  //         <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
  //           <CheckIcon aria-hidden="true" className="h-5 w-5" />
  //         </span>
  //       </ListboxOption>
  //       ))}
  //     </ListboxOptions>
  //   </div>
  // </Listbox>
  // </div>
  );
};

export default BrandsSwitcher;


// "use client";
// import { useState, useEffect } from "react";
// import Loader from "@/components/Loader";
// import { useLanguage } from "./LanguageContext";

// const BrandsSwitcher = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const { language, setLanguage } = useLanguage(); // Используй состояние и функцию из контекста

//   const ipData = async () => {
//     try {
//       const response = await fetch(
//         "https://ipapi.co/json/?key=YD0x5VtXrPJkOcFQMjEyQgqjfM6jUcwS4J54b3DI8ztyrFpHzW"
//       );
//       const data = await response.json();
//       if (data.country) {
//         setLanguage(data.country.toLowerCase()); // Используй setLanguage из контекста
//         if (typeof window !== "undefined") {
//           localStorage.setItem("country_brands", data.country.toLowerCase());
//         }
//       }
//     } catch (error) {
//       console.error("Ошибка при запросе к API:", error);
//       setLanguage("all"); 
//     }
//   };
//   useEffect(() => {
//     const savedLanguage = localStorage.getItem("country_brands");
//     if (!savedLanguage) {
//       ipData();
//     }
//   }, []);

//   const changeLanguage = (lng) => {
//     setIsLoading(true);
//     setLanguage(lng);
//     localStorage.setItem("country_brands", lng);
//     setIsLoading(false);
//   };

//   const availableLanguages = [
//     { code: "au", label: "Australia", flag: "🇦🇺" },
//     { code: "at", label: "Austria", flag: "🇦🇹" },
//     { code: "be", label: "Belgium", flag: "🇧🇪" },
//     { code: "bg", label: "Bulgaria", flag: "🇧🇬" },
//     { code: "ca", label: "Canada", flag: "🇨🇦" },
//     { code: "cz", label: "Czech", flag: "🇨🇿" },
//     { code: "dk", label: "Denmark", flag: "🇩🇰" },
//     { code: "fi", label: "Finland", flag: "🇫🇮" },
//     { code: "fr", label: "France", flag: "🇫🇷" },
//     { code: "de", label: "Germany", flag: "🇩🇪" },
//     { code: "gr", label: "Greece", flag: "🇬🇷" },
//     { code: "hu", label: "Hungary", flag: "🇭🇺" },
//     { code: "ie", label: "Ireland", flag: "🇮🇪" },
//     { code: "it", label: "Italy", flag: "🇮🇹" },
//     { code: "nl", label: "Netherlands", flag: "🇳🇱" },
//     { code: "nz", label: "New Zealand", flag: "🇳🇿" },
//     { code: "no", label: "Norway", flag: "🇳🇴" },
//     { code: "pl", label: "Poland", flag: "🇵🇱" },
//     { code: "pt", label: "Portugal", flag: "🇵🇹" },
//     { code: "sk", label: "Slovakia", flag: "🇸🇰" },
//     { code: "es", label: "Spain", flag: "🇪🇸" },
//     { code: "se", label: "Sweden", flag: "🇸🇪" },
//     { code: "ch", label: "Switzerland", flag: "🇨🇭" },
//     { code: "tr", label: "Turkey", flag: "🇹🇷" },
//     { code: "gb", label: "United Kingdom", flag: "🇬🇧" },
//     { code: "all", label: "World", flag: "🌍" },
//   ];
//   const availableLanguages1039 = [
//     { code: "au", label: "Australia", flag: "🇦🇺" },
//     { code: "at", label: "Austria", flag: "🇦🇹" },
//     { code: "be", label: "Belgium", flag: "🇧🇪" },
//     { code: "bg", label: "Bulgaria", flag: "🇧🇬" },
//     { code: "ca", label: "Canada", flag: "🇨🇦" },
//     { code: "cz", label: "Czech", flag: "🇨🇿" },
//     { code: "dk", label: "Denmark", flag: "🇩🇰" },
//     { code: "fi", label: "Finland", flag: "🇫🇮" },
//     { code: "fr", label: "France", flag: "🇫🇷" },
//     { code: "de", label: "Germany", flag: "🇩🇪" },
//     { code: "gr", label: "Greece", flag: "🇬🇷" },
//     { code: "hu", label: "Hungary", flag: "🇭🇺" },
//     { code: "ie", label: "Ireland", flag: "🇮🇪" },
//     { code: "it", label: "Italy", flag: "🇮🇹" },
//     { code: "nl", label: "Netherlands", flag: "🇳🇱" },
//     { code: "nz", label: "New Zealand", flag: "🇳🇿" },
//     { code: "no", label: "Norway", flag: "🇳🇴" },
//     { code: "pl", label: "Poland", flag: "🇵🇱" },
//     { code: "pt", label: "Portugal", flag: "🇵🇹" },
//     { code: "sk", label: "Slovakia", flag: "🇸🇰" },
//     { code: "es", label: "Spain", flag: "🇪🇸" },
//     { code: "se", label: "Sweden", flag: "🇸🇪" },
//     { code: "ch", label: "Switzerland", flag: "🇨🇭" },
//     { code: "tr", label: "Turkey", flag: "🇹🇷" },
//     { code: "gb", label: "United Kingdom", flag: "🇬🇧" },
//     { code: "all", label: "World", flag: "🌍" },
//   ];
//   const availableLanguages1043 = [
//     { code: "ca", label: "Canada", flag: "🇨🇦" },
//     { code: "us", label: "United States", flag: "🇺🇸" },
//   ];
//   const availableLanguages1044 = [
//     { code: "au", label: "Australia", flag: "🇦🇺" },
//     { code: "at", label: "Austria", flag: "🇦🇹" },
//     { code: "be", label: "Belgium", flag: "🇧🇪" },
//     { code: "ca", label: "Canada", flag: "🇨🇦" },
//     { code: "ch", label: "Switzerland", flag: "🇨🇭" },
//     { code: "nl", label: "Netherlands", flag: "🇳🇱" },
//     { code: "de", label: "Germany", flag: "🇩🇪" },
//     { code: "cz", label: "The Czech Republic", flag: "🇨🇿" },
//     { code: "fi", label: "Finland", flag: "🇫🇮" },
//     { code: "gb", label: "Great Britain", flag: "🇬🇧" },
//     { code: "ie", label: "Ireland", flag: "🇮🇪" },
//     { code: "it", label: "Italy", flag: "🇮🇹" },
//     { code: "nz", label: "New Zealand", flag: "🇳🇿" },
//     { code: "no", label: "Norway", flag: "🇳🇴" },
//     // { code: "pl", label: "Poland", flag: "🇵🇱" },
//     { code: "za", label: "South Africa", flag: "🇿🇦" },
//     { code: "se", label: "Sweden", flag: "🇸🇪" },
//     { code: "us", label: "USA", flag: "🇺🇸" },
//     { code: "all", label: "World", flag: "🌍" },
//   ];


  
  
//   let item;
//   if (typeof window !== "undefined") {
//     item = localStorage.getItem("source");
//   }
//   let newLng;
//   if (item === "partner1039") {
//     newLng = availableLanguages1039;
//   } else if (item === "partner1043") {
//     newLng = availableLanguages1043;
//   } else if (item === "partner1044") {
//     newLng = availableLanguages1044;
//   } else {
//     newLng = availableLanguages;
//   }

//   return (
//     <div className={`language-switcher ml-3 flex flex-col`}>
//       <select
//         className={`desktop-lang ${language}`}
//         value={language}
//         onChange={(e) => {
//           const selected = newLng.find(
//             (lang) => lang.code === e.target.value
//           );
//           if (selected) {
//             changeLanguage(selected.code);
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
//   );
// };

// export default BrandsSwitcher;