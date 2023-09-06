import { AutoComplete } from "primereact/autocomplete";
import { Menubar } from "primereact/menubar";
import { useState } from "react";
import Logo from "../assets/Logo.png";

function Navbar() {
  const [value, setValue] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);

  const search = (event: { query: string }) => {
    setItems([...Array(10).keys()].map((item) => event.query + "-" + item));
  };
  const navItems = [
    {
      label: "Home",
      className: "font-semibold text-black",
    },
    {
      label: "Fiction",

      className: "font-semibold text-black",
    },
    {
      label: "Nonfiction",
      className: "font-semibold text-black",
    },
    {
      label: "e-books",
      className: "font-semibold text-black",
    },
    {
      label: "kids",
      className: "font-semibold text-black",
    },
  ];

  const start = (
    <a href="/">
      <img
        alt="Mystic-Tome"
        src={Logo}
        className="w-28 cursor-pointer mr-10"
      ></img>
    </a>
  );
  const end = (
    <span className="p-input-icon-left">
      <i className="pi pi-search" />
      <AutoComplete
        placeholder="Search"
        className="autoCompleteInput"
        value={value}
        suggestions={items}
        completeMethod={search}
        onChange={(e) => setValue(e.value)}
      />
    </span>
  );

  return (
    <div>
      <div>
        {/* CTA */}
        <div className="flex flex-col items-center md:flex-row md:justify-between px-4 md:px-14 mt-2">
          <div className="flex flex-col md:flex-row md:items-center md:gap-x-10">
            <p className="hover:text-themeColor cursor-pointer flex items-center">
              <i className="pi pi-question-circle mr-2 "></i>
              Can we help you?
            </p>
            <p className="hover:text-themeColor cursor-pointer flex items-center">
              <i className="pi pi-phone mr-2"></i>+1 246-345-0695
            </p>
          </div>
          <div className="flex gap-x-4 md:gap-x-2">
            <p className="hover:text-themeColor cursor-pointer px-2 md:px-4 flex items-center">
              <i className="pi pi-map-marker"></i>
            </p>
            <p className="hover:text-themeColor cursor-pointer px-2 md:px-4 flex items-center">
              <i className="pi pi-heart"></i>
            </p>
            <p className="hover:text-themeColor cursor-pointer px-2 md:px-4 flex items-center">
              <i className="pi pi-user"></i>
            </p>
            <p className="hover:text-themeColor cursor-pointer px-2 md:px-4 flex items-center">
              <i className="pi pi-shopping-cart"></i>
            </p>
          </div>
        </div>
        <div className="border-t mt-2"></div>

        {/* Navbar */}
        <div>
          <Menubar
            model={navItems}
            start={start}
            end={end}
            className="!bg-white !w-full border-r-0 border-l-0 border-t-0 px-2 md:px-14 "
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
