import React from 'react'
import { Col, Card, CardText, CardTitle, Button, Row } from 'reactstrap';
import moment from 'moment';
moment().format();

const Questions = (props) => {
    const query = props.query;
    const questions = props.questions;


    const clicked = (button) => {
        props.handleCheck(button.target.value);
    }

    const colorTopic = (topic) => {
        switch(topic) {
            case("OpenTribe"):
                return "primary"
            case("PlantPure Kitchen Live"):
                return "success"
            default:
                return "secondary"
        }
    }
const checkCompletion = (question, index) => {
    if(question.completed) {
        return(
            <Card key={index} className="p-3">
                <CardTitle className="text-secondary"><h3>{question.title}</h3></CardTitle>
                <Button value={index} color={question.completed ? "secondary" : "success"} className={"w-50"} onClick={e => clicked(e)}>{question.completed ? "Undo" : "Complete"}</Button>
            </Card>
        )
    } else {
        return (
            <Card key={index} className="p-3">
                            <CardTitle><h3>{question.title}</h3><p>Due {moment(question.enddate).calendar()}</p></CardTitle>
                            <CardText className={"text-" + colorTopic(question.topic)}>{question.topic}</CardText>
                            <CardText>{question.description}</CardText>
                            <Row className="m-0">
                            <Button value={index} color={question.completed ? "secondary" : "success"} className={"w-25 mr-5"} onClick={e => clicked(e)}>{question.completed ? "Undo" : "Complete"}</Button>
                            <Button value={index} outline color="secondary" className={"w-25 mr-5"} >Edit</Button>
                            </Row>
                        </Card>
        )
    }
}
    return (
    <Col className="col-5">
                    {questions.filter((question) => (question.topic.includes(query.topic) || question.person.includes(query.person))).map((filteredQuestion, index) => (
                        checkCompletion(filteredQuestion ,index)
))}
                </Col>
)
}

export default Questions