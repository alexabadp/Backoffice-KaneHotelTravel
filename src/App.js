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

axios.defaults.baseURL = "http://localhost:3001";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/backOffice" component={BackOffice} />
        <Route path="/backOffice/user" exact component={userBackoffice} />
        <Route path="/backOffice/hotels" exact component={HotelsBackoffice} />
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
  );
}

export default App;
