import Prompt from './prompt.png';
import styled from 'styled-components';
import React from 'react'

function LogoImage(props) {
    return (
      <img className="Logo"
        src={Prompt} alt="logo"   width= "100wh"
        height= '100vh' 
        position= "relative"
      />
    ); 
  };


export default LogoImage;  