import React from "react";
import styled from "styled-components";

class Nav extends React.Component{

    render(){
        return(
            <Navigation>
                <Ul>
                    <Li><A href="">AAAA</A></Li>
                    <Li><A href="">BBB</A></Li>
                </Ul>
            </Navigation>
            
        );
    }
}
const Ul = styled.ul`
    display: flex;
    align-items: flex-end;
`
const Navigation = styled.nav`
    width: max-content;
`
const Li = styled.li`
    margin: 0ex 1ex;
    list-style: none;
`
const A = styled.a`
    text-decoration: none;
    color: white;
    background-color: #4a515f;
`

export default Nav;