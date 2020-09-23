import React from 'react';
import styled from 'styled-components';

const Masthead = styled.div`
width: 100%;
display: block;
height: 15vh;
background: rgb(3,169,244);
background: -moz-linear-gradient(90deg, rgba(3,169,244,1) 0%, rgba(0,69,106,1) 100%);
background: -webkit-linear-gradient(90deg, rgba(3,169,244,1) 0%, rgba(0,69,106,1) 100%);
background: linear-gradient(90deg, rgba(3,169,244,1) 0%, rgba(0,69,106,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#03a9f4",endColorstr="#00456a",GradientType=1);`

const MastTitle = styled.h1`
text-align: center;
color: #fafbfc;
text-shadow: 2px 2px 3px rgba(0,29,29,0.4);
padding: 5vh;
font-size: 48px;
font-family: 'Indie Flower', cursive;
`

const Banner = () => {
    return (
        <Masthead>
            <MastTitle>One more thing...</MastTitle>
        </Masthead>
    )
}

export default Banner