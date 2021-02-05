import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Formulario} from "./style";
import {CircularProgress} from "@material-ui/core";
import api from 'axios'
import history from "../../../history";

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

const useStylesBackDrop = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

const ModalConsultar = ({open, handleClose}) => {
    const classes = useStyles();
    const classesBackDrop = useStylesBackDrop();
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [openBackDrop, setOpenBackDrop] = useState(false);
    const [resultado, setResultado] = useState('');

    function mCPF(cpf) {
        cpf = cpf.replace(/\D/g, "")
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")

        setCpf(cpf)
    }

    function mDataNascimento(data_nascimento) {
        data_nascimento = data_nascimento.replace(/\D/g, "")
        data_nascimento = data_nascimento.replace(/(\d{2})(\d)/, "$1/$2")
        data_nascimento = data_nascimento.replace(/(\d{2})(\d)/, "$1/$2")
        data_nascimento = data_nascimento.replace(/(\d{4})(\d{1,2,3,4})$/, "$1$2$3$4")

        setDataNascimento(data_nascimento)
    }

    async function handleSubmitForm(e) {
        e.preventDefault()

        if (cpf === '') {
            console.log('dados vazios')
        } else {
            let cpfFormatted = cpf.replaceAll('.', '').replace('-', '')

            handleToggleBackDrop()
            try {
                const response = await api.get(`https://api.radialle.com/api/LeakQuery?cpf=${cpfFormatted}`)
                if (response.results !== undefined) {
                    setResultado('exists')
                } else {
                    setResultado('not-exists')
                }

                history.push({
                    pathname: "/resultado",
                    state: {response: resultado},
                });

                handleCloseBackDrop()
            } catch (e) {
                setResultado('error')

                history.push({
                    pathname: "/resultado",
                    state: {response: 'error'},
                });

                handleCloseBackDrop()
            }
        }
    }

    const handleCloseBackDrop = () => {
        setOpenBackDrop(false);
    };

    const handleToggleBackDrop = () => {
        setOpenBackDrop(true);
    };

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
                        <Backdrop className={classesBackDrop.backdrop} open={openBackDrop}>
                            <CircularProgress color="inherit"/>
                        </Backdrop>

                        <h2 id="transition-modal-title">Informe os dados</h2>
                        <p id="transition-modal-description">Para saber se seus dados foram vazados, basta
                            digitar<br/>
                            seu CPF e Data de Nascimento.
                        </p>

                        <Formulario onSubmit={(e) => handleSubmitForm(e)}>
                            <input placeholder={'CPF'} value={cpf}
                                   onChange={(e) => mCPF(e.target.value.substring(0, 14))}/>

                            {/*<input placeholder={'Data de Nascimento'} value={dataNascimento}*/}
                            {/*       onChange={(e) => mDataNascimento(e.target.value.substring(0, 10))}/>*/}

                            <button type={"submit"}>
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
