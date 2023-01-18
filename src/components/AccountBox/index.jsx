import React from 'react';
import styled from "styled-components";
import { LoginForM } from './login/loginForm';
import LogoImage from './common/logo';
import { motion } from "framer-motion";
import {useState} from 'react';
import { AccountContext} from "./accountContext";
import { SignupForM } from './signupForm/signupForm';
import { Marginer } from '../marginer';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
const BoxContainer = styled.div`
   
    height: 560px; 
    width : 280px; 
    display: flex; 
    flex-direction: column;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 1px 1px 2.5px rgba(15, 15, 15, 0.19);
    position: relative;
    overflow: hidden;
`;

const TopContainer = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
    width: 160%;
    height: 550px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%; 
    transform: rotate(70deg); 
    top: -290px;
    left: -70px;
    background: rgb(16,205,165);
    background: linear-gradient(90deg, rgba(16,205,165,1) 0%, rgba(0,212,255,1) 100%);
    box-shadow: 1px 1px 2.5px rgba(15, 15, 15, 0.19);

`;

const HeaderContainer = styled.div`
        width: 100%;
        display: flex;
        flex direction: column;
        box-shadow: 0;
`;

const HeaderText = styled(motion.div)`
       font-size: 30px;
       font-weight: 600;
       line-height: 1.24; 
       color: #fff;
       
       z-index: 10; 
       margin: 0;     
`;

const SmallText = styled.h5`
color: #fff;
font-weight: 500;
font-size: 11px;
z-index: 10;
margin: 0;
margin-top: 7;
`;

const InnerContainer = styled.div`
    width 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1.8em;
`;

const LogoBox = styled.div `
height: 7vh; 
width : 5vh; 
display: flex; 
flex-direction: column;
border-radius: 15px;
background-color: #fff;
justify-content: center;
align-items: center;
box-shadow: 2px 1px 5px rgba(15, 15, 15, 0.19);
position: relative;
overflow: hidden;
background: rgb(255,255,255);
background: radial-gradient(circle, rgba(255,255,255,1) 46%, rgba(193,198,197,1) 100%);
box-shadow: 1px 1px 2.5px rgba(15, 15, 15, 0.19);
&:hover {
    filter: brightness(1.08);
    color: rgba(200,200,200,0.8);
    
`;
const backdropVarients = {
    expanded: {
        width: "233%",
        height: "1050px",
        borderRadius: "20%",
        transform: "rotate(60deg)"  
    },
    collapsed: {
        width: "160%",
        height: "550px",
        borderRadius: "50%",
        transform: "rotate(60deg)",
    },
};
const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30,
};

export function AccountBox(props)  {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pass2, setPassword2] = useState("");
    const [FullName,setName] = useState("");

    const handleOnChange = (e) => {
        const {name, value} = e.target;

        switch(name){
            case 'email':
                setEmail(value);
                break;

            case 'password':
                setPassword(value);
                break;
            
                case 'full_name':
                setName(value);
                break;

                case 'pass2':
                setPassword2(value);
                break;


            default:
                break;
        }   
        console.log(name, value);     
    };
    const handleOnSubmit = (e) => { 
        e.preventDefault();

        if (!email || !password) {
            alert("Please all the required fields");
        }

    };

    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState("signin");
    
    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, expandingTransition.duration * 1000 - 1500);
    }; 

    const switchToSignup = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signup");  
        }, 400);
        
    };

    const switchToSignin = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signin");  
        }, 400);
        
    };
    
    const contextValue = { switchToSignup, switchToSignin };




    return (
        <AccountContext.Provider value={contextValue}>
        <BoxContainer>
            <TopContainer>
            
                <BackDrop 
                    initial={false} 
                    animate={isExpanded ? "expanded" : "collapsed"} 
                    variants={backdropVarients}
                    transition={expandingTransition} 
            /> 
            
            {active === "signin" && (
                <div>
                    <LogoBox><LogoImage /></LogoBox>
                    <HeaderContainer>
                        <  HeaderText>Prompt Computers</HeaderText>
                    </HeaderContainer>
                    <HeaderContainer><SmallText>Please sign-in to continue</SmallText></HeaderContainer> </div>  )} 
                



                {active === "signup" && (
            <div> 
                <LogoBox><LogoImage /></LogoBox>
                <HeaderContainer>
                    <HeaderText>Prompt Computers</HeaderText>  
                </HeaderContainer>  
                <HeaderContainer>
                    <SmallText>Please sign-up to continue</SmallText>
                </HeaderContainer>
            </div>)}
            </TopContainer>
        <InnerContainer>
            {active === 'signin' && <LoginForM 
                                        handleOnChange={handleOnChange} 
                                        email={email} 
                                        pass={password}
                                        handleOnSubmit={handleOnSubmit}/>}
            {active === 'signup' && <SignupForM
                                        handleOnChange={handleOnChange} 
                                        email={email} 
                                        pass={password} 
                                        handleOnSubmit={handleOnSubmit}/>}
        </InnerContainer>
    </BoxContainer>
    </AccountContext.Provider>
    
    );
    }

