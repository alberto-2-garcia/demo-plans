import { Reducer } from "redux";
import { Plan } from "../../types/Plan";
import { PlanReducerAction, PlansAction } from "../actions/PlansActions";

export const PlansReducer: Reducer<Plan[], PlanReducerAction> = (state = [], action) => {
  const { plans, type } = action;
  
  switch(type) {
    case PlansAction.ADD_PLANS:
      return [ ...state, ...plans ];
    case PlansAction.OVERRIDE_PLANS:
      return [ ...JSON.parse(JSON.stringify(plans)) ];
    default:
      return state;
  }
}
