import { configureStore,  getDefaultMiddleware  } from '@reduxjs/toolkit';
import userReducer from './services/user/userSlice';
import fitnessReducer from './services/fitness/fitnessSlice';
import challangeReducer from './services/Challange/ChallangeSlice';
import notificationReducer from './services/notification/notificationSlice';

/*---------------------------------------------------------*/
/* Task: Make a Redux Store Slice to store statistics data */
/*---------------------------------------------------------*/

/*---------------------------------------------------------*/
/* Task: Make a Redux Store Slice to store settings data   */
/*---------------------------------------------------------*/

// Use ES6 object literal shorthand syntax to define the object shape
export default configureStore({
  reducer: {
    /* Contains User Data and Authentication Data */
    userData: userReducer, 

    /* Contains Clients Fitness Data */
    fitnessData: fitnessReducer, 
    challangeData: challangeReducer,
    notificiationData: notificationReducer,
  },
 middleware: getDefaultMiddleware({
    serializableCheck: false
  })
})
