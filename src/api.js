import axios from "axios";

const request = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params: {
        key: "AIzaSyD7QOGCobpTNIiQCMaUto6VF6_QW4wAq4s"
    }
});

export default request;