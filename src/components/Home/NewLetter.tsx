import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
const NewsLetter = () => {
  return (
    <div className="mx-auto text-center mt-24 mb-24">
      <div className="w-1/2 mx-auto">
        <h1 className="text-3xl">Join Our Newsletter</h1>
        <p className="text-gray-400 mt-2">
          Signup to be the first to hear about exclusive deals, special offers
          and upcoming collections
        </p>
        <div className="flex gap-x-2 justify-center mt-5 w-11/12 mx-auto">
          <div className="w-full">
            <InputText
              placeholder="Enter your Email for weekly newsletter"
              className="w-full"
            />
          </div>
          <div>
            <Button title="Subscribe" label="Subscribe" className="button" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
