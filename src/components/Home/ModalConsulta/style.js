import styled from 'styled-components'

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;

  input {
    padding: 10px;
    border: 1px solid #EFEFEF;
    margin-bottom: 10px;
    border-radius: 5px;
    outline: 0;
    transition-duration: 200ms;

    :hover {
      border: 1px solid rgba(132, 242, 197, .4);
      transition-duration: 200ms;
    }

    :focus {
      border: 1px solid rgba(52, 161, 120, 0.7);
    }

    :nth-child(1) {
      margin-top: 3em;
    }
  }

  button {
    background: rgb(71, 179, 137);
    color: #fff;
    font-weight: 600;
    text-transform: uppercase;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition-duration: 200ms;
    outline: 0;
    
    :hover{
      transition-duration: 200ms;
      opacity: .8;
    }
  }
  
  span {
    font-size: 12px;
    margin-top: 10px;
    text-align: center;
    
    a{
      color: #000;
      font-weight: 600;
    }
  }
`