import React from 'react';
import {Container, Layout, RepeaterContainer} from "./style";
import history from "../../history";

const ResultadoPage = (props) => {
    const response = props.history.location.state.response

    return (
        response === 'exists' ? (
            <Layout>
                <Container>
                    <h1 className="no-margin">
                        Seus dados estão expostos
                    </h1>
                    <p className="desc">
                        Encontramos o CPF informado nos vazamentos.
                    </p>

                    <RepeaterContainer>
                        <h4>Divulgado em 14 de janeiro de 2021</h4>
                        <p>
                            Foram publicados as seguintes informações.
                        </p>
                        <ul>
                            <li>Nome completo</li>
                            <li>Gênero</li>
                            <li>Data de nascimento</li>
                        </ul>
                    </RepeaterContainer>

                    <RepeaterContainer>
                        <h4>Divulgado em 11 de janeiro de 2021</h4>
                        <p>
                            De acordo com o conteúdo que obtivemos, os dados a seguir foram
                            postos à venda.
                        </p>
                        <ul>
                            <li className="leak-column-1 hidden">Nome</li>
                            <li className="leak-column-1 hidden">Gênero</li>
                            <li className="leak-column-1 hidden">Data de nascimento</li>
                            <li className="leak-column-1 hidden">Nome dos pais</li>
                            <li className="leak-column-2 hidden">Endereços de email</li>
                            <li className="leak-column-3 hidden">Números de telefone</li>
                            <li className="leak-column-4 hidden">Endereço residencial</li>
                            <li className="leak-column-5 hidden">Classificação Mosaic (sistema da Serasa Experian)</li>
                            <li className="leak-column-6 hidden">Ocupação</li>
                            <li className="leak-column-7 hidden">Score de crédito</li>
                            <li className="leak-column-8 hidden">RG (identidade)</li>
                            <li className="leak-column-9 hidden">Título de eleitor</li>
                            <li className="leak-column-10 hidden">Nível de escolaridade</li>
                            <li className="leak-column-11 hidden">Participação em empresas</li>
                            <li className="leak-column-12 hidden">Situação cadastral do CPF na Receita Federal</li>
                            <li className="leak-column-13 hidden">Classe social</li>
                            <li className="leak-column-14 hidden">Estado civil</li>
                            <li className="leak-column-15 hidden">Dados do empregador</li>
                            <li className="leak-column-16 hidden">Informações sobre modelo de afinidade</li>
                            <li className="leak-column-17 hidden">Dados de modelo analítico (perfil de consumo)</li>
                            <li className="leak-column-18 hidden">Poder aquisitivo</li>
                            <li className="leak-column-19 hidden">Foto de rosto</li>
                            <li className="leak-column-20 hidden">Cargos públicos exercidos</li>
                            <li className="leak-column-21 hidden">Cheques sem fundos</li>
                            <li className="leak-column-22 hidden">Débitos</li>
                            <li className="leak-column-23 hidden">Situação do Bolsa Família</li>
                            <li className="leak-column-24 hidden">Informações sobre universidade: instituição, curso,
                                ano de
                                entrada e ano de conclusão
                            </li>
                            <li className="leak-column-25 hidden">Inscrição em conselhos profissionais (e.g. CFM, CREA,
                                etc.)
                            </li>
                            <li className="leak-column-26 hidden">Dados sobre domicílio: quantidade de pessoas, faixa de
                                renda e
                                endereço
                            </li>
                            <li className="leak-column-27 hidden">Informações sobre familiares</li>
                            <li className="leak-column-28 hidden">Perfil no LinkedIn</li>
                            <li className="leak-column-29 hidden">Salário</li>
                            <li className="leak-column-30 hidden">Renda</li>
                            <li className="leak-column-31 hidden">Óbito: data de falecimento, idade, número do livro de
                                registro, número da folha do livro de registro, número do termo do óbito, data de
                                lavratura
                                da
                                certidão de óbito e dados do cartório
                            </li>
                            <li className="leak-column-32 hidden">Imposto de renda: banco, código da agência, lote de
                                restituição, ano de referência e situação da declaração
                            </li>
                            <li className="leak-column-33 hidden">Dados do INSS (Instituto Nacional do Seguro Social):
                                idade
                                atual, bem como número, espécie e data de início de benefícios
                            </li>
                            <li className="leak-column-34 hidden">FGTS (Fundo de Garantia do Tempo de Serviço): número
                                do
                                PIS
                            </li>
                            <li className="leak-column-35 hidden">Número do CNS (Cartão Nacional de Saúde)</li>
                            <li className="leak-column-36 hidden">NIS (Número de Identificação Social)</li>
                            <li className="leak-column-37 hidden">Número do PIS (Programa de Integração Social)</li>
                        </ul>
                    </RepeaterContainer>
                </Container>
            </Layout>
        ) : response === 'not-exists' ? (
            <Layout>
                <Container>
                    <div className="result-screen-safe screen hidden">
                        <h1 className="no-margin">
                            Boas notícias!
                        </h1>
                        <p className="desc">
                            Não encontramos nos vazamentos informações associadas ao CPF informado.
                        </p>
                        <p className="no-margin back-button">Voltar</p>
                    </div>
                </Container>
            </Layout>
        ) : response === 'error' ? (
            <Layout>
                <Container>
                    <div className="result-screen-error screen hidden">
                        <h1 className="no-margin">
                            Oops!
                        </h1>
                        <p className="desc">
                            Infelizmente não foi possível realizar a consulta neste momento.<br/>
                            Por favor, tente novamente mais tarde.
                        </p>
                        <button className="back-button" onClick={() => history.push('/')}>Voltar</button>
                    </div>
                </Container>
            </Layout>
        ) : null
    );
};

export default ResultadoPage;
