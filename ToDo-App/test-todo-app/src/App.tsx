import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import { idText } from 'typescript';
import './App.css';
import TodoTask from './components/TodoTask';
import { ITask } from './Interfaces';

const getLocalItems = () => {
  let list = localStorage.getItem('lists');
  if (list) {
    return JSON.parse(localStorage.getItem('lists') || "[]");
  } else {
    return []
  }
}

const App: FunctionComponent = () => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  // const [id, setId] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>(getLocalItems());
  // const [editTodo, setEdiTodo] = useState(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) : void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  }

  const addTask = (): void => {
    const newTask = { id:todoList.length, task: task, deadline: deadline };
    setTodoList([...todoList, newTask]); 
    // console.log(todoList);
    setTask("");
    setDeadline(0);
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.task !== taskNameToDelete;
    }))
  }

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(todoList));
  } ,[todoList])

  return (
    <Container sx={{textAlign:"center"}}>
      <Typography component="div">
      <Box sx={{ fontWeight: 500, mt: 3 }}>TO DO APPLICATION</Box>
      </Typography>
      <div className="header">
        <TextField
          onChange={handleChange}
          sx={{mt:3, width:"40%"}}
          type="text"
          name="task"
          label="Enter Items" variant="outlined" />
        <br />
        
        <TextField
          onChange={handleChange}
          sx={{my:2, width:"40%"}}
          type="number"
          name="deadline"
          label="Enter Price" variant="outlined" />
        <br />
        
        <Button
          onClick={addTask} variant="contained">
          Add the item
        </Button>
      </div>

      <Box >
        {
          todoList.map((task: ITask, key: number) => (<TodoTask
            key={key}
            task={task}
            completeTask={completeTask}
          ></TodoTask>))
        }
      </Box>
    </Container>
  );
}

export default App;
