import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  
  color: #fff;
  
  #header-modal{
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }

  h2 {
    width: 100%;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;

  justify-content: center;
  align-items: center;

  button {
    outline: 0;
    border-bottom: 1px solid #333;
    padding: 3px 7px;
    margin-bottom: 20px;
    font-size: 26px;
    font-weight: 600;

    color: #fff;
  }
`