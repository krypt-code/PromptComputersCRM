import React, { useContext } from "react"
import { Boxcontainer, FormContainer, MutedLink, SubmitButton, Input, BoldLink } from "../common/common"
import { Marginer } from "../../marginer"
import { AccountContext } from "../accountContext"
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import styled from "styled-components"
import PropTypes from "prop-types"
import { Entry } from "../common/common"




export function LoginForM({handleOnChange, email,handleOnSubmit, pass}) {

    const { switchToSignup} = useContext(AccountContext)

    
    return <Boxcontainer>
        <Marginer direction="vertical" margin={20} />
        <FormContainer autoComplete="off" >
        
                        <Entry
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleOnChange}   
                        placeholder="Enter Email"
                        required
                        />
                        

                   
                        <Entry
                        type="password"
                        name="password"
                        onChange={handleOnChange}
                        value={pass}
                        placeholder="Enter Password"
                        required
                        />

                    
        </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <MutedLink href="#">Forgot your password?</MutedLink>
            <Marginer direction="vertical" margin="1.6em" />
            <FormContainer onSubmit={handleOnSubmit}>
            <SubmitButton type="submit">Signin</SubmitButton></FormContainer>
            <Marginer direction="vertical" margin="1em"></Marginer>
            <MutedLink href="#">
             Dont Have an account? <BoldLink href="#" onClick={switchToSignup}>Signup</BoldLink>   
            </MutedLink>
    </Boxcontainer>
}

LoginForM.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
}