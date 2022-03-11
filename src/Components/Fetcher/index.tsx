import React, { Dispatch, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux';
import { PlansAction } from '../../stores/actions/PlansActions';
import { StoreAction, StoreStateType } from '../../stores/rootReducers';
import { Plan } from '../../types/Plan';

function createPlan() {
  const course = {
    name: 'Compis',
    id: 'TC2020',
    units: 8, 
    color: '#e7a541'
  }

  const course2 = {
    name: 'Algoritmos',
    id: 'TC2010',
    units: 8, 
    color: '#e7a541'
  }

  const course3 = {
    name: 'Videpjuegps',
    id: 'TC2021',
    units: 8, 
    color: '#e7a541'
  }

  const semester = {
    courses: [{...course}, {...course2}, {...course3}],
    color: '#e7a541'
  };

  const semesters = [
    {...semester, number: 1},
    {...semester, number: 2},
    {...semester, number: 3},
    {...semester, number: 4},
    {...semester, number: 5},
    {...semester, number: 6}
  ]

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
