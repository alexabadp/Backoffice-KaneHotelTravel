import axios from "axios";

export const GET_HOTELS_BACKOFFICE = "GET_HOTELS_BACKOFFICE";

export const GET_HOTEL_DETAIL = "GET_HOTEL_DETAIL";
export const GET_HOTELS = "GET_HOTELS";
export const GET_RESERVATIONS = "GET_RESERVATIONS";

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

export const getReservations = (hotelId) => {
  return async function (dispatch) {
    const dbData = await axios.get(`/backOffice/reservations?hotel=${hotelId}`);
    const hotelsBackOffice = dbData.data;
    dispatch({
      type: GET_RESERVATIONS,
      payload: hotelsBackOffice,
    });
  };
};