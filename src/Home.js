import React, { useState } from 'react';
import { Container, Row, Col, Input, Button, Form } from 'reactstrap';
import Questions from './Questions.js';
import { useForm } from 'react-hook-form';
import CreateTopic from './CreateTopic.js';
import styled from 'styled-components';

const FancySelect = styled.select`
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5em;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;`

const Home = () => {

    const [assignments, setAssignments] = useState([
        {
            title: "I don't know how to do math",
            description: "And here is why I don't get what I don't know how to do",
            topic: "OpenTribe",
            answers: [
                {
                    user: "Jimbo29",
                    answer: "You need to do X but nobody does X so do y instead."
                },
                {
                    user: "Hithere9",
                    answer: "You are so dumb"
                },
                {
                    user: "WillyK",
                    answer: "Did you try Z"
                }
            ],
            completed: false,
            person: "Will",
            startdate: "2020-09-23T18:25:43.511Z",
            enddate: "2020-09-23T18:25:43.511Z"
        },
        {
            title: "I don't know how to do science",
            description: "And here is why I don't get what I don't know how to do",
            topic: "PlantPure Kitchen Live",
            answers: [
                {
                    user: "Jimbo29",
                    answer: "You need to do X but nobody does X so do y instead."
                },
                {
                    user: "Hithere9",
                    answer: "You are so dumb"
                },
                {
                    user: "WillyK",
                    answer: "Did you try Z"
                }
            ],
            completed: false,
            person: "Nelson",
            startdate: "2020-09-23T18:25:43.511Z",
            enddate: "2020-09-23T18:25:43.511Z"
        },
        {
            title: "I don't know how to do language",
            description: "And here is why I don't get what I don't know how to do",
            topic: "OpenTribe",
            answers: [
                {
                    user: "Jimbo29",
                    answer: "You need to do X but nobody does X so do y instead."
                },
                {
                    user: "Hithere9",
                    answer: "You are so dumb"
                },
                {
                    user: "WillyK",
                    answer: "Did you try Z"
                }
            ],
            completed: false,
            person: "Massimo",
            startdate: "2020-09-23T18:25:43.511Z",
            enddate: "2020-09-23T18:25:43.511Z"
        },
        {
            title: "I don't know how to do language",
            description: "And here is why I don't get what I don't know how to do",
            topic: "PlantPure Kitchen Live",
            answers: [
                {
                    user: "Jimbo29",
                    answer: "You need to do X but nobody does X so do y instead."
                },
                {
                    user: "Hithere9",
                    answer: "You are so dumb"
                },
                {
                    user: "WillyK",
                    answer: "Did you try Z"
                }
            ],
            completed: false,
            person: "Will",
            startdate: "2020-09-23T18:25:43.511Z",
            enddate: "2020-09-23T18:25:43.511Z"
        },
        {
            title: "I don't know how to do language",
            description: "And here is why I don't get what I don't know how to do",
            topic: "OpenTribe",
            answers: [
                {
                    user: "Jimbo29",
                    answer: "You need to do X but nobody does X so do y instead."
                },
                {
                    user: "Hithere9",
                    answer: "You are so dumb"
                },
                {
                    user: "WillyK",
                    answer: "Did you try Z"
                }
            ],
            completed: false,
            person: "Laura",
            startdate: "2020-09-23T18:25:43.511Z",
            enddate: "2020-09-23T18:25:43.511Z"
        }
    ]);

    const [query, setQuery] = useState({
        person: '',
        topic: ''
    });

    const handleClick = (topic) => {

        if (topic === "All") {
            setQuery({
                topic: '',
            });
        } else {
            setQuery({
                topic: topic,
            });
        }
    }

    const handlePersonClick = (person) => {
        if (person === "All") {
            console.log(person)
            setQuery({ person: '' })
        } else {
            setQuery({
                person: person
            });
        }
    }

    function handleCheck(index) {
        let temp = [...assignments];
        temp[index].completed = !temp[index].completed;
        setAssignments(temp);
    }

    const { register, handleSubmit, watch } = useForm();

    const onSubmit = (data) => {
        let temp = [...topics];
        temp.push(data.tryit);
        setTopics(temp);
    };

    const onNewAssignment = (data) => {
        let temp = [...assignments];
        let newass = {
            title: data.title,
            description: data.description,
            person: data.person,
            topic: data.assignmentTopic,
            completed: false,
            startdate: data.startdate,
            enddate: data.enddate
        }
        temp.push(newass)
        setAssignments(temp);
    }


    watch("title", "description", "assignmentTopic", "person");

    // eslint-disable-next-line
    const [topics, setTopics] = useState(["OpenTribe", "PlantPure Kitchen Live", "Other", "All"]);
    const people = ["Will", "Massimo", "Jason", "Nelson", "Laura", "Kim", "All"]

    return (
        <Container fluid className="my-5">
            <Row>
                <Col className="col-2">
                    <div className="my-3">
                        <h5>Topics</h5>
                        {topics.map((topic, index) => (
                            <Container key={index}>
                                <Button className="w-100 my-1 text-left border-0 border-bottom" color="primary" outline={topic === query.topic ? false : true} width={"100"} value={topic} onClick={e => handleClick(e.target.value)}>{topic}</Button>
                            </Container>
                        ))}
                    </div>
                    <CreateTopic onSubmit={onSubmit} />
                    <div className="my-3">
                        <h5>Team</h5>
                        {people.map((person, index) => (
                            <Container key={index}>
                                <Button className="w-100 my-1 border-0 text-left border-bottom border-0" color="success" outline={person === query.person ? false : true} value={person} onClick={e => handlePersonClick(e.target.value)}>{person}</Button>
                            </Container>
                        ))}
                    </div>
                </Col>
                <Questions query={query} questions={assignments} handleCheck={handleCheck} />
              
                <Col className="col-3">
                    <Container>
                        <h3>Create assignment</h3>
                        <Form onSubmit={handleSubmit(onNewAssignment)} className="m-3">
                            <Input className="m-2" name="title" defaultValue="" placeholder="Title" ref={register} />
                            <Input className="m-2" name="description" defaultValue="" placeholder="Description" ref={register} />
                            <FancySelect className="m-2" type="select" name="assignmentTopic" defaultValue="Other" placeholder="Topic" ref={register}>
                                {topics.map((topic, index) => (
                                    <option key={index} value={topic}>{topic}</option>
                                ))}
                            </FancySelect>
                            <FancySelect className="m-2" type="select" name="person" defaultValue="All" placeholder="Person" ref={register}>
                                {people.map((person, index) => (
                                    <option key={index} value={person}>{person}</option>
                                ))}
                            </FancySelect>
                            <Button className="m-2 w-100" type="submit" color="primary">Add</Button>
                        </Form>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Home