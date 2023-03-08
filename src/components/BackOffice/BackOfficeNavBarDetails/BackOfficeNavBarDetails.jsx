import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import style from "./BackOfficeNavBarDetails.module.css";
import logo from "../../../images/logo.jpg";

const BackOfficeNavBarDetails = () => {
  const detailHotel = useSelector((state) => state.detailHotel);

  return (
    <div className={style.backOfficeNavBarContenedor}>
      <nav>
        <img src={logo} alt="Logo" />
        <div className={style.backOfficeNavBarEnlace}>
          <Link to={`/backOffice/${detailHotel.name}`}>
            <span className="fas fa-hotel"></span> Hotel
          </Link>

          <Link to={`/backOffice/${detailHotel.name}/rooms`}>
            <span className="fas fa-bed"></span> Rooms
          </Link>
        </div>

        <div className={style.backOfficeNavBarSoporte}>
          <Link to="/backOffice">
            <span className="fas fa-door-open"></span>Regresar
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default BackOfficeNavBarDetails;
