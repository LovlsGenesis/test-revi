import {InputType} from '../../../types';

export default function Input({ name, type, value, onChangeFunction, required}: InputType) {
  return(
     <div className='flex justify-between m-2'>
        <p className='mr-5'>{name}</p>
      <input className='rounded p-1' type={type} value={value} name={name.toLowerCase()} onChange={onChangeFunction} required={required}/>
    </div>
  )
}
