const Featured = () => {
  const categories = [
    {
      title: "Arts and Photography",
      icon: "pi pi-images",
      iconColor: "#A54FF7",
      backgroundColor: "#FAF1FE",
    },
    {
      title: "Food an",
      icon: "",
      backgroundColor: "",
    },
    {
      title: "",
      icon: "",
      backgroundColor: "",
    },
    {
      title: "",
      icon: "",
      backgroundColor: "",
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
        {categories.map((category) => {
          return (
            <div
              className={`flex items-center px-6 py-5 bg-[${category.backgroundColor}]`}
            >
              <div className="px-6 py-5">
                <i
                  className={`${category.icon} text-5xl text-[${category.iconColor}] font-normal`}
                ></i>
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
