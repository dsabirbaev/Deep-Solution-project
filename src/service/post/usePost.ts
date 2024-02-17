


import api from "../axios";


export const usePost = {
    getData: (data: string) => api.post("/tts", data, {
        headers: {
            "Content-Type": "application/json",
            Authorization: "8cca0d58-b0db-4183-a46e-6aaebfddb484:7ee8afed-a9ba-4005-9922-d5419a05f2b4",
        }
    }),
   
    
}

export default usePost;