import React, { useState } from "react";
import { Box, Button, Icon, TextField, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const HomePage = () => {
  const [tasks, setTasks] = useState([
    "Tarefa 1",
    "Tarefa 2",
    "Tarefa 3",
    "Tarefa 4",
  ]);

  const [task, setTask] = useState("");

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (taskToDelete) => () =>
    setTasks(tasks.filter((savedTask) => savedTask != taskToDelete));

  return (
    <Box
      height="100%"
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="20px"
    >
      <Typography fontSize={30} textAlign="center">
        Minhas Tarefas
      </Typography>
      <Box
        height="800px"
        width="800px"
        border="1px solid #d1d1e0"
        borderRadius="5px"
        padding="20px"
        display="flex"
        flexDirection="column"
        gap="20px"
      >
        <Box width="100%" display="flex" flexDirection="row" gap="10px">
          <TextField
            variant="outlined"
            label="Nome da tarefa"
            width="300px"
            fullWidth
            value={task}
            onChange={(event) => setTask(event.target.value)}
          ></TextField>
          <Button variant="contained" onClick={addTask}>
            Adicionar
          </Button>
        </Box>
        <Box display="flex" gap="15px" flexDirection="column">
          {tasks.map((savedTask) => (
            <Box
              border="1px solid #d1d1e0"
              borderRadius="5px"
              padding="12px"
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Typography>{savedTask}</Typography>
              <DeleteIcon
                sx={{ color: "red", cursor: "pointer" }}
                onClick={deleteTask(savedTask)}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
