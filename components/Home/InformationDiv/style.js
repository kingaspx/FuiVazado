import styled from 'styled-components'

export const Layout = styled.div`
  width: 100%;

  color: #fff;

  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const Container = styled.div`
  padding: 3em 3em;

  display: flex;
  justify-content: center;

  background: #333;
  border-radius: 10px;

  h2 {
    border-bottom: 2px solid #fff;
    padding-bottom: 10px;
    margin-bottom: 1em;
  }

  #left-info {
    margin-right: 70px;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      width: 100%;
      margin-right: 0;
      margin-top: 2em;      
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    border-radius: 0;
    padding: 2em 2em 5em 2em;
  }
`

export const RepeaterContainer = styled.section`
  display: flex;

  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
  }

  ul {
    display: grid;
    grid-template-columns: 250px 250px;
    grid-gap: 10px;
    list-style-type: none;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    li {
      margin-left: 10px;

      @media (max-width: 768px) {
        margin-left: 0;
        margin-top: 3em;
        display: flex;
        flex-direction: column;
      }
    }
  }
`

export const TitleInfo = styled.p`
  font-weight: 600;
  margin-left: 10px;
`

export const DescriptionInfo = styled.p`
  max-width: 200px;
  margin-top: 10px;
  font-weight: 300;
`