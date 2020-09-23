import React, { useState } from 'react';
import { Container, Row, Col, Input, Button, Form } from 'reactstrap';
import Questions from './Questions.js';
import { useForm } from 'react-hook-form';
import CreateTopic from './CreateTopic.js';
import styled from 'styled-components';
import Banner from './Banner.js';

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
            title: "Make Jumpstart logos",
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
            title: "Create YouTube thumbnail for PPKL",
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
            title: "Review OpenTribe project on environment",
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
        console.log(index)
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
        console.log(data);
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
        <React.Fragment>
        <Container fluid className="my-5">
            <Row>
                <Col className="col-2">
                    <div className="my-3">
                        <h5 className="animate__animated animate__fadeInLeft"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-collection" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M14.5 13.5h-13A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5zm-13 1A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"/>
</svg>&nbsp;&nbsp;Topics</h5>
                        {topics.map((topic, index) => (
                            <Container key={index}>
                                <Button className={"w-100 my-1 text-left border-0 border-bottom animate__animated animate__bounceInLeft animate__delay-1s"} color="secondary" outline={topic === query.topic ? false : true} width={"100"} value={topic} onClick={e => handleClick(e.target.value)}>{topic}</Button>
                            </Container>
                        ))}
                    </div>
                    <CreateTopic onSubmit={onSubmit} />
                    <div className="my-3">
                        <h5 className="animate__animated animate__fadeInLeft"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-people" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
</svg>&nbsp;&nbsp;Team</h5>
                        {people.map((person, index) => (
                            <Container key={index}>
                                <Button className="w-100 my-1 border-0 text-left border-bottom border-0 animate__animated animate__bounceInLeft animate__delay-1s" color="secondary" outline={person === query.person ? false : true} value={person} onClick={e => handlePersonClick(e.target.value)}>{person}</Button>
                            </Container>
                        ))}
                    </div>
                </Col>
                <Questions query={query} questions={assignments} handleCheck={handleCheck} />
              
                <Col className="col-3">
                    <Container>
                        <h3>Create assignment</h3>
                        <Form onSubmit={handleSubmit(onNewAssignment)} className="m-3">
                            <input className="m-2 hackInput" name="title" defaultValue="" placeholder="Title" ref={register} />
                            <input className="m-2 hackInput" name="description" defaultValue="" placeholder="Description" ref={register} />
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
        </React.Fragment>
    )
}

export default Home