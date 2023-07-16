import axios from "axios";

export const speedList = async () => {
  try {
    const url = await axios.get("http://localhost:8080/speed-list");
    console.log(url.data);
  } catch (error) {
    console.log(error);
  }
};
