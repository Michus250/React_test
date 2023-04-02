import React from "react";
import Header from "../Header";
import CardContainer from "../CardContainer";
import Card from "../Card";
import Text from "../Text";


class Contact extends React.Component{

    render(){
        return(
           <CardContainer>
                <Header>Kontakt</Header>
                <Card>
                    <Text>Kontakt z naszą firmą jest bardzo prosty i szybki. Możesz skontaktować się z nami za pomocą adresu e-mail lub numeru telefonu.Jesteśmy otwarci na wszelkie pytania, sugestie lub uwagi dotyczące naszych usług. Zapraszamy również do bezpośredniego kontaktu, jeśli chcesz uzyskać więcej informacji na temat naszej firmy lub planujesz skorzystać z naszych usług. Nie wahaj się skontaktować z nami w razie jakichkolwiek pytań lub potrzeb. Jesteśmy tu, aby pomóc i zapewnić Ci najlepszą jakość obsługi klienta.</Text>
                    
                </Card>
                <Card>

                </Card>
           </CardContainer>
            
        );
    };
}

export default Contact;