export const initialState = {
  loading: true,
  pet: null
};

export const petReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_PET_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'LOAD_PET_SUCCESS':
      return {
        ...state,
        loading: false,
        pet: action.payload,
      };
    case 'LOAD_PET_FAILURE':
      return {
        ...state,
        loading: false,
        pet: null,
        error: action.payload,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};