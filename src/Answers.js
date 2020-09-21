import React from 'react'
import { Card } from 'reactstrap'

const Answers = (props) => {
    const answers = props.answers;

    return (
        <Card className="pl-3">
        {answers.map((answer, index) => (
            <div key={index}>
            <p><strong>{answer.user}</strong></p>
        <p>{answer.answer}</p>
            <hr></hr>
        </div>
        ))}
        </Card>
    )
}


export default Answers