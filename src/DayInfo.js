import React from 'react';
import { Card, CardTitle, CardBody, CardText } from 'reactstrap';

const DayInfo = (props) => {
    const dateString = props.selectedDate.toDateString();
    const assignments = props.assignments;

    let dayAssignment = assignments.find(assignment => assignment.date === dateString);
    return (
        <Card className="m-auto w-50 p-2">
            <CardTitle><h3>{dateString}</h3></CardTitle>
            <CardBody>
                {dayAssignment ?  <CardTitle><h4>{dayAssignment.title}</h4></CardTitle> : ''}
            </CardBody>
        </Card>
    )
}

export default DayInfo;