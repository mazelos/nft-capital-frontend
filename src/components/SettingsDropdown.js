import React, { createRef, useState } from "react";
import { createPopper } from "@popperjs/core";
import { useSettings } from '../managers/settings';
// import Image from 'next/image';
// import icon from '../assets/icons/settings.png';

const Dropdown = () => {
  const { setMaxFee, setMaxPriorityFee, maxFee, maxPriorityFee } = useSettings();

  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = createRef();
  const popoverDropdownRef = createRef();

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, { placement: "bottom-start" });
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return (
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className="bg-blue-l-01 hover:bg-blue-700 transition-all text-white font-bold py-3 px-6 rounded-lg flex"
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                  dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
                }}
            >
                Options
            </button>
            <div
              ref={popoverDropdownRef}
              className={`${dropdownPopoverShow ? 'block' : 'hidden'} bg-white text-base z-50 float-left px-3 py-3 list-none rounded-lg shadow-lg flex-col justify-start`}
              style={{ minWidth: "12rem" }}
            >                       
               <div className="flex-col">
                <div className="flex justify-between my-2 items-center">
                  <label className="mx-2 font-semibold" htmlFor="maxFee">Max fee:</label>
                  <input 
                    id="maxFee" 
                    type="number" 
                    className="w-12 border-2 p-1 rounded-lg h-7 border-gray-l-01" 
                    value={maxFee} 
                    placeholder="0" 
                    onChange={(e) => setMaxFee(parseFloat(e.target.value || 0))}/>
                </div>
                <div className="flex justify-between items-center">
                  <label className="mx-2 font-semibold" htmlFor="maxFee">Max priority fee:</label>
                  <input
                    id="maxPryotity" 
                    type="number" 
                    className="w-12 border-2 p-1 rounded-lg h-7 border-gray-l-01" 
                    value={maxPriorityFee} 
                    placeholder="0" 
                    onChange={(e) => setMaxPriorityFee(parseFloat(e.target.value || 0))} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Dropdown;
