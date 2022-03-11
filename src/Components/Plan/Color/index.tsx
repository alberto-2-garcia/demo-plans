import { FC } from 'react'
import './styles.scss';
import { ColorProps } from './interface';

const Color: FC<ColorProps> = ({ color }) => {
  const { name, color: colorColor, units } = color;

  return (
    <div className='color' style={{backgroundColor: colorColor}}>
      <p>{name}</p>
      <p>Units: {units}</p>
    </div>
  )
}

export default Color;