import { Link } from "react-router-dom";
import style from "./BackOfficeNavBar.module.css";
import logo from "../../../images/logo.jpg";

const BackOfficeNavBar = () => {
  return (
    <div className={style.backOfficeNavBarContenedor}>
      <nav>
        <Link to='/backOffice/reservations' className={style.logo}>
          <img src={logo} alt="Logo" />
        </Link>
        <div className={style.backOfficeNavBarEnlace}>
          <Link to="/backOffice/user">
            <span className="fas fa-user"></span> User
          </Link>

          <Link to="/backOffice/hotels">
            <span className="fas fa-hotel"></span> Hotels
          </Link>

          <Link to={"/backOffice/activities"}>
            <span className="fas fa-person-walking-luggage"></span> Activities
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

export default BackOfficeNavBar;
