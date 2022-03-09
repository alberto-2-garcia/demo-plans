export function parsePlanID(id: string) {
  let ids = id.split('_');
  return `${ids[0].toLocaleUpperCase()} ${ids[1]}`;
}

export type Plan = {
  title: string;
  id: string;
}

export type PlanReducerAction = AddPlansAction;

export interface AddPlansAction {
  type: typeof PlansAction.ADD_PLANS;
  plans: Plan[];
  index?: number;
}

export class PlansAction {
  static readonly ADD_PLANS = 'ADD_PLANS';

  addPlans = (plans: Plan[]): AddPlansAction => {
    return {
      type: PlansAction.ADD_PLANS,
      plans,
    }
  }
}

