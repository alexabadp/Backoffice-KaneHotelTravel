import { useForm, useController } from "react-hook-form";
import Select from "react-select";
import { zodResolver } from "@hookform/resolvers/zod";
import { string, z } from "zod";
// import NavBarOffice from "../NavBarOffice/NavBarOffice";
import style from "./BackOfficeHotelModal.module.css";
import axios from "axios";

const schema = z.object({
  name: string().min(1, { message: "Name is required" }),
  image: string().min(1),
  services: string().min(1),
  description: string().min(1),
  category: string(),
  city: string(),
});

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
    resolver: zodResolver(schema),
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
    axios.post("/hotel", data);
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
        <form
          className={style.backOfficeHotelForm}
          onSubmit={handleSubmit(handleSave)}
        >
          <div className={style.backOfficeHotelFormElement}>
            <label>Nombre</label>
            <input {...register("name", { required: true })} />
            {errors.name && <p>{errors.name?.message}</p>}
          </div>
          <div className={style.backOfficeHotelFormElement}>
            <label>Image</label>
            <input {...register("image", { required: true })} />
            {errors.image && <p>{errors.image?.message}</p>}
          </div>
          <div className={style.backOfficeHotelFormElement}>
            <label>Services</label>
            <input {...register("services")} />
            {errors.services && <p>{errors.services?.message}</p>}
          </div>
          <div className={style.backOfficeHotelFormElement}>
            <label>Description</label>
            <input {...register("description")} />
            {errors.description && <p>{errors.description?.message}</p>}
          </div>
          <div className={style.backOfficeHotelFormElement}>
            <label>category</label>
            <Select
              value={categoryOptions.find(
                ({ value }) => value === category.value
              )}
              onChange={handleSelectCategory}
              options={categoryOptions}
            />
            {errors.category && <p>{errors.category?.message}</p>}
          </div>
          <div className={style.backOfficeHotelFormElement}>
            <label>city</label>
            <Select
              value={cityOptions.find(({ value }) => value === city.value)}
              onChange={handleSelectCity}
              options={cityOptions}
            />
            {errors.city && <p>{errors.city?.message}</p>}
          </div>
          <div className={style.backOfficeHotelFormButton}>
            <button
              className={style.backOfficeHotelFormButtonSave}
              type="submit"
            >
              Save
            </button>

            <button
              className={style.backOfficeHotelFormButtonCancel}
              type="button"
              onClick={() => {
                closeModal(false);
              }}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BackOfficeHotelModal;
