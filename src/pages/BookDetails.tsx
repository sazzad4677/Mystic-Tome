import { BreadCrumb } from "primereact/breadcrumb";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { MenuItem } from "primereact/menuitem";
import { Rating, RatingChangeEvent } from "primereact/rating";
import { useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const BookDetails = () => {
  const [value, setValue] = useState<number>(0);
  const items: MenuItem[] = [{ label: "Item", url: "/" }];
  const home: MenuItem = {
    icon: "pi pi-home",
    // url: "/",
    className: "hover:text-themeColor",
  };
  return (
    <div className="">
      <div className="px-14 py-5 border-b border-gray-200 flex justify-between items-center">
        <h1 className="text-xl">Shop Single</h1>
        <BreadCrumb
          model={items}
          home={home}
          className="border-0 shadow-none "
        />
      </div>
      <div className="flex container mx-auto">
        <div className=" w-2/5 pt-14 pr-4">
          <Swiper
            className="mySwiper"
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            centeredSlides={true}
            navigation={false}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <div>
                <img
                  src="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/300x452/img1.jpg"
                  className="mx-auto mb-10"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  src="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/300x452/img1.jpg"
                  className="mx-auto mb-10"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/*  RIght Side Description */}
        <div className="border-l ">
          <div className=" pt-16 ">
            <div className="px-12 flex flex-col gap-4 w-4/5 pb-10">
              {/* Title */}
              <h1 className="text-4xl font-normal text-gray-900">
                Where the Crawdads Sing
              </h1>
              {/* Secondary info */}
              <div className="flex gap-x-4 text-sm">
                <Rating value={5} readOnly cancel={false} />
                <p>(1234)</p>
                <p className="font-semibold">By (author)</p>
                <p className="text-gray-400">Anna Banks</p>
              </div>
              {/* Pricing */}
              <div>
                <h3 className="text-2xl">$29.95-$59.95</h3>
              </div>
              <div className="text-sm">
                <p>
                  Book Format:
                  <span className="text-gray-500">Choose an option</span>{" "}
                </p>
              </div>
              <div className="flex gap-5">
                <div>
                  <div className="pr-4 py-4">
                    <p>Hard Cover</p>
                    <p>$9.59</p>
                  </div>
                  <p className="border border-gray-200 "></p>
                </div>
                <div>
                  <div className="pr-4 py-4">
                    <p>Paperback</p>
                    <p>$9.59</p>
                  </div>
                  <p className="border border-gray-200 "></p>
                </div>
                <div>
                  <div className="pr-4 py-4">
                    <p>Kindle</p>
                    <p>$9.59</p>
                  </div>
                  <p className="border border-gray-200 "></p>
                </div>
              </div>
              <div className="text-sm mt-2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Excepteur
                  sint occaecat.
                </p>
              </div>
              <div className="flex gap-x-4 mt-4">
                <div className="border flex">
                  <div className="py-3 px-4 font-light cursor-pointer">-</div>
                  <div className="py-3 px-4 text-gray-500 font-light">1</div>
                  <div className="py-3 px-4 font-light cursor-pointer">+</div>
                </div>
                <div>
                  <Button
                    label="Add to Cart"
                    title="Add to Cart"
                    className="button w-60"
                  />
                </div>
              </div>
            </div>
            <div className="py-8 border-t pr-0 ">
              <div className="pl-14 flex gap-x-10 text-base">
                <div className="flex items-center gap-x-2 hover:text-themeColor cursor-pointer">
                  <p>
                    <i className="pi pi-heart text-sm" />{" "}
                  </p>
                  <p className="tracking-wide  ">Add to Wishlist</p>
                </div>
                <div className="flex items-center gap-x-2 hover:text-themeColor cursor-pointer">
                  <p>
                    <i className="pi pi-share-alt text-sm" />{" "}
                  </p>
                  <p className="tracking-wide ">Share</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 border-t border-b">
        <div className="flex gap-x-8 justify-center">
          <p className="">Description</p>
          <p className="text-gray-500">Product Details</p>
          <p className="text-gray-500">Reviews(0)</p>
        </div>
      </div>
      <div className="mx-auto w-3/6 mt-14 text-sm tracking-wider leading-6 mb-4">
        We aim to show you accurate product information. Manufacturers,
        suppliers and others provide what you see here, and we have not verified
        it. See our disclaimer #1 New York Times Bestseller A Reese Witherspoon
        x Hello Sunshine Book Club Pick "I can't even express how much I love
        this book! I didn't want this story to end!"--Reese Witherspoon
        "Painfully beautiful."--The New York Times Book Review "Perfect for fans
        of Barbara Kingsolver."--Bustle For years, rumors of the "Marsh Girl"
        have haunted Barkley Cove, a quiet town on the North Carolina coast. So
        in late 1969, when handsome Chase Andrews is found dead, the locals
        immediately suspect Kya Clark, the so-called Marsh Girl. But Kya is not
        what they say. Sensitive and intelligent, she has survived for years
        alone in the marsh that she calls home, finding friends in the gulls and
        lessons in the sand. Then the time comes when she yearns to be touched
        and loved. When two young men from town become intrigued by her wild
        beauty, Kya opens herself to a new life--until the unthinkable happens.
        Perfect for fans of Barbara Kingsolver and Karen Russell, Where the
        Crawdads Sing is at once an exquisite ode to the natural world, a
        heartbreaking coming-of-age story, and a surprising tale of possible
        murder. Owens reminds us that we are forever shaped by the children we
        once were, and that we are all subject to the beautiful and violent
        secrets that nature keeps WHERE THE CRAWDADS LP
      </div>
      <div className="py-8 border-t border-b">
        <div className="flex gap-x-8 justify-center">
          <p className="text-gray-500">Description</p>
          <p>Product Details</p>
          <p className="text-gray-500">Reviews(0)</p>
        </div>
      </div>
      <div className="mx-auto w-3/6 mt-14 text-sm gap-2 text-left mb-4">
        <div className="grid grid-cols-2 pl-4 pr-8 py-4 hover:bg-gray-100">
          <p className="font-bold">Format:</p>
          <p className="font-light">Paperback | 365 Pages</p>
        </div>

        <div className="grid grid-cols-2 pl-4 pr-8 py-4 hover:bg-gray-100">
          <p className="font-bold">Dimensions:</p>
          <p className="font-light">9126 x 194 x 28mm | 301g</p>
        </div>

        <div className="grid grid-cols-2 pl-4 pr-8 py-4 hover:bg-gray-100">
          <p className="font-bold">Publication date:</p>
          <p className="font-light">20 Dec 2020</p>
        </div>

        <div className="grid grid-cols-2 pl-4 pr-8 py-4 hover:bg-gray-100">
          <p className="font-bold">Publisher:</p>
          <p className="font-light">Little, Brown Book Group</p>
        </div>

        <div className="grid grid-cols-2 pl-4 pr-8 py-4 hover:bg-gray-100">
          <p className="font-bold">Imprint:</p>
          <p className="font-light">Corsair</p>
        </div>

        <div className="grid grid-cols-2 pl-4 pr-8 py-4 hover:bg-gray-100">
          <p className="font-bold">Publication City/Country:</p>
          <p className="font-light">London, United Kingdom</p>
        </div>

        <div className="grid grid-cols-2 pl-4 pr-8 py-4 hover:bg-gray-100">
          <p className="font-bold">Language:</p>
          <p className="font-light">English</p>
        </div>
      </div>
      <div className="py-8 border-t border-b">
        <div className="flex gap-x-8 justify-center">
          <p className="text-gray-500">Description</p>
          <p className="text-gray-500">Product Details</p>
          <p>Reviews(0)</p>
        </div>
      </div>
      <div className="mx-auto  w-3/6 mt-14 flex flex-col gap-y-4">
        <p className="text-lg font-semibold">Write a Review</p>
        <div className="font-semibold flex gap-x-4">
          <p>Select a Rating (Required)</p>
          <Rating
            value={value}
            onChange={(e: RatingChangeEvent) => setValue(e.value as number)}
            cancel={false}
          />
        </div>
        <form>
          <div>
            <p className="fon-semibold">
              Details please! Your review helps other shoppers.
            </p>
          </div>
          <div>
            <InputTextarea className="w-full" />
          </div>
          <div>
            <Button
              className="button w-full"
              title="Submit  Review"
              type="submit"
              label="Submit Review"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookDetails;
