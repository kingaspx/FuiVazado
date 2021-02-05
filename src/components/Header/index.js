import React, {useState} from 'react';
import {Container, Layout} from "./style";
import history from "../../history";
import {Menu} from "react-feather";
import ModalMenu from "./ModalMenu";

const HeaderComponent = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Layout>
            <ModalMenu open={open} handleClose={handleClose}/>

            <Container>
                <p id={"logo"} onClick={() => history.push('/')}>
                    FuiVazado!
                </p>

                <div id={"right-buttons"}>
                    <button onClick={() => history.push('/')}>
                        CPF
                    </button>
                    {/*<button>*/}
                    {/*    CNPJ*/}
                    {/*</button>*/}
                    <button onClick={() => history.push('/como-funciona')}>
                        Entenda melhor
                    </button>
                </div>

                <Menu id={"menu-mobile"} onClick={() => handleOpen()}/>
            </Container>
        </Layout>
    );
};

export default HeaderComponent;
