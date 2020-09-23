import React, { useState } from 'react';
import { CardHeader, Row, Col, CardTitle, CardText, Button } from 'reactstrap';
import QuestionCardBody from './QuestionCardBody.js';
import moment from 'moment';

moment().format();

const QuestionCard = (props) => {
    const question = props.question
    const clicked = props.clicked
    const colorTopic = props.colorTopic

    const [open, setOpen] = useState(false);

    
    const handleClick = (e) => {
        e.preventDefault();
        setOpen(!open);
    }

    return (
        <React.Fragment>
        <CardHeader>
            <Row className="align-items-baseline">
              <Col className="col-8">
                <CardTitle className="mb-0">
                  <h3>{question.title}</h3>
                </CardTitle>
              </Col>
              <Col className="col-1">
              <a href="#" onClick={handleClick}>
                  {open ?  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M3.204 11L8 5.519 12.796 11H3.204zm-.753-.659l4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/>
</svg> : <svg width="1em" height="1em" viewBox="0 0 16 16" className={"bi bi-caret-" + open ? "up" : "down"} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
</svg>}</a>
              </Col>
              <Col className="col-3">
                <CardText>Due {moment(question.enddate).calendar()}</CardText>
              </Col>
            </Row>
          </CardHeader>
        <QuestionCardBody clicked={props.clicked} question={question} colorTopic={colorTopic} index={props.index} open={open}/>
        </React.Fragment>
     )
}

export default QuestionCard