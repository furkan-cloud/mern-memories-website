import * as api from "../api";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    console.log(data);
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log("d", error.message);
  }
};

// const getPosts = () => {
//   const action = { type: "FETCH_ALL", payload: [] };

//   return action;
// };

// action creators are functions that return action
