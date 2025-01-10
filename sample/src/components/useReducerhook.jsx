import React, { useReducer, useEffect } from "react";

const FETCH_INIT = "FETCH_INIT";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_ERROR = "FETCH_ERROR";

// Initial state
const initialState = {
  loading: true,
  data: null,
  error: null,
};


// Reducer function
const dataReducer = (state, action) => {
  switch (action.type) {
    case FETCH_INIT:
      return { ...state, loading: true, data: null };
    case FETCH_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  // Fetch data
  const dataHandler = async () => {
    dispatch({ type: FETCH_INIT });
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const newData = await response.json();
      dispatch({ type: FETCH_SUCCESS, payload: newData });
    } catch (error) {
      dispatch({ type: FETCH_ERROR, payload: error.message });
    }
  };

  useEffect(() => {
    dataHandler();
  }, []);

  return (
    <>
      <h1>Welcome to the useReducer Hook</h1>
      {state.loading && <p>Loading...</p>}
      {state.data && (
        <div>
          {state.data.map((item) => (
            <div>
              <h1>{item.name}</h1>
            </div>
          ))}
        </div>
      )}
      {state.error && <div>{alert(state.error)}</div>}  {/* for displaying error*/}
    </>
  );
};

export default Reducer;
