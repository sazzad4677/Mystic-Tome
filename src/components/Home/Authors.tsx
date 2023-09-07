import { Carousel } from "primereact/carousel";
import { useEffect, useState } from "react";

const Authors = () => {
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
      <div>
        <div>
          <img
            src="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/140x140/img1.jpg"
            alt=""
            className="rounded-full mx-auto"
          />
        </div>
        <div className="text-center mt-8">
          <p className="text-base font-semibold">Barbara O'neil</p>
          <p className="text-sm text-gray-600">25 Published Books</p>
        </div>
      </div>
    );
  };
  return (
    <div className="border-b">
      <div className="flex justify-between items-center px-24 mt-20">
        <p className="text-3xl font-semibold tracking-wide font-[inter]">
          Favorite Authors
        </p>
        <div className="tracking-normal">
          <p>
            View All
            <i className="pi pi-chevron-right"></i>
          </p>
        </div>
      </div>

      <div className=" font-sans px-8 pb-24 mt-14">
        <Carousel
          value={books}
          numVisible={5}
          circular
          showIndicators={false}
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

export default Authors;
