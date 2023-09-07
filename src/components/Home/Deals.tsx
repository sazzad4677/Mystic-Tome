import { Carousel } from "primereact/carousel";
import { useEffect, useState } from "react";

const Deals = () => {
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
  const itemTemplate = () => {
    return (
      <div className=" p-8 border flex gap-x-8 items-center bg-white">
        {/* Image */}
        <div>
          <img
            src="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/200x327/img1.jpg"
            className="mx-auto "
          />
        </div>
        {/* Text */}
        <div className="">
          <div>
            <p className="text-themeColor uppercase text-xs my-2">paperback</p>
            <p className=" text-lg font-normal mb-1">
              Dark in Death: An Eve Dallas Novel (In Death, Book 46)
            </p>
            <p className="  text-sm text-gray-500 mb-2 ">Jay Shetty</p>
            <p className=" font-bold text-lg">
              $29
              <span className=" line-through text-xs text-gray-600 font-normal p-2">
                $99
              </span>
            </p>
            <p className="font-bold text-xl py-4">
              Hurry Up! <span className="font-normal">Offer Ends in:</span>
            </p>
            <div className="flex items-stretch justify-between text-lg">
              <div className=" py-3">
                <p className="font-semibold">114</p>
                <p>Days</p>
              </div>
              <div className="border-r pr-3 border-gray-800">&nbsp;</div>
              <div className=" py-3">
                <p className="font-semibold">3</p>
                <p>Hours</p>
              </div>
              <div className="border-r pr-3 border-gray-800">&nbsp;</div>
              <div className=" py-3">
                <p className="font-semibold">60</p>
                <p>Minutes</p>
              </div>
              <div className="border-r pr-3 border-gray-800">&nbsp;</div>
              <div className=" py-3">
                <p className="font-semibold">25</p>
                <p>Secs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="bg-secondaryColor">
      <div className=" pt-24 py-24 px-24 pb-2 ">
        <div className="flex justify-between mb-8">
          <p className="text-3xl ">Deals of the Week</p>
          <div className="tracking-normal">
            <p>
              View All
              <i className="pi pi-chevron-right"></i>
            </p>
          </div>
        </div>
      </div>
      <div className=" font-sans px-8 pb-24">
        <Carousel
          value={books}
          numVisible={2}
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
        />
      </div>
    </div>
  );
};

export default Deals;
