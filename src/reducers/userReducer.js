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
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
      };
    case 'LOGIN_SUCCESS':
    case 'REGISTER_USER_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
      };
    case 'LOGIN_FAILURE':
    case 'REGISTER_USER_FAIL':
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
      };
    case 'LOGOUT':
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
