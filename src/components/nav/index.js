import React from "react";
import styled from "styled-components";

import logo from "../../img/logo.jpg";

class Nav extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <Navigation>
                <Logo src = {logo}></Logo>
                <Ul>
                  {this.props.list.map(element =>{
                    return <Li><A>{element}</A></Li>
                  })}  
                </Ul>
            </Navigation>
            
        );
    }
}
const Ul = styled.ul`
    display: flex;
    align-items: flex-end;
`;
const Navigation = styled.nav`
    width: max-content;
    display : flex;
    justify-content: center;
    align-items: center;
    padding : 10px;

`;
const Li = styled.li`
    margin: 0ex 1ex;
    list-style: none;
    background-color: #4a515f;
    font-family : Apple Chancery, cursive;
    &:hover{
        background-color: #7c8597;
        cursor: pointer;
    }
    
`;
const A = styled.a`
    font-size: xx-large;
    text-decoration: none;
    color: white;
  
    
`;
const Logo = styled.img `
    height: 100px;
`;

export default Nav;