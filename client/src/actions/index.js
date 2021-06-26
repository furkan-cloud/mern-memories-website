import * as api from "../api";
import {
  CREATE,
  UPDATE,
  LIKE,
  DELETE,
  FETCH_ALL,
} from "../constants/actionTypes";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    console.log("data", data);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log("d", error.message);
  }
};

// const getPosts = () => {
//   const action = { type: "FETCH_ALL", payload: [] };

//   return action;
// };

// action creators are functions that return action

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log("erroraction", error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log("erroraction", error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
