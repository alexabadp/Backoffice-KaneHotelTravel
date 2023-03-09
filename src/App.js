import "./App.css";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import BackOffice from "./View/HotelsBackoffice/HotelsBackoffice";
import userBackoffice from "./View/UserBackoffice/UserBackoffice";
import HotelsBackoffice from "./View/HotelsBackoffice/HotelsBackoffice";
import ActivitiesBackoffice from "./View/ActivitiesBackoffice/ActivitiesBackoffice";
import HotelDetailBackoffice from "./View/HotelDetailBackoffice/HotelDetailBackoffice";
import RoomsBackoffice from "./View/RoomsBackoffice/RoomsBackoffice";
import Reservations from "./View/Reservations/Reservations";
import Login from "./components/Session/Login";

// axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.baseURL =
  "https://backend-kanehoteltravel-production.up.railway.app/";

function App() {
  const [logueado, setLogueado] = useState(window.localStorage.getItem("text"));
  // const [logueado, setLogueado] = useState();

  const setLocalStorage = (value) => {
    try {
      setLogueado(value);
      window.localStorage.setItem("text", value);
      console.log("valor que recibe de Login", value);
    } catch (error) {
      console.log(error);
      setLogueado(false);
    }
  };

  // console.log(logueado);

  const renderLogin = () => {
    // return <Login session={setLogueado} />;
    return <Login session={setLocalStorage} />;
  };

  const renderApp = () => {
    return (
      <div>
        <div className="appBtnLogOut">
          <button type="text" onClick={(e) => setLocalStorage(false)}>
            Cerrar Sesion
          </button>
        </div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/backOffice" component={BackOffice} />
            <Route path="/backOffice/user" exact component={userBackoffice} />
            <Route
              path="/backOffice/hotels"
              exact
              component={HotelsBackoffice}
            />
            <Route
              path="/backOffice/reservations"
              exact
              component={Reservations}
            />
            <Route
              path="/backOffice/activities"
              exact
              component={ActivitiesBackoffice}
            />
            <Route
              path="/backOffice/:hotel/rooms"
              exact
              component={RoomsBackoffice}
            />
            <Route
              path="/backOffice/:hotel"
              exact
              component={HotelDetailBackoffice}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  };

  return <div>{logueado ? renderApp() : renderLogin()}</div>;
}

export default App;
