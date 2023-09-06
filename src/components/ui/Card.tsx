import { Button } from "primereact/button";
import { Card as PrimeCard } from "primereact/card";

export default function Card() {
  const header = (
    <img
      alt="Card"
      src="https://primefaces.org/cdn/primereact/images/usercard.png"
    />
  );
  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">
      <Button label="Save" icon="pi pi-check" />
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="p-button-outlined p-button-secondary"
      />
    </div>
  );

  return (
    <div className="card flex justify-content-center">
      <PrimeCard
        title="Title"
        subTitle="Subtitle"
        footer={footer}
        header={header}
        className="md:w-25rem"
      >
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </PrimeCard>
    </div>
  );
}
