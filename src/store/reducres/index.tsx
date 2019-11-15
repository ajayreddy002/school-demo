import { combineReducers } from 'redux';

import { authentication } from './auth_reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert_reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert
});

export default rootReducer;