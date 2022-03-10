import React, { useEffect, useState } from 'react';
import './styles.scss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { parsePlanID } from '../../stores/actions/PlansActions';
import { Plan as PlanType } from '../../types/Plan';
import { StoreStateType } from '../../stores/rootReducers';
import Semester from './Semester';

export default function Plan() {
  const params = useParams();
  const { plan: planID } = params;
  const { plans } = useSelector<StoreStateType, StoreStateType>((state) => state);

  const [currPlan, setCurrPlan] = useState<PlanType>({
    title: '',
    id: '',
    semesters: []
  });

  useEffect(() => {
    const planInfo = plans.find(plan => plan.id == planID);
    setCurrPlan(planInfo ? planInfo : currPlan);
  }, [plans])

  const { title, id, semesters } = currPlan;

  return (
    <div>
      <h1>Plan</h1>
      <h2>{title} - {parsePlanID(id)}</h2>
      <div className='courses-table'>
        {semesters.map(sem => (
          <Semester key={sem.number} semester={sem} />
        ))}
      </div>
    </div>
  )
}
