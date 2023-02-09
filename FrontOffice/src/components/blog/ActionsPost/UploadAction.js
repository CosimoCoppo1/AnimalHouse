import axios from "axios";
import apiUrl from '../../../config'


export const uploadImage = async (data) => {
  try {
    await axios.post(`http://${apiUrl}/upload`, data)
  } catch (error) {
    console.log(error);
  }
};

export const uploadPost = async (data) => {
  try {
    await axios.post(`http://${apiUrl}/posts`, data)
  } catch (error) {
    console.log(error);
  }
};
