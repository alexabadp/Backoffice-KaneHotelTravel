import { GET_HOTELS_BACKOFFICE, GET_HOTEL_DETAIL } from "./actions";

const initialState = {
  hotelsBackOffice: [],
  detailHotel: [],
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
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
