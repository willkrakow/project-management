import React from "react";
import {
  Col,
  Card,
  CardText,
  CardTitle,
  Button,
  Row,
  CardHeader,
} from "reactstrap";
import moment from "moment";
import QuestionCardBody from "./QuestionCardBody";
import QuestionCard from "./QuestionCard";
moment().format();

const Questions = (props) => {
  const query = props.query;
  const questions = props.questions;

  const clicked = (button) => {
    console.log(button);
    props.handleCheck(button.target.value);
  };

  const colorTopic = (topic) => {
    switch (topic) {
      case "OpenTribe":
        return "primary";
      case "PlantPure Kitchen Live":
        return "success";
      default:
        return "secondary";
    }
  };
  const checkCompletion = (question, index) => {
    if (question.completed) {
      return (
        <Card key={index} className="p-3 m-3">
          <CardTitle className="text-secondary">
            <h3>{question.title}</h3>
          </CardTitle>
          <Button
            value={index}
            color={question.completed ? "secondary" : "success"}
            className={"w-50"}
            onClick={(e) => clicked(e)}
          >
            {question.completed ? "Undo" : "Complete"}
          </Button>
        </Card>
      );
    } else {
      return (
        <Card
          key={index}
          className={
            "m-3 animate__animated animate__backInDown border border-bottom-0 border-right-0 border-top-0 border-" +
            colorTopic(question.topic)
          }
        >
            <QuestionCard index={index} question={question} clicked={clicked} colorTopic={colorTopic}  />
          {/* <CardHeader>
            <Row className="align-items-baseline">
              <Col className="col-9">
                <CardTitle className="mb-0">
                  <h3>{question.title}</h3>
                </CardTitle>
              </Col>
              <Col className="col-3">
                <CardText>Due {moment(question.enddate).calendar()}</CardText>
              </Col>
            </Row>
          </CardHeader> */}
          {/* <QuestionCardBody clicked={clicked} question={question} colorTopic={colorTopic} index={index} /> */}
        </Card>
      );
    }
  };
  return (
    <Col className="col-7">
      {questions
        .filter(
          (question) =>
            question.topic.includes(query.topic) ||
            question.person.includes(query.person)
        )
        .map((filteredQuestion, index) =>
          checkCompletion(filteredQuestion, index)
        )}
    </Col>
  );
};

export default Questions;
