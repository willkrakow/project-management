import React, { useState } from 'react';
import { Row, Col, Button, ButtonGroup, CardText, CardBody } from 'reactstrap';

const QuestionCardBody = (props) => {
    const question = props.question;

    return (
        <React.Fragment>
        <CardBody className={props.open ? "d-block animate__animated animate__faster animate__flipInX" : "d-none"} >
        <Row className="m-0 justify-content-end">
          <Col className="col-8">
            <CardText>{question.description}</CardText>
            <CardText className={"text-" + props.colorTopic(question.topic)}>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-archive"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              &nbsp;&nbsp;{question.topic}
            </CardText>
            <CardText>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-person"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                />
              </svg>
              &nbsp;&nbsp;{question.person}
            </CardText>
          </Col>
          <Col className="col-4 text-right">
            <ButtonGroup>
              <Button
                value={props.index}
                color={question.completed ? "secondary" : "success"}
                onClick={(e) => props.clicked(e)}
              >
                {question.completed ? "Undo" : "Complete"}
              </Button>
              <Button value={props.index} outline color="secondary">
                {" "}
                Edit
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </CardBody>
      </React.Fragment>
    )
}

export default QuestionCardBody
