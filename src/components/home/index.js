import React from "react";
import styled from "styled-components";
import logo from "../../img/logo.jpg";

class Home extends React.Component{

    render(){
        return(
            
                
            
            <Div>
                
                  <H1>O nas</H1>  
                
                <Card>
                    
                    <p>Jesteśmy profesjonalną firmą zajmującą się detalem samochodowym. Od lat dostarczamy naszym klientom najwyższej jakości usługi, dbając o każdy detal ich pojazdów. Nasze doświadczenie i wiedza pozwala nam na dopracowanie każdego szczegółu, by samochody naszych klientów prezentowały się jak nowe.</p>
                </Card>
                <Card>
                    
                    <p>Pracujemy z pasją i zaangażowaniem, by dostarczać naszym klientom usługi detalingowe na najwyższym poziomie. Nasz zespół składa się z doświadczonych i wysoko wykwalifikowanych specjalistów, którzy wiedzą, jak dbać o samochody. Stawiamy na indywidualne podejście do każdego pojazdu, co pozwala nam na osiąganie najlepszych efektów.</p>
                    <img src={logo} alt="zdj1" />
                </Card>
                <Card>
                    
                    <p>Nasza firma zajmuje się nie tylko detalem samochodowym, ale także ochroną pojazdów przed szkodliwymi warunkami atmosferycznymi. Dzięki naszym usługom, samochody naszych klientów są nie tylko piękne, ale także dobrze chronione przed rdzą, zarysowaniami i innymi uszkodzeniami. Jesteśmy dumni z naszego doświadczenia i wiedzy, które pozwala nam na osiąganie najlepszych efektów.</p>
                    <img src={logo} alt="zdj1" />
                </Card>
                <Card>
                    
                    <p>Nasza firma powstała z miłości do samochodów. Jako długoletni właściciele różnych modeli, zdajemy sobie sprawę z tego, jak wiele znaczy dbałość o każdy szczegół. Dlatego nasze usługi detalingowe są dopasowane do indywidualnych potrzeb i wymagań naszych klientów. Chcemy, by każdy samochód, który trafia do naszej firmy, był traktowany z należytą uwagą i troską.</p>
                    <img src={logo} alt="zdj1" />
                </Card>
             
                
                
               
            </Div>
            
            
            
            
            
        );
    };
}
const H1 =styled.h1`
    color: black;
    width : fit-content;
    padding: 1ex 2ex 1ex 1ex;
    flex: 0 0 90%;
    text-align: center;
    
    box-shadow: 1px 1px 10px 1px  #B8BABF ;
`;

const Card = styled.div`
    display:block;
    /* flex: 0 0 38%; */
    flex-basis: calc(33.33%);
    color: black;
    align-items:center;
    text-align: center;
    margin: 1% 1% 1% 1%;
    padding: 1% 5%;
    /* max-width: 80%; */
    width: 38%;
    /* background-color: #D7D7D9; */
    background-color: #F2F2F2;
    box-shadow: 1px 1px 10px 1px  #B8BABF ;
    @media (max-width: 768px) {
        width:85%;
  }
 
`;
const Div =styled.div`
    background-color: #F2F2F2;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
    margin: 1%;
    padding: 1% 1%;
    @media (max-width: 768px) {
        flex-direction: column;
  }

    
`

export default Home;