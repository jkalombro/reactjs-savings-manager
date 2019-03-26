import React from 'react';
import styled from 'styled-components';
import { FaChartLine, FaCalendarAlt, FaArrowUp } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';

export const DashHeader = styled.h5`
    color: #000;
`;

export const DashTotal = styled.h3`
    color: #c5c5c5;
`;

export const DashIconDiv = styled.div`
    background: ${props => props.colid === "overall" ? '#25A25A': props.colid === "yearly" ? '#148F77': '#c74036'};
    font-size: 50px;
    color: #FFF;
    text-align: center;
    padding-bottom: 15px;
`;

export const DashLabelDiv = styled.div`
    background: ${props => props.colid === "overall" ? '#2ECC71': props.colid === "yearly" ? '#1ABC9C': '#fd5d51'} ;
    color: #FFF;
    padding: 15px;
`;

export const DashCol = styled(Col)`
    display: grid;
    grid-template-columns: 25% 75%;
    margin-top: 5px;
    margin-bottom: 5px;
`;

const Icon = (props) => {
    switch(props.colid){
        case "yearly": return <FaCalendarAlt />;
        case "monthly": return <FaArrowUp />;
        default: return  <FaChartLine />;
    }
};

export const IndividualTotals = (props) => (
    <DashCol md="4">
        <DashIconDiv colid={props.colid}>
            <Icon colid={props.colid} />
        </DashIconDiv>
        <DashLabelDiv colid={props.colid}>
            <h6>{props.header}</h6>
            <h4>{props.value}</h4>
        </DashLabelDiv>
    </DashCol>
);

export const TotalDisplay = () => (
    <Container>
        <Row>
            <IndividualTotals header="Overall Savings" value="12,455,630.01" colid="overall" />
            <IndividualTotals header="Total Savings for this year" value="98,430.25" colid="yearly" />
            <IndividualTotals header="Total Savings for this month" value="7,083.75" colid="monthly" />
        </Row>
    </Container>
);