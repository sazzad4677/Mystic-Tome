import { CiMedicalCase } from "react-icons/ci";
import { GiLoveMystery, GiMaterialsScience } from "react-icons/gi";
import { IoImagesOutline } from "react-icons/io5";

const Featured = () => {
  const categories = [
    {
      title: "Arts and Photography",
      icon: (
        <IoImagesOutline className="text-5xl text-[#A54FF7]"></IoImagesOutline>
      ),
      backgroundColor: "bg-[#FAF1FE]",
    },
    {
      title: "Mystery",
      icon: <GiLoveMystery className="text-5xl text-[#ED3833]"></GiLoveMystery>,
      backgroundColor: "bg-[#F4E6E5]",
    },
    {
      title: "Science Fiction",
      icon: <GiMaterialsScience className="text-5xl text-[#55CEEF]" />,
      backgroundColor: "bg-[#E6F2F4]",
    },
    {
      title: "Health",
      icon: <CiMedicalCase className="text-5xl text-[#F3953E]" />,
      backgroundColor: "bg-[#FAF4EB]",
    },
  ];
  return (
    <div className="pt-24 px-24 ">
      <div className="flex justify-between">
        <p className="text-3xl font-semibold tracking-wide font-[inter]">
          Featured Categories
        </p>
        <div className="tracking-normal">
          <p>
            All Categories
            <i className="pi pi-chevron-right"></i>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-x-4 mt-8">
        {categories.map((category, i) => {
          return (
            <div
              key={i}
              className={`flex items-center px-6 py-5 ${category.backgroundColor}`}
            >
              <div className="px-6 py-5">
                <div>{category.icon}</div>
                <h3 className="text-lg tracking-normal line leading-5 mt-2 font-semibold">
                  {category.title}
                </h3>
                <p className="mt-3">Shop Now</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Featured;
