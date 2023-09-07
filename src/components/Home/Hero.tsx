import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero = () => {
  return (
    <div
      className="flex justify-center bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage:
          "url(https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/1920x588/img1.jpg)",
      }}
    >
      <div className="relative container">
        <Swiper
          className="mySwiper"
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          loop={true}
          navigation={false}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
        >
          <SwiperSlide>
            <div className="grid grid-cols-12 items-center justify-between min-h-screen">
              {/* Text */}
              <div className="col-span-12 md:col-span-7 p-8 text-left font-lato">
                <p className="font-bold uppercase text-lg text-gray-400 mb-2 w-11/12 tracking-tight">
                  The worm's editor
                </p>
                <h1 className="text-4xl md:text-6xl text-gray-800 mb-4">
                  <p className="font-normal tracking-wider">
                    Featured Books of the
                  </p>
                  <p className="font-bold">February</p>
                </h1>

                <button className="bg-black text-white px-6 py-3 hover:shadow-md transition duration-300">
                  Shop Now
                </button>
              </div>

              {/* Image */}
              <div className="col-span-12 md:col-span-5">
                <img
                  src="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/800x420/img1.png"
                  alt="Hero Image"
                  className="h-auto w-11/12 mx-auto"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-12 items-center justify-between min-h-screen">
              {/* Text */}
              <div className="col-span-12 md:col-span-7 p-8 text-left font-lato">
                <p className="font-bold uppercase text-lg text-gray-400 mb-2 w-11/12">
                  The best's editor
                </p>
                <h1 className="text-4xl md:text-6xl text-gray-800 mb-4">
                  <p className="font-normal tracking-wider">
                    Most selling book in the
                  </p>
                  <p className="font-bold">Last Year</p>
                </h1>

                <button className="bg-black text-white px-6 py-3 hover:shadow-md transition duration-300">
                  Shop Now
                </button>
              </div>

              {/* Image */}
              <div className="col-span-12 md:col-span-5">
                <img
                  src="https://i0.wp.com/www.thebookwarehouse.com.au/wp-content/uploads/2023/03/Books-for-8-year-Olds-_Banner_The-Book-Warehouse..png?fit=1357%2C780&ssl=1"
                  alt="Hero Image"
                  className="h-auto w-11/12 mx-auto"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
