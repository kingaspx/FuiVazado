import React from 'react';
import {Container, Layout} from "./style";
import AboutImage from '../../../assets/AboutUs.png'
import {DescriptionHero} from "../HeroDiv/style";

const AboutDiv = () => {
    return (
        <Layout>
            <Container>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <h1>
                        Sobre esse site
                    </h1>

                    <DescriptionHero>
                        Esse site tem a <b>exclusiva finalidade</b> de servir de consulta para que todos afetados pelo
                        vazamento saibam se seus dados foram vazados e quais foram, os únicos dados armazenados
                        são <b>CPF</b>, <b>Nome Completo</b>, <b>Data de nascimento</b>, <b>Sexo/Gênero</b> e uma lista
                        de 37 itens onde
                        somente informam se o dado vazou ou não, esse site não possui nenhum outro dado
                        sobre nenhum desses 37 itens.

                        Esses dados foram obtidos em um fórum online, conforme citato na noticia do <a target={'_blank'} style={{color: '#fff', fontWeight: 600}}
                        href={"https://tecnoblog.net/404838/exclusivo-vazamento-que-expos-220-milhoes-de-brasileiros-e-pior-do-que-se-pensava/"}>Tecnoblog</a>.
                    </DescriptionHero>
                </div>

                <img src={AboutImage} draggable={"false"} alt={"About Us"}/>
            </Container>
        </Layout>
    );
};

export default AboutDiv;
