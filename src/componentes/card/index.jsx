import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function TaskCards() {
  const [completedTasks, setCompletedTasks] = React.useState([]);
  const [dueDate, setDueDate] = React.useState({
    1: new Date('2024-08-31'), // Example due dates for tasks
    2: new Date('2024-09-15'),
    3: new Date('2024-09-30'),
  });

  const handleDetailsClick = (task) => {
    // Implement logic to handle details for the task
    console.log(`Details clicked for Task ${task}`);
  };

  const handleCompleteClick = (task) => {
    // Implement logic to mark the task as completed
    console.log(`Task ${task} marked as completed`);
    setCompletedTasks([...completedTasks, task]);
  };

  const isTaskCompleted = (task) => {
    return completedTasks.includes(task);
  };

  const isTaskOverdue = (task) => {
    return !isTaskCompleted(task) && dueDate[task] && dueDate[task] < new Date();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column',marginLeft:'2rem' , marginTop: '5rem' }}>
      {[1, 2, 3].map((value) => (
        <Card key={value} style={{ width: '100%', maxWidth: 800, marginBottom: '1rem' }}>
          <CardContent style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
              Task {value}
            </Typography>
            <IconButton aria-label="comment" onClick={() => handleDetailsClick(value)}>
              <CommentIcon />
            </IconButton>
            <Button
              variant="outlined"
              onClick={() => handleCompleteClick(value)}
              style={{
                backgroundColor: isTaskOverdue(value) ? 'red' : isTaskCompleted(value) ? 'green' : 'blue',
                color: 'white',
                marginLeft: 'auto' // Move the button to the right
              }}
            >
              {isTaskCompleted(value) ? 'Completed' : isTaskOverdue(value) ? 'Overdue' : 'Complete'}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
