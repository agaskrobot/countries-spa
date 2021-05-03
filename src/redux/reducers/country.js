import actions from '../actions/country';

const INITIAL_STATE = {
  items: []
};

export function country(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case actions.APPEND_COUNTRY: {
      return { ...state, items: [...state.items, payload.country] };
    }
    case actions.DELETE_COUNTRY: {
      const items = state.items.filter((country) => country.name !== payload.countryName);
      return { ...state, items };
    }
    default:
      return state;
  }
}
