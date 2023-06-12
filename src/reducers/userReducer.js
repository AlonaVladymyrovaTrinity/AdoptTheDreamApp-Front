// Initial state
export const initialState = {
  isAuthenticated: false,
  loading: false,
};
// Reducer function
export const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
    case 'REGISTER_USER_REQUEST':
    case 'LOAD_USER_REQUEST':
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
      };
    case 'LOGIN_SUCCESS':
    case 'REGISTER_USER_SUCCESS':
    case 'LOAD_USER_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    case 'LOGIN_FAILURE':
    case 'REGISTER_USER_FAIL':
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
      };
    case 'LOAD_USER_FAIL':
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
