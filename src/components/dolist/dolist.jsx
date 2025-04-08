import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

export default function Dolist() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">📝 To-Do List</h2>
      
      <Row className="mb-3">
        <Col md={8}>
          <Form.Control
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </Col>
        <Col md={4}>
          <Button variant="primary" onClick={addTask} className="w-100">
            Add Task
          </Button>
        </Col>
      </Row>

      <Row>
        {tasks.map((task, index) => (
          <Col key={index} xs={12} className="mb-2">
            <div className="d-flex justify-content-between align-items-center p-2 border rounded bg-light">
              <span>{task}</span>
              <Button variant="danger" size="sm" onClick={() => deleteTask(index)}>
                Delete
              </Button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}


