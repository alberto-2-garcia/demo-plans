import { FC, useState, ChangeEvent } from 'react'
import Button from '../../Button';
import InputText from '../../InputText';
import { ColorFormProps } from './interface';

const ColorForm: FC<ColorFormProps> = ({ addColor, modifyColor, deleteColor }) => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('#000000');

  const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const onColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('color change')
    setColor(event.target.value);
  }

  const handleAddColor = () => {
    addColor({name, color, units: 0})
    setName('');
  }

  return (
    <div>
      <input type='color' value={color} onChange={onColorChange}/>
      <InputText val={name} id='color-name' onChange={onNameChange}>Color name</InputText>
      <Button className={''} onClick={handleAddColor}>Add color</Button>
    </div>
  )
}

export default ColorForm;