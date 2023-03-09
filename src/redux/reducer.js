import {
  GET_HOTELS_BACKOFFICE,
  GET_HOTEL_DETAIL,
  GET_HOTELS,
  GET_RESERVATIONS,
} from "./actions";

const initialState = {
  hotelsBackOffice: [],
  detailHotel: [],
  allHotels: [],
  reservations: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOTELS_BACKOFFICE:
      return {
        ...state,
        hotelsBackOffice: action.payload,
      };

    case GET_HOTEL_DETAIL:
      return {
        ...state,
        detailHotel: action.payload,
      };

    case GET_HOTELS:
      return {
        ...state,
        allHotels: action.payload,
      };

    case GET_RESERVATIONS:
      return {
        ...state,
        reservations: action.payload,
      };

    default:
      return {
        ...state,
        reservations: action.payload,
      };
  }
};

export default rootReducer;
