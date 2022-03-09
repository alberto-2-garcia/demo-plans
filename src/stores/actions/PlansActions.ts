export function parsePlanID(id: string) {
  let ids = id.split('_');
  return `${ids[0].toLocaleUpperCase()} ${ids[1]}`;
}

export type Plan = {
  title: string;
  id: string;
}

export type PlanReducerAction = AddPlansAction | OverridePlansAction;

export interface AddPlansAction {
  type: typeof PlansAction.ADD_PLANS;
  plans: Plan[];
}

export interface OverridePlansAction {
  type: typeof PlansAction.OVERRIDE_PLANS;
  plans: Plan[];
}

export class PlansAction {
  static readonly ADD_PLANS = 'ADD_PLANS';
  static readonly OVERRIDE_PLANS = 'OVERRIDE_PLANS';

  addPlans = (plans: Plan[]): AddPlansAction => {
    return {
      type: PlansAction.ADD_PLANS,
      plans,
    }
  }

  overridePlans = (plans: Plan[]): OverridePlansAction => {
    return {
      type: PlansAction.OVERRIDE_PLANS,
      plans,
    }
  }
}

