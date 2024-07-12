import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function TaskCard() {
  const [completed, setCompleted] = React.useState(false);
  const [dueDate] = React.useState(new Date('2024-08-31'));

  const handleDetailsClick = () => {
    console.log('Detalhes clicados');
  };

  const handleCompleteClick = () => {
    console.log('Tarefa marcada como concluída');
    setCompleted(true);
  };

  const isTaskOverdue = () => {
    return !completed && dueDate < new Date();
  };

  return (
    <Card style={{ width: '100%', maxWidth: 800, margin: '2rem auto', background: 'linear-gradient(135deg, #3f51b5 0%, #9c27b0 100%)', color: 'white',marginLeft:'2rem' }}>
      <CardContent style={{ display: 'flex',}}>
        <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
          Tarefa
        </Typography>
        <IconButton aria-label="comment" onClick={handleDetailsClick}>
          <CommentIcon />
        </IconButton>
        <Button
          variant="outlined"
          onClick={handleCompleteClick}
          sx={{
            background: isTaskOverdue()
              ? 'red'
              : completed
              ? 'linear-gradient(135deg, #4caf50 0%, #2196f3 100%)'
              : 'linear-gradient(135deg, #3f51b5 0%, #9c27b0 100%)',
            color: 'white',
            marginLeft: 'auto'
          }}
        >
          {completed ? 'Finalizada' : isTaskOverdue() ? 'Expirada' : 'Finalizar'}
        </Button>
      </CardContent>
    </Card>
  );
}
