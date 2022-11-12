import axios from "axios";

// only use interceptors for login calls (non private routes) for 403 response
//not required to do recursive call 5 times, can do it once, but make sure access token is refreshed and re-call the function

// Request Interceptor
const reqInterceptor = axios.interceptors.request.use(
    // 2xx Response
    successfulReq => successfulReq,
    // 403 Response
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

export default reqInterceptor;