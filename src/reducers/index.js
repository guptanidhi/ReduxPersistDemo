import { combineReducers } from 'redux';
import sampleReduer from './sampleReduer';

const rootReducer = combineReducers({
  sample: sampleReduer
});

export default rootReducer;
