import { Button } from '@mui/material'
import React,{useState} from 'react'
type AddTaskProps={
    handleAddTask:(value:string)=>void
}
export const AddTask = ({handleAddTask}:AddTaskProps) => {
    const [value, setvalue] = useState('');
    const onChangeValue =(e:React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        setvalue(e.target.value);
    }
    return (
        <div>
            <input
            placeholder='...add task'
            onChange={onChangeValue}
            />
            <Button variant='outlined' onClick={()=>handleAddTask(value)}>Add</Button>
        </div>
    )
}
