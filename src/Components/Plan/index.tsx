import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { parsePlanID, Plan as PlanType } from '../../stores/actions/PlansActions';
import { StoreStateType } from '../../stores/rootReducers';

export default function Plan() {
  const params = useParams();
  const { plan: planID } = params;
  const { plans } = useSelector<StoreStateType, StoreStateType>((state) => state);

  const [currPlan, setCurrPlan] = useState<PlanType>({
    title: '',
    id: ''
  });

  useEffect(() => {
    const planInfo = plans.find(plan => plan.id == planID);
    setCurrPlan(planInfo ? planInfo : currPlan);
  }, [plans])

  const { title, id } = currPlan;

  return (
    <div>
      <h1>Plan</h1>
      <h2>{title}</h2>
      <h2>{parsePlanID(id)}</h2>
    </div>
  )
}
