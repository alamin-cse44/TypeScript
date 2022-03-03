import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import { ITask } from '../Interfaces';

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({task, completeTask}: Props) => {
    return (
        <Box >
            <Paper sx={{ p:1, mt:2, textAlign:'center', justifyContent:'center'}} elevation={3}>
                <h2>
                    <span>{task.task}</span>
                    <span style={{ marginLeft: '25px', marginRight:'25px' }}>${task.deadline}</span>
                    <span><button style={{backgroundColor: 'red', border:"none", height:'30px', color:"white", borderRadius:'5px'}}
                    onClick={() => completeTask(task.task)}>Delete</button></span>
                </h2>
                   
      </Paper>
    </Box>
        
    );
};

export default TodoTask;