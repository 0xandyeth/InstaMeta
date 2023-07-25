import React, { useState,useReducer, ReducerAction, Reducer } from 'react'
import { AddTask } from '../components/AddTask'
import TaskList from '../components/TaskList'
import {TaskProps} from '../components/types';
import { Button } from '@mui/material';
const initialValues:TaskProps[] =[
    {
        id:0,
        text:"Great",
        check:true,
    },
    {
        id:1,
        text:'Wonderful',
        check:false,
    },
    {
        id:2,
        text:'Awesome',
        check:false
    }
]
type State={
    age:number
}
type StateAction={
    type:string,
}
const reducer =(state:State,action:StateAction)=>{
  if(action.type === 'increament'){
    return {
        age:state.age +1
    }
  }else if(action.type === 'decrease'){
    return {
        age:state.age - 1
    }
  }
  throw Error('unkonwn action.')
}
const Contact = () => {
    const[tasks,setTasks] = useState<TaskProps[]>(initialValues);
    const[state,dispatch] = useReducer(reducer,{age:42});
    const handleAddTask =(value:string)=>{
        setTasks([
            ...tasks,
            {
                id:tasks.length,
                text:value,
                check:false
            }
        ])
    }

    const handleChangeTask=(task:TaskProps)=>{
     
    }
    const handleDeleteTask=(id:number)=>{
        const newTasks = tasks.filter((item)=>item.id !== id);
        setTasks(newTasks);
    }
    return (
        <div>
            <div>Task Management</div>
            <div>{`Task Coount ${state.age}`}</div>
            <Button variant='outlined' onClick={()=>dispatch({type:'increament'})}>Increase</Button>
            <Button variant='outlined' onClick={()=>dispatch({type:'decrease'})}>Decrease</Button>
            <AddTask
            handleAddTask={handleAddTask}
            />
            <TaskList
            tasks={tasks}
            handleChangeTask={handleChangeTask}
            handleDeleteTask={handleDeleteTask}
            />
        </div>
    )
}

export default Contact
