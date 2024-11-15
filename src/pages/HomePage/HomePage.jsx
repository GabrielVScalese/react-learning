import React, { useCallback, useState } from "react";
import { Box, Button, TextField, Typography, Zoom } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = useCallback(() => {
    if (tasks.find((value) => value == task)) {
      alert("Tarefa já existente!");
      return;
    }

    if (task !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  }, [task]);

  const deleteTask = useCallback(
    (taskToDelete) => () =>
      setTasks(tasks.filter((savedTask) => savedTask != taskToDelete)),
    [tasks]
  );

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
      <Zoom in={true}>
        <Typography fontSize={30} textAlign="center">
          Minhas Tarefas
        </Typography>
      </Zoom>
      <Zoom in={true}>
        <Box
          height="70%"
          width="30%"
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
          <Box display="flex" gap="15px" flexDirection="column" overflow="auto">
            {tasks.map((savedTask) => (
              <Zoom in={true}>
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
              </Zoom>
            ))}
          </Box>
        </Box>
      </Zoom>
    </Box>
  );
};

export default HomePage;
