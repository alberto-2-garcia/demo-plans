import React, { Dispatch, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux';
import { PlansAction } from '../../stores/actions/PlansActions';
import { StoreAction, StoreStateType } from '../../stores/rootReducers';
import { Plan } from '../../types/Plan';

function createPlan() {
  const course = {
    name: 'Compis',
    id: 'TC2020',
    units: 8
  }

  const semester = {
    courses: [{...course}, {...course}, {...course}],
    number: 1
  };

  const semesters = [{...semester}, {...semester}, {...semester}, {...semester}, {...semester}, {...semester}]

  const plans: Plan[] = [
    {
      title: 'Ingeniero',
      id: 'itc_11',
      semesters: [...semesters]
    },
    {
      title: 'Artista',
      id: 'lad_11',
      semesters: [...semesters]
    },
    {
      title: 'Musico',
      id: 'imi_11',
      semesters: [...semesters]
    },
  ];

  return plans;
}

export default function Fetcher() {
  const dispatch = useDispatch<Dispatch<StoreAction>>();
  const { overridePlans } = new PlansAction();

  useEffect(() => {
    dispatch(overridePlans(createPlan()));
  }, []);

  return (
    <></>
  )
}
