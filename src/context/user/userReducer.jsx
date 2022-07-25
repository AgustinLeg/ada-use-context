export const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
      };
    case "logout":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
