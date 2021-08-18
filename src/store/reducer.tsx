import { combineReducers } from "redux";

import appReducer from "./appReducer";
import bankAccountReducer from "./bankAccountReducer";
import doneWorkReducer from "./doneWorkReducer";
import financialReducer from "./financialReducer";
import personalDataReducer from "./personalDataReducer";
import personalDocReducer from "./personalDocReducer";
import todoWorkReducer from "./todoWorkReducer";
import transactionReducer from "./transactionReducer";
import { reducer as reduxFormReducer } from "redux-form";
import workingConditionsReducer from "./workingConditionsReducer";

export default combineReducers({
	form: reduxFormReducer,
	appReducer : appReducer,
	bankAccountReducer,
	doneWorkReducer,
	financialReducer,
	personalDataReducer,
	personalDocReducer,
	todoWorkReducer,
	transactionReducer,
    workingConditionsReducer
});
