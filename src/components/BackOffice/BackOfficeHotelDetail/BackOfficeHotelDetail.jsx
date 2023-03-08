import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetailHotel } from "../../../redux/actions";
import BackOfficeNavBarDetails from "../BackOfficeNavBarDetails/BackOfficeNavBarDetails";
import style from "./BackOfficeHotelDetail.module.css";

const BackOfficeHotelDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const detailHotel = useSelector((state) => state.detailHotel);

  useEffect(() => {
    dispatch(getDetailHotel(params.hotel));
  }, []);

  return (
    <div className={style.containerDetailHotel}>
      <div className={style.containerDivDetail}>
        <h4 className={style.title}>{detailHotel.name}</h4>

        <div className={style.containerDivImg}>
          <img src={detailHotel.image} alt="" />
        </div>

        <h4>{"Category: " + detailHotel.category}</h4>
        <h4>{"Rating: " + detailHotel.rating + " " + " Stars"}</h4>

        <div className={style.containerServicesDescription}>
          <p>{detailHotel.services}</p>
          <p>{detailHotel.description}</p>
        </div>
      </div>

      <div>
        <Link
          to="/detail/booking"
          state={{
            name: detailHotel.name,
            image: detailHotel.image,
            rooms: detailHotel.rooms,
          }}
        ></Link>
      </div>
    </div>
  );
};

export default BackOfficeHotelDetail;
