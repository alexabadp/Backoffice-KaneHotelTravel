import axios from "axios";

export const GET_HOTELS_BACKOFFICE = "GET_HOTELS_BACKOFFICE";

export const GET_HOTEL_DETAIL = "GET_HOTEL_DETAIL";
export const GET_CITIES = "GET_CITIES";
export const GET_HOTELS = "GET_HOTELS";

export const getHotelsBackOffice = () => {
  return async function (dispatch) {
    const dbData = await axios.get(`/backOffice/hotels`);
    const hotelsBackOffice = dbData.data;
    dispatch({
      type: GET_HOTELS_BACKOFFICE,
      payload: hotelsBackOffice,
    });
  };
};

export const getDetailHotel = (hotel) => {
  return async function (dispatch) {
    const dbData = await axios.get(`/backOffice/${hotel}`);
    const detailHotel = dbData.data;
    dispatch({
      type: GET_HOTEL_DETAIL,
      payload: detailHotel,
    });
  };
};


export const getCities = () => {
  return async function (dispatch) {
    const dbData = await axios.get(`/city`);
    const cities = dbData.data;
    dispatch({
      type: GET_CITIES,
      payload: cities,
    });
  };
};

//Metodo creado para evitar tocar estados creados anteriormente
export const getHotels = () => {
  return async function (dispatch) {
    const dbData = await axios.get(`/backOffice/hotels`);
    const hotelsBackOffice = dbData.data;
    dispatch({
      type: GET_HOTELS,
      payload: hotelsBackOffice,
    });
  };
};