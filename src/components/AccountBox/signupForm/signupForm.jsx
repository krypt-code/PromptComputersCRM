import React, {useContext} from "react";
import { Boxcontainer, FormContainer, MutedLink, SubmitButton, Input, BoldLink, Entry } from "../common/common";
import { Marginer } from "../../marginer";
import { AccountContext } from "../accountContext";
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import styled from "styled-components"
import PropTypes from "prop-types"


export function SignupForM({handleOnChange, email,handleOnSubmit, pass,pass2,FullName}) {

    const { switchToSignin} = useContext(AccountContext);
    
    
    return ( <Boxcontainer>
        <Marginer direction="vertical" margin={10} />
        <FormContainer>
                
                <Entry
                        type="text"
                        name="full_name" 
                        placeholder="Full Name"
                        value={FullName}
                        onChange={handleOnChange}  
                        class="border-0" 
                        required/>                
                <Entry
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleOnChange}  
                        placeholder="Enter Email"
                        required

                        />
                <Entry
                        class="border-0"
                        type="password"
                        name="password"
                        onChange={handleOnChange}
                        value={pass}
                        placeholder="Enter Password"
                        required
                        />
                <Entry
                        class="border-0"
                        type="password"
                        onChange={handleOnChange}
                        value={pass2}
                        name="pass2"
                        placeholder="Confirm Password"
                        required
                        />
    
        </FormContainer>
            <Marginer direction="vertical" margin="1.6em" />
            <FormContainer onSubmit={handleOnSubmit}>
            <SubmitButton type="submit">Signin</SubmitButton>
            </FormContainer>
            <Marginer direction="vertical" margin="1em"></Marginer>
            <MutedLink href="#">
            Have an account? <BoldLink href="#" onClick={switchToSignin}>Signin</BoldLink>   
            </MutedLink>
    </Boxcontainer>
    );
}

SignupForM.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    FullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
    pass2: PropTypes.string.isRequired,
}