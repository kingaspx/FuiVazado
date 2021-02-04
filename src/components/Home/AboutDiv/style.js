import styled from 'styled-components'

export const Layout = styled.div`
  width: 100%;
  color: #fff;
`

export const Container = styled.div`
  width: 100%;
  padding: 5em 5em;
  
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    img {
      display: none;
    }

    padding: 2em 2em;
  }
`