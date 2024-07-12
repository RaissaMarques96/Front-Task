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
    // Lógica para adicionar a task
    console.log('Adicionar Task');
  };

  return (
    <Box sx={{ '& > :not(style)': { m: 1 }, marginLeft: '75rem', position: 'fixed' }}>
      {showAddTaskButton && (
        <Fab
          color="secondary"
          aria-label="add-task"
          sx={{ position: 'absolute', bottom: '70px' }} // Ajuste a posição conforme necessário
          onClick={handleAddTask}
        >
          <Button variant="contained">Adicionar Task</Button>
        </Fab>
      )}
      <Fab color="primary" aria-label="add" onClick={handleClick}>
        <AddIcon />
      </Fab>
    </Box>
  );
}
