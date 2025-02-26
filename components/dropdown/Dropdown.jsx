"use client";
import "./dropdown.css";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

function DropdownMenu({ title, options, onOptionClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex items-center py-1 drop_down"
      >
        {title}
        <RiArrowDropDownLine
          className={`ml-2 transform drop_down_icon ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute w-48 bg dropdown_menu_list ">
          <ul>
            {options.map((option, index) => (
              <li
                key={index}
                className="cursor-pointer py-1 "
                onClick={() => onOptionClick(option)}
              >
                <input type="checkbox" className="mr-2" />
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Dropdown() {
  const handleOptionClick = (option) => {
    console.log(`${option} clicked`);
  };

  return (
    <div className="flex flex-col gap-4">
      <DropdownMenu
        title="Product Categories"
        options={["Option 1", "Option 2", "Option 3"]}
        onOptionClick={handleOptionClick}
      />
      <DropdownMenu
        title="Filter by Color"
        options={["Red", "Green", "Blue"]}
        onOptionClick={handleOptionClick}
      />
      <DropdownMenu
        title="Filter by Size"
        options={["Small", "Medium", "Large"]}
        onOptionClick={handleOptionClick}
      />
      <DropdownMenu
        title="Filter by Price"
        options={["Under $50", "$50 - $100", "Above $100"]}
        onOptionClick={handleOptionClick}
      />
    </div>
  );
}

// "use client";
// import "./dropdown.css";
// import React, { useState } from "react";
// import { RiArrowDropDownLine } from "react-icons/ri";

// export default function Dropdown() {
//   const [isOpenFirst, setIsOpenFirst] = useState(false);
//   const [isOpenSecond, setIsOpenSecond] = useState(false);

//   const toggleFirstDropdown = () => {
//     setIsOpenFirst(!isOpenFirst);
//   };

//   const toggleSecondDropdown = () => {
//     setIsOpenSecond(!isOpenSecond);
//   };

//   return (
//     <div className="flex flex-col gap-4">
//       {/* First Dropdown */}
//       <div className="relative inline-block text-left">
//         <button
//           onClick={toggleFirstDropdown}
//           className="flex items-center py-1 drop_down"
//         >
//           Product Categories
//           <RiArrowDropDownLine
//             className={`ml-2 transform drop_down_icon ${
//               isOpenFirst ? "rotate-180" : "rotate-0"
//             }`}
//           />
//         </button>

//         {isOpenFirst && (
//           <div className="absolute -48 bg-white  dropdown_menu_list">
//             <ul className="">
//               <li
//                 className="cursor-pointer py-1"
//                 onClick={() => console.log("Option 1 clicked")}
//               >
//                 <input type="checkbox" /> Option 1
//               </li>
//               <li
//                 className="cursor-pointer py-1"
//                 onClick={() => console.log("Option 2 clicked")}
//               >
//                 <input type="checkbox" /> Option 2
//               </li>
//               <li
//                 className="cursor-pointer py-1"
//                 onClick={() => console.log("Option 3 clicked")}
//               >
//                 <input type="checkbox" /> Option 3
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>

//       {/* Second Dropdown */}
//       <div className="relative inline-block text-left">
//         <button
//           onClick={toggleSecondDropdown}
//           className="flex items-center py-1 drop_down"
//         >
//           Filter by Color
//           <RiArrowDropDownLine
//             className={`ml-2 transform drop_down_icon ${
//               isOpenSecond ? "rotate-180" : "rotate-0"
//             }`}
//           />
//         </button>

//         {isOpenSecond && (
//           <div className="absolute w-48  dropdown_menu_list">
//             <ul className="">
//               <li
//                 className="cursor-pointer py-1"
//                 onClick={() => console.log("Red clicked")}
//               >
//                 <input type="checkbox" /> Red
//               </li>
//               <li
//                 className="cursor-pointer py-1"
//                 onClick={() => console.log("Green clicked")}
//               >
//                 <input type="checkbox" /> Green
//               </li>
//               <li
//                 className="cursor-pointer py-1"
//                 onClick={() => console.log("Blue clicked")}
//               >
//                 <input type="checkbox" /> Blue
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
