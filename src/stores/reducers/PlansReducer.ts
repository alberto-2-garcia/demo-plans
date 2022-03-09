import { Reducer } from "redux";
import { Plan, PlanReducerAction, PlansAction } from "../actions/PlansActions";

export const PlansReducer: Reducer<Plan[], PlanReducerAction> = (state = [], action) => {
  const { plans, type } = action;
  console.log('PlansReducer', plans, state);
  
  switch(type) {
    case PlansAction.ADD_PLANS:
      return [ ...state, ...plans ];
    default:
      return state;
  }
}
