import React from 'react';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';

export const LoginHeadIcon = styled(FaUserCircle)`
    font-size: 150px;
    margin-top: -70px;
    color: ${props => props.authstatus !== "invalid" ? '#1962af': '#b72f2f'};
    background: white;
    border-radius: 50%;
`;

export const LoginContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    background-color: #0054af;
    background-image: linear-gradient(#85c0ff, #0054af);
`;

export const ContentWrapper = styled.div`
    background: white;
    border-radius: 20px;
    min-height: 70vh;
    width: 30%;
    margin-top: 100px;
    margin-right: auto;
    margin-left: auto;
`;

export const LoginForm = styled(Form)`
    width: 75%;
    text-align: left;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
`;

export const CenterWrapper = styled.div`
    text-align: center;
    margin: 50px auto 15px auto;
`;

export const Username = (props) => (
    <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" name="username" placeholder="Enter username" />
    </Form.Group>
);

export const Password = (props) => (
    <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
    </Form.Group>
);