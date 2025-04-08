import React, { useState } from "react";
import { Container, Row, Col, Card} from "react-bootstrap";

export default function Todos() {
  const [tasks, setTasks] = useState([
    { title: "Buy groceries", completed: false },
    { title: "Read a book", completed: true },
    { title: "Finish React project", completed: false },
    { title: "Go to the gym", completed: true },
    { title: "Call mom", completed: false },
    { title: "Watch a movie", completed: true },
    { title: "Clean the house", completed: false },
    { title: "Prepare dinner", completed: true },
    { title: "Study for exams", completed: false },
    { title: "Reply to emails", completed: true },
    { title: "Walk the dog", completed: false },
    { title: "Plan the weekend trip", completed: true },
    { title: "Fix the bike", completed: false },
    { title: "Write a blog post", completed: true },
    { title: "Meditate for 10 minutes", completed: false },
    { title: "Organize the desk", completed: true },
    { title: "Learn a new recipe", completed: false },
    { title: "Update LinkedIn profile", completed: true },
    { title: "Practice coding challenges", completed: false },
    { title: "Water the plants", completed: true },
  ]);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">✅ Completed Tasks</h2>
      <Row>
        {tasks.map((task) => {
          if (task.completed) {
            return (
              <Col  md={3}  className="mb-3">
                <Card className="shadow bg-success text-light">
                  <Card.Body>
                    <Card.Title>{task.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            );
          }
        })}
      </Row>
    </Container>
  );
};


