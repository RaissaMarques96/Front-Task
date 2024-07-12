import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SimplePaper() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para lidar com o formulário
    const data = new FormData(event.currentTarget);
    const taskName = data.get('taskName');
    const endDate = data.get('endDate');
    console.log('Task Name:', taskName);
    console.log('End Date:', endDate);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 300,  // Aumentei a largura para acomodar o formulário
          padding: 2,  // Adicionei padding para melhorar o layout
        },
      }}
    >
      <Paper elevation={3}>
        <form onSubmit={handleSubmit}>
          <TextField
            name="taskName"
            label="Nome da Tarefa"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            name="endDate"
            label="Data de Término"
            type="date"
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button type="submit" variant="contained" color="primary">
            Cadastrar
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
