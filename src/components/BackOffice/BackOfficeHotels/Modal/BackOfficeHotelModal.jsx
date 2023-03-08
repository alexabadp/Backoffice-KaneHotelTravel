import { useForm, useController } from "react-hook-form";
import Select from "react-select";
import { zodResolver } from "@hookform/resolvers/zod";
import { string, z } from "zod";
// import NavBarOffice from "../NavBarOffice/NavBarOffice";
import style from "./BackOfficeHotelModal.module.css";

// const schema = z.object({
//   name: string().min(1),
//   image: string(),
//   services: string(),
//   description: string(),
//   category: string(),
//   city: string(),
// });

const cityOptions = [
  { value: "Puerto Vallarta", label: "Puerto Vallarta" },
  { value: "Cancun", label: "Cancun" },
  { value: "Playa Tulum", label: "Playa Tulum" },
];

const categoryOptions = [
  { value: "VIP", label: "VIP" },
  { value: "Regular", label: "Regular" },
  { value: "Economic", label: "Economic" },
];

const BackOfficeHotelModal = ({ closeModal }) => {
  const { register, control, handleSubmit, formState, watch } = useForm({
    // resolver: zodResolver(schema),
  });

  const { errors } = formState;
  const { field: city } = useController({ name: "city", control });
  const { field: category } = useController({ name: "category", control });

  const handleSelectCity = (option) => {
    city.onChange(option.value);
  };

  const handleSelectCategory = (option) => {
    category.onChange(option.value);
  };

  const handleSave = (data) => {
    console.log(data);
  };

  const incluirTelefono = watch("incluirTelefono");

  return (
    <div className={style.backOfficeHotelModalBackground}>
      <div className={style.backOfficeHotelModalContainer}>
        <div className={style.backOfficeHotelModalCloseBtn}>
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </button>
        </div>
        <h2>Nuevo Hotel</h2>
        <p>Nombre: {watch("nombre")}</p>
        <form
          className={style.backOfficeHotelForm}
          onSubmit={handleSubmit(handleSave)}
        >
          <div>
            <label>Nombre</label>
            <input {...register("name", { required: true })} />
          </div>
          {errors.name?.message}
          <div>
            <label>Image</label>
            <input {...register("image", { required: true })} />
          </div>
          <div>
            <label>Services</label>
            <input {...register("services")} />
          </div>
          <div>
            <label>Description</label>
            <input {...register("description")} />
          </div>
          <div>
            <label>category</label>
            <Select
              value={categoryOptions.find(
                ({ value }) => value === category.value
              )}
              onChange={handleSelectCategory}
              options={categoryOptions}
            />
          </div>
          <div>
            <label>city</label>
            <Select
              value={cityOptions.find(({ value }) => value === city.value)}
              onChange={handleSelectCity}
              options={cityOptions}
            />
          </div>

          <div style={{ marginTop: "12px" }}>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BackOfficeHotelModal;
