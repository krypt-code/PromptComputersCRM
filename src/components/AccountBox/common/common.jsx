import styled from "styled-components";
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export const Boxcontainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: none;
    color: 
`;
export const MutedLink = styled.a`
font-size: 12px;
color:  rgba(200,200,200,0.8);
font-weight: 500;
text-decoration: none;
transition: all 200ms ease-in-out;
&:hover {
    filter: brightness(1.08);
    color: rgba(200,200,200,0.8);
`;
export const BoldLink = styled.a`
font-size: 12px;
color: rgba(16,205,165,1);
font-weight: 500;
text-decoration: none;
transition: all 200ms ease-in-out;
&:hover {
    filter: brightness(1.08);
    color: rgb(16,205,165,1);
`;

export const Entry = styled(Form.Control)`
width: 100%;
height: 42px;
outline: 1px;
border: none;
padding: none;
font-size: 12px; 

transition: all 200ms ease-in-out; 
&::placeholder {
    color: rgba(200, 200, 200, .9);
    border: none;
};
&:not(:last-of-type) {
    
    border-bottom: 1px solid rgb(16,205,165,1);
  };
&:last-of-type{
    
    border-bottom: 2px solid rgb(16,205,165,1);
    
  };
&:focus{
    outline: none;
    box-shadow: none;
`;

export const SubmitButton = styled(Button)`
    width 100%;
    padding: 11px 40%;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 5px 5px 50px 50px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: rgb(16,205,165);
    background: linear-gradient(90deg, rgba(16,205,165,1) 0%, rgba(0,212,255,1) 100%);
    box-shadow: 1px 1px 2.5px rgba(15, 15, 15, 0.19);
    &:hover {
        filter: brightness(1.08);
    }
`;