import styled from 'styled-components'

export const Layout = styled.div`
  width: 100%;
  color: #fff;
`

export const Container = styled.div`
  width: 100%;
  padding: 5em 5em;

  @media (max-width: 768px) {
    padding: 2em 2em;
  }

  display: flex;
  justify-content: center;

  h1 {
    font-size: 40px;
  }

  #hero-image {
    margin-left: 5em;
    width: 350px;
    height: 350px;
    object-fit: cover;
    transition-duration: 300ms;
    transform: scale(1.1);

    @media (max-width: 768px) {
      display: none;
    }
  }
`

export const DescriptionHero = styled.p`
  max-width: 450px;
  margin-top: 20px;
`

export const ActionButton = styled.button`
  background: #EF3C4A;
  border-radius: 20px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;

  padding: 10px 20px;
  margin-top: 40px;
  outline: 0;
  cursor: pointer;

  :hover {
    transition-duration: 300ms;
    background: #ac1e29;
  }
`

export const PrivacidadeResumo = styled.div`
  display: flex;
  flex-direction: column;

  button {
    width: 200px;
  }

  span {
    max-width: 450px;
    margin-top: 10px;
    font-size: 14px;
  }

  a {
    color: #fff;
    font-weight: 600;
    text-decoration: none;
    font-size: 14px;
  }
`