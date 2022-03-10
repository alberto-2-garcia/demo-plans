import { useState, ChangeEvent } from 'react'
import PlansList from '../PlansList';

const Home = () => {
  const [planID, setPlanID] = useState('');

  const handlePlanIDOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    setPlanID(value);
  }

  return (
    <div>
      <h1>Home</h1>
      <div>
        <label>
          Plan ID
          <input value={planID} onChange={handlePlanIDOnChange} />
        </label>
      </div>
      <PlansList planFilter={planID.toLocaleLowerCase()} />
    </div>
  )
}

export default Home;
