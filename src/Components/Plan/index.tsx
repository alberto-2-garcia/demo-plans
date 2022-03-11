import React, { useEffect, useState } from 'react';
import './styles.scss';
import { createStore } from 'redux'
import { Provider, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { parsePlanID } from '../../stores/actions/PlansActions';
import { Plan as PlanType } from '../../types/Plan';
import { StoreStateType } from '../../stores/rootReducers';
import Semester from './Semester';
import { ColorsReducer } from '../../stores/reducers/ColorsReducer';
import { Color } from '../../types/Color';
import ColorComponent from './Color';
import Button from '../Button';
import { ColorsAction } from '../../stores/actions/ColorActions';
import ColorForm from './ColorForm';

const color: Color = {
  name: 'Color',
  color: '#D0ACDA',
  units: 0
}

const store = createStore(ColorsReducer, [{...color}]);

export default function Plan() {
  const params = useParams();
  const { plan: planID } = params;
  const { plans } = useSelector<StoreStateType, StoreStateType>((state) => state);
  const { addColors, modifyColor, deleteColor } = new ColorsAction();

  const [currPlan, setCurrPlan] = useState<PlanType>({
    title: '',
    id: '',
    semesters: []
  });

  const handleAddColor = (color: Color) => {
    store.dispatch(addColors([color]));
    console.log(store.getState());
  }

  const handleModifyColor = (color: Color, modifiedColor: Color) => {
    store.dispatch(modifyColor(color, modifiedColor));
  }

  const handleDeleteColor = (color: Color) => {
    store.dispatch(deleteColor(color));
  }

  useEffect(() => {
    console.log(store.getState())
  }, [store])

  useEffect(() => {
    const planInfo = plans.find(plan => plan.id == planID);
    setCurrPlan(planInfo ? planInfo : currPlan);
  }, [plans])

  const { title, id, semesters } = currPlan;

  return (
    <Provider store={store}>
      <div>
        <h1>Plan</h1>
        <h2>{title} - {parsePlanID(id)}</h2>
        <div className='section'>
          <ColorForm
            addColor={handleAddColor}
            modifyColor={handleModifyColor}
            deleteColor={handleDeleteColor}
          />
        </div>
        <div className='section'>
          <Button className={''} onClick={() => console.log()}>Edit Colors</Button>
        </div>
        <div className='section colors'>
          {store.getState().map(color => (
            <ColorComponent key={color.name} color={color} />
          ))}
        </div>
        <div className='section courses-table'>
          {semesters.map(sem => (
            <Semester key={sem.number} semester={sem} />
          ))}
        </div>
      </div>
    </Provider>
  )
}
