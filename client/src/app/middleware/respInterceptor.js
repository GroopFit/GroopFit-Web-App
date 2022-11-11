import axios from "axios";

// Response Interceptor
const respInterceptor = axios.interceptors.response.use(
    // 2xx Response - return response
    response => response,
    handleRespErr
);

function handleRespErr(err) {
    if (err.response.status === 403) {
        console.log("error " + err);
    }
    return Promise.reject(err);
}

export default respInterceptor;