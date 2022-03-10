import { FC, useEffect, useState } from 'react';
import './styles.scss';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StoreStateType } from '../../stores/rootReducers';
import { parsePlanID, Plan } from '../../stores/actions/PlansActions';
import { PlansListProps } from './interface';

const PlansList: FC<PlansListProps> = ({ planFilter }) => {
  const navigate = useNavigate();
  const { plans } = useSelector<StoreStateType, StoreStateType>((state) => state);
  const [filteredMaps, setFilteredMaps] = useState<Plan[]>([]);

  useEffect(() => {
    setFilteredMaps(plans.filter(plan => parsePlanID(plan.id).toLocaleLowerCase().includes(planFilter)));
  }, [planFilter, plans]);

  return (
    <div>
      <div className='btn-list'>
        {filteredMaps.length > 0
        ? filteredMaps.map(plan => (
          <Button key={plan.id} className='' onClick={() => navigate(`/plan/${plan.id}`)}>
            {parsePlanID(plan.id)}
          </Button>
        ))
        : 'No plans found'
        }
      </div>
    </div>
  )
}


export default PlansList;