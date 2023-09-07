import { Carousel } from "primereact/carousel";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BestBooks = () => {
  const [books, setBooks] = useState([]);
  console.log(books);
  useEffect(() => {
    fetch("/books.json")
      .then((res) => res.json())
      .then((books) => setBooks(books));
  }, []);
  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];
  const itemTemplate = (item) => {
    return (
      <div className="px-8 py-4 border border-gray-200 hover:border-black  h-auto group relative m-0">
        <div>
          <img
            alt="Card"
            src="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/300x452/img1.jpg"
            className="w-36 mx-auto align-middle"
            width=""
          />
        </div>
        <div className="pt-3">
          <div>
            <p className="text-themeColor uppercase text-xs my-2">paperback</p>
            <p className=" text-base font-semibold mb-1">The Great Gatsby</p>
            <p className="  text-sm text-gray-500 mb-2 ">Jay Shetty</p>
            <p className=" font-bold ">$29</p>
          </div>
          {/* Button Group */}
          <div className="mt-2 font-semibold justify-between items-center flex transition-all ">
            <div className="group relative">
              <button className="uppercase p-1">Add to Cart</button>
              <div className="absolute w-full h-0.5 bg-black bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
            </div>

            <button className="uppercase w-8 h-8 rounded-full hover:bg-themeColor hover:text-white">
              <i className="pi pi-heart text-lg "></i>
            </button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="pt-24 px-24 ">
        <div className="flex justify-between">
          <p className="text-3xl font-semibold tracking-wide font-[inter]">
            Bestselling Books
          </p>
          <div className="tracking-normal">
            <p>
              View All
              <i className="pi pi-chevron-right"></i>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 font-sans px-6">
        <Carousel
          value={books}
          numVisible={4}
          circular
          numScroll={3}
          responsiveOptions={responsiveOptions}
          itemTemplate={itemTemplate}
          prevIcon={
            <i className="pi pi-chevron-left border border-gray-300 text-gray-300  p-2"></i>
          }
          nextIcon={
            <i className="pi pi-chevron-right border border-gray-300 text-gray-300  p-2"></i>
          }
          showIndicators={false}
        />
      </div>
    </div>
  );
};

export default BestBooks;
