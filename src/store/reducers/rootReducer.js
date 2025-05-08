import { combineReducers } from 'redux';
import appReducer from './appReducer';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistCommonConfig = {
    storage,
    stateReconciler: autoMergeLevel2,
};

const userPersistConfig = {
    ...persistCommonConfig,
    key: 'Lunatic',
    whitelist: [],
};

const rootReducer = combineReducers({
    user: persistReducer(userPersistConfig, appReducer),
});

export default rootReducer;