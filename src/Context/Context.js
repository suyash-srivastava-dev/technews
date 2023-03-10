import axios from 'axios';
import React, { useContext,useReducer,useEffect} from 'react'
import reducer from './Reducer';

let API="https://techcrunch.com/wp-json/wp/v2/posts?"

const initialState = {
    isLoading: true,
    page: 20,
    hits: []
}
const AppContext = React.createContext();

// to create a provider fucntion
const AppProvider = ({ children }) => {
    // const [state, setstate] = useState(initialState);
  
    const [state, dispatch] = useReducer(reducer, initialState);
  
    const fecthApiData = async (url) => {
      dispatch({ type: "SET_LOADING" });

      axios.get(url)
      .then((response) => {
          // Code for handling the response
          const data=response.data
            dispatch({
            type: "GET_FEEDS",
            payload: {
                hits: data,
            }
        })
        console.log(state);

      })
      .catch((error) => {
          // Code for handling the error
          console.log(error);
      })
    };
  
    // const fecthApiData = async (url) => {
    //     dispatch({ type: "SET_LOADING" });
    
    //     try {
    //       const res = await fetch(url);
    //       const data = await res.json();
    //       console.log(data);
    //       dispatch({
    //         type: "GET_FEEDS",
    //         payload: {
    //           hits: data
    //         },
    //       });
    //       // isLoading = false;
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
  
    // to call the api func
    useEffect(() => {
      fecthApiData(`${API}per_page=${state.page}`);
    }, []);
  
    return (
      <AppContext.Provider
        value={{ ...state}}>
        {children}
      </AppContext.Provider>
    );
  };

// custom hook create
const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };