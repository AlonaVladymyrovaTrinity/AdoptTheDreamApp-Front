export const initialState = {
  loading: false,
  isFavorite: false,
  pet: null
};

// // Action types
// const ADD_PET = 'ADD_PET';
// const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';

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
    case 'FAVORITE_PET_ON_PET_DETAILS_REQUEST':
      return {
        ...state,
        loading: true
      };
    case 'FAVORITE_PET_ON_PET_DETAILS_SUCCESS':
      return {
        ...state,
        loading: false,
        isFavorite: true,
      };
    case 'FAVORITE_PET_ON_PET_DETAILS_FAILURE':
    case 'GET_FAVORITE_PETS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'GET_FAVORITE_PETS_SUCCESS':
      return {
        ...state,
        loading: false,
        favoritePets: action.payload,
      };
    case 'GET_FAVORITE_PETS_FAILURE':
      return {
        ...state,
        loading: false,
        pet: null,
        error: action.payload,
      };
    case 'ADD_PET_TO_FAVORITES_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'ADD_PET_TO_FAVORITES_SUCCESS':
      return {
        ...state,
        loading: false,
        favoritePets: { ...action.payload }
      };
    case 'ADD_PET_TO_FAVORITES_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case 'REMOVE_PET_FROM_FAVORITES_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'XXXREMOVE_PET_FROM_FAVORITES_SUCCESS':
      return {
        ...state,
        loading: false,
        favorites: { ...action.payload }
      };
    case 'REMOVE_PET_FROM_FAVORITES_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
      case 'UNFAVORITE_PET_ON_PET_DETAILS_REQUEST':
        return {
          ...state,
          loading: true
        };
      case 'UNFAVORITE_PET_ON_PET_DETAILS_SUCCESS':
        return {
          ...state,
          loading: false,
          isFavorite: false,
        };
      case 'UNFAVORITE_PET_ON_PET_DETAILS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload
        };
        case 'GET_PET_IS_FAVORITE_STATUS_ON_PET_DETAILS_REQUEST':
          return {
            ...state,
            loading: true
          };
        case 'GET_PET_IS_FAVORITE_STATUS_ON_PET_DETAILS_SUCCESS':
          return {
            ...state,
            loading: false,
            isFavorite: action.payload,
          };
        case 'GET_PET_IS_FAVORITE_STATUS_ON_PET_DETAILS_FAILURE':
          return {
            ...state,
            loading: false,
            error: action.payload
          };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
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

export const catBreedsReducer = (state = { catBreeds: [] }, action) => {
  switch (action.type) {
    case 'CAT_BREEDS_REQUEST':
      return {
        ...state,
        loading: true,
        catBreeds: [],
      };
    case 'CAT_BREEDS_SUCCESS':
      return {
        ...state,
        loading: false,
        catBreeds: action.payload.cats,
      };
    case 'CAT_BREEDS_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const dogBreedsReducer = (state = { dogBreeds: [] }, action) => {
  switch (action.type) {
    case 'DOG_BREEDS_REQUEST':
      return {
        ...state,
        loading: true,
        dogBreeds: [],
      };
    case 'DOG_BREEDS_SUCCESS':
      return {
        ...state,
        loading: false,
        dogBreeds: action.payload.dogs,
      };
    case 'DOG_BREEDS_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const catColorsReducer = (state = { catColors: [] }, action) => {
  switch (action.type) {
    case 'CAT_COLORS_REQUEST':
      return {
        ...state,
        loading: true,
        catColors: [],
      };
    case 'CAT_COLORS_SUCCESS':
      return {
        ...state,
        loading: false,
        catColors: action.payload.cats,
      };
    case 'CAT_COLORS_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const dogColorsReducer = (state = { dogColors: [] }, action) => {
  switch (action.type) {
    case 'DOG_COLORS_REQUEST':
      return {
        ...state,
        loading: true,
        dogColors: [],
      };
    case 'DOG_COLORS_SUCCESS':
      return {
        ...state,
        loading: false,
        dogColors: action.payload.dogs,
      };
    case 'DOG_COLORS_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export default petReducer;

