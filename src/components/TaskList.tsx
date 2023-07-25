import React, { useEffect, useState } from 'react';
import { TaskProps } from './types';
import { Button } from '@mui/material';
type TaskListProps = {
  tasks: TaskProps[];
  handleDeleteTask: (id: number) => void;
  handleChangeTask: (task: TaskProps) => void;
};

type ItemProps={
    task:TaskProps;
    isEdit:Boolean;
}

const TaskItem = ({
  tasks,
  handleDeleteTask,
  handleChangeTask,
}: TaskListProps) => {
    const [items,setItems] = useState<ItemProps[]>([]);
    
    const onChangeEdit =(id:number)=>{
        const newItems:ItemProps[] = items.map((item)=>{
        if(item.task.id === id){
            item.isEdit = true;
            return item
        }else{
             return item
        }
        })
        setItems(newItems);
    }
    useEffect(()=>{
        const newItems:ItemProps[]=[];
        for(let i=0;i<tasks.length;i++){
             newItems.push(  {
                task:tasks[i],
                isEdit:false
            })
        }
        setItems(newItems);
    },[tasks])
  return (
    <div>
      {items.map((item, index) => {
        return (
          <div
            key={index}
            style={{ display: 'flex', padding: 20, border: '1px solid black' }}
          >
            { item.isEdit? (
              <div>
                <input value={item.task.text}/>
                <Button variant='outlined'>Save</Button>
              </div>
            ) : (
              <div>
                <div>{item.task.text}</div>
                <Button variant='outlined' onClick={() =>onChangeEdit(item.task.id)}>
                  Edit
                </Button>
              </div>
            )}
            <Button
              variant='outlined'
              onClick={() => handleDeleteTask(item.task.id)}
            >
              Delete
            </Button>
          </div>
        );
      })}
    </div>
  );
};
const TaskList = ({
  tasks,
  handleDeleteTask,
  handleChangeTask,
}: TaskListProps) => {
  return (
    <div>
      <TaskItem
        tasks={tasks}
        handleChangeTask={handleChangeTask}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default TaskList;
