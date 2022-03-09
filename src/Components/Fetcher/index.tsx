import React, { Dispatch, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux';
import { Plan, PlansAction } from '../../stores/actions/PlansActions';
import { StoreAction, StoreStateType } from '../../stores/rootReducers';

export default function Fetcher() {
  const dispatch = useDispatch<Dispatch<StoreAction>>();
  const { addPlans } = new PlansAction();
  const store = useStore<StoreStateType, StoreAction>();

  console.log('store', store);
  console.log('store', store.getState());

  useEffect(() => {
    console.log('fetcher')
    const plans: Plan[] = [
      {
        title: 'Ingeniero',
        id: 'itc_11'
      },
      {
        title: 'Artista',
        id: 'lad_11'
      },
      {
        title: 'Musico',
        id: 'imi_11'
      },
    ];

    console.log('plans', plans)

    store.dispatch(addPlans(plans));
  }, []);

  return (
    <></>
  )
}
