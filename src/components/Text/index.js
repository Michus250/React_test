import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import RobotoRegular from '../../fonts/Roboto-LightItalic.ttf';
class Text extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <>
            <GlobalStyle></GlobalStyle>
            <P>{this.props.children}</P>
            </>
        );
    }
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;



const P = styled.p`
    
    
    font-size: 25px;


`;
export default Text;