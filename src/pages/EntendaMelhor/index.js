import React from 'react';
import {Container, Layout, Table} from "./style";

function EntendaMelhorPage(props) {
    return (
        <Layout>
            <Container>
                <section className="portfolio-block block-intro">
                    <div className="container">
                        <div className="about-me">
                            <h2>Informações e detalhes sobre os dados vazados.</h2>
                        </div>
                    </div>
                    <div className="container">
                        <div className="skills portfolio-info-card">
                            <div className="table-responsive">
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Dado</th>
                                            <th>Descrição</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Básico</td>
                                        <td>Contêm os dados básicos, como nome completo, sexo / gênero,&nbsp;data de
                                            nascimento, nome dos pais,&nbsp;estado civil.<br/></td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>Seu e-mail, o tipo do e-mail (pessoal ou corporativo), se ele se repete em
                                            outros CPFs, o peso do e-mail, o&nbsp;nível de entrega.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Telefone</td>
                                        <td>Seu telefone com DDD, o tipo do telefone&nbsp; se ele se repete em outros
                                            CPFs,
                                            a classificação do telefone, provedor, plano, localização da linha, número
                                            da
                                            conta (somente Vivo).<br/></td>
                                    </tr>
                                    <tr>
                                        <td>Endereço</td>
                                        <td>Endereço, Bairro, Cidade, UF, CEP, tipo de endereço.</td>
                                    </tr>
                                    <tr>
                                        <td>Mosaic</td>
                                        <td>Mosaic é uma Gama de Sistemas de Classificação que Permite a Segmentação de
                                            Consumidores e Empresas em&nbsp; Grupos e Tipos Claramente Identificáveis.
                                            Mais
                                            informações nesse&nbsp;<a href="https://gofile.io/d/YhG07z"
                                                                      target="_blank">PDF</a>.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Ocupação</td>
                                        <td>Cargo / ocupação, CBO.</td>
                                    </tr>
                                    <tr>
                                        <td>Score de Crédito</td>
                                        <td>Score de Crédito, Nível de Risco. Mais informações nesse&nbsp;<a
                                            href="https://gofile.io/d/HbVZgn" target="_blank">PDF</a>.<br/></td>
                                    </tr>
                                    <tr>
                                        <td>Registro Geral</td>
                                        <td>Número do RG.</td>
                                    </tr>
                                    <tr>
                                        <td>Título de Eleitor</td>
                                        <td>Nome completo, data de nascimento, nome da mãe, número do título, zona,
                                            seção,
                                            endereço, município, UF.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Escolaridade</td>
                                        <td>Nível de escolaridade.</td>
                                    </tr>
                                    <tr>
                                        <td>Empresarial</td>
                                        <td>CNPJ, razão social, nome fantasia, porcentagem de participação como sócio.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Receita Federal</td>
                                        <td>Nome completo, data de nascimento, código de controle, situação
                                            cadastral.<br/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Classe social</td>
                                        <td>Grupo de classe,&nbsp;descrição de classe, sub grupo de classe, descrição de
                                            sub
                                            classe.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Estado Civil</td>
                                        <td>Estado civil.</td>
                                    </tr>
                                    <tr>
                                        <td>Emprego</td>
                                        <td>Nome completo,&nbsp;&nbsp;sexo,&nbsp;data de nascimento, CNPJ do
                                            empregador,&nbsp;razão social,&nbsp;número do PIS / PASEP / NIT,&nbsp;número
                                            do
                                            CTPS, série do CTPS,&nbsp;ano de cadastro,&nbsp;tipo de vínculo,
                                            CBO,&nbsp;data
                                            de admissão,&nbsp;tipo de admissão,&nbsp;salário contratual,&nbsp;tipo de
                                            salário,&nbsp;horas por semana.<br/></td>
                                    </tr>
                                    <tr>
                                        <td><br/>Afinidade&nbsp;<br/></td>
                                        <td>Modelo de Afinidade - Um Modelo Prevendo a Probabilidade de Comprar um Item
                                            Específico ( Tendência de Compra e Interesses)&nbsp;'Marketing de Afinidade'
                                            é
                                            um Conceito que Consiste em uma Parceria Entre Pessoas Compartilhando os
                                            Mesmos
                                            Interesses.&nbsp;Esta Parceria é Conhecida Como um 'Grupo de
                                            Afinidade'&nbsp;-
                                            Pessoas Ligadas por um Interesse ou Objetivo Comum. Mais informações
                                            nesse&nbsp;
                                            <a href="https://gofile.io/d/vK4M63" target="_blank">PDF</a>.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Modelo Analitico</td>
                                        <td>Modelo Analítico - Modelo de Propensão<br/>&nbsp; Um Modelo que Permite
                                            Prever a
                                            Probabilidade de um Indivíduo ter Afinidade de Comprar um Determinado
                                            Produto.<br/>Mais informações nesse <a href="https://gofile.io/d/OvHJp9"
                                                                                   target="_blank">PDF</a>.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Poder Aquisitivo<br/></td>
                                        <td>Poder Aquisitivo - Capacidade de uma Pessoa Adquirir Bens
                                            Materiais<br/>&nbsp; Poder de Aquisitivo é a Quantidade de Bens e Serviços
                                            que
                                            Podem ser Adquiridos com uma Unidade de Moeda.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Fotos de Rostos</td>
                                        <td>Foto do rosto em .jpg / .jpeg.</td>
                                    </tr>
                                    <tr>
                                        <td>Servidores Públicos</td>
                                        <td>Nome completo, cargo,&nbsp;organização, renda bruta, afastamento, CBO.</td>
                                    </tr>
                                    <tr>
                                        <td>Cheques sem Fundos</td>
                                        <td>Data de restrição, código banco, agência, motivo.</td>
                                    </tr>
                                    <tr>
                                        <td>Devedores</td>
                                        <td>&nbsp;Devedores da União e do FGTS<br/>Dívida Previdenciária ( Sistema
                                            Dívida
                                            )<br/>FGTS - Fundo de Garantia do Tempo de Serviço
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Bolsa Família</td>
                                        <td>Dados do responsável, numero de dependentes,&nbsp;Número de Identificação
                                            Social
                                            - NIS, dados dos dependentes, situação do benefício, valor
                                            do&nbsp;benefício,
                                            cidade , UF.<br/><br/></td>
                                    </tr>
                                    <tr>
                                        <td>Universitários</td>
                                        <td>Nome completo, faculdade,&nbsp;curso, ano de entrada,&nbsp;ano de conclusão.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Conselhos</td>
                                        <td>Nome completo,&nbsp;número identidade,&nbsp;situação,&nbsp;especialidade
                                            categoria,&nbsp;tipo de identidade,&nbsp;tipo de inscrição,&nbsp;outras
                                            inscrições,&nbsp;conselho órgão,
                                            estado,&nbsp;registro,&nbsp;especialidade,&nbsp;CBO.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Domicílios&nbsp;<br/></td>
                                        <td>Domicílios - Todas as Pessoas que Compartilham o Mesmo Endereço, Renda do
                                            domicilio
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Vínculos</td>
                                        <td>Mãe, pai, filho, filha, irmão, irmã,&nbsp;cônjuge, avô, avó, neto, neta,
                                            tio,
                                            tia, sobrinho, sobrinha, primo, prima, sogra.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>LinkedIn</td>
                                        <td>LinkedIn (Id, Url)</td>
                                    </tr>
                                    <tr>
                                        <td>Salário<br/></td>
                                        <td>Tipo de salário,&nbsp;horas por semana, valor do salário.</td>
                                    </tr>
                                    <tr>
                                        <td>Renda</td>
                                        <td>Renda, faixa de renda.</td>
                                    </tr>
                                    <tr>
                                        <td>Óbitos</td>
                                        <td>Dados do falecido, livro de registro, cartório.</td>
                                    </tr>
                                    <tr>
                                        <td>IRPF</td>
                                        <td>IRPF - Imposto de Renda da Pessoa Física (nome da instituição
                                            bancária,&nbsp; código da agência,&nbsp;lote de restituição,&nbsp;ano de
                                            referência,&nbsp;situação da declaração).
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>INSS</td>
                                        <td>INSS - Instituto Nacional do Seguro Social (nome do segurado,&nbsp;data de
                                            nascimento,&nbsp;idade,&nbsp;numero do benefício,&nbsp;espécie,&nbsp;data de
                                            início do benefício).
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>FGTS</td>
                                        <td>FGTS - Fundo de Garantia do Tempo de Serviço (Número de PIS)</td>
                                    </tr>
                                    <tr>
                                        <td>CNS</td>
                                        <td>CNS - Cartão Nacional de Saúde (Número de CNS)</td>
                                    </tr>
                                    <tr>
                                        <td>NIS&nbsp;<br/></td>
                                        <td>NIS - Número de Identificação Social (nome completo, data de nascimento,
                                            número
                                            de identificação social - NIS, Município, UF)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>PIS</td>
                                        <td>PIS - Programa de Integração Social /&nbsp;PASEP - Patrimônio do Servidor
                                            Público (Número do PIS / PASEP)&nbsp;</td>
                                    </tr>
                                    <tr></tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </Layout>
    );
}

export default EntendaMelhorPage;