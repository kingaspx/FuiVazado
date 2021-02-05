import styled from 'styled-components'

export const Layout = styled.div`
  width: 100%;
  color: #fff;
`

export const Container = styled.div`
  width: 100%;
  padding: 5em 5em;

  display: flex;
  flex-direction: column;
  justify-content: center;

  .result-screen-error {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    h1 {
      font-size: 48px;
      margin-bottom: .5em;
    }
  }

  h1, .desc {
    text-align: center;
  }

  .desc {
    margin-bottom: 3em;
  }

  .back-button {
    background: rgb(71, 179, 137);
    font-weight: 600;
    text-transform: uppercase;
    color: #fff;

    margin: 0 auto;
    padding: 10px 20px;
    width: 200px;
    border-radius: 5px;

    cursor: pointer;

    transition-duration: 200ms;
    outline: 0;

    :hover {
      transition-duration: 200ms;
      opacity: .8;
    }
  }
`

export const RepeaterContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  margin: auto;

  text-align: left;
  border-left: solid 4px rgb(255, 118, 117);
  padding: 0.6em;
  margin-bottom: 1.4em;

  h4 {
    margin-bottom: 1em;
  }

  ul {
    list-style-type: circle;

    li {
      display: flex;
      flex-direction: column;
      margin-bottom: 5px;
    }
  }
`