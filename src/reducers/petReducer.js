// Initial state
export const initialState = {
  loading: false,
};

export const petsReducer = (state = { pets: [] }, action) => {
  switch (action.type) {
    case 'ALL_PET_REQUEST':
      return {
        ...state,
        loading: true,
        pets: [],
      };
    case 'ALL_PET_SUCCESS':
      return {
        ...state,
        loading: false,
        pets: action.payload.pets,
      };
    case 'ALL_PET_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
