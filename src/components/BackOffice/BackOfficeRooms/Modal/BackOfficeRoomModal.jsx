import { useForm, useController } from "react-hook-form";
import Select from "react-select";
import { zodResolver } from "@hookform/resolvers/zod";
import { number, string, z } from "zod";
import style from "./BackOfficeRoomModal.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailHotel } from "../../../../redux/actions";

const schema = z.object({
  name: string().min(1, { message: "Name is required" }),
  image: string().min(1, { message: "Imagen es requerida" }),
  price: string().min(1, { message: "Precio es requerido" }),
  description: string().min(1, { message: "Descripcion es requerida" }),
  hotelId: number(),
});

const BackOfficeRoomModal = ({ closeModal }) => {
  const detailHotel = useSelector((state) => state.detailHotel);

  const { register, control, handleSubmit, formState, watch } = useForm({
    defaultValues: { hotelId: detailHotel.id },
    resolver: zodResolver(schema),
  });

  const { errors } = formState;

  const handleSave = (data) => {
    console.log(data);
    axios.post("/room", data);
    closeModal(false);
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
        <h2>Nuevo Habitacion</h2>
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
            <label>Price</label>
            <input type="number" {...register("price")} />
            {errors.price && <p>{errors.price?.message}</p>}
          </div>
          <div className={style.backOfficeHotelFormElement}>
            <label>Description</label>
            <input {...register("description")} />
            {errors.description && <p>{errors.description?.message}</p>}
          </div>
          <div className={style.backOfficeHotelFormElement}>
            <label>Hotel</label>
            <input defaultValue={detailHotel.name} disabled="disabled" />
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

export default BackOfficeRoomModal;
