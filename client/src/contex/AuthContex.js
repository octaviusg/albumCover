import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  user: null,
  isFetching: false,
  error: false,
};

export const AuthContex = createContext(INITIAL_STATE);

export const AuthContexProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthContex, INITIAL_STATE);

  return (
    <AuthContex.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContex.Provider>
  );
};
