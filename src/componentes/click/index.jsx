import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

export default function FloatingActionButtons() {
  const [showAddTaskButton, setShowAddTaskButton] = useState(false);

  const handleClick = () => {
    setShowAddTaskButton(!showAddTaskButton);
  };

  const handleAddTask = () => {
    console.log('Adicionar Task');
  };

  return (
    <Box sx={{ '& > :not(style)': { m: 1 }, position: 'fixed', bottom: '16px', right: '16px' }}>
      {showAddTaskButton && (
        <Fab
          color="secondary"
          aria-label="add-task"
          sx={{
            position: 'absolute',
            bottom: '70px',
            right: '0',
            background: 'linear-gradient(135deg, #3f51b5 0%, #9c27b0 100%)',
            color: 'white',
          }}
          onClick={handleAddTask}
        >
          <Button variant="contained" sx={{ background: 'linear-gradient(135deg, #3f51b5 0%, #9c27b0 100%)', color: 'white' }}>Adicionar Task</Button>
        </Fab>
      )}
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleClick}
        sx={{
          background: 'linear-gradient(135deg, #3f51b5 0%, #9c27b0 100%)',
          color: 'white',
        }}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
}
