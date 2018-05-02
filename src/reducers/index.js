import { combineReducers } from 'redux';
import { fetchAllReducer } from './FetchAllReducer.reducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    fetchAllReducer: fetchAllReducer,
    form: formReducer,
});
