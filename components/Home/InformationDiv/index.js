import React from 'react';
import {Container, DescriptionInfo, Layout, RepeaterContainer, TitleInfo} from "./style";
import {Monitor, Shield, Tool} from "react-feather";

const InformationDiv = () => {
    return (
        <Layout>
            <Container>
                <div id={"left-info"}>
                    <h2>
                        Sobre o vazamento
                    </h2>
                    <p style={{marginTop: 10}}>
                        Entenda melhor o que está acontecendo
                    </p>
                </div>

                <RepeaterContainer>
                    <ul>
                        <li>
                            <div style={{display: "flex"}}>
                                <Shield/>
                                <TitleInfo>
                                    223.739.215 de CPFs
                                </TitleInfo>
                            </div>


                            <DescriptionInfo>
                                Esse é o número de dados de pessoas físicas que foram vazados.
                            </DescriptionInfo>
                        </li>

                        <li>
                            <div style={{display: "flex"}}>
                                <Tool/>
                                <TitleInfo>
                                    40.183.784 de CNPJs
                                </TitleInfo>
                            </div>

                            <DescriptionInfo>
                                Quantidade de dados de pessoas jurídicas vazados. Ambos datados de 08/2019.
                            </DescriptionInfo>
                        </li>

                        <li>
                            <div style={{display: "flex"}}>
                                <Monitor/>
                                <TitleInfo>
                                    Serasa Experian
                                </TitleInfo>
                            </div>

                            <DescriptionInfo>
                                Essa é a possível origem do vazamento. A empresa nega. ANPD, Senacon e Procon-SP já
                                notificaram a empresa para que ela explique seu possível envolvimento.
                            </DescriptionInfo>
                        </li>
                    </ul>
                </RepeaterContainer>
            </Container>
        </Layout>
    );
};

export default InformationDiv;
