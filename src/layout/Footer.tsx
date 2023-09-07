import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import Logo from "../assets/Logo.png";
function Footer() {
  const [selectedCurrency, setSelectedCurrency] = useState({
    name: "$ USD",
    code: "usd",
  });

  const currency = [
    { name: "$ USD", code: "usd" },
    { name: "€ Euro", code: "eur" },
    { name: "¥ Japanese Yen", code: "jpy" },
    { name: "£ British Pound", code: "gbp" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState({
    name: "English",
    code: "en",
  });

  const languages = [
    { name: "English", code: "en" },
    { name: "Español", code: "es" },
    { name: "Français", code: "fr" },
  ];

  return (
    <footer>
      <div className="px-24 pb-16   ">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
          {/* Left side */}
          <div className="lg:w-1/3 mb-6 lg:mb-0">
            <img src={Logo} alt="Company Logo" className="w-36  mb-4" />
            <p className="text-sm mt-6">
              1418 River Drive, Suite 35 Cottonhall, CA 9622
              <br />
              United States
            </p>
            <p className="text-sm mt-8">
              sale@bookworm.com <br /> +1 246-345-0695
            </p>
            <div className="mt-4 flex gap-x-10">
              {/* Social media links */}
              <a
                href="#"
                className="text-gray-400 hover:text-themeColor mr-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="pi pi-facebook text-black hover:text-themeColor"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-themeColor mr-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="pi pi-instagram text-black hover:text-themeColor"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-themeColor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="pi pi-twitter text-black hover:text-themeColor"></i>
              </a>
            </div>
          </div>

          {/* Right side */}
          <div className="lg:w-2/3">
            <ul className="flex flex-wrap">
              <li className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                <h4 className="text-lg font-semibold mb-8">Quick Links</h4>
                <ul className="list-none text-sm">
                  <li className="mb-4">
                    <a href="#" className=" hover:text-themeColor">
                      Home
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className=" hover:text-themeColor">
                      About Us
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className=" hover:text-themeColor">
                      Services
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className=" hover:text-themeColor">
                      Contact
                    </a>
                  </li>
                </ul>
              </li>
              <li className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                <h4 className="text-lg font-semibold mb-8">Resources</h4>
                <ul className="list-none text-sm">
                  <li className="mb-4">
                    <a href="#" className=" hover:text-themeColor">
                      Blog
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className=" hover:text-themeColor">
                      Downloads
                    </a>
                  </li>
                </ul>
              </li>
              <li className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                <h4 className="text-lg font-semibold mb-8">Legal</h4>
                <ul className="list-none text-sm">
                  <li className="mb-4">
                    <a href="#" className="hover:text-themeColor">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-themeColor">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </li>
              <li className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                <h4 className="text-lg font-semibold mb-8">Contact Us</h4>
                <ul className="list-none text-sm">
                  <li className="mb-4">
                    <a href="tel:123456789" className="hover:text-themeColor">
                      Phone: (123) 456-789
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="mailto:info@example.com"
                      className="hover:text-themeColor"
                    >
                      Email: info@example.com
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 px-24 py-6 text-sm flex items-center">
        <div className="flex justify-between w-full items-center">
          <div>
            <p>
              &copy;{new Date().getFullYear()} Mystic Tome. All Right Reserved
            </p>
          </div>
          <div className="flex items-center gap-x-4">
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
                className="w-10"
              />
            </div>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1280px-MasterCard_Logo.svg.png"
                className="w-12"
              />
            </div>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Discover_Card_logo.svg/2560px-Discover_Card_logo.svg.png"
                className="w-16"
              />
            </div>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png"
                className="w-16"
              />
            </div>
            <div>
              <Dropdown
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.value)}
                options={languages}
                optionLabel="name"
                className="w-full md:w-14rem"
              />
            </div>
            <div>
              <Dropdown
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.value)}
                options={currency}
                optionLabel="name"
                className="w-full md:w-14rem"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
