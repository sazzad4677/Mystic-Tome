import { Sidebar } from "primereact/sidebar";
import React from "react";
interface CartProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}
const Cart: React.FC<CartProps> = ({ visible, setVisible }) => {
  return (
    <div className="flex justify-center w-full">
      <Sidebar
        visible={visible}
        position="right"
        showCloseIcon={false}
        onHide={() => setVisible(false)}
        className=" !w-full md:!w-2/5 "
      >
        <div className=" border-b pb-5">
          <div className="flex items-center justify-between">
            <div className="flex justify-between items-center font-semibold">
              <p>
                <i className="pi pi-shopping-bag mr-4" />
              </p>
              <p>Your Shopping Bag (3)</p>
            </div>
            <div
              className="flex items-center gap-x-2 cursor-pointer hover:text-gray-600 text-gray-400 "
              onClick={() => setVisible(false)}
            >
              <p className="">Close </p>
              <p className=" mt-1">
                <i className="pi pi-times mr-4" />
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-x-4 pt-8">
          <div>
            <img src="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/120x180/img6.jpg" />
          </div>
          <div className=""></div>
        </div>
      </Sidebar>
    </div>
  );
};

export default Cart;
