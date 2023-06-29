export const initialState = {
  loading: false,
  isFavorite: false,
  pet: null,
  pets: null,
  isAuthenticated: false,
  loadingFavorites: false,
  favorites: null
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
      return {
        ...state,
        loading: false,
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
    case 'ALL_FAVORITE_PETS_REQUEST':
      return {
        ...state,
        loadingFavorites: true,
      };
    case 'ALL_FAVORITE_PETS_SUCCESS':
      return {
        ...state,
        loadingFavorites: false,
        favorites: action.payload,
      };
    case 'ALL_FAVORITE_PETS_FAIL':
      return {
        ...state,
        loadingFavorites: false,
        error: action.payload,
      };
    case 'ADD_PET_TO_FAVORITES_ON_PETS_REQUEST':
      return {
        ...state,
      };
    case 'ADD_PET_TO_FAVORITES_ON_PETS_SUCCESS':
      return {
        ...state,
        favorites: action.payload,
      };
    case 'ADD_PET_TO_FAVORITES_ON_PETS_FAIL':
      return {
        ...state,
        error: action.payload
      };
      case 'REMOVE_PET_FROM_FAVORITES_ON_PETS_REQUEST':
        return {
          ...state,
        };
      case 'REMOVE_PET_FROM_FAVORITES_ON_PETS_SUCCESS':
        return {
          ...state,
          favorites: action.payload,
        };
      case 'REMOVE_PET_FROM_FAVORITES_ON_PETS_FAIL':
        return {
          ...state,
          error: action.payload
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

export const SearchPetFiltersReducer = (
  state = { petFiltersResponse: [] },
  action
) => {
  switch (action.type) {
    case 'GET_PET_FILTERS_REQUEST':
      return {
        ...state,
        loading: true,
        petFiltersResponse: [],
      };
    case 'GET_PET_FILTERS_SUCCESS':
      return {
        ...state,
        loading: false,
        petFiltersResponse: action.payload.pets,
      };
    case 'GET_PET_FILTERS_FAILURE':
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
