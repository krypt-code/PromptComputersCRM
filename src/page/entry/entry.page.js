import React from "react";

import { Jumbotron } from "react-bootstrap";

import './entry.style.css'
import {LoginForm} from "../../components/AccountBox/login/login.comp"



export const Entry = () => {
    return <div className="entry-page bg-info"><LoginForm/></div>;
};