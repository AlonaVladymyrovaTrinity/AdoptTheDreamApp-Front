export const initialStateFavoritePets = {
  loading: false
}

export const favoritePetsReducer = (state = { favorites: []}, action) => {
  switch (action.type) {
    case 'GET_FAVORITE_PETS_REQUEST':
      return {
        ...state,
        loading: true,
        favorites: null
      };
    case 'GET_FAVORITE_PETS_SUCCESS':
      return {
        ...state,
        loading: false,
        favorites: action.payload,
      };
    case 'GET_FAVORITE_PETS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'REMOVE_PET_FROM_FAVORITES_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'REMOVE_PET_FROM_FAVORITES_SUCCESS':
      const favoriteIds = action.payload
      const favorites = state.favorites.filter(it => favoriteIds.includes(it._id))
      return {
        ...state,
        loading: false,
        favorites: favorites
      };
    case 'REMOVE_PET_FROM_FAVORITES_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case 'RESET_ERROR_MESSAGE_REQUEST':
      return {
        ...state,
        error: null
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
