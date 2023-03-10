const reducer = (state, action) => {
    switch (action.type) {
      case "SET_LOADING":
        return {
          ...state,
          isLoading: true,
        };
      case "GET_FEEDS":
        return {
          ...state,
          isLoading: false,
          hits: action.payload.hits,
        };
     
      // you can add the default case too
    }
  
    return state;
  };
  
  export default reducer;