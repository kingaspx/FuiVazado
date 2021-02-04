import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Formulario} from "./style";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(10px)',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '0',
        outline: 0,
        borderRadius: 3,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const ModalConsultar = ({open, handleClose}) => {
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
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Informe os dados</h2>
                        <p id="transition-modal-description">Para saber se seus dados foram vazados, basta
                            digitar<br/>
                            seu CPF e Data de Nascimento.
                        </p>

                        <Formulario>
                            <input placeholder={'CPF'}/>
                            <input placeholder={'Data de Nascimento'}/>

                            <button>
                                Verificar
                            </button>
                            <span>
                                Ao clicar em "Verificar" você concorda com<br/>
                                nossos <a href={"#"}>termos de privacidade</a>
                            </span>
                        </Formulario>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};

export default ModalConsultar;
