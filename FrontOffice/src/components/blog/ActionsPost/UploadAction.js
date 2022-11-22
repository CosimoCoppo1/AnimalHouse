import axios from "axios";

export const uploadImage = async (data) => {
  try {
    console.log(data)
    console.log("Image upload Action start")
    await axios.post("http://localhost:8000/upload/", data)
  } catch (error) {
    console.log(error);
  }
};

export const uploadPost = async (data) => {
  try {
    console.log(data)
    await axios.post("http://localhost:8000/posts", data)
  } catch (error) {
    console.log(error);
  }
};
