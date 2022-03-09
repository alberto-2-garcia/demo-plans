import { combineReducers } from "redux";
import { PlanReducerAction } from './actions/PlansActions';
import { PlansReducer } from './reducers/PlansReducer';

export const rootReducer = combineReducers({
  plans: PlansReducer,
});

export type StoreStateType = ReturnType<typeof rootReducer>;

export type StoreAction = PlanReducerAction; // | UsersReducerAction;
