import React from "react";

import logo from "../../img/logo.jpg";
import Card from "../Card";
import Text from "../Text";
import CardContainer from "../CardContainer";
import Header from "../Header";

class Home extends React.Component{

    render(){
        return(
            
                
            
            <CardContainer>
                
                  <Header>O nas</Header>  
                
                <Card>

                    <Text>Jesteśmy profesjonalną firmą zajmującą się detalem samochodowym. Od lat dostarczamy naszym klientom najwyższej jakości usługi, dbając o każdy detal ich pojazdów. Nasze doświadczenie i wiedza pozwala nam na dopracowanie każdego szczegółu, by samochody naszych klientów prezentowały się jak nowe.</Text>
                    <img src={logo} alt="zdj1" />
                </Card>
                <Card >
                    
                    <Text>Pracujemy z pasją i zaangażowaniem, by dostarczać naszym klientom usługi detalingowe na najwyższym poziomie. Nasz zespół składa się z doświadczonych i wysoko wykwalifikowanych specjalistów, którzy wiedzą, jak dbać o samochody. Stawiamy na indywidualne podejście do każdego pojazdu, co pozwala nam na osiąganie najlepszych efektów.</Text>
                    <img src={logo} alt="zdj1" />
                </Card>
                <Card >
                    
                    <Text>Nasza firma zajmuje się nie tylko detalem samochodowym, ale także ochroną pojazdów przed szkodliwymi warunkami atmosferycznymi. Dzięki naszym usługom, samochody naszych klientów są nie tylko piękne, ale także dobrze chronione przed rdzą, zarysowaniami i innymi uszkodzeniami. Jesteśmy dumni z naszego doświadczenia i wiedzy, które pozwala nam na osiąganie najlepszych efektów.</Text>
                    <img src={logo} alt="zdj1" />
                </Card>
                <Card>
                    
                    <Text>Nasza firma powstała z miłości do samochodów. Jako długoletni właściciele różnych modeli, zdajemy sobie sprawę z tego, jak wiele znaczy dbałość o każdy szczegół. Dlatego nasze usługi detalingowe są dopasowane do indywidualnych potrzeb i wymagań naszych klientów. Chcemy, by każdy samochód, który trafia do naszej firmy, był traktowany z należytą uwagą i troską.</Text>
                    <img src={logo} alt="zdj1" />
                </Card>
                
             
                
                
               
            </CardContainer>
            
            
            
            
            
        );
    };
}




export default Home;