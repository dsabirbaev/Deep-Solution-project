

import axios from "axios";


const api = axios.create({
    baseURL: "https://mohir.ai/api/v1",
});


export default api;