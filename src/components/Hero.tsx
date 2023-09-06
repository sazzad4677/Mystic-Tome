const Hero = () => {
  return (
    <div
      className=" flex justify-center bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage:
          "url(https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/1920x588/img1.jpg)",
      }}
    >
      <div className="relative   container">
        <div className=" grid grid-cols-12 items-center justify-between  min-h-screen ">
          {/* Text */}
          <div className="col-span-7 p-8 text-left font-lato ">
            <p className="font-bold uppercase text-lg text-gray-400 mb-2 w-11/12">
              The worm's editor
            </p>
            <h1 className="text-6xl text-gray-800 mb-4">
              <p className="font-normal tracking-wider">
                Featured Books of the
              </p>
              <p className="font-bold">February</p>
            </h1>

            <button className="bg-black text-white px-6 py-3   hover:shadow-md transition duration-300">
              Shop Now
            </button>
          </div>

          {/* Image */}
          <div className="col-span-5">
            <img
              src="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/800x420/img1.png"
              alt="Hero Image"
              className=" h-auto w-11/12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
