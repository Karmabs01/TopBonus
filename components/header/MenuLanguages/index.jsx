import * as React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useLanguage } from "@/components/switcher/LanguageContext";
import BrandsSwitcher from "@/components/switcher/BrandsSwitcher";
import LanguageSwitcher from "@/components/switcher/LanguageSwitcher";
import i18n from "@/components/i18n";
import { useTranslation } from "react-i18next";

import { Menu, MenuButton, MenuItem, MenuItems, Label } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import "../../../app/flags.css"

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function MultipleSelectPlaceholder() {
  const theme = useTheme();
  const { t } = useTranslation();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  const { language } = useLanguage();

  const flags = [
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
    { code: "us", label: "United States", flag: "🇺🇸" },
    { code: "all", label: "World", flag: "🌍" },
  ];
  const flags1039 = [
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
    // { code: "pl", label: "Poland", flag: "🇵🇱" },
    { code: "pt", label: "Portugal", flag: "🇵🇹" },
    { code: "sk", label: "Slovakia", flag: "🇸🇰" },
    { code: "es", label: "Spain", flag: "🇪🇸" },
    { code: "se", label: "Sweden", flag: "🇸🇪" },
    { code: "ch", label: "Switzerland", flag: "🇨🇭" },
    { code: "tr", label: "Turkey", flag: "🇹🇷" },
    { code: "gb", label: "United Kingdom", flag: "🇬🇧" },
    { code: "all", label: "World", flag: "🌍" },
  ];
  const flags1043 = [
    { code: "ca", label: "Canada", flag: "🇨🇦" },
    { code: "us", label: "United States", flag: "🇺🇸" },
    { code: "all", label: "World", flag: "🌍" },
  ];
  const flags1044 = [
    { code: "au", label: "Australia", flag: "🇦🇺" },
    { code: "at", label: "Austria", flag: "🇦🇹" },
    { code: "be", label: "Belgium", flag: "🇧🇪" },
    { code: "ca", label: "Canada", flag: "🇨🇦" },
    { code: "gr", label: "Greece", flag: "🇬🇷" },
    { code: "ch", label: "Switzerland", flag: "🇨🇭" },
    { code: "nl", label: "Netherlands", flag: "🇳🇱" },
    { code: "de", label: "Germany", flag: "🇩🇪" },
    { code: "cz", label: "The Czech Republic", flag: "🇨🇿" },
    { code: "dk", label: "Denmark", flag: "🇩🇰" },
    { code: "fi", label: "Finland", flag: "🇫🇮" },
    { code: "fr", label: "France", flag: "🇫🇷" },
    { code: "gb", label: "Great Britain", flag: "🇬🇧" },
    { code: "ie", label: "Ireland", flag: "🇮🇪" },
    { code: "it", label: "Italy", flag: "🇮🇹" },
    { code: "nz", label: "New Zealand", flag: "🇳🇿" },
    { code: "no", label: "Norway", flag: "🇳🇴" },
    { code: "pl", label: "Poland", flag: "🇵🇱" },
    { code: "za", label: "South Africa", flag: "🇿🇦" },
    { code: "se", label: "Sweden", flag: "🇸🇪" },
    { code: "us", label: "USA", flag: "🇺🇸" },
    { code: "all", label: "World", flag: "🌍" },
  ];
  const flagsCLD_VIP = [
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

  // Ваши флаги определены где-то здесь

  const [lng, setLng] = useState();

  useEffect(() => {
    setLng(i18n.language);
  }, [i18n.language]);

  let source;
  if (typeof window !== "undefined") {
    source = localStorage.getItem("source");
  }

  let newFlag; // Список флагов в зависимости от партнера
  switch (source) {
    case "partner1039":
      newFlag = flags1039;
      break;
    case "partner1043":
      newFlag = flags1043;
      break;
    case "partner1044":
      newFlag = flags1044;
      break;
    case "CLD_VIP":
      newFlag = flagsCLD_VIP;
      break;
    default:
      newFlag = flags;
      break;
  }

  const renderValue = (selected) => {
    if (selected.length === 0) {
      const languageFlag =
        newFlag.find((f) => f.code === language)?.flag ||
        newFlag.find((f) => f.code === 'all').flag;
      return (
        <div className="flex items-center">
          {/* <em className="flagflag ">{languageFlag}</em> */}
          <span className={`flag-icon flag-icon-${lng ? lng : ''}`} />
          <em className="flagflag2 ">{languageFlag}</em>
        </div>
      );
    }
    return selected
      .map((code) => {
        const flag = newFlag.find((flag) => flag.code === code);
        return flag ? `${flag.flag}` : code;
      })
      .join(', ');
  };

  return (
    // <div className="flex !items-center mobile-switcher">
    //   <FormControl
    //     className="!m-0 form-control"
    //     sx={{ m: 1, width: 300, mt: 3 }}
    //   >
    //     <Select
    //       className="selectlang"
    //       multiple
    //       displayEmpty
    //       value={personName}
    //       onChange={handleChange}
    //       input={<OutlinedInput />}
    //       renderValue={(selected) => {
    //         if (selected.length === 0) {
    //           const languageFlag =
    //             newFlag.find((f) => f.code === language)?.flag ||
    //             newFlag.find((f) => f.code === "all").flag;
    //           return (
    //             <div className="flex items-center">
    //               <em className="flagflag">{languageFlag}</em>
    //               <em className="flagflag2">{lng ? lng.toUpperCase() : ""}</em>
    //               {/* {source !== "partner1043" && (
    //               )} */}
    //             </div>
    //           );
    //         }
    //         return selected
    //           .map((code) => {
    //             const flag = newFlag.find((flag) => flag.code === code);
    //             return flag ? `${flag.flag}` : code;
    //           })
    //           .join(", ");
    //       }}
    //       MenuProps={MenuProps}
    //       inputProps={{ "aria-label": "Without label" }}
    //     >
    //       <p className="ml-4 mr-4 mt-4">{t("Your country of residence")}</p>
    //       <BrandsSwitcher />
    //       <LanguageSwitcher />
    //     </Select>
    //   </FormControl>
    // </div>


    <div className="relative inline-block text-left mobile-switcher">
      <Menu>
        {({ open }) => (
          <>
            <div>
              <MenuButton className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-indigo-500">
                {renderValue(personName)}
                {/* <ChevronDownIcon className="h-5 w-5 text-white" aria-hidden="true" /> */}
              </MenuButton>
            </div>
            <MenuItems
              className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-indigo-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-transform transform ${open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                }`}
            >
              <div className="">
              <MenuItem>
                  {({ active }) => (
                    <div
                      className={`block text-sm text-gray-700`}
                    >
                      <Label className="block text-sm font-medium leading-6 text-gray-900 w-full">
                        {/* {t("Website language")} */}
                      </Label>
                      <LanguageSwitcher />
                    </div>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <div
                      className={`block text-sm text-gray-700 `}
                    >
                      <Label className="block text-sm font-medium leading-6 text-gray-900 w-full">
                        {/* {t('Your country of residence')} */}
                      </Label>
                      <BrandsSwitcher />
                    </div>
                  )}
                </MenuItem>
               
              </div>
            </MenuItems>
          </>
        )}
      </Menu>
    </div>
  );
}
