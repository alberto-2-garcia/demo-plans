import { FC } from 'react'
import { InputTextProps } from './interface'

const InputText: FC<InputTextProps> = ({ val, onChange, id, children }) => {
  return (
    <div>
      <div>
        <label>
          <label htmlFor={id}>{children}</label>
        </label>
      </div>
      <div>
        <input type='text' id={id} value={val} onChange={onChange} />
      </div>
    </div>
  )
}

export default InputText;
