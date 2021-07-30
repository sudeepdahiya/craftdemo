export const SET_CURRENT_STOCK = 'SET_CURRENT_STOCK';
export const ADD_SERACH_LIST = 'ADD_SERACH_LIST';
export const SET_REFRESH_TIME = 'SET_REFRESH_TIME';

export const initReducer = {
  currentStock: '',
  stockList: [],
  refreshTime: null,
};

function reducer(state, action) {
  switch (action.type) {
    case SET_CURRENT_STOCK:
      return {
        ...state,
        currentStock: action.payload,
      };
    case ADD_SERACH_LIST:
      const stockCode = action.payload;
      if (state.stockList.indexOf(stockCode) === -1) {
        return {
          ...state,
          stockList: [...state.stockList, stockCode],
        };
      }
      return state;
    case SET_REFRESH_TIME:
      return {
        ...state,
        refreshTime: action.payload,
      };
    default:
      throw new Error();
  }
}

export default reducer;
