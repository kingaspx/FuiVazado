import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Container, Layout} from "./style";
import {X} from "react-feather";
import history from "../../../history";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: '.9',
    },
    paper: {
        background: '#000',
        border: 0,
        outline: 0,
        height: '100%',
        width: '100%',
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function ModalMenu({open, handleClose}) {
    const classes = useStyles();

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Layout className={classes.paper}>
                        <div id={"header-modal"}>
                            <h2 id="transition-modal-title">Menu</h2>

                            <X onClick={() => handleClose()}/>
                        </div>

                        <Container>
                            <button onClick={() => {
                                history.push('/')
                                handleClose()
                            }}>
                                CPF
                            </button>

                            {/*<button>*/}
                            {/*    CNPJ*/}
                            {/*</button>*/}

                            <button onClick={() => {
                                history.push('/como-funciona')
                                handleClose()
                            }}>
                                Entender Mais
                            </button>
                        </Container>
                    </Layout>
                </Fade>
            </Modal>
        </div>
    );
}