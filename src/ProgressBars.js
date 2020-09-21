import React from 'react';
import { Col, Card, CardTitle } from 'reactstrap';
// import styled from 'styled-components';

// const Bar = styled.div`
// height: 10px;
// width: 100%;
// background-color: #f9f9f9;
// `
// const ColorBar = styled.div`
// height: 10px;
// width: ${(props) => {
//     let completed = props.topics.filter(topic => topic.completed).length;
//     let percent = completed / props.topics.length;
//     return percent.toString}};
// background-color: #60bf00;`

const ProgressBars = (props) => {
    return (
        <Col>
            {props.topics.map((topic, index) => (
                <Card key={index}>
                    <CardTitle>{topic}</CardTitle>
                    {/* <Bar>
                        <ColorBar></ColorBar>
                    </Bar> */}
                </Card>
            ))}
        </Col>
    )
}

export default ProgressBars