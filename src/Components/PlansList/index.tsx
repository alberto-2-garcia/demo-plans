import React from 'react';
import './styles.scss';
import Button from '../Button';
import { Link, useNavigate } from 'react-router-dom';

export default function PlansList() {
  const navigate = useNavigate();

  const plans = ['itc 11', 'lad 11', 'imi 11'];

  return (
    <div>
      <div className='btn-list'>
        {plans.map(plan => (
          <Button key={plan} className='' onClick={() => navigate(`/plan/${plan}`)}>
            {plan}
          </Button>
        ))}
      </div>
    </div>
  )
}
