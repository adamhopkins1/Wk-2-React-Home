import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { campsitesReducer } from '../campsites/campsitesSlice';
import { commentsReducer } from '../comments/commentsSlice';
import { partnersReducer } from '../partners/partnersSlice';
import { promotionsReducer } from '../promotions/promotionsSlice';
import { userReducer } from '../features/userSlice';

export const store = configureStore({
    reducer: {
        campsites: campsitesReducer,
        comments: commentsReducer,
        partners: partnersReducer,
        promotions: promotionsReducer,
        user:userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});