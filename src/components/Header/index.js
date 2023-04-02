import React from "react";
import styled from "styled-components";

class Header extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <H1>{this.props.children}</H1>
        );
    }
}

const H1 =styled.h1`
    color: black;
    /* width : fit-content; */
    padding: 1ex 2ex 1ex 1ex;
    /* flex: 0 0 90%; */
    flex-basis:calc(90%);
    text-align: center;
    
    box-shadow: 1px 1px 10px 1px  #B8BABF ;
`;

export default Header;