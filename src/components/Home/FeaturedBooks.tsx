import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FeaturedBooks = () => {
  const [books, setBooks] = useState([]);
  console.log(books);
  useEffect(() => {
    fetch("/books.json")
      .then((res) => res.json())
      .then((books) => setBooks(books));
  }, []);

  return (
    <div>
      <div className="pt-24 px-24 ">
        <div className="">
          <p className="text-3xl font-semibold tracking-wide font-[inter] text-center">
            Featured Books
          </p>
        </div>
        <div className="flex justify-center gap-x-12 mt-8">
          <p className="text-gray-500 hover:underline hover:text-black p-2">
            Featured
          </p>
          <p className="text-gray-500 hover:underline hover:text-black p-2">
            On Sale
          </p>
          <p className="text-gray-500 hover:underline hover:text-black p-2">
            Most Viewed
          </p>
        </div>

        <div className="grid grid-cols-4 mt-8">
          {books?.slice(0, 8).map((v, i) => {
            return (
              <div className="font-sans" key={i}>
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
                      <p className="text-themeColor uppercase text-xs my-2">
                        paperback
                      </p>
                      <p className=" text-base font-semibold mb-1">
                        The Great Gatsby
                      </p>
                      <p className="  text-sm text-gray-500 mb-2 ">
                        Jay Shetty
                      </p>
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBooks;
