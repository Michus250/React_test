import React from "react";
import styled from "styled-components";
import {  Link } from 'react-router-dom';

import logo from "../../img/logo.jpg";

class Nav extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            
                
                    <Navigation>
                        <A to={'/'}><Logo src = {logo}></Logo></A>
                        
                            <Ul>
                            {this.props.list.map(element =>{
                                return <A to={element[1]}><Li>{element[0]}</Li></A>
                            })}  
                            </Ul>
                        
                    </Navigation>
                
           
        );
    }
}
const Ul = styled.ul`
    display: flex;
    align-items: center;
`;
const Navigation = styled.nav`
    width: 100%;
    background-color: #989CA6;
    display : flex;
    justify-content: center;
    align-items: center;
    
    

`;
const Li = styled.li`
    margin: 0ex 1ex;
    list-style: none;
    padding : 1ex;
    background-color: #4a515f;
    font-family : Apple Chancery, cursive;
    &:hover{
        background-color: #7c8597;
        cursor: pointer;
    }
    
`;
const A = styled(Link)`
    font-size: xx-large;
    text-decoration: none;
    color: white;
  
    
`;
const Logo = styled.img `
    height: 100px;
`;

const Div = styled.div`
    
    display: flex;
    width: 100%;
    
    justify-content: center;
    align-items: center;
    background-color: #989CA6;
`

export default Nav;