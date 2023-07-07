// Initial state
export const initialState = {
  isAuthenticated: false,
  loading: false,
  msg: '',
};
// Reducer functions
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
    case 'LOGOUT_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const profileReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_PROFILE_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'UPDATE_PROFILE_SUCCESS':
      return {
        ...state,
        loading: false,
        isUpdated: true,
      };

    case 'UPDATE_PROFILE_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const updatePasswordReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_PASSWORD_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'UPDATE_PASSWORD_SUCCESS':
      return {
        ...state,
        loading: false,
        msg: action.payload,
      };

    case 'UPDATE_PASSWORD_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const forgotPasswordReducer = (state, action) => {
  switch (action.type) {
    case 'FORGOT_PASSWORD_REQUEST':
    case 'RESET_PASSWORD_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FORGOT_PASSWORD_SUCCESS':
      return {
        ...state,
        loading: false,
        response: action.payload,
      };

    case 'RESET_PASSWORD_SUCCESS':
      return {
        ...state,
        loading: false,
        response: action.payload,
      };

    case 'FORGOT_PASSWORD_FAIL':
    case 'RESET_PASSWORD_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
