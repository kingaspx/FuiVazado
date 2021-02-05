import styled from 'styled-components'

export const Layout = styled.div`
  height: 68px;
  width: 100%;

  background: #1e1e1e;

  display: flex;
  justify-content: center;

  border-bottom: 1px solid rgba(255, 255, 255, .3);

  position: sticky;
  top: 0;
  z-index: 999;
`

export const Container = styled.div`
  max-width: 1040px;
  width: 100%;
  height: 100%;
  padding: 10px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #fff;

  #logo {
    font-weight: 600;
    font-size: 20px;
  }

  #right-buttons {
    @media (max-width: 768px) {
      display: none;
    }
  }

  button {
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition-duration: 300ms;
    outline: 0;
    padding: 10px;

    :hover {
      border-bottom: 2px solid #fff;
      transition-duration: 300ms;
    }

    :nth-child(2) {
      margin: 0 10px;
    }

    :nth-child(3) {
      border: 2px solid #84F2C5;
      border-radius: 20px;
      margin-left: 10px;
      padding: 10px 20px;

      :hover {
        background: #fff;
        color: #1A1237;
      }
    }
  }

  #menu-mobile {
    display: block;
    
    @media (min-width: 768px) {
      display: none;
    }
  }
`