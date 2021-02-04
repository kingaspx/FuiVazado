import React, {useState} from 'react';
import {ActionButton, Container, DescriptionHero, Layout, PrivacidadeResumo} from "./style";
import HeroImage from '../../../assets/HeroImage.png'
import ModalConsultar from "../ModalConsulta";

const HeroDiv = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleOpen = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

    return (
        <Layout>
            <ModalConsultar handleClose={handleClose} open={openModal}/>

            <Container>
                <div>
                    <h1>
                        Descubra se o seu CPF/CNPJ<br/>foi vazado
                    </h1>

                    <DescriptionHero>
                        De acordo com vários sites de notícias do Brasil, mais de 200 milhões de CPF/CNPJ foram vazados
                        na
                        internet.
                        <br/><br/>
                        Verifique se o seu CPF está nesta lista.
                    </DescriptionHero>

                    <PrivacidadeResumo>
                        <ActionButton onClick={() => handleOpen()}>
                            Verificar Agora
                        </ActionButton>
                        <span>
                            O <b>FuiVazado!</b> não cobra por nenhuma consulta e também não armazena seu histórico de pesquisa. Para saber mais
                            <a href={"#"}>clique aqui</a>.
                        </span>
                    </PrivacidadeResumo>
                </div>

                <div>
                    <img id={"hero-image"} src={HeroImage} alt={"Hero Image"} draggable={"false"}/>
                </div>
            </Container>
        </Layout>
    );
};

export default HeroDiv;
