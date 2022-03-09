import { Reducer } from "redux";
import { Plan, PlanReducerAction, PlansAction } from "../actions/PlansActions";

export const PlansReducer: Reducer<Plan[], PlanReducerAction> = (state = [], action) => {
  const { plans, type } = action;
  
  switch(type) {
    case PlansAction.ADD_PLANS:
      return [ ...state, ...plans ];
    case PlansAction.OVERRIDE_PLANS:
      return [ ...plans ];
    default:
      return state;
  }
}
