import axios from "axios";

// Response Interceptor
const respInterceptor = axios.interceptors.response.use(
    // 2xx Response - return response
    response => response,
    (err) => {
        const { config, message } = err;

        if (!config || !config.retryCt) {
            return Promise.reject(err);
        }

        config.retryCt -= 1;
        const retryReq = new Promise((resolve) => {
            setTimeout(() => {
                console.log("retrying post req", config.url);
                resolve();
            }, config.retryTimeout || 1000);
        });
        return retryReq.then(() => axios(config));
    }
);

export default respInterceptor;