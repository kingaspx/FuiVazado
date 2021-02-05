import styled from 'styled-components'

export const Layout = styled.div`
  color: #fff;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  width: 100%;
  padding: 5em 5em;

  display: flex;
  justify-content: center;

  section {
    width: 100%;

    .container {
      width: 100%;
      display: flex;
      overflow: auto;
    }

    a {
      color: #fff;
      font-weight: 600;
    }
  }

  @media (max-width: 768px) {
    padding: 2em 2em;
  }
`

export const Table = styled.table`
  margin-top: 3em;
  background: transparent;
  border-spacing: 0 5px;

  thead {
    th {
      box-shadow: none;
      background: #111;
      padding: 20px 32px;
      border-bottom: 0;
    }

    tr {
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.25), 0px 2px 4px -1px rgba(0, 0, 0, 0.25);
    }
  }

  tbody {
    tr {
      //box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      transition-duration: 300ms;
      cursor: default;
    }
  }

  th {
    color: #fff;
    font-weight: 500;
    //padding: 10px 32px;
    text-align: left;
    font-size: 16px;
    line-height: 24px;
    text-transform: uppercase;
  }

  td {
    padding: 20px 32px;
    //white-space: nowrap;
    //overflow: hidden;
    //text-overflow: ellipsis;
    border: 0;
    background: #333;
    font-size: 16px;
    color: #fff;
    font-weight: 400;

    &.title {
      color: #363f5f;
    }

    &.income {
      color: #12a454;
    }

    &.outcome {
      color: #e83f5b;
    }
  }

  td:first-child {
    border-radius: 8px 0 0 8px;
  }

  td:last-child {
    border-radius: 0 8px 8px 0;
  }

  .ant-table-cell {
    :nth-child(2) {
      text-align: start;
    }

    text-align: end;
  }

  .ant-table-cell-fix-right {
    background: #fff !important;
  }
`