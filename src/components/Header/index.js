import React from 'react';
import {Container, Layout} from "./style";

const HeaderComponent = () => {
    return (
        <Layout>
            <Container>
                <p id={"logo"}>
                    FuiVazado!
                </p>

                <div id={"right-buttons"}>
                    <button>
                        CPF
                    </button>
                    <button>
                        CNPJ
                    </button>
                    <button>
                        Entenda melhor
                    </button>
                </div>
            </Container>
        </Layout>
    );
};

export default HeaderComponent;
