import { combineReducers } from 'redux';

import navigation from './navigation';
import byte from './byteroutes';

export default combineReducers({
	navigation,
	byte,
});
