import { combineReducers } from 'redux';

import catalogs from './catalogsReducer';
import currentCase from './currentCaseReducer';
import labModule from './labReducer';
import chat from './chatReducer';
import profile from './profileReducer';
import analyserBlock from './analyserReducer';

const rootReducer = combineReducers({
  catalogs,
  currentCase,
  profile,
  labModule,
  chat,
  analyserBlock,
});

export default rootReducer;
