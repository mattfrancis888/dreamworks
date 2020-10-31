import axios from "axios";
//Used for onine JSON-store database
const movies = axios.create({
    // .. where we make our configurations
    // baseURL: "http://localhost:5000/",
    baseURL: "https://dreamworks-backend.vercel.app",
});

export default movies;
