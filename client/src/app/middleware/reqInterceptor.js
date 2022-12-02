import axios from "axios";

// only use interceptors for login calls (non private routes) for 403 response
//not required to do recursive call 5 times, can do it once, but make sure access token is refreshed and re-call the function

/**
 * Intercepts requests made by axios and responds accordingly.  
 * @param {Function} successFunction function that takes in success object and makes any changes to request if necessary
 * @param {Function} errorFunction function that takes in error object
*/
const reqInterceptor = axios.interceptors.request.use(
    // 2xx Response
    successfulReq => successfulReq,
    (err) => {
        return Promise.reject(err);
    }
);

export default reqInterceptor;