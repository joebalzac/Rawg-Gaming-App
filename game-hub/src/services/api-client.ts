import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2500a800b8744f578024a3df02fffc78",
  },
});
