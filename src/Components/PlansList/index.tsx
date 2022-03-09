import React from 'react';
import './styles.scss';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StoreStateType } from '../../stores/rootReducers';
import { parsePlanID } from '../../stores/actions/PlansActions';

export default function PlansList() {
  const navigate = useNavigate();
  const { plans } = useSelector<StoreStateType, StoreStateType>((state) => state);

  return (
    <div>
      <div className='btn-list'>
        {plans.map(plan => (
          <Button key={plan.id} className='' onClick={() => navigate(`/plan/${plan.id}`)}>
            {parsePlanID(plan.id)}
          </Button>
        ))}
      </div>
    </div>
  )
}
