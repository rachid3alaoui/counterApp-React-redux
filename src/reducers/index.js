// const initialState = {
//   count: 0,
// };

export const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return (state = state + 1);
    case 'DECREMENT':
      return (state = state - 1);
    default:
      return state;
  }
};
